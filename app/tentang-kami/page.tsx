import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OurValues } from "@/components/about/our-values"
import { TeamSection } from "@/components/about/team-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Tentang Flowdev Teams | Jasa Pembuatan Website & Aplikasi",
  description:
    "Kenali Flowdev Teams, tim jasa pembuatan Website untuk UMKM, startup, dan bisnis di Indonesia.",
  alternates: {
    canonical: "/tentang-kami",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <AboutHero />
        <TeamSection />
        <OurValues />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

