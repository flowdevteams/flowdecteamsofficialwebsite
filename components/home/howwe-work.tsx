"use client"

import {
  MessageSquare,
  ClipboardList,
  Code2,
  Bug,
  Rocket,
  Headphones,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  { 
    icon: MessageSquare, 
    title: "Konsultasi & Analisis", 
    desc: "Pemetaan target bisnis, spesifikasi teknis, dan alokasi anggaran tanpa komitmen awal." 
  },
  { 
    icon: ClipboardList, 
    title: "Arsitektur & UI/UX", 
    desc: "Perancangan alur sistem, wireframe antarmuka modern, dan roadmap kerja terukur." 
  },
  { 
    icon: Code2, 
    title: "Rekayasa Kode Bersih", 
    desc: "Pengembangan full-stack native (Next.js 16/TypeScript/Python) bebas bloatware." 
  },
  { 
    icon: Bug, 
    title: "Quality Assurance & Uji Cepat", 
    desc: "Audit performa Google PageSpeed 95+, uji responsif multi-device, dan security audit." 
  },
  { 
    icon: Rocket, 
    title: "Deployment & Handover 100%", 
    desc: "Peluncuran ke cloud hosting, setup domain, dan penyerahan penuh source code repository." 
  },
  { 
    icon: Headphones, 
    title: "Pemeliharaan & Garansi SLA", 
    desc: "Pendampingan pasca-rilis, backup berkala, dan pemantauan stabilitas server 24/7." 
  },
]

export function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 saas-grid opacity-35 dark:opacity-15" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ALUR KERJA TERSTRUKTUR"
          title="Metodologi Eksekusi yang Cepat, Transparan, & Terukur"
          description="Alur kerja rekayasa modern yang memastikan setiap proyek selesai tepat waktu, sesuai anggaran, dan memenuhi standar kualitas tertinggi."
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
                  <div className="group relative flex w-full items-center md:h-36 lg:h-40">
                    
                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full items-center">
                      {isLeft ? (
                        <>
                          <div className="flex w-1/2 items-center justify-end pr-10 lg:pr-14">
                            <div 
                              className="animate-sync-card flex w-80 lg:w-96 items-center gap-4 rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:!border-primary/40 hover:!shadow-lg"
                              style={{ animationDelay: `-${6 - index}s` }}
                            >
                              <div 
                                className="animate-sync-icon-box flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-xs"
                                style={{ animationDelay: `-${6 - index}s` }}
                              >
                                <step.icon 
                                  className="animate-sync-icon h-5 w-5 transition-transform group-hover:scale-110" 
                                  style={{ animationDelay: `-${6 - index}s` }}
                                />
                              </div>
                              <div className="flex flex-col text-left">
                                <span 
                                  className="animate-sync-text-sub mb-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-primary"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  FASE 0{index + 1}
                                </span>
                                <h3 
                                  className="animate-sync-text-main text-sm lg:text-base font-bold tracking-tight text-foreground"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.title}
                                </h3>
                                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
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
                              className="animate-sync-card flex w-80 lg:w-96 items-center gap-4 rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:!border-primary/40 hover:!shadow-lg"
                              style={{ animationDelay: `-${6 - index}s` }}
                            >
                              <div 
                                className="animate-sync-icon-box flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-xs"
                                style={{ animationDelay: `-${6 - index}s` }}
                              >
                                <step.icon 
                                  className="animate-sync-icon h-5 w-5 transition-transform group-hover:scale-110" 
                                  style={{ animationDelay: `-${6 - index}s` }}
                                />
                              </div>
                              <div className="flex flex-col text-left">
                                <span 
                                  className="animate-sync-text-sub mb-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-primary"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  FASE 0{index + 1}
                                </span>
                                <h3 
                                  className="animate-sync-text-main text-sm lg:text-base font-bold tracking-tight text-foreground"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.title}
                                </h3>
                                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
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
                      className="animate-sync-card flex md:hidden w-full items-center gap-4 rounded-xl border border-border/80 bg-card p-4 shadow-xs"
                      style={{ animationDelay: `-${6 - index}s` }}
                    >
                      <div 
                        className="animate-sync-icon-box flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary"
                        style={{ animationDelay: `-${6 - index}s` }}
                      >
                        <step.icon className="animate-sync-icon h-5 w-5" style={{ animationDelay: `-${6 - index}s` }} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span 
                          className="animate-sync-text-sub font-mono text-[10px] font-bold uppercase tracking-widest text-primary"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          FASE 0{index + 1}
                        </span>
                        <h3 
                          className="animate-sync-text-main text-sm font-bold tracking-tight text-foreground"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
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
