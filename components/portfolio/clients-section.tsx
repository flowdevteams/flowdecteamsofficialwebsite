"use client"

import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const clients = [
  "Fintech Startup",
  "E-Commerce Brand",
  "SaaS Business",
  "Healthcare Platform",
  "EdTech Company",
  "Digital Agency",
  "Corporate Team",
  "Growing Startup",
]

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Who We Work With"
          title="Siap Mendukung Bisnis yang Ingin Tumbuh"
          description="Kami bekerja dan berkolaborasi dengan berbagai tipe bisnis dan tim yang memiliki visi pertumbuhan, 
          fokus pada kualitas, efisiensi, dan solusi digital yang scalable."
        />

        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <AnimatedSection
                key={client}
                animation="fade-in-up"
                delay={index * 50}
              >
                <div className="flex items-center justify-center h-24 px-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <span className="text-center text-sm sm:text-base font-semibold text-muted-foreground/70 hover:text-primary transition-colors">
                    {client}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Disclaimer halus & profesional */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            *Nama yang ditampilkan merepresentasikan tipe industri dan tim yang kami layani.
          </p>
        </div>
      </div>
    </section>
  )
}
