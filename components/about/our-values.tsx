"use client"

import { Heart, Zap, Users, Shield, Sparkles, Trophy } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const values = [
  {
    icon: Heart,
    title: "Passion (Dedikasi)",
    description:
      "Kami bekerja dengan sepenuh hati dan dedikasi tinggi dalam setiap proyek untuk memberikan hasil terbaik bagi klien.",
  },
  {
    icon: Zap,
    title: "Innovation (Inovasi)",
    description:
      "Kami selalu mengadopsi teknologi terbaru dan pendekatan kreatif untuk menciptakan solusi digital yang relevan dan berkelanjutan.",
  },
  {
    icon: Users,
    title: "Collaboration (Kolaborasi)",
    description:
      "Kami percaya kesuksesan terbaik lahir dari kolaborasi erat antara tim kami dan klien sebagai partner jangka panjang.",
  },
  {
    icon: Shield,
    title: "Integrity (Integritas)",
    description:
      "Kejujuran, transparansi, dan tanggung jawab adalah fondasi utama dalam setiap proses kerja dan keputusan kami.",
  },
  {
    icon: Sparkles,
    title: "Excellence (Kualitas)",
    description:
      "Kami berkomitmen menghadirkan kualitas tinggi dalam setiap detail, mulai dari perencanaan, desain, hingga pengembangan.",
  },
  {
    icon: Trophy,
    title: "Results (Hasil Nyata)",
    description:
      "Fokus kami adalah memberikan hasil yang terukur dan berdampak nyata bagi pertumbuhan bisnis klien.",
  },
]

export function OurValues() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Nilai-Nilai Kami"
          title="Prinsip yang Menjadi Fondasi Kami"
          description="Nilai-nilai inti ini membentuk budaya kerja kami dan menjadi dasar dalam setiap keputusan serta solusi digital yang kami ciptakan."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {values.map((value, index) => (
            <AnimatedSection
              key={value.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="text-center flex-1 h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
