"use client"

import { Sparkles, Layers, ShieldCheck, TrendingUp, Award, Flame } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

const stats = [
  { label: "Proyek Selesai", value: "50+", icon: Layers },
  { label: "Tingkat Kepuasan", value: "99.4%", icon: ShieldCheck },
  { label: "Kategori Solusi", value: "3 Bidang", icon: Sparkles },
  { label: "On-Time Delivery", value: "100%", icon: Award },
]

export function PortfolioHero() {
  return (
    <section className="relative bg-gradient-to-b from-background via-card/40 to-background px-4 pt-12 pb-16 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 saas-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mx-auto max-w-4xl">
          
          <AnimatedSection animation="fade-in-down">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/25 shadow-xs mb-6">
              <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
              Katalog Portofolio & Produk Unggulan
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 font-serif leading-tight text-balance">
              Karya Digital yang Membawa <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">Dampak Nyata</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              Eksplorasi portfolio lengkap Flowdev Teams yang mencakup sistem Kecerdasan Buatan (Machine Learning), Aplikasi Web Enterprise berskala tinggi, dan Website Landing Page berkonversi maksimal.
            </p>
          </AnimatedSection>

          {/* 4 Stat Badges */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={i}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 shadow-xs hover:border-primary/40 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-1.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
