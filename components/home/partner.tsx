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
        <section className="border-b border-border/60 bg-muted/35 py-14 sm:py-20 lg:py-24">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    badge="Partner & Vendor Teknologi"
                    title="Bekerja Sama dengan Vendor Terpercaya"
                    description="Flowdev Teams berkolaborasi dengan berbagai vendor dan platform teknologi untuk memastikan kualitas, performa, dan keamanan setiap solusi digital yang kami bangun."
                />
                <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-5">
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
                                className="group relative flex h-36 sm:h-44 w-full max-w-[288px] sm:w-72 items-center justify-center rounded-xl border border-border/70 bg-card p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={`Logo Partner ${partner.name}`}
                                    width={240}
                                    height={60}
                                    className="max-h-full w-full mx-auto transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Divider */}
                <div className="mt-14 sm:mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
        </section>
    )
}
