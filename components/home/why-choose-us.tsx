"use client"

import { Check, Users, Rocket, Award, Clock } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our seasoned developers and designers bring years of experience to every project.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodology ensures quick turnaround without compromising quality.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and code reviews guarantee exceptional deliverables.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance to keep your applications running smoothly.",
  },
]

const benefits = [
  "Custom solutions tailored to your needs",
  "Transparent pricing with no hidden fees",
  "Regular progress updates and communication",
  "Post-launch support and maintenance",
  "Scalable architecture for future growth",
  "Industry best practices and standards",
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionHeader
              badge="Why Choose Us"
              title="We Deliver Results That Matter"
              description="Partner with a team that understands your vision and has the expertise to bring it to life."
              centered={false}
            />

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={feature.title}
                  animation="fade-in-left"
                  delay={index * 100}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Content - Benefits List */}
          <AnimatedSection animation="fade-in-right" delay={200}>
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What You Get With Us
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
