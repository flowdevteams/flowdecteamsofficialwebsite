"use client"

import Link from "next/link"
import { Building2, Goal, Palette, Rocket, HardHat, ShieldCheck, ArrowBigRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: Building2,
    title: "WebsiteCompany Profile",
    description:
      "Pembuatan Website Profesional yang responsif dan SEO-friendly. Dirancang khusus untuk meningkatkan kredibilitas bisnis UMKM/UKM Anda di mesin pencari dan memvalidasi kepercayaan calon pelanggan.",
  },
  {
    icon: Palette,
    title: "Landing Page Konversi",
    description:
      "Halaman web berkinerja tinggi yang dirancang spesifik untuk kampanye iklan (Meta/Google Ads). Dioptimasi untuk mempercepat loading dan memaksimalkan rasio klik ke WhatsApp atau formulir prospek.",
  },
  {
    icon: Palette,
    title: "Desain UI/UX Otentik & Modern",
    description:
      "Antarmuka modern yang disesuaikan dengan identitas merek Anda. Kami mengutamakan visual yang bersih dan profesional yang generik agar bisnis Anda tampil lebih kredibel dan terpercaya.",
  },
  {
    icon: Rocket,
    title: "Optimasi Kecepatan & SEO",
    description:
      "Arsitektur kode yang ringan dan bersih agar Websitememuat dalam hitungan detik. Dioptimasi secara fundamental agar bisnis Anda lebih mudah ditemukan oleh pelanggan di target area Anda.",
  },
  {
    icon: HardHat,
    title: "Hosting & Domain Terkelola",
    description:
      "Layanan pemantauan uptime website, backup data berkala, pembaruan sistem keamanan, serta bantuan teknis agar mesin digital Anda beroperasi optimal 24/7 tanpa kendala.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support Berkelanjutan",
    description:
      "Layanan pemantauan uptime website, backup data berkala, pembaruan sistem keamanan, serta bantuan teknis agar mesin digital Anda beroperasi optimal 24/7 tanpa kendala.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Layanan Kami"
          title="Solusi  Website& Landing Page Profesional untuk Pertumbuhan Bisnis"
          description="Flowdev Teams menyediakan layanan pembuatan Websiteend-to-end yang dioptimasi untuk kecepatan, SEO, dan konversi guna membantu bisnis Anda memenangkan pasar digital."
        />

        <div className="grid text-center sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="group flex-1 h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl mx-auto bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-12 w-12 text-primary " />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={600} className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2 group bg-transparent">
            <Link href="/layanan">
              Jelajahi Semua Layanan
              <ArrowBigRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

