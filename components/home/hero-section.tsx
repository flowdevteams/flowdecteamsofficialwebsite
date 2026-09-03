"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code2, Sparkles, ShieldCheck, Zap, Layers, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { GlowLogo } from "@/components/effects"
import { useMouseGlow } from "@/components/effects/use-mouse-glow"
import { MouseGlowOverlay } from "@/components/effects/mouse-glow-overlay"
import { AccentTitle } from "@/components/accent-title"

const rotatingWords = [
  "Website & Landing Page",
  "Aplikasi Web & Sistem Bisnis",
  "Solusi Kecerdasan Buatan (AI)",
  "Platform Digital Skalabel"
]

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const mouseGlow = useMouseGlow<HTMLElement>()

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex]
    const typeSpeed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1))
        if (typedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1))
        if (typedText.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, wordIndex])

  return (
    <section
      ref={mouseGlow.ref}
      onMouseEnter={mouseGlow.onMouseEnter}
      onMouseLeave={mouseGlow.onMouseLeave}
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-muted/20 to-background pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Interactive Mouse Follow Glow */}
      <MouseGlowOverlay className="z-[1]" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-muted/70 to-transparent dark:from-background" />

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:text-left">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="text-center lg:text-left">
            <AnimatedSection animation="fade-in-down">
              <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-md border border-primary/20 bg-card/90 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-mono font-semibold text-primary shadow-sm backdrop-blur">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden="true" />
                <span className="sm:hidden tracking-tight">// SOFTWARE HOUSE &amp; TEKNOLOGI DIGITAL</span>
                <span className="hidden sm:inline">// MITRA REKAYASA PERANGKAT LUNAK &amp; TEKNOLOGI DIGITAL</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="mt-4 sm:mt-6 text-[1.65rem] xs:text-[1.85rem] font-semibold leading-[1.15] text-foreground text-balance sm:text-4xl md:text-5xl lg:text-6xl font-heading">
                <span className="block">Jasa Pembuatan</span>
                <span className="relative block text-primary min-h-[1.2em]">
                  <span className="break-words">{typedText}</span>
                  <span className="animate-caret inline-block ml-0.5 text-primary">|</span>
                </span>
                <span className="block">
                  Untuk Pertumbuhan <span className="text-primary">Bisnis Nyata</span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="mt-4 sm:mt-5 max-w-2xl text-[13px] sm:text-sm md:text-base leading-relaxed text-muted-foreground text-pretty lg:mx-0">
                Flowdev Teams membangun solusi teknologi berkinerja tinggi—mulai dari <strong className="text-foreground">Landing Page Konversi Tinggi (mulai Rp 150rb)</strong>, <strong className="text-foreground">Aplikasi Web &amp; Sistem Bisnis (ERP/CRM/SaaS)</strong>, hingga <strong className="text-foreground">Integrasi AI Cerdas</strong>. 100% Hak Milik Source Code, Tanpa Bloatware &amp; Garansi Kecepatan.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="mt-6 sm:mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="h-11 sm:h-12 rounded-xl px-6 sm:px-8 text-[13px] sm:text-base font-semibold shadow-lg shadow-primary/20 group">
                  <Link href="/kontak">
                    Konsultasi Proyek Sekarang
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-11 sm:h-12 rounded-xl bg-card/80 px-5 sm:px-7 text-[13px] sm:text-base shadow-sm hover:bg-card">
                  <Link href="/portofolio">
                    <Play className="mr-2 h-4 w-4 text-primary" />
                    Lihat Portofolio Nyata
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* 3 Core Value Props */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { icon: ShieldCheck, title: "100% IP Handover", subtitle: "Source code & DB milik Anda" },
                  { icon: Zap, title: "PageSpeed 95+ Score", subtitle: "Loading kilat tanpa plugin berat" },
                  { icon: Layers, title: "Milestone Escrow", subtitle: "Pembayaran bertahap terukur" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-1 rounded-xl border border-border/80 bg-card/80 p-3 sm:p-3.5 text-left shadow-xs backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-xs font-bold text-foreground">{item.title}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground leading-tight">{item.subtitle}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Visual Glow Logo */}
          <AnimatedSection animation="scale-in" delay={500} className="flex items-center justify-center lg:justify-end w-full py-4 sm:py-6 lg:py-0">
            <div className="relative flex items-center justify-center w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] aspect-square">
              <GlowLogo className="w-full h-full" intensity={1} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
