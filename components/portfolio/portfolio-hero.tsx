"use client"

import { AnimatedSection } from "@/components/animated-section"

export function PortfolioHero() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Portofolio Kami
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Proyek Digital yang
              <span className="text-primary"> Memberikan Dampak</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Jelajahi hasil karya kami dalam pengembangan website dan aplikasi. 
              Setiap proyek mencerminkan komitmen kami terhadap kualitas, inovasi, 
              dan keberhasilan bisnis klien.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
