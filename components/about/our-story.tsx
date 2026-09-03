"use client"

import { ShieldCheck, Zap, Code2, Lock } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"

export function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left - Core Philosophy */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4 border border-primary/20">
                PRINSIP &amp; KOMITMEN KAMI
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-serif leading-tight">
                <AccentTitle text="Software House yang Menolak Vendor Lock-in & Bloatware" />
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Flowdev Teams didirikan untuk memecahkan masalah umum industri pengembangan web: sistem yang lambat karena tumpukan plugin pihak ketiga (*bloatware*), tagihan sewa lisensi tersembunyi, dan ketidakjelasan hak kepemilikan kode.
                </p>
                <p>
                  Kami membangun seluruh perangkat lunak dengan pendekatan <strong>Clean Architecture (Next.js 16 native &amp; Full-Stack Modern)</strong>. Setiap baris kode, arsitektur database, dan aset digital diserahkan 100% menjadi aset mutlak milik bisnis Anda.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - 4 Core Pillars of Engineering Value */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  100% Hak Milik Source Code
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Penyerahan penuh repositori Git, skema database, dan dokumentasi API. Bebas royalti tahunan.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  Performa Kilat (Score 95+)
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Loading cepat di bawah 1.5 detik memangkas bounce rate iklan dan meningkatkan ranking SEO Google.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  Arsitektur Skalabel Modern
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Siap diintegrasikan ke sistem pembayaran otomatis, CRM, ERP bisnis, hingga modul AI cerdas.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  Termin Milestone Transparan
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Skema pembayaran bertahap berbasis validasi progres nyata. Keamanan investasi Anda terjamin.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  )
}
