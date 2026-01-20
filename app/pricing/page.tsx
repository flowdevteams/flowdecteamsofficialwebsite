import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Pricing | Flowdev Teams",
  description: "Flexible pricing plans to fit your budget and business needs. Find the perfect package for your project.",
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
