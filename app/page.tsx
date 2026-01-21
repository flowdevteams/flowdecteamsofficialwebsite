import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PartnersSection } from "@/components/home/partner"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { PricingPreviewSection } from "@/components/home/pricing-section"
import { HowWeWorkSection } from "@/components/home/howwe-work"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <ServicesPreview />
        <HowWeWorkSection />
        <PricingPreviewSection />
        <PartnersSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
