"use client"

import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Palette, Server, ShoppingCart, BarChart3, Shield, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. From simple landing pages to complex enterprise solutions, we deliver high-performance web experiences.",
    features: ["Custom CMS Development", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We build apps that users love with intuitive interfaces and powerful functionality.",
    features: ["iOS Development", "Android Development", "React Native Apps", "Flutter Development"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered design that converts. We create intuitive interfaces and seamless experiences that delight users and achieve business goals.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable server architecture and robust APIs that power your applications. We build backends that are secure, fast, and ready to scale.",
    features: ["API Development", "Database Design", "Cloud Architecture", "Microservices"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms that drive sales. From product catalogs to checkout, we build online stores that convert visitors into customers.",
    features: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Analytics Dashboard"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your business. We help you reach your target audience and convert them into loyal customers.",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "PPC Campaigns"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security solutions to protect your digital assets. We ensure your applications meet industry standards and regulatory requirements.",
    features: ["Security Audits", "Penetration Testing", "GDPR Compliance", "Data Encryption"],
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "24/7 support and ongoing maintenance to keep your applications running smoothly. We are your long-term partner in digital success.",
    features: ["24/7 Monitoring", "Bug Fixes", "Performance Optimization", "Regular Updates"],
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
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="gap-2 group/btn bg-transparent">
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
