"use client"

import Link from "next/link"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter Website",
    description: "Website profesional untuk UMKM & personal brand",
    price: "500.000",
    oldPrice: "1.000.000",
    discount: "50%",
    popular: false,
    features: [
      "Website hingga 5 halaman",
      "Desain modern & responsif",
      "SEO dasar siap ranking",
      "Gratis domain & support",
    ],
  },
  {
    name: "Business / Professional",
    description: "Paket paling laris untuk bisnis yang ingin berkembang",
    price: "1.500.000",
    oldPrice: "3.000.000",
    discount: "50%",
    popular: true,
    features: [
      "Website hingga 15 halaman",
      "Custom UI/UX sesuai brand",
      "SEO lanjutan & performa cepat",
      "Gratis domain & support 3 bulan",
    ],
  },
  {
    name: "Enterprise / Custom",
    description: "Sistem & aplikasi sesuai kebutuhan bisnis",
    price: "Custom",
    popular: false,
    features: [
      "Web app & sistem custom",
      "Backend & API aman",
      "Maintenance & SLA",
      "Source code milik penuh",
    ],
  },
]

export function PricingPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Promo Jasa Pembuatan Website
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Website Profesional, Harga Lebih Hemat
            </h2>

            <p className="text-lg text-muted-foreground">
              Penawaran spesial untuk bisnis yang ingin tampil profesional
              dan meningkatkan kepercayaan pelanggan secara online.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div
                className={cn(
                  "relative overflow-visible h-full  flex flex-col p-12 rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-primary/5 border-primary shadow-xl shadow-primary/10 scale-[1.03]"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                {/* Promo Ribbon */}
                {plan.discount && (
                  <div className="absolute top-1 -left-3 z-10">
                    <div className="relative">
                      <div className="bg-red-500 text-white text-sm font-bold px-4 py-2 rotate-[-12deg] shadow-lg">
                        DISKON {plan.discount}
                      </div>

                      {/* Ribbon edge */}
                      <div
                        className="absolute -bottom-2 left-0 w-0 h-0
                        border-l-[10px] border-l-red-700
                        border-t-[10px] border-t-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Best Seller */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow">
                      <Star className="h-4 w-4 fill-current" />
                      Best Seller
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {plan.oldPrice && (
                    <div className="text-muted-foreground line-through text-lg">
                      Rp {plan.oldPrice}
                    </div>
                  )}

                  <div className="text-4xl font-bold text-foreground">
                    {plan.price !== "Custom" && "Rp "}
                    {plan.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-1" />
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
                  <Link href="/pricing" className="flex items-center justify-center gap-2">
                    Lihat Detail
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Promo terbatas! Konsultasi gratis sebelum slot penuh.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Konsultasi Gratis Sekarang
              </Link>
            </Button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
