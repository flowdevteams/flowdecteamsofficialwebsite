"use client"

import Link from "next/link"
import {
  ArrowRight,
  Brain,
  LayoutDashboard,
  Globe,
  Sparkles,
  Zap,
  CheckCircle2,
  ChevronRight,
  Layers,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { servicesData } from "@/lib/services-data"
import { cn } from "@/lib/utils"

const iconMap = {
  Brain: Brain,
  LayoutDashboard: LayoutDashboard,
  Globe: Globe,
}

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
            3 Pilar Solusi Utama
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Pilihan Kategori Layanan Rekayasa Digital
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Disesuaikan dengan tahap pertumbuhan dan kebutuhan teknologi spesifik bisnis Anda.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe
            return (
              <AnimatedSection
                key={service.slug}
                animation="fade-in-up"
                delay={index * 150}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  {/* Subtle top accent gradient */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-blue-800" />

                  {/* Header & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border/60 bg-muted/40 text-foreground/80">
                      {service.badgeText}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* ROI Key Highlights */}
                  <div className="mb-6 rounded-xl border border-border/60 bg-muted/30 p-3.5 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Keunggulan & Dampak Bisnis:
                    </div>
                    {service.roiMetrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="flex items-center justify-between text-xs">
                        <span className="text-foreground/80">{m.label}</span>
                        <span className="font-bold text-primary">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2.5 mb-8 flex-1">
                    <div className="text-xs font-semibold text-foreground">
                      Cakupan Solusi:
                    </div>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item.title} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button to Category Detail Page */}
                  <div className="pt-4 border-t border-border/60 space-y-2">
                    <Button
                      asChild
                      className="w-full justify-between rounded-lg shadow-sm font-semibold"
                    >
                      <Link href={`/layanan/${service.slug}`}>
                        <span>Pelajari Solusi {service.shortTitle}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Link href="/kontak">
                        Konsultasi Langsung
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
