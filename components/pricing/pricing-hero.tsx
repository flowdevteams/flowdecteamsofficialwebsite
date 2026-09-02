"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function PricingHero() {
  return (
    <section className="bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/10 px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-block px-4 py-1.5 rounded-md text-sm font-medium bg-white/10 text-white mb-6 border border-white/15">
              Harga & Paket Layanan
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              <AccentTitle text="Harga yang Sederhana, Transparan & Jelas" highlightWords={3} className="text-white" accentClassName="text-white/62" />
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-lg sm:text-xl text-white/82 leading-relaxed text-pretty">
              Pilih paket layanan yang paling sesuai dengan kebutuhan bisnis Anda. 
              Semua paket sudah termasuk fitur utama kami, tanpa biaya tersembunyi, 
              tanpa komitmen rumit, dan tanpa kejutan di kemudian hari.
            </p>
          </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
