"use client"

import { useCallback, useEffect, useRef } from "react"

type MouseGlowHandlers<T extends HTMLElement> = {
  ref: React.RefObject<T | null>
  onMouseEnter: () => void
  onMouseLeave: () => void
  onMouseMove: (event: React.MouseEvent<T>) => void
}

const DEFAULT_POSITION = 50
const LERP_AMOUNT = 0.12

export function useMouseGlow<T extends HTMLElement>(): MouseGlowHandlers<T> {
  const ref = useRef<T | null>(null)
  const frameRef = useRef<number | null>(null)
  const enabledRef = useRef(false)
  const activeRef = useRef(false)
  const currentRef = useRef({ x: DEFAULT_POSITION, y: DEFAULT_POSITION, opacity: 0 })
  const targetRef = useRef({ x: DEFAULT_POSITION, y: DEFAULT_POSITION, opacity: 0 })

  const writeCssVars = useCallback(() => {
    const element = ref.current
    if (!element) return

    const current = currentRef.current
    const target = targetRef.current

    current.x += (target.x - current.x) * LERP_AMOUNT
    current.y += (target.y - current.y) * LERP_AMOUNT
    current.opacity += (target.opacity - current.opacity) * LERP_AMOUNT

    // CSS variables avoid React re-renders while keeping pointer glow smooth.
    element.style.setProperty("--mouse-x", `${current.x}%`)
    element.style.setProperty("--mouse-y", `${current.y}%`)
    element.style.setProperty("--mouse-glow-opacity", current.opacity.toFixed(3))

    frameRef.current = window.requestAnimationFrame(writeCssVars)
  }, [])

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)")

    const syncCapability = () => {
      enabledRef.current = hoverQuery.matches
      targetRef.current.opacity = hoverQuery.matches && activeRef.current ? 1 : 0
    }

    syncCapability()
    hoverQuery.addEventListener("change", syncCapability)
    frameRef.current = window.requestAnimationFrame(writeCssVars)

    return () => {
      hoverQuery.removeEventListener("change", syncCapability)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [writeCssVars])

  const onMouseEnter = useCallback(() => {
    if (!enabledRef.current) return
    activeRef.current = true
    targetRef.current.opacity = 1
  }, [])

  const onMouseLeave = useCallback(() => {
    activeRef.current = false
    targetRef.current = { x: DEFAULT_POSITION, y: DEFAULT_POSITION, opacity: 0 }
  }, [])

  const onMouseMove = useCallback((event: React.MouseEvent<T>) => {
    if (!enabledRef.current || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    targetRef.current.x = ((event.clientX - rect.left) / rect.width) * 100
    targetRef.current.y = ((event.clientY - rect.top) / rect.height) * 100
    targetRef.current.opacity = 1
  }, [])

  return { ref, onMouseEnter, onMouseLeave, onMouseMove }
}
