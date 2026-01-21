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
          title="Cara Flowdev Teams Bekerja"
          description="Alur kerja modern, terstruktur, dan berulang untuk memastikan setiap proyek berjalan presisi."
        />

        {/* Timeline Wrapper */}
        <div className="relative mt-32 max-w-5xl mx-auto">
          {/* ================= SVG FLOW LINE + DOT ================= */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[1400px] z-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Glow filter */}
                <filter id="glow-dot" x="-200%" y="-200%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="8" result="blurred"/>
                  <feMerge>
                    <feMergeNode in="blurred"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Gradient line */}
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Background soft line */}
              <path
                d="
                  M 250 0
                  C 250 80, 750 160, 750 240
                  C 750 320, 250 400, 250 480
                  C 250 560, 750 640, 750 720
                  C 750 800, 250 880, 250 960
                  C 250 1040, 750 1120, 750 1200
                "
                stroke="url(#lineGradient)"
                strokeWidth="20"
                fill="none"
                opacity="0.15"
                strokeLinecap="round"
              />

              {/* Main animated path */}
              <path
                id="workflow-path"
                d="
                  M 250 0
                  C 250 80, 750 160, 750 240
                  C 750 320, 250 400, 250 480
                  C 250 560, 750 640, 750 720
                  C 750 800, 250 880, 250 960
                  C 250 1040, 750 1120, 750 1200
                "
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeOpacity="0.6"
                strokeLinecap="round"
                strokeDasharray="12 8"
                className="animate-dash"
              />

              {/* Dot bergerak dengan glow */}
              <g filter="url(#glow-dot)">
                <circle r="16" fill="hsl(var(--primary))" opacity="0.25">
                  <animateMotion dur="25s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#workflow-path" />
                  </animateMotion>
                </circle>
                <circle r="10" fill="hsl(var(--primary))" opacity="0.6">
                  <animateMotion dur="25s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#workflow-path" />
                  </animateMotion>
                </circle>
                <circle r="5" fill="hsl(var(--primary))">
                  <animateMotion dur="25s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#workflow-path" />
                  </animateMotion>
                </circle>
              </g>
            </svg>
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
                      {/* Glow Shadow */}
                      <div className="absolute -inset-10 bg-primary/30 blur-[45px] opacity-0 group-hover:opacity-100 transition duration-700 rounded-full" />
                      
                      {/* Icon Node */}
                      <div className="relative w-20 h-20 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center shadow-2xl group-hover:border-primary/60 transition-all duration-500 z-10">
                        <step.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>

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
