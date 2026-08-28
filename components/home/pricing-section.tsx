"use client"

import Link from "next/link"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import { AccentTitle } from "@/components/accent-title"

const plans = [
   {
    name: "Landing Page Basic",
    description: "Landing page sederhana untuk UMKM dengan kebutuhan dasar",
    price: "150.000",
    oldPrice: "300.000",
    discount: "50%",
    monthlyNote: "Maintenance Rp 20.000/bulan di bulan kedua",
    period: "sekali bayar",
    popular: false,
    features: [
      "Landing page 1 halaman dengan desain minimal",
      "3 navigasi section",
      "Gratis subdomain dari kami (contoh: namabisnis.flowdevteams.com) 1 tahun",
      "Gratis maintenance 1 bulan", 
      "Garansi revisi 1 kali setelah desain awal selesai",
      "1 Kali update minor (konten dan gambar) bulanan",
    ],
    cta: "Pilih Paket Ini",
  },
  {
    name: "Landing Page Pro",
    description: "Landing page sederhana untuk UMKM dengan kebutuhan dasar",
    price: "395.000",
    oldPrice: "790.000",
    discount: "50%",
    monthlyNote: "Maintenance Rp 50.000/bulan di bulan kedua",
    period: "sekali bayar",
    popular: true,
    features: [
      "Landing page 1 halaman dengan desain basic",
      "5 navigasi section",
      "Seo optimasi dasar",
      "Cta button untuk whatsapp",
      "Gratis domain .com  1 tahun",
      "Gratis maintenance 1 bulan", 
      "Garansi revisi 3 kali setelah desain awal selesai",
      "3 Kali update minor (konten dan gambar) bulanan",
      "Analitik kunjungan bulanan untuk melacak performa landing page",
    ],
    cta: "Pilih Paket Ini",
  },
  {
    name: "Landing Page Super",
    description: "Landing page profesional untuk UMKM dengan kebutuhan lebih kompleks",
    price: "539.000",
    oldPrice: "1078.000",
    discount: "50%",
    monthlyNote: "Maintenance Rp 90.000/bulan di bulan kedua",
    period: "sekali bayar",
    popular: false, 
    features: [
      "Landing page 1 halaman dengan desain profesional dan kompleks",
      "Animasi dan interaksi yang lebih menarik",
      "10 navigasi section",
      "Seo optimasi lanjutan",
      "Cta button untuk whatsapp & Kontak form untuk email",
      "Kecepatan loading yang dioptimalkan untuk performa terbaik",
      "Gratis domain .com/.net 1 tahun",
      "Gratis maintenance 1 bulan", 
      "Garansi revisi 6 kali setelah desain awal selesai",
      "6 Kali update minor (konten dan gambar) bulanan",
      "Analitik kunjungan mingguan untuk melacak performa landing page",
    ],
    cta: "Pilih Paket Ini",
  },
 
]

export function PricingPreviewSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-muted/35 py-20 lg:py-28">
      <div className="absolute inset-0 saas-grid opacity-35 dark:opacity-15" />
      
      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-dot animate-grid-light-1" />
        <div className="grid-dot animate-grid-light-2" />
        <div className="grid-dot animate-grid-light-3" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="relative mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-md border border-primary/15 bg-card/80 px-3 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              Promo Landing Page 
            </span>

            <h2 className="mb-4 text-3xl font-semibold leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
              <AccentTitle text="Paket Landing Page Termurah Dengan Fitur Terlengkap" />
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
           Pilih paket sesuai kebutuhan bisnis anda dan dapatkan kelengkapan fitur landing page dengan harga terbaik
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
       <div className="relative mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-xl border p-6 transition-all duration-300 lg:p-8",
                  plan.popular
                    ? "z-10 border-primary/55 bg-card shadow-2xl shadow-primary/15 lg:-translate-y-4"
                    : "border-border/70 bg-card/90 shadow-sm hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10"
                )}
              >
                {/* Background Glow for Popular */}
                {plan.popular && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                )}
                {plan.discount && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                      PROMO {plan.discount}
                    </span>
                  </div>
                )}

                {/* Badge Popular */}
                {plan.popular && (
                  <div className="absolute left-6 top-4 z-20">
                    <div className="flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={cn("mb-6", plan.popular && "pt-9")}>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="min-h-12 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Harga */}
                <div className="mb-8 rounded-lg border border-border/70 bg-muted/35 p-4">
                 

                  {plan.oldPrice && (
                    <div className="mb-1 text-base text-muted-foreground line-through">
                      Rp {plan.oldPrice}
                    </div>
                  )}

                  <div className="flex items-baseline gap-2">
                    {plan.price !== "Custom" && (
                      <span className="text-xl font-medium text-muted-foreground">Rp</span>
                    )}
                    
                    <span className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
                      {plan.price}
                    </span>
                  </div>

                  <span className="mt-2 block text-sm font-medium text-muted-foreground">
                    {plan.period === "penawaran"
                      ? "Harga sesuai kebutuhan"
                      : `per ${plan.period}`}
                  </span>
                   {plan.monthlyNote && (
                    <div className="flex justify-start mt-4">
                      <span className="inline-block rounded-md border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {plan.monthlyNote}
                      </span>
                    </div>
                  )}
                </div>


                {/* Fitur */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "secondary"}
                  className={cn(
                    "w-full rounded-lg font-semibold shadow-sm",
                    plan.popular && "shadow-lg shadow-primary/20"
                  )}
                >
                  <Link href="/kontak">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

       

      </div>
    </section>
  )
}

