"use client"

import { useState } from "react"
import { 
  Check, 
  Users, 
  Rocket, 
  Award, 
  Clock, 
  X, 
  AlertTriangle, 
  SearchX, 
  Briefcase, 
  TrendingDown,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Lock,
  Coins
} from "lucide-react"
import { Kino, Scene } from "react-kino"
import { cn } from "@/lib/utils"

// KONTEN AFTER (STANDAR REKAYASA FLOWDEV TEAMS)
const afterFeatures = [
  {
    icon: Code2,
    title: "100% Hak Milik Source Code",
    description: "Akses penuh ke Git repository & DB. Bebas vendor lock-in tanpa biaya royalti tersembunyi.",
  },
  {
    icon: Zap,
    title: "PageSpeed 95+ (Tanpa Bloatware)",
    description: "Dibangun dengan Next.js 16 native, loading < 1.5 detik memangkas bounce rate iklan.",
  },
  {
    icon: Coins,
    title: "Termin Milestone Transparan",
    description: "Skema pembayaran bertahap berbasis validasi progres nyata demi kenyamanan investasi Anda.",
  },
  {
    icon: Lock,
    title: "Garansi & SLA Support Terkelola",
    description: "Monitoring uptime server, backup berkala, dan pendampingan teknis responsif.",
  },
]

const afterBenefits = [
  "Kepemilikan aset digital 100% mutlak milik bisnis Anda",
  "Performa kilat memangkas biaya iklan dan mendongkrak konversi",
  "Arsitektur modern skalabel siap integrasi sistem AI & SaaS",
  "Transparansi total tanpa tagihan siluman atau royalti lisensi",
  "Dukungan teknis responsif langsung bersama tim developer inti",
]

// KONTEN BEFORE (MASALAH VENDOR & AGENSI TRASISIONAL)
const beforeFeatures = [
  {
    icon: SearchX,
    title: "Template Pasaran & Bloatware",
    description: "Banyak plugin pihak ketiga yang membuat website lambat dan rentan celah keamanan.",
  },
  {
    icon: Lock,
    title: "Source Code Ditahan Vendor",
    description: "Akses server dan kode dikunci sehingga bisnis tersandera jika ingin upgrade sistem.",
  },
  {
    icon: TrendingDown,
    title: "Biaya Tersembunyi & Royalti",
    description: "Harga awal murah tetapi dibebani biaya perpanjangan plugin mahal setiap tahun.",
  },
  {
    icon: AlertTriangle,
    title: "Timeline Molor & Komunikasi Kaku",
    description: "Pengerjaan sering tertunda berbulan-bulan dan sulit dihubungi saat terjadi error.",
  },
]

