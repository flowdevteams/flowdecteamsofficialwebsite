"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function CTASection() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="inverse-panel relative overflow-hidden rounded-xl border border-white/10 p-8 md:p-14 lg:p-16">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-in-up">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                <AccentTitle
                  text="Siap Membangun Website untuk Bisnis Anda?"
                  highlightWords={3}
                  className="text-white"
                  accentClassName="text-white/62"
                />
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/82">
                Konsultasikan kebutuhan Website bisnis Anda bersama
                tim profesional Flowdev Teams. Kami siap membantu Anda merancang,
                mengembangkan, dan mengoptimalkan solusi digital yang tepat sasaran.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full gap-2 rounded-lg bg-white px-8 text-base text-primary shadow-lg shadow-black/15 transition-all hover:bg-white/90 sm:w-auto group"
                >
                  <Link href="/kontak">
                    Konsultasi Gratis Sekarang
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-lg border-white/30 bg-transparent px-8 text-base text-white transition-all hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  <Link href="/harga-paket">
                    Lihat Paket Harga
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
