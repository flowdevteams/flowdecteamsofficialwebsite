"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function ServicesHero() {
  return (
    <section className="bg-background py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative w-full overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-10 lg:px-14 lg:py-20 bg-[#142d52]">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in-down">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-white mb-6 border border-white/20">
                LAYANAN &amp; SPESIALISASI TEKNIS
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance font-heading">
                <AccentTitle text="Layanan Rekayasa Digital Komprehensif untuk Skalabilitas Bisnis" highlightWords={3} className="text-white" accentClassName="text-white/60" />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed text-pretty">
                Dari Landing Page Konversi Tinggi Untuk Akselerasi Pemasaran, Sistem Web Enterprise Kustom, Hingga Integrasi Kecerdasan Buatan (AI) Otonom. Dibangun Dengan Standar Performa Tinggi Dan 100% Kepemilikan Source Code.
              </p>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
