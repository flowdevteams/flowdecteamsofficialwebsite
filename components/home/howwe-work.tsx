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
import { cn } from "@/lib/utils"

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
    <section className="relative py-28 lg:py-36 overflow-hidden bg-background">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Workflow"
          title="Bagaimana Flowdev Teams Bekerja"
          description="Alur kerja modern, terstruktur, dan berulang untuk memastikan setiap proyek berjalan presisi."
        />

        {/* Timeline Wrapper */}
        <div className="relative mt-32 max-w-5xl mx-auto">
          {/* Vertical Glow Spine */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent blur-[1px]" />
          </div>


          {/* ================= STEPS ================= */}
          <div className="relative z-10 space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} animation="fade-in-up" delay={index * 150}>
                <div
                  className={cn(
                    "relative flex items-center w-full",
                    step.align === "right" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className="w-1/2 flex justify-center items-center">
                    <div className="relative group">
                      {/* Ambient Glow */}
                      <div className="absolute -inset-8 bg-primary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition duration-700 rounded-full" />

                      {/* Core Node */}
                      <div className="relative w-20 h-20 rounded-2xl bg-background border border-primary/20 flex items-center justify-center shadow-xl backdrop-blur-md group-hover:scale-110 transition-all duration-500 z-10">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>

                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-2xl border border-primary/30 animate-pulse opacity-40" />

                      {/* Label */}
                      <div
                        className={cn(
                          "absolute top-1/2 -translate-y-1/2 whitespace-nowrap",
                          step.align === "right"
                            ? "right-full mr-12 text-right"
                            : "left-full ml-12 text-left"
                        )}
                      >
                        <span className="text-primary/50 font-mono text-xs font-bold tracking-widest block mb-1">
                          PROCESS 0{index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Statement Box */}
        <AnimatedSection animation="fade-in-up" delay={800}>
          <div className="mt-40 text-center">
            <div className="inline-block px-8 py-4 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-md">
              <p className="text-muted-foreground max-w-md">
                Flowdev Teams bekerja dengan presisi tinggi untuk hasil yang stabil dan scalable.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        .animate-dash {
          stroke-dashoffset: 1000;
          animation: dash-flow 25s linear infinite;
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}
