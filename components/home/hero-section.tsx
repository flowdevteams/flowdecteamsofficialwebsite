"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Sparkles, ShieldCheck, Zap, Layers, Play, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { GlowLogo } from "@/components/effects"
import { useMouseGlow } from "@/components/effects/use-mouse-glow"
import { MouseGlowOverlay } from "@/components/effects/mouse-glow-overlay"
import { AccentTitle } from "@/components/accent-title"

const rotatingWords = ["Website", "Web App"]

interface PartnerLogo {
  name: string
  logo: string
}

const heroPartners: PartnerLogo[] = [
  { name: "Google Ads", logo: "/tech/google-ads-color.svg" },
  { name: "Google Search Console", logo: "/tech/google-search-console-color.svg" },
  { name: "Next.js", logo: "/tech/nextjs-color.svg" },
  { name: "NestJS", logo: "/tech/nestjs-color.svg" },
  { name: "Cloudflare", logo: "/tech/cloudflare-color.svg" },
  { name: "PostgreSQL", logo: "/tech/postgresql-color.svg" },
  { name: "Docker", logo: "/tech/docker-color.svg" },
  { name: "TypeScript", logo: "/tech/typescript-color.svg" },
  { name: "Tailwind CSS", logo: "/tech/tailwind-color.svg" },
  { name: "Redis", logo: "/tech/redis-color.svg" },
  { name: "Python", logo: "/tech/python-color.svg" },
  { name: "Supabase", logo: "/tech/supabase-color.svg" },
  { name: "Vercel", logo: "/tech/vercel-color.svg" },
  { name: "WhatsApp Business API", logo: "/tech/whatsapp.svg" },
  { name: "Meta Ads", logo: "/tech/meta.svg" },
]

export function HeroSection() {
  const mouseGlow = useMouseGlow<HTMLElement>()
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState("Website")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex]

    // 1. Full word reached: wait 1200ms before deleting
    if (!isDeleting && typedText === currentWord) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1200)
      return () => clearTimeout(pauseTimeout)
    }

    // 2. Empty word reached: brief pause then switch to next word
    if (isDeleting && typedText === "") {
      const nextWordTimeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
      }, 200)
      return () => clearTimeout(nextWordTimeout)
    }

    // 3. Normal typing (60ms) or deleting (30ms) step
    const stepSpeed = isDeleting ? 30 : 60
    const stepTimeout = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      )
    }, stepSpeed)

    return () => clearTimeout(stepTimeout)
  }, [typedText, isDeleting, wordIndex])

  return (
    <section
      ref={mouseGlow.ref}
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-muted/20 to-background pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Interactive Mouse Follow Glow */}
      <MouseGlowOverlay className="z-[1]" />
      
      {/* Background Grid Pattern with Radial Fade */}
      <div 
        className="pointer-events-none absolute inset-0 saas-grid opacity-85 dark:opacity-60 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_35%,#000_55%,transparent_100%)]" 
        aria-hidden="true" 
      />

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
              <h1 className="mt-4 sm:mt-6 text-[1.85rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.18] text-foreground font-heading tracking-tight">
                <span className="block">Jasa Pembuatan</span>
                <span className="block text-primary">
                  <span className="inline-grid grid-cols-1 grid-rows-1">
                    {/* Ghost text anchors: locks max width and line-height permanently */}
                    <span className="invisible col-start-1 row-start-1 select-none pointer-events-none whitespace-nowrap" aria-hidden="true">
                      Website
                    </span>
                    <span className="invisible col-start-1 row-start-1 select-none pointer-events-none whitespace-nowrap" aria-hidden="true">
                      Web App
                    </span>
                    {/* Real active typewriter text */}
                    <span className="col-start-1 row-start-1 inline-flex items-center justify-center lg:justify-start whitespace-nowrap">
                      <span>{typedText}</span>
                      <span className="animate-cursor inline-block ml-1 text-primary font-normal">|</span>
                    </span>
                  </span>
                </span>
                <span className="block">&amp; Otomasi Sistem</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="mt-4 sm:mt-5 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0">
                Software House Profesional: Cepat, Rapi, Dan Gratis Konsultasi Bisnis.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="mt-6 sm:mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="h-11 sm:h-12 rounded-xl px-6 sm:px-8 text-[13px] sm:text-base font-semibold shadow-lg shadow-primary/20 group">
                  <Link href="/kontak">
                    Gratis Konsultasi Sekarang
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
                  { icon: Target, title: "Solusi Presisi", subtitle: "Dirancang sesuai kebutuhan" },
                  { icon: Zap, title: "Eksekusi Cepat", subtitle: "Pengerjaan rapi & profesional" },
                  { icon: ShieldCheck, title: "Biaya Transparan", subtitle: "Jujur & bersahabat di awal" },
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

        {/* Hero Bottom: Infinite Auto-Running Partner & Tech Ecosystem Marquee (Logo Nya Saja) */}
        <AnimatedSection animation="fade-in-up" delay={600} className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border/40">
          <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-muted-foreground">
              // TEKNOLOGI &amp; PLATFORM TERINTEGRASI
            </span>
            <span className="text-[10px] font-mono text-muted-foreground/60 hidden sm:inline-block">
              // 100% Modern Stack &bull; Siap Scale-Up
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2">
            {/* Left & Right Soft Fade Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

            <div className="animate-marquee-left flex items-center gap-8 sm:gap-12 gpu-accelerated">
              {[...heroPartners, ...heroPartners].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 group/logo select-none px-2"
                  title={partner.name}
                >
                  <div className="relative h-8 sm:h-9 w-8 sm:w-9 flex items-center justify-center transition-transform duration-300 group-hover/logo:scale-115">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={36}
                      height={36}
                      unoptimized
                      className="h-7 sm:h-8 w-7 sm:w-8 object-contain transition-all duration-300 opacity-80 group-hover/logo:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
