"use client"

import { Check } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const benefits = [
  "Konsultasi awal gratis tanpa komitmen",
  "Harga transparan dan sesuai kebutuhan",
  "Project manager khusus untuk setiap proyek",
  "Update progres rutin dan terjadwal",
  "Dukungan setelah website dan aplikasi live",
  "Garansi kepuasan hasil kerja",
]

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Kenapa Memilih Kami"
            title="Kesuksesan Digital Bisnis Anda Adalah Prioritas Kami"
            description="Kami berkomitmen membantu bisnis Anda tumbuh melalui website dan aplikasi yang profesional, stabil, dan siap bersaing."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {benefit}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
