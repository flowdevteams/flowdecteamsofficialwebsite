"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DraggableCarouselHandle {
  scrollPrev: () => void
  scrollNext: () => void
}

export interface DraggableCarouselProps {
  children: React.ReactNode
  className?: string
  trackClassName?: string
  headerTitle?: React.ReactNode
  headerBadge?: React.ReactNode
  showFloatingControls?: boolean
  showHeaderControls?: boolean
  showDragHint?: boolean
  autoScroll?: boolean
  autoScrollSpeed?: number
  stepScroll?: number
  fadeMasks?: boolean
  maskWidthClass?: string
  ariaLabel?: string
}

export const DraggableCarousel = React.forwardRef<DraggableCarouselHandle, DraggableCarouselProps>(
  function DraggableCarousel(
    {
      children,
      className,
      trackClassName,
      headerTitle,
      headerBadge,
      showFloatingControls = true,
      showHeaderControls = true,
      showDragHint = true,
      autoScroll = false,
      autoScrollSpeed = 0.8,
      stepScroll = 360,
      fadeMasks = true,
      maskWidthClass = "w-10 sm:w-20 md:w-28",
      ariaLabel = "Koleksi item",
    },
    ref
  ) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const isDownRef = React.useRef(false)
    const startXRef = React.useRef(0)
    const scrollLeftRef = React.useRef(0)
    const dragDistanceRef = React.useRef(0)
    const isInteractingRef = React.useRef(false)
    const resumeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const [isDragging, setIsDragging] = React.useState(false)
    const [canScrollLeft, setCanScrollLeft] = React.useState(false)
    const [canScrollRight, setCanScrollRight] = React.useState(true)

    // Update scroll limits
    const updateScrollState = React.useCallback(() => {
      const el = containerRef.current
      if (!el) return
      const buffer = 6
      setCanScrollLeft(el.scrollLeft > buffer)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - buffer)
    }, [])

    // Auto-scroll loop
    React.useEffect(() => {
      if (!autoScroll) return

      let animId: number
      const el = containerRef.current
      if (!el) return

      const tick = () => {
        if (!isInteractingRef.current && el) {
          if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
            el.scrollLeft = 0
          } else {
            el.scrollLeft += autoScrollSpeed
          }
          updateScrollState()
        }
        animId = requestAnimationFrame(tick)
      }

      animId = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(animId)
    }, [autoScroll, autoScrollSpeed, updateScrollState])

    // Pause interaction and resume after timeout
    const markInteracting = React.useCallback(() => {
      isInteractingRef.current = true
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false
      }, 2500)
    }, [])

    // Mouse Drag Handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button !== 0) return // Left click only
      const el = containerRef.current
      if (!el) return

      markInteracting()
      isDownRef.current = true
      startXRef.current = e.pageX - el.offsetLeft
      scrollLeftRef.current = el.scrollLeft
      dragDistanceRef.current = 0
      setIsDragging(true)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDownRef.current) return
      const el = containerRef.current
      if (!el) return

      e.preventDefault()
      markInteracting()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startXRef.current) * 1.35
      dragDistanceRef.current = Math.abs(walk)
      el.scrollLeft = scrollLeftRef.current - walk
      updateScrollState()
    }

    const handleMouseUp = () => {
      isDownRef.current = false
      setIsDragging(false)
      setTimeout(() => {
        dragDistanceRef.current = 0
        markInteracting()
      }, 80)
    }

    // Prevent link navigation if drag distance was significant
    const handleClickCapture = (e: React.MouseEvent) => {
      if (dragDistanceRef.current > 6) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    // Touch Handlers for mobile
    const handleTouchStart = () => {
      markInteracting()
    }

    const handleTouchMove = () => {
      markInteracting()
      updateScrollState()
    }

    const handleTouchEnd = () => {
      markInteracting()
      updateScrollState()
    }

    // Manual Arrow Scroll
    const scrollPrev = React.useCallback(() => {
      markInteracting()
      const el = containerRef.current
      if (!el) return
      el.scrollBy({ left: -stepScroll, behavior: "smooth" })
      setTimeout(updateScrollState, 350)
    }, [markInteracting, stepScroll, updateScrollState])

    const scrollNext = React.useCallback(() => {
      markInteracting()
      const el = containerRef.current
      if (!el) return
      el.scrollBy({ left: stepScroll, behavior: "smooth" })
      setTimeout(updateScrollState, 350)
    }, [markInteracting, stepScroll, updateScrollState])

    // Expose ref API
    React.useImperativeHandle(
      ref,
      () => ({
        scrollPrev,
        scrollNext,
      }),
      [scrollPrev, scrollNext]
    )

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        scrollPrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        scrollNext()
      }
    }

    // Initial layout check & window resize observer
    React.useEffect(() => {
      updateScrollState()
      const el = containerRef.current
      if (!el) return

      const handleResize = () => updateScrollState()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [updateScrollState])

    return (
      <div className={cn("relative group/slider w-full select-none", className)}>
        {/* Optional Section/Row Header with Title and Active Navigation Buttons */}
        {(headerBadge || headerTitle || showHeaderControls) && (
          <div className="flex items-center justify-between gap-3 px-3 sm:px-6 lg:px-8 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              {headerBadge}
              {headerTitle && (
                <span className="text-xs sm:text-sm font-bold text-foreground truncate">
                  {headerTitle}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Subtle Swipe/Drag Hint */}
              {showDragHint && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-muted-foreground font-medium mr-1">
                  <MoveHorizontal className="w-3.5 h-3.5 opacity-60" />
                  <span>Geser kursor atau sentuh</span>
                </span>
              )}

              {/* Header Active Arrow Buttons */}
              {showHeaderControls && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    disabled={!canScrollLeft}
                    aria-label="Geser ke kiri"
                    className={cn(
                      "h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg border border-border/80 bg-card text-foreground transition-all cursor-pointer shadow-xs",
                      canScrollLeft
                        ? "hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95"
                        : "opacity-35 cursor-not-allowed text-muted-foreground"
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={scrollNext}
                    disabled={!canScrollRight}
                    aria-label="Geser ke kanan"
                    className={cn(
                      "h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-lg border border-border/80 bg-card text-foreground transition-all cursor-pointer shadow-xs",
                      canScrollRight
                        ? "hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95"
                        : "opacity-35 cursor-not-allowed text-muted-foreground"
                    )}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Floating Side Buttons (Desktop only, positioned on sides) */}
        {showFloatingControls && (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Geser ke kiri"
              className={cn(
                "hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer",
                canScrollLeft
                  ? "opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Geser ke kanan"
              className={cn(
                "hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer",
                canScrollRight
                  ? "opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Left Edge Gradient Fade Mask */}
        {fadeMasks && (
          <div 
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-background via-background/80 to-transparent z-20 transition-opacity duration-300",
              maskWidthClass,
              canScrollLeft ? "opacity-100" : "opacity-0"
            )} 
          />
        )}

        {/* Right Edge Gradient Fade Mask */}
        {fadeMasks && (
          <div 
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-background via-background/80 to-transparent z-20 transition-opacity duration-300",
              maskWidthClass,
              canScrollRight ? "opacity-100" : "opacity-0"
            )} 
          />
        )}

        {/* Draggable & Touch Scrollable Track */}
        <div
          ref={containerRef}
          role="region"
          aria-label={ariaLabel}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClickCapture={handleClickCapture}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={updateScrollState}
          className={cn(
            "flex overflow-x-auto no-scrollbar scroll-smooth py-2 px-3 sm:px-6 lg:px-8 focus:outline-hidden",
            isDragging ? "cursor-grabbing" : "cursor-grab",
            trackClassName
          )}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </div>
      </div>
    )
  }
)
