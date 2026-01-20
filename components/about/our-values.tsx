"use client"

import { Heart, Zap, Users, Shield, Sparkles, Trophy } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in every project we deliver.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as true partners in their success.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We are honest, transparent, and always do what is right.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We strive for perfection in every line of code and pixel of design.",
  },
  {
    icon: Trophy,
    title: "Results",
    description: "We focus on delivering measurable outcomes that matter to you.",
  },
]

export function OurValues() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Values"
          title="The Principles That Guide Us"
          description="These core values shape our culture and drive every decision we make."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {values.map((value, index) => (
            <AnimatedSection
              key={value.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="text-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
