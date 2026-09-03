"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Linkedin, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  LayoutGrid, 
  Eye, 
  Flame, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Terminal,
  Compass,
  Palette,
  Server,
  Brain
} from "lucide-react"
import { Reveal, Marquee } from "react-kino"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: string
  name: string
  role: string
  division: string
  bio: string
  image: string
  skills: string[]
  expertise: { label: string; level: number }[]
  socials: { linkedin?: string; twitter?: string; github?: string }
  portfolioUrl?: string
  accentColor: string
  icon: any
}

const teamMembers: TeamMember[] = [
  {
    id: "alif",
    name: "Alif Haikal",
    role: "Product Strategist & Lead Engineer",
    division: "Leadership & Architecture",
    bio: "Visioner digital yang memimpin strategi produk, arsitektur sistem skala enterprise, dan pengembangan teknologi untuk mendorong pertumbuhan serta inovasi bisnis berkelanjutan.",
    image: "/team/alif.png",
    skills: ["System Architecture", "Product Strategy", "Next.js 16", "Cloud Systems", "Full-Stack"],
    expertise: [
      { label: "Product & Tech Leadership", level: 98 },
      { label: "System Architecture", level: 96 },
      { label: "Full-Stack Engineering", level: 95 }
    ],
    socials: { linkedin: "https://www.linkedin.com/in/alif-haikal-67a307378/" },
    portfolioUrl: "https://alifhaikalportfolio.flowdevteams.com/",
    accentColor: "from-primary to-blue-900",
    icon: Compass
  },
  {
    id: "zainul",
    name: "Zainul Rahmat",
    role: "System Architect & Full-Stack Engineer",
    division: "Backend & Systems",
    bio: "Arsitek sistem dan full-stack developer berpengalaman dalam merancang infrastruktur aplikasi berskala besar yang scalable, aman, berkecepatan tinggi, dan efisien.",
    image: "/team/zainul.png",
    skills: ["Node.js", "PostgreSQL", "System Scalability", "API Architecture", "Docker"],
    expertise: [
      { label: "Scalable Backend", level: 97 },
      { label: "Database Optimization", level: 95 },
      { label: "Microservices & API", level: 94 }
    ],
    socials: { linkedin: "#" },
    portfolioUrl: "https://zainulrhmtportfolio.flowdevteams.com/",
    accentColor: "from-primary to-blue-900",
    icon: Server
  },
  {
    id: "bagas",
    name: "Bagas Aditya",
    role: "Data Analytics & UI/UX Designer",
    division: "Design & User Experience",
    bio: "Spesialis UI/UX dan analitik data yang fokus pada desain modern berstandar internasional, usability tinggi, serta peningkatan konversi melalui pengalaman pengguna yang intuitif.",
    image: "/team/bagas.png",
    skills: ["Figma", "Design Systems", "UI/UX Research", "Data Analytics", "Prototyping"],
    expertise: [
      { label: "UI/UX Design Systems", level: 98 },
      { label: "Conversion Optimization", level: 95 },
      { label: "User Research & Flow", level: 93 }
    ],
    socials: { linkedin: "#" },
    portfolioUrl: "https://bagasaditya.web.id/",
    accentColor: "from-primary to-blue-900",
    icon: Palette
  },
  {
    id: "didin",
    name: "Ahmad Sholehuddin",
    role: "Cloud & Infrastructure Engineer",
    division: "DevOps & Infrastructure",
    bio: "Ahli cloud computing dan DevOps dengan jam terbang tinggi dalam membangun, mengelola, serta mengamankan infrastruktur server high-availability untuk kebutuhan korporasi.",
    image: "/team/didin.png",
    skills: ["Cloud Architecture", "Linux Servers", "Kubernetes", "DevOps CI/CD", "Security Hardening"],
    expertise: [
      { label: "Cloud Infrastructure", level: 97 },
      { label: "Server Security & SLA", level: 96 },
      { label: "DevOps Automation", level: 94 }
    ],
    socials: { linkedin: "https://www.linkedin.com/in/achmadsholehudin" },
    portfolioUrl: "#",
    accentColor: "from-primary to-blue-900",
    icon: Server
  },
  {
    id: "riky",
    name: "Mohammad Riky Fahrian",
    role: "Frontend & Backend Engineer",
    division: "Full-Stack Development",
    bio: "Software engineer berpengalaman dengan spesialisasi ekosistem React, Next.js, dan backend modern untuk menghasilkan aplikasi web dengan performa prima dan animasi interaktif.",
    image: "/team/riky.png",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js API"],
    expertise: [
      { label: "Modern Frontend (Next.js)", level: 96 },
      { label: "Interactive Web UI", level: 95 },
      { label: "API Integration", level: 93 }
    ],
    socials: { linkedin: "https://www.linkedin.com/in/rikyfahrian/" },
    portfolioUrl: "https://rikyfahrian.vercel.app",
    accentColor: "from-primary to-blue-900",
    icon: Code2
  },
  {
    id: "tian",
    name: "Tiana Ramdhani",
    role: "Machine Learning & Data Engineer",
    division: "AI & Intelligence",
    bio: "Spesialis Machine Learning, Deep Learning, dan Data Engineering dalam pengembangan model prediktif cerdas, computer vision, serta integrasi Large Language Models (LLM).",
    image: "/team/tian.png",
    skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Data Pipelines"],
    expertise: [
      { label: "Machine Learning Models", level: 96 },
      { label: "Deep Learning & Vision", level: 95 },
      { label: "Data Pipeline & ETL", level: 92 }
    ],
    socials: { linkedin: "https://www.linkedin.com/in/tianaramdani/" },
    portfolioUrl: "#",
    accentColor: "from-primary to-blue-900",
    icon: Brain
  },
  {
    id: "fazril",
    name: "Fazril",
    role: "Professional Software Engineer",
    division: "Core Software Engineering",
    bio: "Software engineer profesional berdedikasi tinggi yang fokus pada pengembangan solusi perangkat lunak inovatif, arsitektur kode bersih, serta keandalan sistem jangka panjang.",
    image: "/team/fazril.png",
    skills: ["Full-Stack Engineering", "TypeScript", "Clean Architecture", "REST & GraphQL", "Testing"],
    expertise: [
      { label: "Core Software Engineering", level: 96 },
      { label: "Code Quality & Testing", level: 94 },
      { label: "Full-Stack Delivery", level: 95 }
    ],
    socials: { linkedin: "#" },
    portfolioUrl: "https://fazril210.github.io/fazrilmv.github.io/",
    accentColor: "from-primary to-blue-900",
    icon: Terminal
  },
]

