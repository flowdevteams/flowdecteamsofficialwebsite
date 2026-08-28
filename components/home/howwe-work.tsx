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
  { icon: MessageSquare, title: "Konsultasi", align: "left" },
  { icon: ClipboardList, title: "Perencanaan", align: "right" },
  { icon: Code2, title: "Development", align: "left" },
  { icon: Bug, title: "Testing", align: "right" },
  { icon: Rocket, title: "Launch", align: "left" },
  { icon: Headphones, title: "Support", align: "right" },
]

export function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 saas-grid opacity-35 dark:opacity-15" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Workflow"
          title="Bagaimana Flowdev Teams Bekerja"
          description="Alur kerja modern, terstruktur, dan berulang untuk memastikan setiap proyek berjalan presisi."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
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
                          <div className="flex w-1/2 items-center justify-end pr-10 lg:pr-16">
                            {/* Card Content [Icon] [Text] */}
                            <div 
                              className="animate-sync-card flex w-72 lg:w-80 items-center gap-5 rounded-2xl border border-border/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:!border-primary/30 hover:!shadow-xl hover:!shadow-primary/10"
                              style={{ animationDelay: `-${6 - index}s` }}
                            >
                              <div 
                                className="animate-sync-icon-box flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border shadow-inner"
                                style={{ animationDelay: `-${6 - index}s` }}
                              >
                                <step.icon 
                                  className="animate-sync-icon h-6 w-6 transition-transform group-hover:scale-110" 
                                  style={{ animationDelay: `-${6 - index}s` }}
                                />
                              </div>
                              <div className="flex flex-col text-left">
                                <span 
                                  className="animate-sync-text-sub mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  PROCESS 0{index + 1}
                                </span>
                                <h3 
                                  className="animate-sync-text-main text-lg font-semibold tracking-tight"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2" />
                        </>
                      ) : (
                        <>
                          <div className="w-1/2" />
                          <div className="flex w-1/2 items-center justify-start pl-10 lg:pl-16">
                            {/* Card Content [Text] [Icon] */}
                            <div 
                              className="animate-sync-card flex w-72 lg:w-80 items-center justify-between gap-5 rounded-2xl border border-border/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:!border-primary/30 hover:!shadow-xl hover:!shadow-primary/10"
                              style={{ animationDelay: `-${6 - index}s` }}
                            >
                              <div className="flex flex-col text-left">
                                <span 
                                  className="animate-sync-text-sub mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  PROCESS 0{index + 1}
                                </span>
                                <h3 
                                  className="animate-sync-text-main text-lg font-semibold tracking-tight"
                                  style={{ animationDelay: `-${6 - index}s` }}
                                >
                                  {step.title}
                                </h3>
                              </div>
                              <div 
                                className="animate-sync-icon-box flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border shadow-inner"
                                style={{ animationDelay: `-${6 - index}s` }}
                              >
                                <step.icon 
                                  className="animate-sync-icon h-6 w-6 transition-transform group-hover:scale-110" 
                                  style={{ animationDelay: `-${6 - index}s` }}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Mobile Layout (Stacked) */}
                    <div 
                      className="animate-sync-card flex md:hidden w-full items-center gap-5 rounded-xl border border-border/70 p-5 transition-all hover:!border-primary/30"
                      style={{ animationDelay: `-${6 - index}s` }}
                    >
                      <div 
                        className="animate-sync-icon-box flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border shadow-inner"
                        style={{ animationDelay: `-${6 - index}s` }}
                      >
                        <step.icon 
                          className="animate-sync-icon h-6 w-6" 
                          style={{ animationDelay: `-${6 - index}s` }}
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <span 
                          className="animate-sync-text-sub mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          PROCESS 0{index + 1}
                        </span>
                        <h3 
                          className="animate-sync-text-main text-lg font-semibold tracking-tight"
                          style={{ animationDelay: `-${6 - index}s` }}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection animation="fade-in-up" delay={800}>
          <div className="mt-12 text-center">
            <div className="inline-block rounded-xl border border-primary/15 bg-card/80 px-6 py-4 shadow-sm backdrop-blur-md">
              <p className="text-muted-foreground max-w-md">
                Flowdev Teams bekerja dengan presisi tinggi untuk hasil yang stabil dan scalable.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </section>
  )
}
