"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter Website",
    description: "Cocok untuk UMKM, personal brand, dan bisnis baru",
    price: "500.000",
    oldPrice: "1.000.000",
    discount: "50%",
    period: "proyek",
    popular: false,
    features: [
      "Hingga 5 halaman website",
      "Desain responsif (mobile & desktop)",
      "SEO dasar (struktur & metadata)",
      "Form kontak terhubung WhatsApp / Email",
      "Gratis Maintenance & Support 1 bulan",
    ],
    cta: "Konsultasi Gratis",
  },
  {
    name: "Business / Professional",
    description: "Untuk bisnis yang ingin tumbuh dan terlihat profesional",
    price: "1.500.000",
    oldPrice: "3.000.000",
    discount: "50%",
    period: "proyek",
    popular: true,
    features: [
      "Hingga 15 halaman website",
      "Custom UI/UX sesuai brand",
      "SEO lanjutan (on-page optimization)",
      "Website dinamis / landing page marketing",
      "Optimasi kecepatan website",
      "Integrasi API (jika diperlukan)",
      "Gratis Maintenance & Support 3 bulan",
     
    ],
    cta: "Mulai Sekarang",
  },
  {
    name: "Enterprise / Custom System",
    description: "Solusi khusus untuk sistem skala besar & aplikasi",
    price: "Custom",
    period: "penawaran",
    popular: false,
    features: [
      "Website / web app tanpa batas halaman",
      "Pengembangan sistem custom",
      "Backend & API (NestJS / Node.js)",
      "Keamanan (JWT Auth, role & permission)",
      "Dedicated project manager",
      "Prioritas support 24/7",
      "Maintenance hingga 12 bulan",
      "SLA & dokumentasi teknis",
      "Hak milik source code penuh",
    ],
    cta: "Hubungi Tim Kami",
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
                  <Link href="/contact">{plan.cta}</Link>
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
              <Link href="/contact" className="text-primary hover:underline ml-1">
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
