"use client"

import { AnimatedSection } from "@/components/animated-section"

export function FeaturesHero() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Fitur Unggulan
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Fitur Andal untuk
              <span className="text-primary"> Solusi Digital Modern</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Jelajahi rangkaian fitur dan teknologi terbaik yang kami gunakan untuk
              membangun produk digital berkualitas tinggi, scalable, dan siap
              mendukung pertumbuhan bisnis Anda.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
