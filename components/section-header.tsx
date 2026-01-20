"use client"

import { AnimatedSection } from "./animated-section"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "max-w-2xl", centered && "mx-auto", className)}>
      {badge && (
        <AnimatedSection animation="fade-in-down">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            {badge}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection animation="fade-in-up" delay={100}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection animation="fade-in-up" delay={200}>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  )
}
