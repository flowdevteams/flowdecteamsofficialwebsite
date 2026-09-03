"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface GlowLogoProps {
  size?: number | string
  className?: string
  animate?: boolean
  interactive?: boolean
  intensity?: number
  logoSrc?: string
}

/* ── Ripple ring component ─────────────────────────────── */
interface RippleRing {
  id: number
  startTime: number
  duration: number
  maxScale: number
  borderWidth: number
  type: "auto" | "hover"
}

function useRippleEngine(isHovered: boolean) {
  const [rings, setRings] = useState<RippleRing[]>([])
  const idCounter = useRef(0)
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Spawn a single ripple
  const spawnRipple = useCallback(
    (type: "auto" | "hover" = "auto") => {
      const id = idCounter.current++
      const ring: RippleRing = {
        id,
        startTime: Date.now(),
        duration: type === "hover" ? 1800 : 2800,
        maxScale: type === "hover" ? 1.55 : 1.45,
        borderWidth: type === "hover" ? 2.5 : 1.8,
        type,
      }
      setRings((prev) => [...prev, ring])

      // Auto-cleanup after animation completes
      setTimeout(() => {
        setRings((prev) => prev.filter((r) => r.id !== id))
      }, ring.duration + 100)
    },
    []
  )

  // Auto-spawn staggered ripples every cycle
  useEffect(() => {
    const spawnCycle = () => {
      spawnRipple("auto")
      setTimeout(() => spawnRipple("auto"), 800)
      setTimeout(() => spawnRipple("auto"), 1600)
    }

    // Initial burst
    spawnCycle()

    // Repeat every ~3.5s
    autoTimerRef.current = setInterval(spawnCycle, 3500)

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current)
    }
  }, [spawnRipple])

  // Extra burst when hovered
  useEffect(() => {
    if (isHovered) {
      spawnRipple("hover")
      const t = setTimeout(() => spawnRipple("hover"), 400)
      return () => clearTimeout(t)
    }
  }, [isHovered, spawnRipple])

  return rings
}

