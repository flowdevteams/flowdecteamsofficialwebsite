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
import { GlowLogo, GlowRing } from "@/components/effects"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-hidden">
        {/* 1. HeroSection (menggunakan <GlowRing /> di background) */}
        <HeroSection />
        
        <StatsSection />
        <PricingPreviewSection />
        <ServicesPreview />
        <HowWeWorkSection />
        <PartnersSection />
        <WhyChooseUs />
        <TestimonialsSection />

        {/* 2. Contoh Penggunaan <GlowLogo /> dan <GlowRing /> di CTA / Floating Section */}
        <div className="relative">
          {/* Ambient Glow Effects Layer */}
          <div className="pointer-events-none absolute -left-20 -bottom-20 z-0 hidden opacity-60 lg:block">
            <GlowRing size={520} animate={true} />
          </div>
          <div className="pointer-events-none absolute right-8 top-8 z-0 hidden opacity-75 lg:block">
            <GlowLogo size={200} logoSrc="/logo.svg" animate={true} />
          </div>
          
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}
