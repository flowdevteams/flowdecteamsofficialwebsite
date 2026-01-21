"use client"

import { MessageSquare, ClipboardList, Code2, Bug, Rocket, Headphones } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    icon: MessageSquare,
    title: "Konsultasi & Analisis Kebutuhan",
    description:
      "Kami memulai dengan sesi konsultasi untuk memahami tujuan bisnis, target audiens, dan kebutuhan teknis Anda. Tahap ini memastikan solusi website atau aplikasi yang kami bangun benar-benar relevan dan tepat sasaran.",
  },
  {
    icon: ClipboardList,
    title: "Perencanaan & Strategi Digital",
    description:
      "Tim kami menyusun perencanaan teknis, arsitektur sistem, serta strategi UI/UX dan SEO. Semua dirancang agar website dan aplikasi memiliki performa optimal, mudah dikembangkan, dan siap bersaing di mesin pencari.",
  },
  {
    icon: Code2,
    title: "Desain & Pengembangan",
    description:
      "Kami mengembangkan website atau aplikasi menggunakan teknologi modern, aman, dan scalable. Setiap fitur dibangun secara custom sesuai kebutuhan bisnis Anda, bukan menggunakan template instan.",
  },
  {
    icon: Bug,
    title: "Quality Assurance & Testing",
    description:
      "Sebelum rilis, sistem melalui tahap pengujian menyeluruh untuk memastikan keamanan, kecepatan, kompatibilitas perangkat, serta pengalaman pengguna yang optimal.",
  },
  {
    icon: Rocket,
    title: "Peluncuran & Go Live",
    description:
      "Website atau aplikasi Anda kami luncurkan secara profesional. Kami pastikan semuanya berjalan stabil, SEO-ready, dan siap digunakan oleh pelanggan Anda.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support Berkelanjutan",
    description:
      "Setelah peluncuran, Flowdev Teams tetap mendampingi melalui layanan maintenance, update sistem, dan dukungan teknis agar solusi digital Anda terus berkembang.",
  },
]

export function HowWeWorkSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badge="Proses Kerja Kami"
          title="Bagaimana Flowdev Teams Melayani Klien"
          description="Flowdev Teams memiliki proses kerja yang terstruktur dan transparan, mulai dari konsultasi hingga maintenance, untuk memastikan setiap website dan aplikasi bisnis dibangun secara profesional dan berkelanjutan."
        />

        {/* Steps */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">

                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
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

        {/* Bottom Trust Text */}
        <AnimatedSection animation="fade-in-up" delay={700}>
          <div className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-muted-foreground">
              Dengan alur kerja yang jelas dan komunikasi yang transparan,
              Flowdev Teams memastikan setiap klien mendapatkan solusi website
              dan aplikasi yang tidak hanya bagus secara tampilan,
              tetapi juga kuat secara teknis dan bisnis.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
