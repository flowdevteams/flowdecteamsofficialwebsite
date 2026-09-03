import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Investasi & Skema Harga Terukur | Solusi Digital Flowdev Teams",
  description:
    "Pilihan skema investasi digital transparan dari Flowdev Teams: Landing Page Konversi Tinggi, Aplikasi Web & Sistem Enterprise, hingga Solusi Kecerdasan Buatan (AI).",
  alternates: {
    canonical: "/harga-paket",
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
