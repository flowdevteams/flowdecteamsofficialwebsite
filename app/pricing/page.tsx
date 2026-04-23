import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Harga termurah Untuk Jasa Pembuatan Website & Aplikasi | Flowdev Teams",
  description:
    "Pilih paket harga Flowdev Teams yang fleksibel untuk jasa pembuatan website dan aplikasi bisnis. Konsultasi gratis, proses cepat, hasil profesional.",
  alternates: {
    canonical: "/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <PricingHero />
        <PricingCards />
        <PricingFAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