const beforeBenefits = [
  "Website lambat (> 4 detik) membuat trafik iklan berbayar terbuang sia-sia",
  "Keterikatan vendor (Vendor Lock-in) yang membatasi perkembangan bisnis",
  "Biaya operasional membengkak akibat biaya langganan tak terduga",
  "Struktur kode berantakan yang mustahil dikembangkan ke skala sistem besar",
  "Kredibilitas brand terancam karena downtime dan tampilan tidak profesional",
]

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before")

  return (
    <section className="bg-background relative border-b border-border/60">
      {/* DESKTOP VIEW: Cinematic Scroll-Driven Transition (react-kino) */}
      <div className="hidden lg:block">
        <Kino>
          <Scene duration="350vh">
            {(progress) => {
              const clamped = Math.max(0, Math.min(1, progress))
              const animProgress = Math.max(0, Math.min(1, (clamped - 0.15) / 0.55))
              const displayPercent = Math.round(animProgress * 100)
              
              const beforeOpacity = animProgress <= 0.10 ? 1 : Math.max(0, (0.50 - animProgress) / 0.40)
              const afterOpacity = animProgress >= 0.85 ? 1 : Math.max(0, (animProgress - 0.45) / 0.40)
              const isAfterActive = animProgress >= 0.50

              return (
                <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center pt-14 lg:pt-16 pb-6">
                  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-3 xl:gap-4">
                  
                  {/* Floating Controller / Status Bar */}
                  <div className="relative z-30 max-w-4xl mx-auto w-full flex items-center justify-between gap-4 bg-card/85 dark:bg-card/75 backdrop-blur-md border border-border/80 rounded-full px-5 py-2 shadow-sm">
                    {/* State Indicator */}
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all duration-300",
                        isAfterActive ? "bg-primary shadow-[0_0_8px_rgba(24,57,102,0.6)]" : "bg-primary/50"
                      )} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {isAfterActive ? "Standar Flowdev Teams" : "Masalah Vendor Web Umum"}
                      </span>
                    </div>

                    {/* Interactive Switch Pill & Progress */}
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className={cn("font-medium transition-colors", !isAfterActive && "text-foreground font-bold")}>
                          Vendor Web Umum
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                        <span className={cn("font-medium transition-colors", isAfterActive && "text-primary font-bold")}>
                          Flowdev Teams
                        </span>
                      </div>
                      
                      {/* Mini Scroll Progress Bar */}
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden border border-border/50">
                        <div 
                          className="h-full bg-primary transition-all duration-150 ease-out rounded-full"
                          style={{ width: `${displayPercent}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground min-w-[32px] text-right">
                        {displayPercent}%
                      </span>
                    </div>
                  </div>

                  {/* MAIN COMPARISON CONTAINER */}
                  <div className="relative w-full h-[520px] xl:h-[540px] flex items-center justify-center">
                    
                    {/* === LAYER 1: BEFORE CONTENT === */}
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300 pointer-events-none"
                      style={{ 
                        opacity: beforeOpacity,
                        transform: `scale(${0.96 + beforeOpacity * 0.04}) translateY(${(1 - beforeOpacity) * -15}px)`,
                        pointerEvents: beforeOpacity > 0.5 ? "auto" : "none",
                        visibility: beforeOpacity <= 0.01 ? "hidden" : "visible"
                      }}
                    >
                      <div className="w-full h-full rounded-2xl border border-border/80 bg-card p-6 xl:p-8 shadow-sm flex flex-col justify-center">
                        <div className="grid grid-cols-12 gap-8 xl:gap-12 items-center w-full">
                          
                          {/* Left Column: Pain Points */}
                          <div className="col-span-5 flex flex-col gap-3.5">
                            <div>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2.5 bg-primary/10 text-primary rounded-md border border-primary/20">
                                <AlertTriangle className="w-3.5 h-3.5 text-primary" />
                                Masalah Vendor Web Konvensional
                              </span>
                              <h3 className="text-2xl xl:text-3xl font-bold leading-snug text-foreground">
                                Keterikatan Vendor &amp; Biaya Tak Terduga
                              </h3>
                            </div>
                            
                            <div className="flex flex-col gap-2 mt-0.5">
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tantangan yang Sering Terjadi:</p>
                              {beforeBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 bg-primary/10 text-primary border border-primary/20 rounded">
                                    <X className="w-3 h-3" />
                                  </div>
                                  <span className="text-xs xl:text-sm leading-relaxed text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Column: 4 Grid Cards */}
                          <div className="col-span-7 grid grid-cols-2 gap-3.5">
                            {beforeFeatures.map((feature, index) => (
                              <div 
                                key={index} 
                                className="p-4 rounded-xl border border-border/70 bg-muted/30 flex flex-col gap-2"
                              >
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                                  <feature.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{feature.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* === LAYER 2: AFTER CONTENT === */}
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300 pointer-events-none"
                      style={{ 
                        opacity: afterOpacity,
                        transform: `scale(${0.96 + afterOpacity * 0.04}) translateY(${(1 - afterOpacity) * 15}px)`,
                        pointerEvents: afterOpacity > 0.5 ? "auto" : "none",
                        visibility: afterOpacity <= 0.01 ? "hidden" : "visible"
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/30 bg-[#142d52] text-white p-6 xl:p-8 shadow-xl flex flex-col justify-center">
                        
                        {/* Background Animated Dots */}
                        <div className="absolute inset-0 saas-grid opacity-35 pointer-events-none" />
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="grid-dot-inverse animate-grid-light-1" />
                          <div className="grid-dot-inverse animate-grid-light-2" />
                          <div className="grid-dot-inverse animate-grid-light-3" />
                        </div>

                        <div className="relative z-10 grid grid-cols-12 gap-8 xl:gap-12 items-center w-full">
                          
                          {/* Left Column: Value Prop & Benefits */}
                          <div className="col-span-5 flex flex-col gap-3.5">
                            <div>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2.5 bg-white/15 text-white rounded-md border border-white/20 shadow-sm backdrop-blur-md">
                                <Star className="w-3.5 h-3.5 fill-white text-white" />
                                Standar Flowdev Teams
                              </span>
                              <h3 className="text-2xl xl:text-3xl font-bold leading-snug text-white">
                                Rekayasa Digital Transparan &amp; Berkinerja Tinggi
                              </h3>
                            </div>
                            
                            <div className="flex flex-col gap-2 mt-0.5">
                              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Keunggulan Bersama Kami:</p>
                              {afterBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 bg-white/20 text-white rounded-full border border-white/40">
                                    <Check className="w-2.5 h-2.5" />
                                  </div>
                                  <span className="text-xs xl:text-sm leading-relaxed text-white/90">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Column: 4 Grid Cards */}
                          <div className="col-span-7 grid grid-cols-2 gap-3.5">
                            {afterFeatures.map((feature, index) => (
                              <div 
                                key={index} 
                                className="p-4 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md flex flex-col gap-2"
                              >
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/15 border border-white/25 text-white">
                                  <feature.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                                  <p className="text-xs text-white/75 leading-relaxed mt-0.5">{feature.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                  </div>
                </div>
              )
            }}
          </Scene>
        </Kino>
      </div>

      {/* MOBILE / TABLET VIEW */}
      <div className="block lg:hidden py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          
          {/* Tab Controls */}
          <div className="flex p-1 bg-muted rounded-xl border border-border/70">
            <button
              onClick={() => setActiveTab("before")}
              className={cn(
                "flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2",
                activeTab === "before"
                  ? "bg-card text-foreground shadow-sm border border-border/80"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <AlertTriangle className={cn("w-4 h-4", activeTab === "before" ? "text-primary" : "text-muted-foreground")} />
              Vendor Web Umum
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={cn(
                "flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2",
                activeTab === "after"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <ShieldCheck className="w-4 h-4" />
              Flowdev Teams
            </button>
          </div>

          {/* Tab Content: Before */}
          {activeTab === "before" && (
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 shadow-md flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-primary/10 text-primary rounded-md border border-primary/20">
                  <AlertTriangle className="w-3.5 h-3.5 text-primary" />
                  Masalah Vendor Web Umum
                </span>
                <h3 className="text-2xl font-bold leading-tight text-foreground">
                  Keterikatan Vendor &amp; Biaya Tak Terduga
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {beforeBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 bg-primary/10 text-primary border border-primary/20 rounded">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {beforeFeatures.map((feature, index) => (
                  <div key={index} className="p-3.5 rounded-xl border border-border/70 bg-muted/40 flex flex-col gap-1.5">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: After */}
          {activeTab === "after" && (
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-[#142d52] text-white p-5 sm:p-7 shadow-xl flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Background Animated Dots for Mobile */}
              <div className="absolute inset-0 saas-grid opacity-35 pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="grid-dot-inverse animate-grid-light-1" />
                <div className="grid-dot-inverse animate-grid-light-2" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-white/15 text-white rounded-md border border-white/20 shadow-sm backdrop-blur-md">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  Standar Flowdev Teams
                </span>
                <h3 className="text-2xl font-bold leading-tight text-white">
                  Rekayasa Transparan &amp; Bebas Keterikatan
                </h3>
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                {afterBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 bg-white/20 text-white rounded-full border border-white/40">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {afterFeatures.map((feature, index) => (
                  <div key={index} className="p-3.5 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md flex flex-col gap-1.5">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/15 border border-white/25 text-white">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                    <p className="text-xs text-white/75">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
