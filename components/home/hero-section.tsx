"use client"

import Link from "next/link"
import { ArrowRight, Play, Code2, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { GlowLogo, MouseGlowOverlay } from "@/components/effects"
import { useMouseGlow } from "@/hooks/useMouseGlow"
import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  "/mockups/mockup.webp",
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const fullText = "Website Termurah"
  const [typedText, setTypedText] = useState("")
  const mouseGlow = useMouseGlow<HTMLElement>()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let index = 0
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(typing)
    }, 80)

    return () => clearInterval(typing)
  }, [])

  return (
    <section
      ref={mouseGlow.ref}
      onMouseEnter={mouseGlow.onMouseEnter}
      onMouseLeave={mouseGlow.onMouseLeave}
      onMouseMove={mouseGlow.onMouseMove}
      className="relative min-h-screen overflow-hidden border-b border-border/60 bg-background pt-28 pb-20 lg:pt-32 lg:pb-32"
    >
      <div className="absolute inset-0 saas-grid opacity-45 dark:opacity-20" />
      <MouseGlowOverlay className="z-[1]" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-muted/70 to-transparent dark:from-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:text-left">
          <div className="text-center lg:text-left">
            <AnimatedSection animation="fade-in-down">
              <div className="inline-flex items-center gap-2 rounded-md border border-primary/15 bg-card/80 px-3 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur md:text-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>Solusi Digital Profesional untuk Bisnis Anda</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="mt-7 text-4xl font-semibold leading-[1.05] text-foreground text-balance sm:text-5xl md:text-6xl">
                <span className="block">Jasa Pembuatan</span>
                <span className="relative block text-primary">
                  <span className="invisible">Website Termurah</span>
                  <span className="absolute inset-0 flex justify-center lg:justify-start">
                    {typedText}
                    <span className="animate-caret">|</span>
                  </span>
                </span>
                <span className="block">
                  Untuk Bisnis <span className="text-primary">UMKM/UKM</span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg lg:mx-0">
                Jasa Pembuatan Website Profesional untuk bisnis Anda Dengan Harga Termurah Mulai Dari <span className="font-bold text-xl text-foreground">300 Ribuan</span> Sudah Gratis Domain dan Hosting!
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="h-12 rounded-lg px-7 text-base font-semibold shadow-lg shadow-primary/20 group">
                  <Link href="/kontak">
                    Konsultasi Proyek Sekarang
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-12 rounded-lg bg-card/70 px-7 text-base shadow-sm">
                  <Link href="/portofolio">
                    <Play className="h-4 w-4" />
                    Lihat Portofolio Kami
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
                {[
                  { icon: Code2, text: "Pengembangan Website Profesional Untuk Bisnis" },
                  { icon: Zap, text: "Performa Cepat & Optimal" },
                  { icon: Sparkles, text: "UI/UX Modern & Profesional" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex flex-1 min-w-[200px] items-center gap-3 rounded-lg border border-border/70 bg-card/75 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur"
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale-in" delay={500} className="flex items-center justify-center lg:justify-end">
            <GlowLogo size={420} className="w-full max-w-[420px] lg:scale-105" />
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .animate-caret {
          animation: blink 1.2s infinite;
          margin-left: 2px;
        }
      `}</style>
    </section>
  )
}
