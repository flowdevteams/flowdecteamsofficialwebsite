"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
import { ShieldCheck, Sparkles, Zap, Lock } from "lucide-react"

export function PricingHero() {
  return (
    <section className="bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in-down">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white mb-6 border border-white/15 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-white" />
                Investasi Digital Terukur & Transparan
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                <AccentTitle 
                  text="Investasi Teknologi yang Dirancang untuk Pertumbuhan dan ROI Maksimal" 
                  highlightWords={3} 
                  className="text-white" 
                  accentClassName="text-white/60" 
                />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed text-pretty max-w-3xl mx-auto">
                Skema harga terstruktur tanpa biaya tersembunyi. Mulai dari landing page konversi tinggi untuk kampanye pemasaran, sistem aplikasi web bisnis, hingga integrasi kecerdasan buatan (AI) skala enterprise.
              </p>
            </AnimatedSection>

            {/* Micro Trust Pills */}
            <AnimatedSection animation="fade-in-up" delay={300} className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 border border-white/10">
                <ShieldCheck className="h-4 w-4 text-white" />
                <span>100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 border border-white/10">
                <Zap className="h-4 w-4 text-white" />
                <span>Performa Kilat (Score 95+)</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 border border-white/10">
                <Lock className="h-4 w-4 text-white" />
                <span>NDA & Data Privacy Ready</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
