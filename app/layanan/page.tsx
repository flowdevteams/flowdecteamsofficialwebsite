import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Layanan terbaik web development Flowdev Teams | Jasa Pembuatan Website& Aplikasi",
  description:
    "Temukan layanan Flowdev Teams: jasa pembuatan website, web app, dan aplikasi bisnis yang modern, cepat, dan SEO-friendly.",
  alternates: {
    canonical: "/layanan",
  },
  robots: {
    index: true,
    follow: true,
  },
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

