"use client"

import { CheckCircle2, ShieldCheck, Cpu, GitPullRequest, Headphones, MessageSquare } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const valuePillars = [
  {
    icon: MessageSquare,
    title: "Konsultasi Arsitektur Bebas Biaya",
    description: "Diskusi teknis dan pemetaan kebutuhan sistem tanpa komitmen awal."
  },
  {
    icon: ShieldCheck,
    title: "Transparansi Biaya & Estimasi",
    description: "Rincian alokasi anggaran jelas tanpa ada biaya tersembunyi di tengah proyek."
  },
  {
    icon: GitPullRequest,
    title: "Dedicated Technical Lead",
    description: "Setiap proyek dipimpin oleh developer spesialis untuk komunikasi efisien."
  },
  {
    icon: Cpu,
    title: "Clean Code & Handover 100%",
    description: "Arsitektur kode modular, terdokumentasi rapi, dan siap berkembang."
  },
  {
    icon: Headphones,
    title: "Dukungan Pemeliharaan Pasca-Rilis",
    description: "Pendampingan teknis, perbaikan bug, dan panduan pengelolaan sistem."
  },
  {
    icon: CheckCircle2,
    title: "Garansi Kepuasan & SLA Uptime",
    description: "Komitmen hasil kerja sesuai kesepakatan spesifikasi dan standar performa."
  }
]

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-muted/25 border-y border-border/60 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeader
          badge="Standar Kualitas Rekayasa"
          title="Komitmen Eksekusi & Kemitraan Digital Jangka Panjang"
          description="Kami tidak sekadar menulis kode, kami membangun fondasi teknologi yang stabil, aman, dan terukur untuk bisnis Anda."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {valuePillars.map((pillar, index) => (
            <AnimatedSection
              key={pillar.title}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base mb-1.5 leading-snug">
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
