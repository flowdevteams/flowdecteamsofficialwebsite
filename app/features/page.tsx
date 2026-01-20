import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { FeaturesGrid } from "@/components/features/features-grid"
import { TechStack } from "@/components/features/tech-stack"
import { ProcessSection } from "@/components/features/process-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Features | Flowdev Teams",
  description: "Discover the powerful features and capabilities that make Flowdev Teams your ideal development partner.",
}

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <FeaturesHero />
        <FeaturesGrid />
        <TechStack />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
