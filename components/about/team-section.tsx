"use client"

import { Linkedin, Twitter, Github } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const team = [
  {
    name: "Alif Haikal",
    role: "Product Strategist & Lead Engineer",
    bio: "Visioner digital yang memimpin strategi produk dan pengembangan teknologi untuk mendorong pertumbuhan serta inovasi berkelanjutan.",
    image: "/team/alif.png",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Zainul Rahmat",
    role: "System Architect & Full-Stack Engineer",
    bio: "Arsitek sistem dan full-stack developer berpengalaman dalam merancang infrastruktur aplikasi yang scalable, aman, dan efisien.",
    image: "/team/zainul.jpg",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Bagas Aditya",
    role: "UI/UX & Product Experience Designer",
    bio: "Spesialis UI/UX yang fokus pada desain modern, usability tinggi, dan peningkatan konversi melalui pengalaman pengguna yang optimal.",
    image: "/team/bagas.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ahmad Sholehuddin",
    role: "Cloud & Infrastructure Engineer",
    bio: "Ahli cloud dan server dengan pengalaman membangun, mengelola, dan mengamankan infrastruktur berbasis cloud untuk kebutuhan skala bisnis.",
    image: "/team/ahmad.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Mohammad Riky Fahrian",
    role: "Frontend & Backend Engineer",
    bio: "Software engineer berpengalaman dengan fokus pada React, Next.js, dan Node.js untuk membangun aplikasi web modern berperforma tinggi.",
    image: "/team/riky.jpg",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Tiana Ramdhani",
    role: "Machine Learning & Data Engineer",
    bio: "Spesialis machine learning dan data analysis dalam pengembangan model prediktif, automasi cerdas, dan solusi berbasis AI.",
    image: "/team/tiana.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
]

export function TeamSection() {
  return (
    <section className="team-section py-20 lg:py-28 bg-background relative overflow-hidden">
      
      <div className="team-dotgrid pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[400px] -translate-y-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[400px] translate-y-1/2 rounded-full bg-primary/6 blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Tim Kami"
          title="Profesional di Balik Kesuksesan Digital Anda"
          description="Flowdev Teams didukung oleh tim profesional berpengalaman di bidang teknologi, desain, cloud, dan kecerdasan buatan untuk menghadirkan solusi digital terbaik."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-16">
          {team.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-in-up"
              delay={index * 80}
            >
              <div className="team-card group relative h-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border">

                <div className="card-border-glow absolute inset-0 rounded-2xl pointer-events-none" />

                {/* PHOTO */}
                <div
                  className="photo-block relative w-full overflow-hidden"
                  style={{ aspectRatio: "5/6" }}  // Portrait ratio
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/75 via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_22%] scale-[0.96] transition-all duration-700 ease-out saturate-100 group-hover:saturate-[0.85] group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="photo-label absolute bottom-0 left-0 right-0 z-20 px-5 pb-4 pt-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center gap-3 justify-between">
                      <div className="h-px flex-1 bg-white/25" />
                      <div className="flex gap-1.5">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="photo-social w-7 h-7 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                          >
                            <Linkedin className="h-3 w-3" />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            className="photo-social w-7 h-7 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                          >
                            <Twitter className="h-3 w-3" />
                          </a>
                        )}
                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            className="photo-social w-7 h-7 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                          >
                            <Github className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <span className="absolute top-3 right-3 z-20 w-6 h-6 rounded-md bg-background/65 backdrop-blur-sm border border-border/50 flex items-center justify-center text-[10px] font-mono text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                  <div className="relative h-px bg-border mb-4 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-primary/50 transition-all duration-600 ease-out" />
                  </div>

                  <h3 className="text-base font-semibold text-foreground tracking-tight mb-1 leading-snug">
                    {member.name}
                  </h3>

                  <p className="text-xs font-medium text-primary mb-3 tracking-wide uppercase">
                    {member.role}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-dotgrid {
          background-image: radial-gradient(
            circle,
            hsl(var(--primary) / 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }

        .team-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease,
            border-color 0.4s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: hsl(var(--primary) / 0.45);
          box-shadow:
            0 0 0 1px hsl(var(--primary) / 0.12),
            0 28px 60px -16px hsl(var(--primary) / 0.28),
            0 8px 20px -8px rgba(0, 0, 0, 0.12);
        }

        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .card-border-glow {
          background: conic-gradient(
            from var(--angle, 0deg),
            transparent 0%,
            hsl(var(--primary) / 0.7) 8%,
            hsl(var(--primary) / 0.3) 15%,
            transparent 22%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .team-card:hover .card-border-glow {
          opacity: 1;
          animation: border-spin 2.8s linear infinite;
        }

        @keyframes border-spin {
          to { --angle: 360deg; }
        }

        .photo-label {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.35s ease;
        }

        .transition-all.duration-600 {
          transition-duration: 600ms;
        }

        .bg-primary\/8 { background-color: hsl(var(--primary) / 0.08); }
        .bg-primary\/6 { background-color: hsl(var(--primary) / 0.06); }
      `}</style>
    </section>
  )
}