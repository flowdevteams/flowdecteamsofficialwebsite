"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function FeaturesHero() {
  return (
    <section className="bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/10 px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
          <div className="absolute inset-0 inverse-grid" />
          <div className="relative z-10 mx-auto max-w-4xl">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-block px-4 py-1.5 rounded-md text-sm font-medium bg-white/10 text-white mb-6 border border-white/15">
              Fitur Unggulan
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              <AccentTitle text="Fitur Andal untuk Solusi Digital Modern" highlightWords={3} className="text-white" accentClassName="text-white/62" />
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-lg sm:text-xl text-white/82 leading-relaxed text-pretty">
              Jelajahi rangkaian fitur dan teknologi terbaik yang kami gunakan untuk
              membangun produk digital berkualitas tinggi, scalable, dan siap
              mendukung pertumbuhan bisnis Anda.
            </p>
          </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
