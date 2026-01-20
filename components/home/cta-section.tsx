"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Siap Membangun Website atau Aplikasi untuk Bisnis Anda?
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed text-pretty">
              Konsultasikan kebutuhan website dan aplikasi bisnis Anda bersama
              tim profesional Flowdev Teams. Kami siap membantu Anda merancang,
              mengembangkan, dan mengoptimalkan solusi digital yang tepat sasaran.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base px-8 h-12 gap-2 group"
              >
                <Link href="/contact">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
              >
                <Link href="/pricing">
                  Lihat Paket Harga
                </Link>
              </Button>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
