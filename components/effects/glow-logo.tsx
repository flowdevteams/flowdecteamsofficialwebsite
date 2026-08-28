"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface GlowLogoProps {
  size?: number | string
  className?: string
  animate?: boolean
  interactive?: boolean
  intensity?: number
}

const SvgLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className={className} style={style}>
    {/* Rounded Outer Frame */}
    <rect x="36" y="36" width="440" height="440" rx="64" stroke="currentColor" strokeWidth="48" fill="none" />
    {/* Letter F */}
    <path d="M152 144H264V176H192V224H252V256H192V368H152V144Z" fill="currentColor" />
    {/* Letter T */}
    <path d="M228 184H376V216H318V368H278V216H228V184Z" fill="currentColor" />
    {/* Wave Layers at Bottom */}
    <path d="M60 236C60 236 100 340 180 360C260 380 380 300 452 320V428C452 444 436 452 420 452H92C76 452 60 444 60 428V236Z" fill="currentColor" className="opacity-60" />
    <path d="M60 280C60 280 120 370 200 376C280 382 360 316 452 336V428H60V280Z" fill="currentColor" className="opacity-80" />
    <path d="M60 340C140 370 240 400 360 350C400 334 430 340 452 352V428H60V340Z" fill="currentColor" />
    {/* Bottom Cutout - Uses background color so it punches through */}
    <path d="M72 424C160 424 280 380 440 396V428H72V424Z" fill="hsl(var(--background))" />
  </svg>
)

export function GlowLogo({
  size = 320,
  className,
  animate = true,
  interactive = true,
  intensity = 1,
}: GlowLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse position & tilt physics
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isActive: false })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!interactive) return

    let animationFrameId: number
    const targetTilt = { x: 0, y: 0 }
    let currentTilt = { x: 0, y: 0 }

    const updateTilt = () => {
      // Smooth interpolation for 3D tilt
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
      
      if (distance < 400) {
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const normX = (x / rect.width) * 2 - 1
        const normY = (y / rect.height) * 2 - 1
        
        targetTilt.x = -normY * 12 // Pitch
        targetTilt.y = normX * 12  // Yaw
        
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

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [interactive, mousePos.isActive])

  return (
    <div 
      ref={containerRef}
      className={cn("relative group flex items-center justify-center", className)}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
      }}
    >
      {/* 1. Shape-Accurate Background Glow & Ambient Bleed (Glow memancar DARI DALAM bentuk logo) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Ultra-wide soft ambient bleed (smooths out the edge falloff significantly) */}
        <div 
          className={cn(
            "absolute inset-0 bg-primary/20 transition-all duration-1000 rounded-full",
            mousePos.isActive ? "scale-[1.6] opacity-40" : "scale-[1.4] opacity-10"
          )}
          style={{ filter: "blur(90px)", opacity: 0.5 * intensity }}
        />
        
        {/* Outer wide ambient glow using the EXACT logo shape (widened and softened) */}
        <SvgLogo 
          className={cn(
            "absolute inset-0 text-primary transition-all duration-1000",
            mousePos.isActive ? "scale-[1.2] opacity-40" : "scale-[1.1] opacity-15"
          )}
          style={{ filter: "blur(70px)", opacity: 0.6 * intensity }}
        />
        
        {/* Inner intense glow using the EXACT logo shape */}
        <SvgLogo 
          className={cn(
            "absolute inset-0 text-primary transition-all duration-500",
            mousePos.isActive ? "scale-[1.05] opacity-50" : "scale-[1.01] opacity-25",
            animate && !mousePos.isActive ? "animate-pulse" : ""
          )}
          style={{ filter: "blur(32px)", opacity: 0.7 * intensity }}
        />
      </div>

      {/* 2. Concentric Ripple Rings - Subtle Interactive Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {mousePos.isActive && (
          <>
            <div className="absolute w-full h-full border-[2px] border-primary/30 rounded-[64px] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute w-full h-full border-[2px] border-primary/20 rounded-[64px] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }} />
          </>
        )}
      </div>

      {/* 3. The Solid 3D Logo Container */}
      <div 
        className={cn(
          "relative w-full h-full z-10 transition-all duration-500 ease-out preserve-3d",
          mousePos.isActive ? "opacity-100" : "opacity-80" // Slightly seamless to bg
        )}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${mousePos.isActive ? 1.05 : 1})`,
          filter: "drop-shadow(0 0 10px rgba(var(--primary-rgb), 0.3))" // Inner component native glow
        }}
      >
        {/* Render the crisp, actual SVG on top without any overlay masks washing it out */}
        <SvgLogo className="w-full h-full relative z-30 pointer-events-none text-primary" />
        
        {/* Soft Inner Highlight (Glass Reflection) - Not an overlaid color, just a soft light blend */}
        {interactive && (
          <div 
            className="absolute inset-0 z-40 overflow-hidden pointer-events-none"
            style={{
              maskImage: `url(/logo.svg)`,
              WebkitMaskImage: `url(/logo.svg)`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          >
            <div
              className="absolute transition-opacity duration-300"
              style={{
                width: '150%',
                height: '150%',
                left: mousePos.x - (typeof size === 'number' ? size : 320) * 0.75,
                top: mousePos.y - (typeof size === 'number' ? size : 320) * 0.75,
                opacity: mousePos.isActive ? 0.6 * intensity : 0,
                background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 60%)",
                mixBlendMode: "overlay", // Soft lighting, doesn't destroy the base color
                willChange: "transform, left, top",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
