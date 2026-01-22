"use client"

import {
  Rocket,
  Shield,
  Smartphone,
  Palette,
  Database,
  Cloud,
  BarChart3,
  Lock,
  Zap,
  RefreshCw,
  Globe,
  Headphones,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const features = [
  {
    icon: Rocket,
    title: "Performa Super Cepat",
    description: "Kode yang dioptimalkan dan framework modern memastikan aplikasi Anda berjalan cepat, stabil, dan responsif.",
  },
  {
    icon: Shield,
    title: "Keamanan Enterprise",
    description: "Penerapan standar keamanan industri dan best practice untuk melindungi data serta sistem bisnis Anda.",
  },
  {
    icon: Smartphone,
    title: "Desain Responsif",
    description: "Tampilan presisi yang menyesuaikan sempurna di semua perangkat, mulai dari mobile hingga desktop.",
  },
  {
    icon: Palette,
    title: "UI/UX Kustom",
    description: "Desain antarmuka eksklusif yang mencerminkan identitas brand dan meningkatkan pengalaman pengguna.",
  },
  {
    icon: Database,
    title: "Arsitektur Scalable",
    description: "Sistem dirancang untuk tumbuh bersama bisnis Anda, mampu menangani trafik dan data yang terus meningkat.",
  },
  {
    icon: Cloud,
    title: "Integrasi Cloud",
    description: "Terintegrasi dengan layanan cloud terpercaya untuk performa, skalabilitas, dan keandalan maksimal.",
  },
  {
    icon: BarChart3,
    title: "Analitik & Insight",
    description: "Pemantauan performa dan perilaku pengguna berbasis data untuk mendukung pengambilan keputusan bisnis.",
  },
  {
    icon: Lock,
    title: "Privasi & Proteksi Data",
    description: "Solusi yang memprioritaskan perlindungan data dan kepatuhan terhadap standar privasi global.",
  },
  {
    icon: Zap,
    title: "Pengembangan API",
    description: "REST API dan GraphQL yang andal untuk integrasi sistem dan layanan pihak ketiga secara seamless.",
  },
  {
    icon: RefreshCw,
    title: "Pembaruan Berkelanjutan",
    description: "Maintenance dan update rutin untuk menjaga sistem tetap aman, stabil, dan relevan.",
  },
  {
    icon: Globe,
    title: "Dukungan Multi Bahasa",
    description: "Siap menjangkau pasar global dengan sistem yang mendukung berbagai bahasa dan lokasi.",
  },
  {
    icon: Headphones,
    title: "Support Teknis 24/7",
    description: "Dukungan teknis profesional sepanjang waktu untuk memastikan operasional bisnis tanpa hambatan.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Layanan Kami"
          title="Fitur Lengkap untuk Pertumbuhan Bisnis"
          description="Setiap solusi yang kami bangun dilengkapi fitur unggulan untuk mendukung efisiensi, skalabilitas, dan kesuksesan bisnis Anda."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="fade-in-up"
              delay={index * 50}
            >
              <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
