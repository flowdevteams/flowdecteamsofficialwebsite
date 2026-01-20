"use client"

import { Check } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const benefits = [
  "Free initial consultation",
  "Transparent pricing",
  "Dedicated project manager",
  "Regular progress updates",
  "Post-launch support included",
  "100% satisfaction guarantee",
]

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Why Work With Us"
            title="Your Success Is Our Priority"
            description="We go above and beyond to ensure every project exceeds expectations."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{benefit}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
