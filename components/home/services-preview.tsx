"use client"

import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Palette, Server, Shield, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and drive results.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight users and achieve business goals.",
  },
  {
    icon: Server,
    title: "Backend Solutions",
    description: "Scalable server architecture and APIs that power your applications reliably.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Robust security measures and compliance solutions to protect your data.",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "24/7 support and ongoing maintenance to keep your applications running smoothly.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Everything You Need to Succeed Online"
          description="We offer comprehensive digital solutions to help your business thrive in the modern digital landscape."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
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
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
