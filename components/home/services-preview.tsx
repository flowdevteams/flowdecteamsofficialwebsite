"use client"

import Link from "next/link"
import { Building2, Palette, Rocket, HardHat, ShieldCheck, ArrowBigRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

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
    <section className="border-b border-border/60 bg-background px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative overflow-hidden rounded-xl border border-white/10 px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>
          <div className="relative z-10">
            <SectionHeader
              badge="Layanan Kami"
              title="Solusi  Website& Landing Page Profesional untuk Pertumbuhan Bisnis"
              description="Flowdev Teams menyediakan layanan pembuatan Websiteend-to-end yang dioptimasi untuk kecepatan, SEO, dan konversi guna membantu bisnis Anda memenangkan pasar digital."
              tone="inverse"
            />

            <div className="mt-12 grid gap-4 text-left md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="fade-in-up"
                  delay={index * 100}
                  className={cn(
                    "h-full",
                    index === 0 && "lg:col-span-4",
                    index === 1 && "lg:col-span-2",
                    index === 2 && "lg:col-span-2",
                    index === 3 && "lg:col-span-4",
                    index >= 4 && "lg:col-span-3"
                  )}
                >
                  <article className="group relative h-full min-h-56 overflow-hidden rounded-lg border border-white/15 bg-white/[0.08] p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12] lg:p-7">
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition-colors group-hover:bg-white/15">
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className={cn(index === 0 || index === 3 ? "max-w-2xl" : "max-w-sm")}>
                        <h3 className="mb-3 text-xl font-semibold leading-tight tracking-tight text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-7 text-white/82">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in-up" delay={600} className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-lg border-white/30 bg-white text-primary shadow-sm hover:bg-white/90 group">
                <Link href="/layanan">
                  Jelajahi Semua Layanan
                  <ArrowBigRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
