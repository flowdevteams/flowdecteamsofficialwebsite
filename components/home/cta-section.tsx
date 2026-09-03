"use client"

import Link from "next/link"
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function CTASection() {
  return (
    <section className="relative bg-background py-14 sm:py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inverse-panel relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-14 lg:p-16 bg-[#142d52]">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-in-down">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-white mb-6 border border-white/20 backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5" />
                KONSULTASI AWAL 100% GRATIS &amp; TANPA KOMITMEN
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight lg:text-5xl">
                <AccentTitle
                  text="Siap Mengakselerasi Pertumbuhan Bisnis Anda dengan Solusi Digital yang Tepat?"
                  highlightWords={4}
                  className="text-white"
                  accentClassName="text-white/60"
                />
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-[13px] sm:text-base lg:text-lg leading-relaxed text-white/80">
                Diskusikan tujuan kampanye penjualan, rencana pembuatan sistem aplikasi, atau ide integrasi AI bersama tim developer Flowdev Teams. Dapatkan rekomendasi arsitektur dan estimasi biaya transparan hari ini.
              </p>
            </AnimatedSection>

            {/* Micro Guarantees */}
            <AnimatedSection animation="fade-in-up" delay={250} className="mb-8 sm:mb-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-4 lg:gap-6 text-[11px] sm:text-xs text-white/90">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>Respon Kilat via WhatsApp</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>NDA &amp; Kerahasiaan Ide Terjamin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>Tanpa Biaya Konsultasi Awal</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-11 sm:h-12 w-full gap-2 rounded-xl bg-white px-6 sm:px-8 text-[13px] sm:text-base font-bold text-primary shadow-xl shadow-black/20 transition-all hover:bg-white/90 sm:w-auto group"
                >
                  <Link href="/kontak">
                    Hubungi Kami Sekarang
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 sm:h-12 w-full rounded-xl border-white/30 bg-transparent px-6 sm:px-8 text-[13px] sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  <Link href="/harga-paket">
                    Cek Skema Harga &amp; Paket
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
