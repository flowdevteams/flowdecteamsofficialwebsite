"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { ShieldCheck, Building2, Globe, Award } from "lucide-react"

const realClients = [
  {
    name: "PT. Masagena Jaya Maritim",
    category: "Pelayaran & Logistik Maritim",
    logo: "/clients/masagena.png",
  },
  {
    name: "PT. Rafay Anugrah Logistik",
    category: "Transportasi & Cargo Darat",
    logo: "/clients/rafay.png",
  },
  {
    name: "Gohost Cloud Infrastructure",
    category: "Cloud Hosting & Server Provider",
    logo: "/logo/gohost.png",
  },
  {
    name: "Didin Media Group (DMG)",
    category: "Digital Media & Web Host",
    logo: "https://didinmediagroup.s3.ap-southeast-3.amazonaws.com/assets/img/logo-dmghost.svg",
  },
]

const industries = [
  { name: "Manufaktur & Supply Chain", icon: Building2 },
  { name: "Fintech & Korporasi Holding", icon: Award },
  { name: "Fasilitas Kesehatan & RME", icon: ShieldCheck },
  { name: "F&B, Retail & E-Commerce", icon: Globe },
]

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-b border-border/60 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 saas-grid opacity-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Dipercaya Bisnis & Mitra"
          title="Kemitraan yang Terus Berkembang"
          description="Flowdev Teams berkolaborasi dengan perusahaan, startup, dan pelaku bisnis di berbagai industri untuk menghadirkan solusi teknologi yang handal, aman, dan siap bertumbuh."
        />

        {/* Real Client & Partner Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {realClients.map((client, index) => (
            <AnimatedSection
              key={client.name}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="group relative flex h-44 flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  width={160}
                  height={80}
                  className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="mt-3 text-center">
                  <h4 className="text-xs font-bold text-foreground truncate max-w-[200px]">{client.name}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{client.category}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Industry Focus Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <div 
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 border border-border/70 text-xs font-medium text-muted-foreground shadow-xs"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{ind.name}</span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
