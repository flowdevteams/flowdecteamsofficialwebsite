"use client"

import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
  { name: "Vercel", category: "Hosting" },
  { name: "Figma", category: "Design" },
  { name: "Git", category: "Version Control" },
]

export function TechStack() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology"
          title="Our Tech Stack"
          description="We use cutting-edge technologies to build robust, scalable, and maintainable solutions."
        />

        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={tech.name}
              animation="scale-in"
              delay={index * 30}
            >
              <div className="group px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
