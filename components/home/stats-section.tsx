"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionHeader } from "@/components/section-header"
import Image from "next/image"

const clients = [
  {
    id: 1,
    name: "Pt.Masagena Jaya Maritim",
    logo: "/clients/masagena.png",
  },
  {
    id: 2,
    name: "Pt.Rafay Anugrah Logistik",
    logo: "/clients/rafay.png",
  },
]

export function StatsSection() {
  return (
    <section className="border-b border-border/60 bg-card py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Dipercaya Bisnis & Perusahaan di Indonesia"
          title="Klien yang Mempercayai Flowdev Teams"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <AnimatedSection
              key={client.id}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="group relative flex h-36 w-64 cursor-default flex-col items-center justify-center rounded-xl border border-border/70 bg-background/70 p-6 shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={120}
                  className="mx-auto max-h-full opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <h3 className="mt-4 translate-y-1 text-center text-sm font-medium text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {client.name}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  )
}
