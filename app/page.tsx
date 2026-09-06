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
import { SolutionsShowcaseSection } from "@/components/home/solutions-showcase"
import { FeaturesBentoSection } from "@/components/home/features-bento"
import { TechStackSection } from "@/components/home/tech-stack"
import { GlowLogo, GlowRing } from "@/components/effects"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-x-clip w-full max-w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Granular Solutions Showcase & SEO Gateway (12 Pilihan Website & Web App Kustom Looping Marquee) */}
        <SolutionsShowcaseSection />
        
        {/* 3. Client Social Proof & Metrics */}
        <StatsSection />

        {/* 4. Interactive Portfolio Showcase */}
        <PortfolioShowcaseSection />

        {/* 5. 3 Core Business Pillars & Starting Investments */}
        <ServicesPreview />

        {/* 6. How We Work / Alur Kerja */}
        <HowWeWorkSection />

        {/* 6. Features & Ecosystem Bento Showcase */}
        <FeaturesBentoSection />

        {/* 7. Tech Stack & Engineering Tools (High SEO Value) */}
        <TechStackSection />

        {/* 8. Why Choose Us / Komparasi Nilai */}
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
