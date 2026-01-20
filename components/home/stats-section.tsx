"use client"

import { AnimatedSection } from "@/components/animated-section"

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "25+", label: "Team Members" },
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
