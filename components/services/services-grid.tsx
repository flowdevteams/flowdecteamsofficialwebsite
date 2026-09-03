"use client"

import Link from "next/link"
import {
  ArrowRight,
  Brain,
  LayoutDashboard,
  Globe,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Lock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { servicesData } from "@/lib/services-data"

const iconMap = {
  Brain: Brain,
  LayoutDashboard: LayoutDashboard,
  Globe: Globe,
}

const priceMap: Record<string, { startPrice: string; badge: string }> = {
  "landing-page": { startPrice: "Rp 150.000", badge: "Hemat 50%" },
  "aplikasi-web": { startPrice: "Rp 2.500.000", badge: "Milestone" },
  "kecerdasan-buatan": { startPrice: "Rp 3.500.000", badge: "Custom AI" },
}

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3 border border-primary/20">
            3 PILAR SPESIALISASI UTAMA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-serif">
            Solusi Rekayasa Digital yang Terfokus pada ROI Bisnis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Setiap pilar layanan dibangun dengan standar Next.js 16 native, 100% hak kepemilikan source code, dan tanpa biaya royalti terselubung.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe
            const pricing = priceMap[service.slug] || { startPrice: "Hubungi Tim", badge: "Kustom" }

            return (
              <AnimatedSection
                key={service.slug}
                animation="fade-in-up"
                delay={index * 150}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary" />

                  {/* Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary">
                      {pricing.badge}
                    </span>
                  </div>

                  {/* Title & Short Tagline */}
                  <h3 className="text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors font-serif">
                    {service.shortTitle}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Pricing Capsule */}
                  <div className="mb-6 rounded-xl border border-border/80 bg-muted/40 p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground">Mulai Dari</span>
                      <span className="text-lg font-bold text-foreground font-mono">
                        {pricing.startPrice}
                      </span>
                    </div>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2.5 mb-8 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Cakupan Solusi Utama:
                    </div>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item.title} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 border-t border-border/60 space-y-2">
                    <Button
                      asChild
                      className="w-full justify-between rounded-xl shadow-sm font-semibold"
                    >
                      <Link href={`/layanan/${service.slug}`}>
                        <span>Rincian Teknis &amp; Spesifikasi</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    >
                      <Link href="/harga-paket">
                        Lihat Skema Harga Lengkap
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
