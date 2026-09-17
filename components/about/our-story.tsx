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
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4 border border-primary/20">
                Prinsip &amp; Komitmen Kami
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
          <div className="lg:col-span-7 grid grid-cols-2 gap-2 sm:gap-6">
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="h-full p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-primary/20">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-1.5 line-clamp-2">
                  100% Hak Milik Source Code
                </h3>
                <p className="text-[9.5px] sm:text-xs lg:text-sm text-muted-foreground leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Penyerahan penuh repositori Git, skema database, dan dokumentasi API. Bebas royalti tahunan.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="h-full p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-primary/20">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-1.5 line-clamp-2">
                  Performa Kilat (Score 95+)
                </h3>
                <p className="text-[9.5px] sm:text-xs lg:text-sm text-muted-foreground leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Loading cepat di bawah 1.5 detik memangkas bounce rate iklan dan meningkatkan ranking SEO Google.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="h-full p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-primary/20">
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-1.5 line-clamp-2">
                  Arsitektur Skalabel Modern
                </h3>
                <p className="text-[9.5px] sm:text-xs lg:text-sm text-muted-foreground leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Siap diintegrasikan ke sistem pembayaran otomatis, CRM, ERP bisnis, hingga modul AI cerdas.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="h-full p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-4 border border-primary/20">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-1.5 line-clamp-2">
                  Termin Milestone Transparan
                </h3>
                <p className="text-[9.5px] sm:text-xs lg:text-sm text-muted-foreground leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
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
