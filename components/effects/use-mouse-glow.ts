"use client"

import { useEffect, useRef, useState, useCallback, RefObject } from "react"

export interface MouseGlowState {
  /** X coordinate in pixels relative to target element */
  x: number
  /** Y coordinate in pixels relative to target element */
  y: number
  /** Normalized X coordinate (0.0 to 1.0) */
  normalizedX: number
  /** Normalized Y coordinate (0.0 to 1.0) */
  normalizedY: number
  /** Whether the pointer is currently hovering inside the element */
  isHovered: boolean
  /** Opacity value (0 when inactive, up to maxOpacity when hovered) */
  opacity: number
  /** Whether mouse/fine pointer is supported (false on pure touch devices) */
  hasPointer: boolean
}

export interface UseMouseGlowOptions {
  /** Smoothing factor for movement lerp (0.05 = slow/smooth delay, 0.2 = fast, 1 = instant). Default: 0.1 */
  damping?: number
  /** Target max opacity when hovering (default: 1) */
  maxOpacity?: number
  /** Opacity fade speed (default: 0.1) */
  fadeSpeed?: number
  /** Disable on mobile/touch devices automatically (default: true) */
  disableOnTouch?: boolean
}

/**
 * Custom hook providing smooth, lag-free mouse tracking with lerp interpolation
 * for luminous spotlight and glow reactions.
 */
export function useMouseGlow<T extends HTMLElement = HTMLDivElement>(
  containerRef?: RefObject<T | null>,
  options: UseMouseGlowOptions = {}
) {
  const {
    damping = 0.1,
    maxOpacity = 1,
    fadeSpeed = 0.08,
    disableOnTouch = true,
  } = options

  const internalRef = useRef<T>(null)
  const targetRef = containerRef || internalRef

  // Raw instantaneous target coordinates
  const targetPos = useRef({ x: 0, y: 0, isHovered: false })
  
  // Smoothed current coordinates
  const currentPos = useRef({ x: 0, y: 0, opacity: 0 })
  const rafId = useRef<number | null>(null)

  const [state, setState] = useState<MouseGlowState>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
    isHovered: false,
    opacity: 0,
    hasPointer: false,
  })

  // Detect pointer capability and reduced motion preferences
  useEffect(() => {
    if (typeof window === "undefined") return

    const pointerMatch = window.matchMedia("(pointer: fine)")
    const motionMatch = window.matchMedia("(prefers-reduced-motion: reduce)")

    const checkCapabilities = () => {
      const finePointer = disableOnTouch ? pointerMatch.matches : true
      const reducedMotion = motionMatch.matches
      setState((prev) => ({
        ...prev,
        hasPointer: finePointer && !reducedMotion,
      }))
    }

    checkCapabilities()
    pointerMatch.addEventListener("change", checkCapabilities)
    motionMatch.addEventListener("change", checkCapabilities)

    return () => {
      pointerMatch.removeEventListener("change", checkCapabilities)
      motionMatch.removeEventListener("change", checkCapabilities)
    }
  }, [disableOnTouch])

  // Animation frame loop for smooth lerp interpolation
  const startAnimationLoop = useCallback(() => {
    if (rafId.current !== null) return

    const animate = () => {
      const target = targetPos.current
      const current = currentPos.current

      // Smooth coordinate interpolation (Lerp)
      current.x += (target.x - current.x) * damping
      current.y += (target.y - current.y) * damping

      // Smooth opacity fade in / fade out
      const targetOpacity = target.isHovered ? maxOpacity : 0
      current.opacity += (targetOpacity - current.opacity) * fadeSpeed

      const element = targetRef.current
      const width = element ? element.offsetWidth || 1 : 1
      const height = element ? element.offsetHeight || 1 : 1

      const normX = Math.max(0, Math.min(1, current.x / width))
      const normY = Math.max(0, Math.min(1, current.y / height))

      setState((prev) => {
        // Only trigger state update if changed noticeably to save CPU
        if (
          Math.abs(prev.x - current.x) < 0.2 &&
          Math.abs(prev.y - current.y) < 0.2 &&
          Math.abs(prev.opacity - current.opacity) < 0.005 &&
          prev.isHovered === target.isHovered
        ) {
          return prev
        }

        return {
          ...prev,
          x: current.x,
          y: current.y,
          normalizedX: normX,
          normalizedY: normY,
          isHovered: target.isHovered,
          opacity: current.opacity,
        }
      })

      // Continue loop if still hovering or fading out
      if (target.isHovered || current.opacity > 0.005) {
        rafId.current = requestAnimationFrame(animate)
      } else {
        rafId.current = null
      }
    }

    rafId.current = requestAnimationFrame(animate)
  }, [damping, fadeSpeed, maxOpacity, targetRef])

  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    const handlePointerMove = (e: PointerEvent) => {
      // Ignore non-mouse pointers if touch disabled
      if (disableOnTouch && e.pointerType === "touch") return

      const rect = element.getBoundingClientRect()
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isHovered: true,
      }
      startAnimationLoop()
    }

    const handlePointerEnter = (e: PointerEvent) => {
      if (disableOnTouch && e.pointerType === "touch") return
      const rect = element.getBoundingClientRect()
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isHovered: true,
      }
      startAnimationLoop()
    }

    const handlePointerLeave = () => {
      targetPos.current.isHovered = false
      startAnimationLoop()
    }

    element.addEventListener("pointermove", handlePointerMove, { passive: true })
    element.addEventListener("pointerenter", handlePointerEnter, { passive: true })
    element.addEventListener("pointerleave", handlePointerLeave, { passive: true })

    return () => {
      element.removeEventListener("pointermove", handlePointerMove)
      element.removeEventListener("pointerenter", handlePointerEnter)
      element.removeEventListener("pointerleave", handlePointerLeave)
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [targetRef, disableOnTouch, startAnimationLoop])

  return {
    ref: targetRef,
    ...state,
  }
}
