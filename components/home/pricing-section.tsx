"use client"

import Link from "next/link"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import { AccentTitle } from "@/components/accent-title"

const plans = [
  {
    name: "UMKM Starter",
    description: "Landing page cepat & hemat untuk pemula yang ingin langsung jualan online",
    price: "150.000",
    oldPrice: "300.000",
    discount: "50%",
    monthlyNote: "Maintenance Rp 20.000/bln (Mulai bln ke-2)",
    period: "sekali bayar",
    popular: false,
    deliveryTime: "1-2 Hari Kerja",
    features: [
      "Landing page responsif (Mobile, Tablet, Desktop)",
      "3 Section Utama (Hero, Benefit, Order WA)",
      "Gratis Subdomain Cloud 1 Tahun (nama.flowdevteams.com)",
      "Loading Cepat Standar Google PageSpeed",
      "Garansi Revisi & Gratis Maintenance 1 Bulan",
      "1x Update Minor Konten/Gambar Bulanan",
    ],
    cta: "Ambil Promo Rp 150.000",
    href: "/kontak?paket=starter",
  },
  {
    name: "Bisnis Iklan & Toko",
    description: "Senjata konversi tinggi untuk kampanye iklan Meta Ads, TikTok & Google Ads",
    price: "395.000",
    oldPrice: "790.000",
    discount: "50%",
    monthlyNote: "Maintenance Rp 50.000/bln (Mulai bln ke-2)",
    period: "sekali bayar",
    popular: true,
    deliveryTime: "3-5 Hari Kerja",
    features: [
      "Landing page konversi 5 Section Lengkap (AIDA)",
      "GRATIS Domain Utama .com / .id Resmi 1 Tahun",
      "Pemasangan Meta Pixel Ads & Google Analytics",
      "On-Page SEO Fundamental agar Muncul di Google",
      "Form Order Direct WhatsApp dengan Pesan Otomatis",
      "Garansi Revisi 3 Kali & Laporan Analitik Bulanan",
      "3x Update Minor Bulanan & Gratis Maintenance 1 Bulan",
    ],
    cta: "Pilih Paket Best Seller",
    href: "/kontak?paket=bisnis-iklan",
  },
  {
    name: "Brand Authority Pro",
    description: "Standar prestise untuk brand mapan, klinik, properti, dan korporat B2B",
    price: "539.000",
    oldPrice: "1.078.000",
    discount: "50%",
    monthlyNote: "Maintenance Rp 90.000/bln (Mulai bln ke-2)",
    period: "sekali bayar",
    popular: false,
    deliveryTime: "4-7 Hari Kerja",
    features: [
      "Arsitektur Web Lengkap Hingga 10 Section Interaktif",
      "Desain Visual Glassmorphism & Micro-animations Modern",
      "Optimasi Kecepatan Ekstrem (Core Web Vitals 95+ Score)",
      "GRATIS Domain .com/.net + Hosting Cloud 1 Tahun",
      "On-Page SEO Lanjutan (Schema.org & Sitemap XML)",
      "Integrasi Multi-Channel (Form Email + Direct WhatsApp)",
      "Garansi Revisi 6 Kali & Analitik Performa Mingguan",
      "6x Update Minor Bulanan & Prioritas Support",
    ],
    cta: "Pilih Brand Authority",
    href: "/kontak?paket=brand-authority",
  },
]

export function PricingPreviewSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-muted/35 py-10 sm:py-16 lg:py-28">
      <div className="absolute inset-0 saas-grid opacity-35 dark:opacity-15" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>
      <div className="container relative mx-auto px-2 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="relative mx-auto mb-8 sm:mb-10 lg:mb-14 max-w-3xl text-center">
            <span className="mb-3 sm:mb-4 inline-flex items-center rounded-md border border-primary/15 bg-card/80 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
              Promo Subsidi Digitalisasi UMKM 2026
            </span>

            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold leading-[1.08] text-foreground">
              <AccentTitle text="Paket Landing Page Terlengkap dengan Harga Paling Sahabat" />
            </h2>

            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-muted-foreground lg:text-lg">
              Solusi Rekayasa Digital Berkinerja Tinggi Tanpa Kompromi Kualitas. Pilih Paket Sesuai Kebutuhan Bisnis Anda Dan Nikmati Promo Potongan 50% Terbatas.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-6">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="fade-in-up"
              delay={index * 100}
              className={cn("h-full", index === 2 ? "col-span-2 sm:col-span-1" : "")}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-visible rounded-xl sm:rounded-2xl border p-3 sm:p-5 lg:p-8 transition-all duration-300",
                  plan.popular
                    ? "border-primary bg-card/90 shadow-2xl shadow-primary/15 ring-2 ring-primary/40 -translate-y-1"
                    : "border-border/80 bg-card/70 hover:border-primary/50 hover:shadow-lg"
                )}
              >
                {/* Ribbon Discount */}
                {plan.discount && !plan.popular && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                    <span className="rounded-md bg-muted/90 text-foreground border border-border px-1.5 py-0.5 sm:px-2.5 text-[9px] sm:text-xs font-bold">
                      Diskon {plan.discount}
                    </span>
                  </div>
                )}

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-primary px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[9px] sm:text-xs font-bold text-primary-foreground shadow-md">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Paling Banyak Dipilih (Best Seller)
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-2 sm:mb-3 lg:mb-4">
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-foreground mb-0.5 sm:mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-3 sm:mb-4 lg:mb-5 pb-3 sm:pb-4 lg:pb-5 border-b border-border/60">
                  {plan.oldPrice && (
                    <div className="text-[10px] sm:text-xs text-muted-foreground line-through mb-0.5">
                      Rp {plan.oldPrice}
                    </div>
                  )}

                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-muted-foreground">Rp</span>
                    <span className="text-lg sm:text-2xl lg:text-4xl font-extrabold text-foreground tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[9px] sm:text-xs text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>

                  {plan.monthlyNote && (
                    <div className="mt-2.5">
                      <span className="inline-block rounded-md bg-muted/60 border border-border/50 text-foreground/80 text-[9px] sm:text-[11px] font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1">
                        {plan.monthlyNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 mb-4 sm:mb-6 lg:mb-8 flex-1 text-[10px] sm:text-xs">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-foreground/90 leading-relaxed">
                      <div className="flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 text-primary">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="line-clamp-2 sm:line-clamp-none">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full rounded-lg font-semibold shadow-sm h-9 sm:h-10 lg:h-11 text-[11px] sm:text-xs lg:text-sm"
                >
                  <Link href={plan.href}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer info link */}
        <AnimatedSection animation="fade-in-up" delay={400} className="text-center mt-12">
          <p className="text-xs text-muted-foreground mb-3">
            Butuh sistem aplikasi web kustom (ERP/CRM) atau solusi integrasi AI?
          </p>
          <Button asChild variant="outline" size="sm" className="rounded-lg">
            <Link href="/harga-paket">
              Lihat Skema Harga Aplikasi Web & Solusi AI
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </AnimatedSection>

      </div>
    </section>
  )
}
