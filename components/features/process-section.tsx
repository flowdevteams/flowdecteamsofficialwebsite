"use client"

import { MessageSquare, Pencil, Code, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Analisis & Diskusi",
    description:
      "Kami memulai dengan memahami bisnis, tujuan, dan kebutuhan Anda melalui diskusi mendalam dan analisis yang terstruktur.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Perancangan Desain",
    description:
      "Tim kami menyusun wireframe dan desain visual yang merepresentasikan solusi digital sesuai identitas dan kebutuhan bisnis Anda.",
  },
  {
    number: "03",
    icon: Code,
    title: "Pengembangan Sistem",
    description:
      "Developer berpengalaman kami membangun sistem menggunakan teknologi modern dengan standar performa dan keamanan terbaik.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Peluncuran & Dukungan",
    description:
      "Setelah melalui pengujian menyeluruh, proyek diluncurkan dan didukung dengan maintenance serta support berkelanjutan.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Proses Kerja"
          title="Alur Kerja Terstruktur & Efisien"
          description="Proses kerja kami dirancang secara sistematis untuk menghasilkan solusi digital berkualitas, tepat waktu, dan sesuai kebutuhan bisnis Anda."
        />

        <div className="relative mt-16 pointer-events-none">
          {/* Horizontal connector line for desktop */}
          <div className="hidden lg:block absolute top-[72px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Vertical connector line for tablet */}
          <div className="hidden md:block lg:hidden absolute top-12 bottom-12 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pointer-events-auto">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Step Number Box */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">
                        {step.number}
                      </span>
                      <step.icon className="h-6 w-6 text-primary mx-auto mt-1" />
                    </div>

                    {/* Connector dots */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary -translate-y-1/2" />
                    )}
                    {index > 0 && (
                      <div className="hidden lg:block absolute top-1/2 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary -translate-y-1/2" />
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
