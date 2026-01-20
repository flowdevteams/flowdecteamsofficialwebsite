"use client"

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "./contact-form"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "flodev261123@gmail.com",
    description: "Well respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+62 815-7467-3448",
    description: "Mon-Sat from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Innovation Street",
    description: "Bekasi, Indonesia",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Saturday",
    description: "9:00 AM - 6:00 PM PST",
  },
]

export function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <AnimatedSection animation="fade-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your ideas to life? We are here to help you succeed. 
                Reach out through any of the channels below or fill out the form.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection
                  key={info.title}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Map Placeholder */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="mt-8 rounded-2xl bg-muted/50 border border-border overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-primary/50" />
                  <p>Interactive map would go here</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div>
            <AnimatedSection animation="fade-in-right">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </h3>
                </div>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
