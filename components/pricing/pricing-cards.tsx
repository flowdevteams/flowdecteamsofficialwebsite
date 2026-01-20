"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "2,499",
    period: "project",
    popular: false,
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
      "1 month support",
      "Content management system",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "5,999",
    period: "project",
    popular: true,
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "E-commerce functionality",
      "3 months support",
      "Analytics integration",
      "API integrations",
      "Performance optimization",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "Custom",
    period: "quote",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom development",
      "Dedicated project manager",
      "Priority support 24/7",
      "12 months support",
      "Custom integrations",
      "Load testing & optimization",
      "SLA guarantee",
      "Source code ownership",
    ],
    cta: "Contact Sales",
  },
]

export function PricingCards() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div
                className={cn(
                  "relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-primary/5 border-primary shadow-xl shadow-primary/10"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && (
                      <span className="text-2xl text-muted-foreground">$</span>
                    )}
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    {plan.period === "quote" ? "Custom quote" : `per ${plan.period}`}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All plans include free consultation and project scoping. 
              <Link href="/contact" className="text-primary hover:underline ml-1">
                Contact us
              </Link>
              {" "}for custom requirements.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
