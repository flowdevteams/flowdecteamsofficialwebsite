"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
import { Sparkles, Code2, Globe, ShieldCheck } from "lucide-react"

export function PortfolioHero() {
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
                SHOWCASE KARYA REKAYASA DIGITAL
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance font-heading leading-tight">
                <AccentTitle text="Portofolio Proyek & Rekayasa Perangkat Lunak Nyata" highlightWords={3} className="text-white" accentClassName="text-white/60" />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-[13px] sm:text-base lg:text-lg text-white/80 leading-relaxed text-pretty">
                Eksplorasi Hasil Rekayasa Nyata Flowdev Teams: Mulai Dari Landing Page Konversi Tinggi, Aplikasi Web Bisnis, Hingga Implementasi Kecerdasan Buatan (AI) Cerdas.
              </p>
            </AnimatedSection>

            {/* Micro Trust Pills */}
            <AnimatedSection animation="fade-in-up" delay={300} className="mt-6 sm:mt-8 grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-3 lg:gap-6 text-[9px] sm:text-xs lg:text-sm text-white/90">
              <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-white/10 p-2 sm:px-3.5 sm:py-2 border border-white/20">
                <Code2 className="h-3.5 w-3.5 text-white shrink-0" />
                <span className="truncate max-w-full">
                  <span className="sm:hidden">Next.js 16</span>
                  <span className="hidden sm:inline">Next.js 16 &amp; Full-Stack Modern</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-white/10 p-2 sm:px-3.5 sm:py-2 border border-white/20">
                <Globe className="h-3.5 w-3.5 text-white shrink-0" />
                <span className="truncate max-w-full">
                  <span className="sm:hidden">Speed 95+</span>
                  <span className="hidden sm:inline">PageSpeed Score 95+</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-white/10 p-2 sm:px-3.5 sm:py-2 border border-white/20">
                <ShieldCheck className="h-3.5 w-3.5 text-white shrink-0" />
                <span className="truncate max-w-full">
                  <span className="sm:hidden">Prod-Ready</span>
                  <span className="hidden sm:inline">Enterprise Production Ready</span>
                </span>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
