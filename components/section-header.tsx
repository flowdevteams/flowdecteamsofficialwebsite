"use client"

import { AnimatedSection } from "./animated-section"
import { cn } from "@/lib/utils"
import { AccentTitle } from "@/components/accent-title"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
  tone?: "default" | "inverse"
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
  tone = "default",
}: SectionHeaderProps) {
  const isInverse = tone === "inverse"

  return (
    <div className={cn(centered && "text-center", "max-w-3xl", centered && "mx-auto", className)}>
      {badge && (
        <AnimatedSection animation="fade-in-down">
          <span
            className={cn(
              "mb-4 inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-semibold shadow-sm",
              isInverse
                ? "border-white/15 bg-white/10 text-white"
                : "border-primary/15 bg-primary/10 text-primary"
            )}
          >
            {badge}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection animation="fade-in-up" delay={100}>
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-balance leading-[1.08]",
            isInverse ? "text-white" : "text-foreground"
          )}
        >
          <AccentTitle
            text={title}
            className={isInverse ? "text-white" : undefined}
            accentClassName={isInverse ? "text-white/62" : undefined}
          />
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection animation="fade-in-up" delay={200}>
          <p
            className={cn(
              "text-base sm:text-lg leading-relaxed text-pretty",
              isInverse ? "text-white/82" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  )
}
