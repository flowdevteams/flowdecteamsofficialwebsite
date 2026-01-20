import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { ClientsSection } from "@/components/portfolio/clients-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Portfolio | Flowdev Teams",
  description: "Explore our portfolio of successful projects. See how we've helped businesses transform their digital presence.",
}

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <PortfolioHero />
        <PortfolioGrid />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