export function TeamSection() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight")

  const currentMember = teamMembers[activeMemberIndex] || teamMembers[0]

  const nextMember = () => {
    setActiveMemberIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setActiveMemberIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-card/40 to-background border-b border-border/60 overflow-hidden">
      
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 saas-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-[450px] h-[450px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-xs">
              <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
              Talenta Terbaik di Bidangnya
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight font-serif">
              Profesional di Balik Kesuksesan Digital Anda
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Flowdev Teams digerakkan oleh engineer, arsitek sistem, desainer UI/UX, dan spesialis AI yang berdedikasi tinggi mewujudkan solusi teknologi kelas dunia untuk bisnis Anda.
            </p>
          </div>

          {/* View Mode Switcher Toggle */}
          <div className="flex items-center gap-1.5 p-1 bg-card rounded-2xl border border-border/80 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setViewMode("spotlight")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                viewMode === "spotlight"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              Spotlight Imersif
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Semua Tim ({teamMembers.length})
            </button>
          </div>
        </div>

        {/* ================= MODE 1: SPOTLIGHT IMERSIF ================= */}
        {viewMode === "spotlight" && (
          <div className="flex flex-col gap-8">
            
            {/* Interactive Member Selector Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {teamMembers.map((member, idx) => (
                <button
                  key={member.id}
                  onClick={() => setActiveMemberIndex(idx)}
                  className={cn(
                    "group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all duration-300",
                    activeMemberIndex === idx
                      ? "border-primary bg-primary/10 shadow-md shadow-primary/10 scale-105"
                      : "border-border/70 bg-card/70 hover:border-primary/40 hover:bg-card"
                  )}
                >
                  <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-border shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="32px"
                    />
                  </div>
                  <div className="text-left hidden sm:block">
                    <h4 className={cn("text-xs font-bold leading-none", activeMemberIndex === idx ? "text-primary" : "text-foreground")}>
                      {member.name}
                    </h4>
                    <span className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                      {member.role.split("&")[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* MAIN SPOTLIGHT STAGE CARD */}
            <div className="relative rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-500">
              
              {/* Dynamic Glow: Rich Deep Blue matching Primary Button */}
              <div className="absolute -top-28 -right-28 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-40 pointer-events-none bg-primary" />
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl opacity-30 pointer-events-none bg-blue-600" />
              <div className="absolute inset-0 saas-grid opacity-20 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* PHOTO & BADGES (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-border/80 bg-muted/40 shadow-xl group">
                    
                    <Image
                      src={currentMember.image}
                      alt={currentMember.name}
                      fill
                      priority
                      className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />

                    {/* Number & Role Badge Overlay */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-xs font-mono font-bold text-primary shadow-xs">
                      #{String(activeMemberIndex + 1).padStart(2, "0")} / {String(teamMembers.length).padStart(2, "0")}
                    </div>

                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground backdrop-blur-md text-[11px] font-semibold shadow-xs">
                      {currentMember.division}
                    </div>

                    {/* Social & Portfolio Bar at bottom of photo */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between p-2 rounded-xl bg-card/90 backdrop-blur-md border border-border/70 shadow-md">
                      <div className="flex items-center gap-2">
                        {currentMember.socials.linkedin && currentMember.socials.linkedin !== "#" && (
                          <a
                            href={currentMember.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        <span className="text-[11px] font-mono text-muted-foreground font-semibold">
                          Verified Expert
                        </span>
                      </div>

                      {currentMember.portfolioUrl && currentMember.portfolioUrl !== "#" && (
                        <a
                          href={currentMember.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-xs hover:bg-primary/90 transition-colors"
                        >
                          Portfolio
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Prev / Next Navigation Buttons */}
                  <div className="flex items-center gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevMember}
                      className="rounded-xl px-3 h-9 gap-1 text-xs font-medium border-border/80"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Sebelumnya
                    </Button>
                    <span className="text-xs font-mono text-muted-foreground">
                      {activeMemberIndex + 1} of {teamMembers.length}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextMember}
                      className="rounded-xl px-3 h-9 gap-1 text-xs font-medium border-border/80"
                    >
                      Selanjutnya
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* DETAILS & EXPERTISE RADAR (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        <currentMember.icon className="w-3.5 h-3.5" />
                        {currentMember.division}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-serif">
                      {currentMember.name}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-primary">
                      {currentMember.role}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {currentMember.bio}
                    </p>
                  </div>

                  {/* Core Expertise Progress Metrics */}
                  <div className="p-4 rounded-2xl bg-muted/40 border border-border/70 flex flex-col gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Tingkat Keahlian & Spesialisasi Teknis
                    </span>
                    <div className="space-y-2.5">
                      {currentMember.expertise.map((exp, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-foreground">{exp.label}</span>
                            <span className="font-mono text-primary font-bold">{exp.level}%</span>
                          </div>
                          <div className="w-full bg-border/60 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-primary h-full rounded-full transition-all duration-700 ease-out shadow-xs"
                              style={{ width: `${exp.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Skills Tags */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                      Keahlian Utama & Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentMember.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-background border border-border/80 text-foreground shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2 border-t border-border/60 flex flex-wrap items-center gap-3">
                    <Button 
                      asChild
                      className="rounded-xl px-6 py-5 shadow-lg shadow-primary/20 gap-2 text-xs sm:text-sm font-semibold"
                    >
                      <a href="#kontak">
                        Konsultasi dengan {currentMember.name.split(" ")[0]}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    {currentMember.portfolioUrl && currentMember.portfolioUrl !== "#" && (
                      <Button
                        variant="outline"
                        asChild
                        className="rounded-xl px-5 py-5 gap-2 text-xs sm:text-sm font-semibold border-border/80"
                      >
                        <a href={currentMember.portfolioUrl} target="_blank" rel="noopener noreferrer">
                          Lihat Website Personal
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* ================= MODE 2: GRID SEMUA ANGGOTA ================= */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.id}
                animation="fade-in-up"
                delay={index * 50}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15">
                  
                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border/60">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-mono text-primary font-bold">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col justify-between pt-4 pb-1">
                    <div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                        {member.division}
                      </span>
                      <h3 className="text-base font-bold text-foreground tracking-tight mt-0.5">
                        {member.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium line-clamp-1 mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed mt-2 line-clamp-2">
                        {member.bio}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                      {member.socials.linkedin && member.socials.linkedin !== "#" ? (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      ) : <div />}

                      <button
                        onClick={() => {
                          setActiveMemberIndex(index)
                          setViewMode("spotlight")
                        }}
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                      >
                        Buka Profil
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

      </div>

    </section>
  )
}