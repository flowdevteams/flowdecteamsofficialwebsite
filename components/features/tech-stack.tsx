"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const technologies = [
  { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", category: "Bahasa Pemrograman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

{
  name: "NestJS",
  category: "Backend Framework",
  logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nestjs.svg",
},

  {
    name: "JWT",
    category: "Authentication",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jsonwebtokens.svg",
  },
  { name: "Docker", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", category: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },

  { name: "Tailwind CSS", category: "Styling", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg" },

  { name: "GraphQL", category: "API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Redis", category: "Cache", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },// 🔥 FIX Vercel
  { name: "Vercel", category: "Hosting", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg" },

  { name: "Figma", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", category: "Version Control", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

export function TechStack() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Teknologi"
          title="Tech Stack Modern yang Kami Gunakan"
          description="Flowdev Teams menggunakan teknologi terbaik dan teruji untuk membangun aplikasi web yang cepat, aman, scalable, dan siap mendukung pertumbuhan bisnis jangka panjang."
        />

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={tech.name}
              animation="scale-in"
              delay={index * 30}
            >
              <div className="group w-44 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <Image
                    src={tech.logo}
                    alt={`Logo ${tech.name}`}
                    width={40}
                    height={40}
                    className="object-contain "
                  />

                </div>
                <div className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
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
