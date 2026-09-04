"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
import { Sparkles, ShieldCheck, Zap, Lock } from "lucide-react"

export function PricingHero() {
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
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-white mb-4 sm:mb-6 border border-white/20">
                <Sparkles className="h-3.5 w-3.5 text-white" />
                INVESTASI DIGITAL TERUKUR &amp; TRANSPARAN
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance font-heading leading-tight">
                <AccentTitle 
                  text="Investasi Teknologi yang Dirancang untuk Pertumbuhan dan ROI Maksimal" 
                  highlightWords={3} 
                  className="text-white" 
                  accentClassName="text-white/60" 
                />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-[13px] sm:text-base lg:text-lg text-white/80 leading-relaxed text-pretty">
                Skema Harga Terstruktur Tanpa Biaya Tersembunyi: Mulai Dari Landing Page Konversi Tinggi, Sistem Aplikasi Web Bisnis, Hingga Integrasi Kecerdasan Buatan (AI) Skala Enterprise.
              </p>
            </AnimatedSection>

            {/* Micro Trust Pills */}
            <AnimatedSection animation="fade-in-up" delay={300} className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:gap-6 text-[10px] sm:text-xs lg:text-sm text-white/90">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 border border-white/20">
                <ShieldCheck className="h-4 w-4 text-white" />
                <span>100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 border border-white/20">
                <Zap className="h-4 w-4 text-white" />
                <span>Performa Kilat (Score 95+)</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 border border-white/20">
                <Lock className="h-4 w-4 text-white" />
                <span>NDA &amp; Data Privacy Ready</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
