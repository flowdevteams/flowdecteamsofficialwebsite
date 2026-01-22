"use client"

import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Palette, Server, Shield, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: Globe,
    title: "Web Development Profesional",
    description:
      "Jasa pembuatan website custom dengan teknologi modern. Cepat, SEO-friendly, responsif, dan dirancang untuk meningkatkan kredibilitas serta konversi bisnis Anda.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile (Android & iOS)",
    description:
      "Pengembangan aplikasi mobile native dan cross-platform yang stabil, cepat, dan mudah digunakan untuk memperluas jangkauan bisnis Anda.",
  },
  {
    icon: Palette,
    title: "UI/UX Design Berorientasi Bisnis",
    description:
      "Desain antarmuka modern dan pengalaman pengguna yang intuitif untuk meningkatkan engagement, retensi pengguna, dan kepercayaan pelanggan.",
  },
  {
    icon: Server,
    title: "Backend & API Scalable",
    description:
      "Arsitektur backend yang aman dan scalable, lengkap dengan API handal untuk mendukung website dan aplikasi bisnis jangka panjang.",
  },
  {
    icon: Shield,
    title: "Keamanan & Perlindungan Data",
    description:
      "Sistem keamanan berlapis dan praktik terbaik untuk melindungi data, transaksi, serta memastikan aplikasi Anda tetap aman dan stabil.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support Berkelanjutan",
    description:
      "Layanan maintenance website dan aplikasi, update sistem, serta dukungan teknis agar platform Anda selalu optimal dan bebas masalah.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Layanan Kami"
          title="Solusi Lengkap untuk Website & Aplikasi Bisnis Anda"
          description="Flowdev Teams menyediakan layanan web dan app development end-to-end untuk membantu bisnis Anda tumbuh lebih cepat di era digital."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="group flex-1 h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl mx-auto bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary " />
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
            <Link href="/services">
              Jelajahi Semua Layanan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
