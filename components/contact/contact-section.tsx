"use client"

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
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
    href: "mailto:flodev261123@gmail.com",
    description: "Respon maksimal dalam 24 jam kerja",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    isPhones: true,
    phones: [
      { label: "Admin 1", number: "+62 815-7467-3448", href: "https://wa.me/6281574673448" },
      { label: "Admin 2", number: "+62 877-0916-5697", href: "https://wa.me/6287709165697" },
    ],
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <AnimatedSection animation="fade-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                <AccentTitle text="Konsultasikan Kebutuhan Digital Anda" highlightWords={2} />
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Diskusikan rencana pembuatan Landing Page konversi, Aplikasi Web/SaaS bisnis, atau integrasi Kecerdasan Buatan (AI) bersama tim developer Flowdev Teams.
              </p>
              
              {/* Direct Guarantees */}
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1.5 sm:gap-2.5 mb-6 sm:mb-8 text-[10px] sm:text-xs font-semibold">
                <span className="px-1.5 sm:px-3 py-1 rounded-lg sm:rounded-full bg-primary/10 text-primary border border-primary/20 text-center truncate">
                  <span className="sm:hidden">✓ WA &lt; 15m</span>
                  <span className="hidden sm:inline">✓ Respon WhatsApp &lt; 15 Menit</span>
                </span>
                <span className="px-1.5 sm:px-3 py-1 rounded-lg sm:rounded-full bg-primary/10 text-primary border border-primary/20 text-center truncate">
                  <span className="sm:hidden">✓ Konsul Gratis</span>
                  <span className="hidden sm:inline">✓ Konsultasi Awal 100% Gratis</span>
                </span>
                <span className="px-1.5 sm:px-3 py-1 rounded-lg sm:rounded-full bg-primary/10 text-primary border border-primary/20 text-center truncate">
                  <span className="sm:hidden">✓ Garansi NDA</span>
                  <span className="hidden sm:inline">✓ Jaminan Kerahasiaan NDA</span>
                </span>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-2 sm:gap-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection
                  key={info.title}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <div className="p-3 sm:p-6 flex-1 h-full rounded-xl sm:rounded-2xl bg-card border text-center border-border hover:border-primary/30 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                        <info.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base line-clamp-1">
                        {info.title}
                      </h3>
                      
                      {info.isPhones ? (
                        <div className="space-y-1 mb-2 sm:mb-3">
                          {info.phones?.map((p) => (
                            <a
                              key={p.number}
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
                            >
                              {p.number}
                            </a>
                          ))}
                        </div>
                      ) : info.href ? (
                        <p className="mb-2 sm:mb-3">
                          <a 
                            href={info.href} 
                            className="text-foreground font-medium text-xs sm:text-sm hover:text-primary transition-colors truncate block max-w-full"
                          >
                            {info.content}
                          </a>
                        </p>
                      ) : (
                        <p className="text-foreground font-medium text-xs sm:text-sm mb-2 sm:mb-3 truncate">
                          {info.content}
                        </p>
                      )}
                    </div>

                    <p className="text-[10.5px] sm:text-xs text-muted-foreground line-clamp-2">
                      {info.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Map Placeholder */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-muted/50 border border-border overflow-hidden h-48 sm:h-64 flex items-center justify-center">
                <InteractiveMap />
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div>
            <AnimatedSection animation="fade-in-right">
              <div className="p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground">
                    <AccentTitle text="Kirim Pesan & Mulai Diskusi" highlightWords={2} />
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
