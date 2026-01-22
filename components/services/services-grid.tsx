"use client"

import Link from "next/link"
import {
  ArrowRight,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Kami menyediakan layanan pengembangan website dan aplikasi web profesional dengan teknologi modern. Dirancang untuk performa tinggi, skalabilitas, dan kemudahan pengelolaan bisnis Anda.",
    features: [
      "Website Company Profile",
      "Web Application Custom",
      "E-Commerce & Dashboard",
      "Integrasi API & Sistem",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Pengembangan aplikasi mobile Android dan iOS dengan desain intuitif dan performa optimal. Cocok untuk startup, UMKM, hingga kebutuhan enterprise.",
    features: [
      "Android & iOS App",
      "Cross-Platform App",
      "UI Native & Smooth UX",
      "Integrasi Backend & API",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Arsitektur backend yang aman, cepat, dan siap berkembang. Kami membangun sistem server dan API yang menjadi fondasi aplikasi web dan mobile Anda.",
    features: [
      "REST & GraphQL API",
      "Database Design",
      "Cloud & Deployment",
      "Authentication & Security",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Desain antarmuka modern yang fokus pada pengalaman pengguna dan konversi. Setiap desain dibuat berdasarkan kebutuhan bisnis dan perilaku pengguna.",
    features: [
      "User Flow & Wireframe",
      "Prototype Interaktif",
      "Design System",
      "High-Conversion UI",
    ],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-in-up"
              delay={index * 100}
            >
           <div className="group h-full p-6 sm:p-8 rounded-2xl bg-card border border-border">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
      <service.icon className="h-5 w-5 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-foreground leading-tight">
      {service.title}
    </h3>
  </div>

  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
    {service.description}
  </p>

  <ul className="space-y-2 mb-6">
    {service.features.map((feature) => (
      <li key={feature} className="flex items-center gap-2 text-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        {feature}
      </li>
    ))}
  </ul>

  <Button
    asChild
    variant="outline"
    size="sm"
    className="w-full gap-2"
  >
    <Link href="/contact">
      Konsultasi Sekarang
      <ArrowRight className="h-4 w-4" />
    </Link>
  </Button>
</div>

            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
