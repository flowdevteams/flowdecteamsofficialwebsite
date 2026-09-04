"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function AboutHero() {
  return (
    <section className="bg-background py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 px-4 py-10 text-center sm:px-8 sm:py-12 lg:px-14 lg:py-20 bg-[#142d52]">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in-down">
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-white mb-4 sm:mb-6 border border-white/20">
                TENTANG FLOWDEV TEAMS
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance font-heading leading-tight">
                <AccentTitle text="Membangun Masa Depan Rekayasa Perangkat Lunak & Solusi Digital" highlightWords={3} className="text-white" accentClassName="text-white/60" />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-[13px] sm:text-base lg:text-lg text-white/80 leading-relaxed text-pretty">
                Kami Adalah Software House Independen Berfokus Pada Kecepatan, Transparansi Kepemilikan Kode, Dan Inovasi Teknologi Modern. Membantu Bisnis Memiliki Infrastruktur Digital Kelas Enterprise Tanpa Keterikatan Vendor.
              </p>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
