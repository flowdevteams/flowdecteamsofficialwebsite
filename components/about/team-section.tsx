"use client"

import { Linkedin, Twitter, Github } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Full-stack expert and architecture guru",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Marcus Williams",
    role: "Lead Designer",
    bio: "Award-winning UI/UX specialist",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Emma Rodriguez",
    role: "Project Manager",
    bio: "Agile certified delivery expert",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    bio: "React and Node.js specialist",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Lisa Patel",
    role: "Marketing Director",
    bio: "Digital marketing strategist",
    socials: { linkedin: "#", twitter: "#" },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Team"
          title="Meet the Experts Behind Your Success"
          description="A talented group of professionals dedicated to bringing your vision to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {team.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>

                  {/* Socials */}
                  <div className="flex items-center justify-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="GitHub"
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
