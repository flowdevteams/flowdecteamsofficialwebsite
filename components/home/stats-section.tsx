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
  {
    id: 3,
    name: "Universitas Bina Insani",
    logo: "/clients/bina-insani-hd.png",
  },
  {
    id: 4,
    name: "Bank Sampah Hijau Berkah",
    logo: "/clients/hijau-berkah.svg",
  },
]

export function StatsSection() {
  return (
    <section className="border-b border-border/60 bg-card py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Dipercaya Bisnis & Institusi di Indonesia"
          title="Klien yang Mempercayai Flowdev Teams"
        />

        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-5 sm:gap-6">
          {clients.map((client, index) => (
            <AnimatedSection
              key={client.id}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="group relative flex h-36 sm:h-44 w-full sm:w-64 lg:w-68 cursor-default flex-col items-center justify-center rounded-2xl border border-border/80 bg-background p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={100}
                  unoptimized={client.logo.endsWith('.svg')}
                  className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 transition-colors group-hover:text-foreground">
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
