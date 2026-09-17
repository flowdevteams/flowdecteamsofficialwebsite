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
import { cn } from "@/lib/utils"

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
    <section className="py-10 sm:py-16 lg:py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 lg:mb-14">
          <span className="inline-block px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-2 sm:mb-3 border border-primary/20">
            3 Pilar Spesialisasi Utama
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground tracking-tight font-serif">
            Solusi Rekayasa Digital yang Terfokus pada ROI Bisnis
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
            Setiap pilar layanan dibangun dengan standar Next.js 16 native, 100% hak kepemilikan source code, dan tanpa biaya royalti terselubung.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe
            const pricing = priceMap[service.slug] || { startPrice: "Hubungi Tim", badge: "Kustom" }

            return (
              <AnimatedSection
                key={service.slug}
                animation="fade-in-up"
                delay={index * 150}
                className={cn("h-full", index === 2 ? "col-span-2 lg:col-span-1" : "")}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 bg-card p-3 sm:p-5 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary" />

                  {/* Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3 lg:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-primary/20">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </div>
                    <span className="text-[10px] sm:text-[10px] lg:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-primary/20 bg-primary/10 text-primary">
                      {pricing.badge}
                    </span>
                  </div>

                  {/* Title & Short Tagline */}
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-foreground leading-tight mb-1 sm:mb-2 group-hover:text-primary transition-colors font-serif line-clamp-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-primary mb-1.5 sm:mb-3 line-clamp-1">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 lg:mb-6 line-clamp-2 sm:line-clamp-none">
                    {service.summary}
                  </p>

                  {/* Pricing Capsule */}
                  <div className="mb-3 sm:mb-4 lg:mb-6 rounded-lg sm:rounded-xl border border-border/80 bg-muted/40 p-2.5 sm:p-3 lg:p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10.5px] sm:text-xs text-muted-foreground">Mulai Dari</span>
                      <span className="text-sm sm:text-sm lg:text-lg font-bold text-foreground">
                        {pricing.startPrice}
                      </span>
                    </div>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 mb-3 sm:mb-5 lg:mb-8 flex-1">
                    <div className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Cakupan Solusi Utama:
                    </div>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item.title} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium line-clamp-1 sm:line-clamp-none">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 sm:pt-3 lg:pt-4 border-t border-border/60 space-y-1.5 sm:space-y-2">
                    <Button
                      asChild
                      className="w-full justify-between rounded-lg sm:rounded-xl shadow-xs font-semibold h-8 sm:h-10 lg:h-11 px-2.5 sm:px-4 text-xs sm:text-xs lg:text-sm"
                    >
                      <Link href={`/layanan/${service.slug}`}>
                        <span>
                          <span className="sm:hidden">Rincian Teknis</span>
                          <span className="hidden sm:inline">Rincian Teknis &amp; Spesifikasi</span>
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs sm:text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 hidden sm:flex"
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
