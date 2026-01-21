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
        <section className="py-20 lg:py-24 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <SectionHeader
                    badge="Partner & Vendor Teknologi"
                    title="Bekerja Sama dengan Vendor Terpercaya"
                    description="Flowdev Teams berkolaborasi dengan berbagai vendor dan platform teknologi untuk memastikan kualitas, performa, dan keamanan setiap solusi digital yang kami bangun."
                />
                <div className="mt-16 flex flex-wrap justify-center gap-8">
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
                                className="group relative w-72 h-45 p-2 flex items-center justify-center rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
                            >

                                <Image
                                    src={partner.logo}
                                    alt={`Logo Partner ${partner.name}`}
                                    width={240}
                                    height={60}
                                    className="
            max-h-full w-full
           mx-auto
            transition-all duration-300
            group-hover:opacity-100
            group-hover:grayscale-0
          "
                                />

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>


                {/* Divider */}
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
        </section>
    )
}
