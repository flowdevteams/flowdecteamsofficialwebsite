"use client"

import { Linkedin, Twitter, Github } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const team = [
  {
    name: "Alif Haikal",
    role: "Founder & CEO",
    bio: "Visioner digital yang memimpin strategi bisnis dan pengembangan produk teknologi untuk mendorong pertumbuhan dan inovasi berkelanjutan.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Zainul Rahmat",
    role: "Chief Technology Officer (CTO)",
    bio: "Arsitek sistem dan full-stack developer berpengalaman dalam merancang infrastruktur aplikasi yang scalable, aman, dan efisien.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Bagas Aditya",
    role: "Lead UI/UX Designer",
    bio: "Spesialis UI/UX yang fokus pada desain modern, usability tinggi, dan peningkatan konversi melalui pengalaman pengguna yang optimal.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ahmad Sholehuddin",
    role: "Founder DMG & Cloud Infrastructure Specialist",
    bio: "Ahli cloud dan server dengan pengalaman membangun, mengelola, dan mengamankan infrastruktur berbasis cloud untuk kebutuhan skala bisnis.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mohammad Riky Fahrian",
    role: "Senior Software Engineer",
    bio: "Software engineer berpengalaman dengan fokus pada React, Next.js, dan Node.js untuk membangun aplikasi web modern berperforma tinggi.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Tiana Ramdhani",
    role: "Machine Learning Engineer",
    bio: "Spesialis machine learning dan data analysis dalam pengembangan model prediktif, automasi cerdas, dan solusi berbasis AI.",
    socials: { linkedin: "#", twitter: "#" },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tim Kami"
          title="Profesional di Balik Kesuksesan Digital Anda"
          description="Flowdev Teams didukung oleh tim profesional berpengalaman di bidang teknologi, desain, cloud, dan kecerdasan buatan untuk menghadirkan solusi digital terbaik."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {team.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="group flex-1 h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={`LinkedIn ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={`Twitter ${member.name}`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={`GitHub ${member.name}`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
