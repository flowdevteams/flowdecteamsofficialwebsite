"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useMouseGlow } from "./use-mouse-glow"

export interface MouseGlowOverlayProps {
  /** Additional CSS classes */
  className?: string
  /** Radius of the spotlight in pixels. Default: 400 */
  radius?: number
  /** Primary glow color (hex/rgba). Default: 'rgba(255, 42, 75, 0.22)' */
  color?: string
  /** Secondary glow color (hex/rgba). Default: 'rgba(122, 9, 22, 0.12)' */
  secondaryColor?: string
  /** Maximum opacity when mouse is inside. Default: 1 */
  maxOpacity?: number
}

/**
 * MouseGlowOverlay — komponen backdrop spotlight interaktif yang mengikuti kursor
 * dengan pergerakan halus (lerp damping), fade out saat mouse leave, dan otomatis nonaktif di layar sentuh.
 */
export function MouseGlowOverlay({
  className,
  radius = 400,
  color = "rgba(14, 165, 233, 0.2)",
  secondaryColor = "rgba(2, 132, 199, 0.08)",
  maxOpacity = 1,
}: MouseGlowOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouse = useMouseGlow(containerRef, {
    damping: 0.08,
    maxOpacity,
    fadeSpeed: 0.06,
    disableOnTouch: true,
  })

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden select-none", className)}
    >
      {mouse.hasPointer && (
        <div
          className="pointer-events-none absolute left-0 top-0 transition-opacity duration-300"
          style={{
            width: radius * 2,
            height: radius * 2,
            opacity: mouse.opacity,
            transform: `translate3d(${mouse.x - radius}px, ${mouse.y - radius}px, 0)`,
            willChange: "transform, opacity",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, ${color} 0%, ${secondaryColor} 45%, transparent 70%)`,
              filter: "blur(32px)",
            }}
          />
        </div>
      )}
    </div>
  )
}
