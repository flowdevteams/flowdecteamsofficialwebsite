import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | Flowdev Teams",
  description: "Get in touch with Flowdev Teams. We'd love to hear about your project and discuss how we can help.",
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
