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
      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity", // Optimasi performa GPU
    }
    
    if (!shouldAnimate) {
      switch (animation) {
        case "fade-in-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(20px)" }
        case "fade-in-down":
          return { ...baseStyles, opacity: 0, transform: "translateY(-20px)" }
        case "fade-in-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(-20px)" }
        case "fade-in-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(20px)" }
        case "scale-in":
          return { ...baseStyles, opacity: 0, transform: "scale(0.97)" }
        default:
          return { ...baseStyles, opacity: 0 }
      }
    }
    return { ...baseStyles, opacity: 1, transform: "translate(0, 0) scale(1)" }
  }

  return (
    <div
      ref={ref}
      className={cn("backface-hidden", className)} // Menghindari flickering di Safari mobile
      style={getAnimationStyles()}
    >
      {children}
    </div>
  )
}