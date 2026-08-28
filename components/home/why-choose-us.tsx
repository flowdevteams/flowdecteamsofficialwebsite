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
  ShieldCheck
} from "lucide-react"
import { Kino, Scene } from "react-kino"
import { cn } from "@/lib/utils"

// KONTEN AFTER (BERSAMA FLOWDEV TEAMS)
const afterFeatures = [
  {
    icon: Users,
    title: "Tim Profesional & Berpengalaman",
    description: "Didukung developer & desainer berpengalaman menangani website skala bisnis.",
  },
  {
    icon: Rocket,
    title: "Pengerjaan Cepat & Terstruktur",
    description: "Metode agile terukur, selesai tepat waktu tanpa mengorbankan kualitas.",
  },
  {
    icon: Award,
    title: "Kualitas & Performa Terjamin",
    description: "Testing ketat untuk performa cepat, keamanan tinggi, dan SEO optimal.",
  },
  {
    icon: Clock,
    title: "Support & Maintenance Aktif",
    description: "Dukungan teknis berkelanjutan memastikan website selalu prima 24/7.",
  },
]

const afterBenefits = [
  "Website dirancang khusus sesuai identitas & tujuan bisnis",
  "Biaya transparan, garansi tanpa biaya tak terduga",
  "Pelaporan progres rutin & komunikasi langsung dengan tim",
  "Arsitektur modern yang siap berkembang jangka panjang",
  "Struktur SEO & kecepatan tinggi ramah mesin pencari",
]

// KONTEN BEFORE (TANPA WEBSITE RESMI / KONVENSIONAL)
const beforeFeatures = [
  {
    icon: SearchX,
    title: "Sulit Ditemukan Pelanggan",
    description: "Calon pembeli mencari di Google, bisnis tanpa website kehilangan ribuan prospek.",
  },
  {
    icon: Briefcase,
    title: "Kredibilitas Diragukan",
    description: "Konsumen ragu bertransaksi karena tidak menemukan profil resmi perusahaan.",
  },
  {
    icon: AlertTriangle,
    title: "Operasional Serba Manual",
    description: "Melayani tanya-jawab & katalog manual yang menyita banyak waktu berharga.",
  },
  {
    icon: TrendingDown,
    title: "Jangkauan Sangat Terbatas",
    description: "Hanya mengandalkan lokasi fisik & mulut ke mulut yang lambat berkembang.",
  },
]

