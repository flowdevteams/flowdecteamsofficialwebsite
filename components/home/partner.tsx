"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeader } from "@/components/section-header"

const partners = [
    {
        name: "Gohost",
        logo: "/logo/gohost.png",
        url: "https://gohost.id",
    },
    {
        name: "DMG",
        logo: "https://didinmediagroup.s3.ap-southeast-3.amazonaws.com/assets/img/logo-dmghost.svg",
        url: "https://www.didinmediagroup.com/",
    },
]

export function PartnersSection() {
    return (
        <section className="border-b border-border/60 bg-muted/35 py-8 sm:py-16 lg:py-24">
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

                <SectionHeader
                    badge="Partner & Vendor Teknologi"
                    title="Bekerja Sama dengan Vendor Terpercaya"
                    description="Flowdev Teams Berkolaborasi Dengan Berbagai Vendor Dan Platform Teknologi Untuk Memastikan Kualitas, Performa, Dan Keamanan Setiap Solusi Digital Yang Kami Bangun."
                />
                <div className="mt-6 sm:mt-12 grid grid-cols-2 gap-2 sm:gap-5 max-w-xs sm:max-w-2xl mx-auto">
                    {partners.map((partner, index) => (
                        <AnimatedSection
                            key={partner.name}
                            animation="fade-in-up"
                            delay={index * 80}
                        >
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex h-20 sm:h-36 lg:h-40 w-full items-center justify-center rounded-xl border border-border/70 bg-card p-3 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={`Logo Partner ${partner.name}`}
                                    width={240}
                                    height={60}
                                    className="max-h-10 sm:max-h-14 w-auto object-contain mx-auto transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 sm:h-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Divider */}
                <div className="mt-8 sm:mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
        </section>
    )
}
