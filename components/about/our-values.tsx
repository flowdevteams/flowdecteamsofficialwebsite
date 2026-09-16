"use client"

import { ShieldCheck, Zap, Layers, Headphones } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Transparansi Total",
    description: "Estimasi biaya di muka tanpa tagihan tersembunyi. Source code, database, dan aset digital diserahkan 100% tanpa royalti lisensi.",
  },
  {
    icon: Zap,
    title: "Kecepatan & Rekayasa Presisi",
    description: "Dibangun dengan Next.js 16 native tanpa bloatware. Menghasilkan waktu muat di bawah 1.5 detik demi efisiensi iklan dan SEO optimal.",
  },
  {
    icon: Layers,
    title: "Kesiapan Skala & Integrasi AI",
    description: "Arsitektur kode modular yang siap bertumbuh bersama bisnis Anda—dari landing page ke sistem SaaS, Payment Gateway, hingga modul AI.",
  },
  {
    icon: Headphones,
    title: "Dukungan Teknis Langsung & SLA",
    description: "Komunikasi langsung dengan developer inti. Pemantauan stabilitas server, backup data berkala, dan garansi perbaikan pasca-peluncuran.",
  },
]

export function OurValues() {
  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <SectionHeader
          badge="STANDAR KERJA KAMI"
          title="Prinsip Rekayasa yang Memberi Nilai Nyata"
          description="Empat Pilar Utama Yang Mendasari Setiap Baris Kode Dan Keputusan Teknis Demi Kesuksesan Investasi Digital Anda."
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-16">
          {coreValues.map((value, index) => (
            <AnimatedSection
              key={value.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="text-left flex flex-col h-full p-3 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-colors shadow-xs">
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-3 lg:mb-5 border border-primary/20">
                  <value.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-foreground mb-1 sm:mb-2 line-clamp-2">
                  {value.title}
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
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