const beforeBenefits = [
  "Kehilangan calon pembeli yang mencari solusi di internet",
  "Kalah bersaing dengan kompetitor yang sudah serba digital",
  "Tutup saat jam kerja selesai, kehilangan peluang di malam hari",
  "Tidak memiliki tempat resmi untuk menampilkan portofolio produk",
  "Sulit meyakinkan klien besar karena tidak ada profil resmi",
]

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before")

  return (
    <section className="bg-background relative border-b border-border/60">
      {/* DESKTOP VIEW: Cinematic Scroll-Driven Transition (react-kino) */}
      <div className="hidden lg:block">
        <Kino>
          <Scene duration="240vh">
            {(progress) => {
              // Hitung transisi yang halus antara before dan after
              // 0.0 - 0.40 : Before murni (opacity 1)
              // 0.40 - 0.60 : Transisi crossfade halus
              // 0.60 - 1.00 : After murni (opacity 1)
              const clamped = Math.max(0, Math.min(1, progress))
              
              // Progress ratio: 0 (sebelum) -> 1 (setelah)
              const beforeOpacity = clamped <= 0.35 ? 1 : Math.max(0, (0.55 - clamped) / 0.20)
              const afterOpacity = clamped >= 0.65 ? 1 : Math.max(0, (clamped - 0.45) / 0.20)
              const isAfterActive = clamped >= 0.5

              return (
                <div className="relative w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center pt-16 lg:pt-20 pb-4 px-6 xl:px-12 gap-3 xl:gap-4">
                  
                  {/* Floating Controller / Status Bar (Rapat dengan card di bawahnya) */}
                  <div className="relative z-30 max-w-4xl mx-auto w-full flex items-center justify-between gap-4 bg-card/85 dark:bg-card/75 backdrop-blur-md border border-border/80 rounded-full px-5 py-2 shadow-sm">
                    {/* State Indicator */}
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all duration-300",
                        isAfterActive ? "bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "bg-primary/50"
                      )} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {isAfterActive ? "Transformasi Digital: Berhasil" : "Kondisi: Bisnis Konvensional"}
                      </span>
                    </div>

                    {/* Interactive Switch Pill & Progress */}
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className={cn("font-medium transition-colors", !isAfterActive && "text-foreground font-bold")}>
                          Tanpa Website
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                        <span className={cn("font-medium transition-colors", isAfterActive && "text-primary font-bold")}>
                          Dengan Flowdev
                        </span>
                      </div>
                      
                      {/* Mini Scroll Progress Bar */}
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden border border-border/50">
                        <div 
                          className="h-full bg-primary transition-all duration-150 ease-out rounded-full"
                          style={{ width: `${Math.round(clamped * 100)}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground min-w-[32px] text-right">
                        {Math.round(clamped * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* MAIN COMPARISON CONTAINER */}
                  <div className="relative w-full max-w-7xl h-[520px] xl:h-[540px] flex items-center justify-center">
                    
                    {/* === LAYER 1: BEFORE CONTENT (Tanpa Website) === */}
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300 pointer-events-none"
                      style={{ 
                        opacity: beforeOpacity,
                        transform: `scale(${0.96 + beforeOpacity * 0.04}) translateY(${(1 - beforeOpacity) * -15}px)`,
                        pointerEvents: beforeOpacity > 0.5 ? "auto" : "none",
                        visibility: beforeOpacity <= 0.01 ? "hidden" : "visible"
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/80 bg-card/70 backdrop-blur-sm p-6 xl:p-8 shadow-md flex items-center">
                        
                        {/* Animated Grid Dots for Before State */}
                        <div className="absolute inset-0 saas-grid opacity-25 dark:opacity-15 pointer-events-none" />
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="grid-dot animate-grid-light-1 opacity-40" />
                          <div className="grid-dot animate-grid-light-2 opacity-40" />
                        </div>

                        <div className="relative z-10 grid grid-cols-12 gap-8 xl:gap-12 items-center w-full">
                          
                          {/* Left Column: Headline & Pain Points */}
                          <div className="col-span-5 flex flex-col gap-3.5">
                            <div>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2.5 bg-primary/10 text-primary rounded-md border border-primary/20">
                                <AlertTriangle className="w-3.5 h-3.5 text-primary" />
                                Kondisi Bisnis Saat Ini
                              </span>
                              <h3 className="text-2xl xl:text-3xl font-bold leading-snug text-foreground">
                                Tantangan Nyata Bisnis Tanpa Website Resmi
                              </h3>
                            </div>
                            
                            <div className="flex flex-col gap-2 mt-0.5">
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kendala yang sering dialami:</p>
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

                          {/* Right Column: 4 Pain Point Cards */}
                          <div className="col-span-7 grid grid-cols-2 gap-3.5">
                            {beforeFeatures.map((feature, index) => (
                              <div 
                                key={index} 
                                className="flex flex-col gap-2 p-4 rounded-xl border border-border/70 bg-background/50 hover:bg-background/80 transition-colors"
                              >
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                                  <feature.icon className="w-4 h-4" />
                                </div>
                                <h4 className="text-sm xl:text-base font-semibold tracking-tight text-foreground">{feature.title}</h4>
                                <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* === LAYER 2: AFTER CONTENT (Dengan Flowdev Teams) === */}
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300 pointer-events-none"
                      style={{ 
                        opacity: afterOpacity,
                        transform: `scale(${0.96 + afterOpacity * 0.04}) translateY(${(1 - afterOpacity) * 15}px)`,
                        pointerEvents: afterOpacity > 0.5 ? "auto" : "none",
                        visibility: afterOpacity <= 0.01 ? "hidden" : "visible"
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-[oklch(0.24_0.12_259)] to-[oklch(0.18_0.10_260)] text-white p-6 xl:p-8 shadow-2xl flex items-center">
                        
                        {/* Background Decorative Glow, Grid & Animated Base Dots */}
                        <div className="absolute inset-0 saas-grid opacity-35 pointer-events-none" />
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="grid-dot-inverse animate-grid-light-1" />
                          <div className="grid-dot-inverse animate-grid-light-2" />
                          <div className="grid-dot-inverse animate-grid-light-3" />
                        </div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-12 gap-8 xl:gap-12 items-center w-full">
                          
                          {/* Left Column: Value Prop & Benefits */}
                          <div className="col-span-5 flex flex-col gap-3.5">
                            <div>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2.5 bg-white/15 text-white rounded-md border border-white/20 shadow-sm backdrop-blur-md">
                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                Solusi Flowdev Teams
                              </span>
                              <h3 className="text-2xl xl:text-3xl font-bold leading-snug text-white">
                                Partner Digital yang Fokus pada Pertumbuhan Nyata
                              </h3>
                            </div>
                            
                            <div className="flex flex-col gap-2 mt-0.5">
                              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Keunggulan Solusi Kami:</p>
                              {afterBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                  <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 bg-white/20 text-white rounded-full border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                    <Check className="w-2.5 h-2.5" />
                                  </div>
                                  <span className="text-xs xl:text-sm leading-relaxed text-white/90 font-normal">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Column: 4 Solution Feature Cards */}
                          <div className="col-span-7 grid grid-cols-2 gap-3.5">
                            {afterFeatures.map((feature, index) => (
                              <div 
                                key={index} 
                                className="group flex flex-col gap-2 p-4 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15 hover:-translate-y-0.5"
                              >
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/15 border border-white/25 text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                                  <feature.icon className="w-4 h-4" />
                                </div>
                                <h4 className="text-sm xl:text-base font-semibold tracking-tight text-white">{feature.title}</h4>
                                <p className="text-xs leading-relaxed text-white/75">{feature.description}</p>
                              </div>
                            ))}
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

      {/* MOBILE & TABLET VIEW: Responsive Interactive Switcher (< lg) */}
      <div className="block lg:hidden py-14 px-4 sm:px-6">
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
              Tanpa Website
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
              Dengan Flowdev
            </button>
          </div>

          {/* Tab Content: Before */}
          {activeTab === "before" && (
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 shadow-md flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-primary/10 text-primary rounded-md border border-primary/20">
                  <AlertTriangle className="w-3.5 h-3.5 text-primary" />
                  Kondisi Bisnis Konvensional
                </span>
                <h3 className="text-2xl font-bold leading-tight text-foreground">
                  Tantangan Bisnis Tanpa Website
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
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-[oklch(0.24_0.12_259)] to-[oklch(0.18_0.10_260)] text-white p-5 sm:p-7 shadow-xl flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Background Animated Dots for Mobile */}
              <div className="absolute inset-0 saas-grid opacity-35 pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="grid-dot-inverse animate-grid-light-1" />
                <div className="grid-dot-inverse animate-grid-light-2" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-white/15 text-white rounded-md border border-white/20 shadow-sm backdrop-blur-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  Solusi Flowdev Teams
                </span>
                <h3 className="text-2xl font-bold leading-tight text-white">
                  Partner Digital Fokus Hasil Nyata
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
