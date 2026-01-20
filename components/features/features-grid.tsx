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
    title: "Lightning Fast Performance",
    description: "Optimized code and modern frameworks ensure your applications load instantly and run smoothly.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Industry-standard security protocols and best practices protect your data and users.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Pixel-perfect layouts that adapt seamlessly to any device or screen size.",
  },
  {
    icon: Palette,
    title: "Custom UI/UX",
    description: "Unique, branded interfaces designed to engage users and reflect your identity.",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased traffic and data effortlessly.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud providers for reliable hosting and services.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Built-in analytics to track performance, user behavior, and business metrics.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "GDPR-compliant solutions that prioritize user privacy and data protection.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs for seamless third-party integrations.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates",
    description: "Regular updates and improvements to keep your applications current and secure.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Internationalization ready to reach audiences worldwide in their language.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your systems run without interruption.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Offer"
          title="Features Built for Success"
          description="Every solution we create comes packed with powerful features to help your business thrive."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="fade-in-up"
              delay={index * 50}
            >
              <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
