"use client"

import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex applications may take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options. Typically, we require 50% upfront and 50% upon project completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "What happens after the project is completed?",
    answer: "All plans include a support period after launch. We'll help with bug fixes, minor adjustments, and answer any questions. Extended maintenance packages are available for ongoing support.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! Your project can grow with your business. We can add features, pages, or functionality at any time. Contact us to discuss your needs and we'll provide a quote for additional work.",
  },
  {
    question: "Do you provide hosting services?",
    answer: "We can recommend and set up hosting solutions tailored to your needs. While hosting costs are separate from our development fees, we'll ensure your site is deployed on reliable, fast servers.",
  },
  {
    question: "What if I'm not satisfied with the final product?",
    answer: "Your satisfaction is our priority. We include revision rounds in all projects and work closely with you throughout the process. We don't consider a project complete until you're happy with the results.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our pricing and services."
        />

        <AnimatedSection animation="fade-in-up" delay={200} className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