export function GlowLogo({
  size,
  className,
  animate = true,
  interactive = true,
  intensity = 1,
  logoSrc = "/logo/flowdevteams-vector.svg",
}: GlowLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse position & tilt physics
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isActive: false })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // Ripple engine
  const rippleRings = useRippleEngine(mousePos.isActive)

  useEffect(() => {
    if (!interactive) return
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      // Skip mouse tracking on mobile/touch screens to preserve 60fps and battery
      return
    }

    let animationFrameId: number
    const targetTilt = { x: 0, y: 0 }
    let currentTilt = { x: 0, y: 0 }

    const updateTilt = () => {
      currentTilt.x += (targetTilt.x - currentTilt.x) * 0.1
      currentTilt.y += (targetTilt.y - currentTilt.y) * 0.1
      setTilt({ x: currentTilt.x, y: currentTilt.y })
      
      if (Math.abs(targetTilt.x - currentTilt.x) > 0.01 || Math.abs(targetTilt.y - currentTilt.y) > 0.01) {
        animationFrameId = requestAnimationFrame(updateTilt)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY)
      
      if (distance < 450) {
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const normX = (x / rect.width) * 2 - 1
        const normY = (y / rect.height) * 2 - 1
        
        targetTilt.x = -normY * 10
        targetTilt.y = normX * 10
        
        setMousePos({ x, y, isActive: true })
        cancelAnimationFrame(animationFrameId)
        animationFrameId = requestAnimationFrame(updateTilt)
      } else {
        if (mousePos.isActive) {
          targetTilt.x = 0
          targetTilt.y = 0
          setMousePos((prev) => ({ ...prev, isActive: false }))
          cancelAnimationFrame(animationFrameId)
          animationFrameId = requestAnimationFrame(updateTilt)
        }
      }
    }

    const handleMouseLeave = () => {
      targetTilt.x = 0
      targetTilt.y = 0
      setMousePos((prev) => ({ ...prev, isActive: false }))
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(updateTilt)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [interactive, mousePos.isActive])

  const sizeStyle = size !== undefined ? {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
  } : undefined

  return (
    <div 
      ref={containerRef}
      className={cn("relative group flex items-center justify-center select-none aspect-square", className)}
      style={sizeStyle}
    >
      {/* ── Immersive Ripple Rings ────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
        {rippleRings.map((ring) => (
          <RippleRingElement key={ring.id} ring={ring} isHovered={mousePos.isActive} />
        ))}

        {/* Persistent subtle breathing glow behind the logo */}
        <div
          className="absolute w-[82%] h-[82%] rounded-[18%]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(24,62,114,0.12) 0%, rgba(24,62,114,0.04) 50%, transparent 75%)",
            animation: "logo-breathe 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* 1. Volumetric Shape-Accurate Ambient Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-700 flex items-center justify-center"
        style={{
          transform: mousePos.isActive ? "scale(1.08)" : "scale(1)",
        }}
      >
        <Image
          src={logoSrc}
          alt="Flowdev Glow"
          fill
          className={cn(
            "object-contain transition-opacity duration-700",
            mousePos.isActive ? "opacity-80" : "opacity-40",
            animate && !mousePos.isActive ? "animate-pulse" : ""
          )}
          style={{
            filter: `blur(${mousePos.isActive ? "32px" : "20px"}) drop-shadow(0 0 35px rgba(37, 99, 235, ${0.7 * intensity}))`,
          }}
          priority
        />
      </div>

      {/* 2. The Solid 3D Interactive Logo */}
      <div 
        className="relative w-full h-full z-10 transition-all duration-500 ease-out preserve-3d"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${mousePos.isActive ? 1.04 : 1})`,
        }}
      >
        {/* Crisp Exact Logo */}
        <Image
          src={logoSrc}
          alt="Flowdev Teams Logo"
          fill
          className="object-contain relative z-30 pointer-events-none"
          priority
        />
        
        {/* Soft Interactive Glass Reflection */}
        {interactive && (
          <div 
            className="absolute inset-0 z-40 overflow-hidden pointer-events-none"
            style={{
              maskImage: `url(${logoSrc})`,
              WebkitMaskImage: `url(${logoSrc})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div
              className="absolute transition-opacity duration-300 pointer-events-none"
              style={{
                width: "140%",
                height: "140%",
                left: mousePos.x - (containerRef.current?.offsetWidth || (typeof size === "number" ? size : 320)) * 0.7,
                top: mousePos.y - (containerRef.current?.offsetHeight || (typeof size === "number" ? size : 320)) * 0.7,
                opacity: mousePos.isActive ? 0.55 * intensity : 0,
                background: "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(147,197,253,0.35) 30%, transparent 65%)",
                mixBlendMode: "overlay",
                willChange: "transform, left, top",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Individual ripple ring with JS-driven animation ───── */
function RippleRingElement({ ring, isHovered }: { ring: RippleRing; isHovered: boolean }) {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let rafId: number
    const start = ring.startTime

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / ring.duration, 1)

      // Smooth ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)

      const scale = 0.92 + (ring.maxScale - 0.92) * eased
      const opacity = Math.max(0, 1 - eased) * (ring.type === "hover" ? 0.7 : 0.5)

      el.style.transform = `scale(${scale})`
      el.style.opacity = `${opacity}`

      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [ring])

  const borderColor = ring.type === "hover"
    ? "rgba(37, 99, 235, 0.5)"
    : "rgba(24, 62, 114, 0.35)"

  const glowColor = ring.type === "hover"
    ? "rgba(37, 99, 235, 0.35)"
    : "rgba(24, 62, 114, 0.2)"

  return (
    <div
      ref={elRef}
      className="absolute w-[84%] h-[84%] rounded-[18%]"
      style={{
        border: `${ring.borderWidth}px solid ${borderColor}`,
        borderRadius: "18%",
        boxShadow: [
          `0 0 ${ring.type === "hover" ? "20px 5px" : "14px 3px"} ${glowColor}`,
          `inset 0 0 ${ring.type === "hover" ? "10px 2px" : "6px 1px"} ${glowColor}`,
        ].join(", "),
        opacity: 0,
        willChange: "transform, opacity",
      }}
    />
  )
}
