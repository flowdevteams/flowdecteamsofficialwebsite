import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services | Flowdev Teams",
  description: "Explore our comprehensive range of web and app development services designed to help your business succeed.",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
