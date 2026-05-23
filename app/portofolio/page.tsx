import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { ClientsSection } from "@/components/portfolio/clients-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Portofolio Flowdev Teams | Contoh Project Website& Aplikasi",
  description:
    "Lihat portofolio Flowdev Teams berisi contoh project Website dari berbagai bisnis di Indonesia, dengan desain modern dan performa optimal.",
  alternates: {
    canonical: "/portofolio",
  },
  robots: {
    index: true,
    follow: true,
  },
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

