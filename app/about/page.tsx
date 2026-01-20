import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurValues } from "@/components/about/our-values"
import { TeamSection } from "@/components/about/team-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us | Flowdev Teams",
  description: "Learn about Flowdev Teams, our mission, values, and the talented team behind your digital success.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <AboutHero />
        <OurStory />
        <OurValues />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
