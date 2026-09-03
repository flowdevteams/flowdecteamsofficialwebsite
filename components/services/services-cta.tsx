"use client"

import { ShieldCheck, Cpu, Headphones, CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const valuePillars = [
  {
    icon: ShieldCheck,
    title: "100% Hak Milik Source Code",
    description: "Seluruh kode sumber, arsitektur database, dan lisensi aset diserahkan penuh kepada Anda tanpa biaya royalti bulanan."
  },
  {
    icon: Cpu,
    title: "Next.js 16 Native & Clean Code",
    description: "Diprogram dengan standar performa 95+ PageSpeed, bebas bloatware, dan siap dikembangkan lebih lanjut oleh tim internal Anda."
  },
  {
    icon: CheckCircle2,
    title: "Skema Pembayaran Milestone",
    description: "Pembayaran terbagi dalam beberapa termin berbasis validasi progres nyata demi keamanan dan transparansi investasi Anda."
  },
  {
    icon: Headphones,
    title: "Garansi & SLA Pasca-Peluncuran",
    description: "Pendampingan teknis intensif, perbaikan bug gratis, dan monitoring uptime server pasca-peluncuran sistem."
  }
]

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-card border-t border-border/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="JAMINAN REKAYASA KAMI"
          title="Standar Kualitas & Komitmen Kemitraan Jangka Panjang"
          description="Kami membangun sistem teknologi yang stabil, cepat, dan terukur untuk mendukung percepatan bisnis Anda."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {valuePillars.map((pillar, index) => (
            <AnimatedSection
              key={pillar.title}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="h-full p-6 rounded-2xl bg-background border border-border/80 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
