"use client"

import React, { useEffect, useState } from "react"

import { useAnimation } from "@/hooks/use-animation"
import { cn } from "@/lib/utils"

type AnimationType = 
  | "fade-in-up" 
  | "fade-in-down" 
  | "fade-in-left" 
  | "fade-in-right" 
  | "fade-in" 
  | "scale-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useAnimation<HTMLDivElement>({ threshold })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    }
    
    if (!shouldAnimate) {
      // Initial hidden state based on animation type
      switch (animation) {
        case "fade-in-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(30px)" }
        case "fade-in-down":
          return { ...baseStyles, opacity: 0, transform: "translateY(-30px)" }
        case "fade-in-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(-30px)" }
        case "fade-in-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(30px)" }
        case "scale-in":
          return { ...baseStyles, opacity: 0, transform: "scale(0.95)" }
        default:
          return { ...baseStyles, opacity: 0 }
      }
    }
    return { ...baseStyles, opacity: 1, transform: "translateY(0) translateX(0) scale(1)" }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  )
}
