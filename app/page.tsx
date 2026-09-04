import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PartnersSection } from "@/components/home/partner"
import { StatsSection } from "@/components/home/stats-section"
import { PortfolioShowcaseSection } from "@/components/home/portfolio-showcase"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { HowWeWorkSection } from "@/components/home/howwe-work"
import { FeaturesBentoSection } from "@/components/home/features-bento"
import { GlowLogo, GlowRing } from "@/components/effects"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-x-clip w-full max-w-full">
        {/* 1. Hero Section */}
        <HeroSection />
        
        {/* 2. Client Social Proof */}
        <StatsSection />

        {/* 3. Interactive Portfolio Showcase */}
        <PortfolioShowcaseSection />

        {/* 4. 3 Core Business Pillars & Starting Investments */}
        <ServicesPreview />

        {/* 5. How We Work / Alur Kerja */}
        <HowWeWorkSection />

        {/* 6. Features & Ecosystem Bento Showcase */}
        <FeaturesBentoSection />

        {/* 7. Why Choose Us / Komparasi Nilai */}
        <WhyChooseUs />

        {/* 7. Client Testimonials */}
        <TestimonialsSection />

        {/* 8. Tech Ecosystem Partners */}
        <PartnersSection />

        {/* 9. Final CTA */}
        <div className="relative overflow-hidden">
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
