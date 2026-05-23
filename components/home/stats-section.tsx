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
    <section className="py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Dipercaya Bisnis & Perusahaan di Indonesia"
          title="Klien yang Mempercayai Flowdev Teams"
        />

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {clients.map((client, index) => (
            <AnimatedSection
              key={client.id}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="group relative w-72 h-45 p-2 flex flex-col items-center justify-center rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="max-h-full  mx-auto transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <h3 className="mt-2 text-center text-lg font-semibold text-foreground/80">
                  {client.name}
                </h3>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
