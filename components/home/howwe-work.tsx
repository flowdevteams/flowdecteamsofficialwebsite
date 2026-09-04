"use client"

import {
  Globe,
  LayoutDashboard,
  Brain,
  Database,
  Zap,
  ShieldCheck,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  { 
    icon: Globe, 
    title: "Website & Landing Page Konversi", 
    desc: "Desain berkecepatan tinggi yang dirancang khusus untuk mengubah pengunjung menjadi pelanggan aktif bisnis Anda." 
  },
  { 
    icon: LayoutDashboard, 
    title: "Aplikasi Web & Sistem Bisnis Kustom", 
    desc: "Sistem operasional terpadu (ERP/CRM/SaaS) yang dibangun mengikuti alur kerja nyata perusahaan tanpa biaya lisensi per user." 
  },
  { 
    icon: Brain, 
    title: "Otomasi Alur Kerja & Integrasi AI", 
    desc: "Memangkas pekerjaan manual yang repetitif dan mempercepat respon layanan menggunakan asisten cerdas berbasis AI/ML." 
  },
  { 
    icon: Database, 
    title: "Integrasi Database & Pembayaran", 
    desc: "Terhubung mulus ke payment gateway otomatis, API WhatsApp bisnis, dan sinkronisasi data real-time antar divisi." 
  },
  { 
    icon: Zap, 
    title: "Akses Super Cepat & Ramah Mobile", 
    desc: "Dioptimasi ringan dan responsif sempurna di semua layar HP pengguna Indonesia untuk meminimalkan rasio bounce rate." 
  },
  { 
    icon: ShieldCheck, 
    title: "Pendampingan & Garansi Performa", 
    desc: "Bimbingan operasional lengkap, pemantauan sistem, dan dukungan teknis responsif saat bisnis Anda berjalan." 
  },
]

export function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-14 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 saas-grid opacity-35 dark:opacity-15" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="LAYANAN & SPESIALISASI KAMI"
          title="Layanan Jasa Pembuatan Website, Aplikasi, & Sistem Bisnis"
          description="Dari Website Profil Terpercaya, Aplikasi Web Kustom, Hingga Otomasi Kerja Harian Semua Dirancang Siap Pakai Untuk Kemajuan Bisnis Anda."
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Central Timeline Line (Desktop Only) */}
          <div className="absolute left-1/2 inset-y-0 hidden w-px -translate-x-1/2 bg-primary/20 md:block">
            {/* Animated Arrow Light */}
            <div className="absolute left-1/2 top-0 h-[16.66%] w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_15px_3px_var(--primary)] animate-timeline-light" />
          </div>

          <div className="relative z-10 flex flex-col gap-6 md:gap-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <AnimatedSection key={step.title} animation={isLeft ? "fade-in-right" : "fade-in-left"} delay={index * 100}>
                  <div className="group relative flex w-full items-center md:min-h-44 lg:min-h-48 md:py-3">
                    
                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full items-center">
                      {isLeft ? (
                        <>
                          <div className="flex w-1/2 items-center justify-end pr-10 lg:pr-14">
                            <div 
                              className="animate-sync-card flex w-full max-w-[420px] lg:max-w-[450px] items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:!border-primary/50 hover:!shadow-lg"
                              style={{ animationDelay: `-${6 - index}s` }}
                            >
                              <div 
                                className="animate-sync-icon-box flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-xs mt-0.5"
                                style={{ animationDelay: `-${6 - index}s` }}
                              >
                                <step.icon 
                                  className="animate-sync-icon h-6 w-6 transition-transform group-hover:scale-110" 
                                  style={{ animationDelay: `-${6 - index}s` }}
                                />
                              </div>
                              <div className="flex flex-col text-left">
                                <span 
                                  className="animate-sync-text-sub mb-1 font-mono text-xs font-bold uppercase tracking-wider text-primary"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  SOLUSI 0{index + 1}
                                </span>
                                <h3 
                                  className="animate-sync-text-main text-base lg:text-lg font-bold font-sans tracking-tight text-foreground leading-snug"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.title}
                                </h3>
                                <p 
                                  className="animate-sync-text-desc text-[13px] lg:text-sm text-foreground/80 leading-relaxed mt-1"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2" />
                        </>
                      ) : (
                        <>
                          <div className="w-1/2" />
                          <div className="flex w-1/2 items-center justify-start pl-10 lg:pl-14">
                            <div 
                              className="animate-sync-card flex w-full max-w-[420px] lg:max-w-[450px] items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:!border-primary/50 hover:!shadow-lg"
                              style={{ animationDelay: `-${6 - index}s` }}
                            >
                              <div 
                                className="animate-sync-icon-box flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-xs mt-0.5"
                                style={{ animationDelay: `-${6 - index}s` }}
                              >
                                <step.icon 
                                  className="animate-sync-icon h-6 w-6 transition-transform group-hover:scale-110" 
                                  style={{ animationDelay: `-${6 - index}s` }}
                                />
                              </div>
                              <div className="flex flex-col text-left">
                                <span 
                                  className="animate-sync-text-sub mb-1 font-mono text-xs font-bold uppercase tracking-wider text-primary"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  SOLUSI 0{index + 1}
                                </span>
                                <h3 
                                  className="animate-sync-text-main text-base lg:text-lg font-bold font-sans tracking-tight text-foreground leading-snug"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.title}
                                </h3>
                                <p 
                                  className="animate-sync-text-desc text-[13px] lg:text-sm text-foreground/80 leading-relaxed mt-1"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Mobile Layout (Stacked) */}
                    <div 
                      className="animate-sync-card flex md:hidden w-full items-start gap-3.5 sm:gap-4 rounded-xl border border-border/90 bg-card p-4 sm:p-5 shadow-xs"
                      style={{ animationDelay: `-${6 - index}s` }}
                    >
                      <div 
                        className="animate-sync-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary mt-0.5"
                        style={{ animationDelay: `-${6 - index}s` }}
                      >
                        <step.icon className="animate-sync-icon h-6 w-6" style={{ animationDelay: `-${6 - index}s` }} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span 
                          className="animate-sync-text-sub font-mono text-xs font-bold uppercase tracking-wider text-primary mb-0.5"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          SOLUSI 0{index + 1}
                        </span>
                        <h3 
                          className="animate-sync-text-main text-base font-bold font-sans tracking-tight text-foreground leading-snug"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="animate-sync-text-desc text-[13px] text-foreground/80 leading-relaxed mt-1"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection animation="fade-in-up" delay={700}>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/[0.03] px-6 py-3.5 shadow-xs">
              <span className="text-xs font-semibold text-foreground">
                Setiap fase divalidasi bersama Anda sebelum melangkah ke tahap selanjutnya.
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </section>
  )
}
