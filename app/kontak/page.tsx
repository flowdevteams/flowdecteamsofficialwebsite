import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata: Metadata = {
  title: "Kontak Flowdev Teams | Konsultasi Website & Aplikasi Gratis",
  description:
    "Hubungi Flowdev Teams untuk konsultasi gratis jasa pembuatan website dan aplikasi. Ceritakan kebutuhan bisnis Anda, kami siap bantu dari konsep sampai launch.",
  alternates: {
    canonical: "/kontak",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

