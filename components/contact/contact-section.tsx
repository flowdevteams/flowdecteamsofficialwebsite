"use client"

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "./contact-form"
import dynamic from "next/dynamic"

const InteractiveMap = dynamic(
  () => import("@/components/interactive-map").then(m => m.InteractiveMap),
  { ssr: false }
)

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "flodev261123@gmail.com",
    description: "Respon maksimal dalam 24 jam kerja",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    content: "+62 815-7467-3448",
    description: "Senin – Sabtu, 09.00 – 18.00 WIB",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    content: "Bekasi, Indonesia",
    description: "Melayani klien seluruh Indonesia",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin – Sabtu",
    description: "09.00 – 18.00 WIB",
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
                Konsultasikan Kebutuhan Digital Anda
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Siap mengembangkan website, aplikasi, atau sistem digital untuk bisnis Anda?  
                Tim kami siap membantu dari tahap perencanaan hingga implementasi.
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
                    <p className="text-foreground font-medium">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Map Placeholder */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="mt-8 rounded-2xl bg-muted/50 border border-border overflow-hidden h-64 flex items-center justify-center">
              
                  <InteractiveMap />
            
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
                    Kirim Pesan & Mulai Diskusi
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
