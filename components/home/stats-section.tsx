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
    <section className="border-b border-border/60 bg-card py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Dipercaya Bisnis & Institusi di Indonesia"
          title="Klien yang Mempercayai Flowdev Teams"
        />

        <div className="mt-6 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {clients.map((client, index) => (
            <AnimatedSection
              key={client.id}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="group relative flex h-28 sm:h-36 lg:h-44 w-full cursor-default flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-border/80 bg-background p-3 sm:p-5 lg:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={100}
                  unoptimized={client.logo.endsWith('.svg')}
                  className="max-h-12 sm:max-h-20 lg:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="mt-2 sm:mt-3 text-center text-[10.5px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground line-clamp-2">
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
