"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "UMKM Express",
    description: "Website profesional siap online dalam waktu singkat untuk bisnis kecil & UMKM",
    price: "395.000",
    oldPrice: "790.000",
    discount: "50%",
    monthlyNote: "Biaya Maintenance Rp 120.000/bulan di bulan kedua",
    period: "proyek",
    popular: false,
    features: [
      "Hingga 5 halaman basic",
      "Desain modern & mobile friendly",
      "SEO dasar (Google ready)",
      "Gratis Domain .com 1 tahun",
      "Gratis Hosting 1 bulan",
      "Gratis Maintenance & Support 1 bulan",
      "Pengerjaan maksimal 3-5 Hari",
      "Garansi revisi 7 hari",
    ],
    cta: "Ambil Slot Sekarang",
  },
  {
    name: "Growth Business",
    description: "Solusi terbaik untuk bisnis yang ingin terlihat profesional & konversi tinggi",
    price: "695.000",
    oldPrice: "1.390.000",
    discount: "50%",
    monthlyNote: "Biaya Maintenance Rp 150.000/bulan di bulan ketiga",
    period: "proyek",
    popular: true,
    features: [
       "Prioritas support 24/7",
      "Hingga 10 - 15 halaman kompleks",
      "Custom UI/UX sesuai brand identity",
       "Desain Premium & mobile friendly",
      "Landing page konversi tinggi",
      "Copywriting AI optimized",
      "SEO on-page lengkap",
      "Optimasi kecepatan website",
      "Gratis Domain .com 1 tahun",
      "Gratis Hosting 2 bulan",
      "Gratis Maintenance & Support 2 bulan",
      "Garansi revisi 21 hari",
    ],
    cta: "Mulai & Amankan Diskon",
  },
  {
    name: "Authority / Custom System",
    description: "Untuk bisnis serius yang ingin sistem & skalabilitas penuh",
    price: "Custom",
    period: "penawaran",
    popular: false,
    features: [
      "Website / web app tanpa batas halaman",
      "Pengembangan sistem custom",
      "Backend & API (NestJS / Node.js)",
      "Keamanan (JWT Auth, role & permission)",
      "Integrasi pembayaran / API eksternal",
      "Dedicated project manager",
      "Prioritas support 24/7",
      "Gratis Maintenance hingga 12 bulan",
      "Hak milik source code penuh",
    ],
    cta: "Diskusikan Proyek Anda",
  },
]

export function PricingCards() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div
                className={cn(
                  "relative overflow-visible h-full flex flex-col p-10 rounded-2xl border transition-all duration-300",

                  plan.popular
                    ? "bg-primary/5 border-primary shadow-xl shadow-primary/10"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                {plan.discount && (
                  <div className="absolute top-1 -left-3 z-10">
                    <div className="relative">
                      <div className="bg-red-500 text-white text-sm font-bold px-4 py-2 rotate-[-12deg] shadow-lg">
                        Hemat {plan.discount}
                      </div>

                      {/* Ujung pita (efek berjeruji) */}
                      <div className="absolute -bottom-2 left-0 w-0 h-0 
        border-l-[10px] border-l-red-700
        border-t-[10px] border-t-transparent">
                      </div>
                    </div>
                  </div>
                )}

                {/* Badge Popular */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Star className="h-4 w-4 fill-current" />
                     Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Harga */}
                <div className="mb-8">
                 

                  {plan.oldPrice && (
                    <div className="text-muted-foreground line-through text-lg mb-1">
                      Rp {plan.oldPrice}
                    </div>
                  )}

                  <div className="flex items-baseline gap-2">
                    {plan.price !== "Custom" && (
                      <span className="text-xl text-muted-foreground">Rp</span>
                    )}
                    
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    
                  </div>

                  <span className="text-muted-foreground">
                    {plan.period === "penawaran"
                      ? "Harga sesuai kebutuhan"
                      : `per ${plan.period}`}
                  </span>
                   {plan.monthlyNote && (
                    <div className="flex justify-end mb-2">
                      <span className="inline-block rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                        {plan.monthlyNote}
                      </span>
                    </div>
                  )}
                </div>


                {/* Fitur */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href="/kontak">{plan.cta}</Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Info Tambahan */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Semua paket termasuk konsultasi gratis dan analisis kebutuhan proyek.
              <Link href="/kontak" className="text-primary hover:underline ml-1">
                Hubungi kami
              </Link>
              {" "}untuk solusi website atau aplikasi yang lebih spesifik.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
