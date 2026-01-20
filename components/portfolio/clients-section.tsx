"use client"

import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const clients = [
  "TechCorp",
  "InnovateLabs",
  "GrowthCo",
  "StartupHub",
  "DigitalFirst",
  "FutureScale",
  "CloudNine",
  "DataDriven",
]

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Clients"
          title="Trusted by Industry Leaders"
          description="We are proud to have worked with some amazing companies across various industries."
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
                  <span className="text-xl font-bold text-muted-foreground/60 hover:text-primary transition-colors">
                    {client}
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
