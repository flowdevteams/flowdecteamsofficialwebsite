"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

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
                        Promo {plan.discount}
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
                      <span className="text-xl text-foreground">Rp</span>
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

      </div>
    </section>
  )
}
