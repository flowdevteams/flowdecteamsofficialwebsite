"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

export interface GlowRingProps {
  /** Size in pixels (or CSS unit string). Default: 580 */
  size?: number | string
  /** Additional CSS classes */
  className?: string
  /** Whether the organic drift + breathing animation is enabled. Default: true */
  animate?: boolean
  /** Whether interactive mouse ripple & elastic spring deformation are enabled. Default: true */
  interactive?: boolean
  /** Intensity multiplier for the glow bloom. Default: 1 */
  intensity?: number
  /** Color theme: 'blue' (default Flowdev theme) | 'cyan' | 'sapphire' */
  colorTheme?: "blue" | "cyan" | "sapphire"
}

interface SpringNode {
  baseX: number
  baseY: number
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * GlowRing — Pita Cahaya Melengkung Interaktif (Curved Ribbon) dengan:
 * 1. Fisika Riak Adaptif & Deformasi Pegas (Adaptive Liquid Ripple & Spring Mesh) persis seperti NestJS.
 * 2. Multi-layer Bloom & Volumetric Glow (Biru Safir, Cyan, dan Luminous White Hotspot).
 * 3. Hotspot Mengikuti Kursor & Gelombang Riak Menyebar Halus.
 * 4. Optimasi 60-120fps Retina Canvas dengan IntersectionObserver.
 */
export function GlowRing({
  size = 580,
  className,
  animate = true,
  interactive = true,
  intensity = 1,
  colorTheme = "blue",
}: GlowRingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovered: false,
    hoverProgress: 0,
  })

  // Theme palette
  const getThemePalette = useCallback(() => {
    switch (colorTheme) {
      case "cyan":
        return {
          ambient: "rgba(6, 182, 212, 0.45)",
          halo: "rgba(34, 211, 238, 0.75)",
          bright: "#67e8f9",
          core: "#cffafe",
          hotspot: "rgba(165, 243, 252, 0.95)",
        }
      case "sapphire":
        return {
          ambient: "rgba(30, 58, 138, 0.5)",
          halo: "rgba(59, 130, 246, 0.8)",
          bright: "#60a5fa",
          core: "#dbeafe",
          hotspot: "rgba(191, 219, 254, 0.95)",
        }
      case "blue":
      default:
        return {
          ambient: "rgba(14, 165, 233, 0.4)",
          halo: "rgba(56, 189, 248, 0.75)",
          bright: "#38bdf8",
          core: "#f0f9ff",
          hotspot: "rgba(186, 230, 253, 0.95)",
        }
    }
  }, [colorTheme])

  // Pause simulation when off-screen
  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setIsVisible(entries[0].isIntersecting)
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Canvas & Physics Loop
  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let startTime = performance.now()
    const VIEWBOX_SIZE = 520

    // Helper: Sample points along a cubic Bézier curve
    const sampleBezier = (
      p0x: number,
      p0y: number,
      p1x: number,
      p1y: number,
      p2x: number,
      p2y: number,
      p3x: number,
      p3y: number,
      steps: number
    ): SpringNode[] => {
      const nodes: SpringNode[] = []
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const u = 1 - t
        const tt = t * t
        const uu = u * u
        const uuu = uu * u
        const ttt = tt * t

        const px = uuu * p0x + 3 * uu * t * p1x + 3 * u * tt * p2x + ttt * p3x
        const py = uuu * p0y + 3 * uu * t * p1y + 3 * u * tt * p2y + ttt * p3y

        nodes.push({ baseX: px, baseY: py, x: px, y: py, vx: 0, vy: 0 })
      }
      return nodes
    }

    // Sweeping Organic Curve Ribbon (Similar to the reference NestJS visual)
    const ribbonNodes: SpringNode[] = []
    ribbonNodes.push(...sampleBezier(430, 85, 495, 160, 500, 295, 420, 395, 24))
    ribbonNodes.push(...sampleBezier(420, 395, 335, 500, 185, 505, 95, 425, 24))
    ribbonNodes.push(...sampleBezier(95, 425, 15, 345, 20, 210, 90, 120, 24))
    ribbonNodes.push(...sampleBezier(90, 120, 150, 45, 260, 25, 355, 58, 20))

    const render = (currentTime: number) => {
      const elapsed = (currentTime - startTime) * 0.001
      const mouse = mouseRef.current

      // High-DPI handling
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const displayWidth = Math.max(rect.width, 10)
      const displayHeight = Math.max(rect.height, 10)

      if (
        canvas.width !== Math.floor(displayWidth * dpr) ||
        canvas.height !== Math.floor(displayHeight * dpr)
      ) {
        canvas.width = Math.floor(displayWidth * dpr)
        canvas.height = Math.floor(displayHeight * dpr)
      }

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, displayWidth, displayHeight)

      const scale = Math.min(displayWidth, displayHeight) / VIEWBOX_SIZE
      const offsetX = (displayWidth - VIEWBOX_SIZE * scale) / 2
      const offsetY = (displayHeight - VIEWBOX_SIZE * scale) / 2

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.12
      mouse.y += (mouse.targetY - mouse.y) * 0.12
      const targetHover = mouse.isHovered ? 1 : 0
      mouse.hoverProgress += (targetHover - mouse.hoverProgress) * 0.08

      const localMouseX = (mouse.x - offsetX) / scale
      const localMouseY = (mouse.y - offsetY) / scale

      // Organic global drift
      const driftX = animate ? Math.sin(elapsed * 0.7) * 6 : 0
      const driftY = animate ? Math.cos(elapsed * 0.5) * 6 : 0
      const breathe = animate ? 1 + Math.sin(elapsed * 1.1) * 0.03 : 1

      // Physics constants
      const springK = 0.08
      const damping = 0.84
      const mouseRadius = 160
      const rippleSpeed = 5.5
      const rippleFreq = 0.065
      const palette = getThemePalette()

      let closestDist = Infinity
      let closestNode: SpringNode | null = null

      // Physics update
      ribbonNodes.forEach((node) => {
        const targetBaseX = (node.baseX - 260) * breathe + 260 + driftX
        const targetBaseY = (node.baseY - 260) * breathe + 260 + driftY

        if (interactive && mouse.hoverProgress > 0.01) {
          const dx = node.x - localMouseX
          const dy = node.y - localMouseY
          const dist = Math.hypot(dx, dy)

          if (dist < closestDist) {
            closestDist = dist
            closestNode = node
          }

          if (dist < mouseRadius && dist > 0.1) {
            const normalX = dx / dist
            const normalY = dy / dist
            const proximity = (1 - dist / mouseRadius) * mouse.hoverProgress

            const wavePhase = Math.sin(dist * rippleFreq - elapsed * rippleSpeed)
            const pushForce = proximity * proximity * 22
            const rippleForce = wavePhase * proximity * 18

            node.vx += normalX * (pushForce + rippleForce) * 0.38
            node.vy += normalY * (pushForce + rippleForce) * 0.38
          }
        }

        const ax = (targetBaseX - node.x) * springK
        const ay = (targetBaseY - node.y) * springK

        node.vx += ax
        node.vy += ay
        node.vx *= damping
        node.vy *= damping

        node.x += node.vx
        node.y += node.vy
      })

      // Draw Spline
      const drawRibbonSpline = () => {
        if (ribbonNodes.length < 2) return
        ctx.beginPath()
        const first = ribbonNodes[0]
        ctx.moveTo(offsetX + first.x * scale, offsetY + first.y * scale)

        const len = ribbonNodes.length
        for (let i = 0; i < len - 1; i++) {
          const p0 = ribbonNodes[i === 0 ? 0 : i - 1]
          const p1 = ribbonNodes[i]
          const p2 = ribbonNodes[i + 1]
          const p3 = ribbonNodes[i + 2 >= len ? len - 1 : i + 2]

          const cp1x = p1.x + (p2.x - p0.x) / 6
          const cp1y = p1.y + (p2.y - p0.y) / 6
          const cp2x = p2.x - (p3.x - p1.x) / 6
          const cp2y = p2.y - (p3.y - p1.y) / 6

          ctx.bezierCurveTo(
            offsetX + cp1x * scale,
            offsetY + cp1y * scale,
            offsetX + cp2x * scale,
            offsetY + cp2y * scale,
            offsetX + p2.x * scale,
            offsetY + p2.y * scale
          )
        }
      }

      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      // Multi-layer Glow Passes
      // 1. Broad Ambient Halo
      ctx.save()
      ctx.shadowColor = palette.ambient
      ctx.shadowBlur = 48 * intensity * scale
      ctx.strokeStyle = palette.ambient
      ctx.lineWidth = 36 * intensity * scale
      drawRibbonSpline()
      ctx.stroke()
      ctx.restore()

      // 2. Medium Luminous Halo
      ctx.save()
      ctx.shadowColor = palette.halo
      ctx.shadowBlur = 24 * intensity * scale
      ctx.strokeStyle = palette.halo
      ctx.lineWidth = 14 * intensity * scale
      drawRibbonSpline()
      ctx.stroke()
      ctx.restore()

      // 3. Sharp Bright Core
      ctx.save()
      ctx.shadowColor = palette.bright
      ctx.shadowBlur = 10 * intensity * scale
      ctx.strokeStyle = palette.bright
      ctx.lineWidth = 5 * scale
      drawRibbonSpline()
      ctx.stroke()
      ctx.restore()

      // 4. White Specular Hotspot Centerline
      ctx.save()
      ctx.shadowColor = "#ffffff"
      ctx.shadowBlur = 4 * scale
      ctx.strokeStyle = palette.core
      ctx.lineWidth = 2 * scale
      drawRibbonSpline()
      ctx.stroke()
      ctx.restore()

      // 5. Cursor Follow Flare
      if (
        interactive &&
        mouse.hoverProgress > 0.05 &&
        closestNode &&
        closestDist < mouseRadius * 1.3
      ) {
        const flareNode = closestNode as SpringNode
        const flareX = offsetX + flareNode.x * scale
        const flareY = offsetY + flareNode.y * scale
        const flareProximity =
          (1 - Math.min(closestDist, mouseRadius) / mouseRadius) *
          mouse.hoverProgress

        ctx.save()
        const radGrad = ctx.createRadialGradient(
          flareX,
          flareY,
          0,
          flareX,
          flareY,
          55 * scale * flareProximity
        )
        radGrad.addColorStop(0, "rgba(255, 255, 255, 0.98)")
        radGrad.addColorStop(0.3, palette.hotspot)
        radGrad.addColorStop(0.7, palette.halo)
        radGrad.addColorStop(1, "rgba(2, 132, 199, 0)")

        ctx.fillStyle = radGrad
        ctx.beginPath()
        ctx.arc(flareX, flareY, 55 * scale * flareProximity, 0, Math.PI * 2)
        ctx.fill()

        ctx.shadowColor = "#ffffff"
        ctx.shadowBlur = 14 * scale
        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(flareX, flareY, 4 * scale * flareProximity, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isVisible, animate, interactive, intensity, colorTheme, getThemePalette])

  // Window pointer proximity tracking for seamless section-wide interaction
  useEffect(() => {
    if (!interactive) return

    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()

      const padding = 240
      const isNearby =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding

      if (isNearby) {
        mouseRef.current.targetX = e.clientX - rect.left
        mouseRef.current.targetY = e.clientY - rect.top
        if (mouseRef.current.x < -500) {
          mouseRef.current.x = mouseRef.current.targetX
          mouseRef.current.y = mouseRef.current.targetY
        }
        mouseRef.current.isHovered = true
      } else {
        mouseRef.current.isHovered = false
      }
    }

    const handleWindowLeave = () => {
      mouseRef.current.isHovered = false
    }

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true })
    window.addEventListener("blur", handleWindowLeave)
    document.addEventListener("mouseleave", handleWindowLeave)

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove)
      window.removeEventListener("blur", handleWindowLeave)
      document.removeEventListener("mouseleave", handleWindowLeave)
    }
  }, [interactive])

  const dimension = typeof size === "number" ? `${size}px` : size

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "relative inline-grid place-items-center select-none overflow-visible pointer-events-none",
        className
      )}
      style={{
        width: dimension,
        height: dimension,
      }}
    >
      <div
        className="absolute inset-[-20%] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 45%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none block"
        style={{
          filter: "drop-shadow(0 0 16px rgba(14,165,233,0.35))",
        }}
      />
    </div>
  )
}
