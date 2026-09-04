"use client"

import * as React from "react"
import Image from "next/image"
import { 
  Cpu, 
  Layers, 
  Server, 
  Database, 
  Brain, 
  ShieldCheck, 
  ArrowRight,
  Code2
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

interface TechTool {
  name: string
  versionTag: string
  category: "all" | "frontend" | "backend" | "database" | "ai"
  categoryLabel: string
  description: string
  logo: string
  tags: string[]
  seoRole: string
}

const techTools: TechTool[] = [
  {
    name: "Next.js",
    versionTag: "App Router & SSR",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    description: "Framework React modern untuk server-side rendering (SSR), static generation (SSG), dan performa loading kilat yang disukai mesin pencari Google.",
    logo: "/tech/nextjs.svg",
    tags: ["SEO 100/100", "Server Actions", "Edge Caching"],
    seoRole: "Pengembangan Website & Web App Next.js"
  },
  {
    name: "NestJS",
    versionTag: "Enterprise Backend",
    category: "backend",
    categoryLabel: "Backend & API",
    description: "Framework backend Node.js terstruktur enterprise dengan arsitektur modular, microservices, serta pengolahan REST & GraphQL API berskala tinggi.",
    logo: "/tech/nestjs.svg",
    tags: ["Clean Architecture", "Microservices", "High Throughput"],
    seoRole: "Arsitektur Backend & API NestJS"
  },
  {
    name: "PostgreSQL",
    versionTag: "Relational Database",
    category: "database",
    categoryLabel: "Database & Cloud",
    description: "Basis data relasional standar industri dengan dukungan ACID penuh, manajemen transaksi kompleks, dan kestabilan menyimpan jutaan data transaksi bisnis.",
    logo: "/tech/postgresql.svg",
    tags: ["ACID Compliant", "Scalable Storage", "Enterprise Grade"],
    seoRole: "Basis Data Skalabilitas Tinggi PostgreSQL"
  },
  {
    name: "JWT (JSON Web Token)",
    versionTag: "Stateless Security",
    category: "backend",
    categoryLabel: "Backend & API",
    description: "Standar protokol otentikasi stateless terenkripsi untuk pengamanan login user, role-based access control (RBAC), dan pertukaran data API tanpa celah kebocoran.",
    logo: "/tech/jwt.svg",
    tags: ["Enkripsi Kriptografi", "Zero-Data-Leak", "Role-Based Auth"],
    seoRole: "Keamanan Autentikasi Sistem JWT"
  },
  {
    name: "Streamlit",
    versionTag: "AI & Data Application",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    description: "Framework pembuatan dashboard interaktif berbasis data dan kecerdasan buatan untuk visualisasi metrik bisnis, reporting, dan prototipe AI cepat.",
    logo: "/tech/streamlit.svg",
    tags: ["Dashboard Interaktif", "Data Science", "Python Native"],
    seoRole: "Aplikasi Dashboard AI Streamlit Python"
  },
  {
    name: "Postman API",
    versionTag: "API Platform & Testing",
    category: "backend",
    categoryLabel: "Backend & API",
    description: "Platform kolaborasi dan pengujian endpoint API otomatis untuk memastikan setiap integrasi antarsistem berjalan stabil, cepat, dan terdokumentasi rapi.",
    logo: "/tech/postman.svg",
    tags: ["Automated Testing", "Mock Server", "API Swagger"],
    seoRole: "Validasi & Integrasi API Postman"
  },
  {
    name: "Transformers (Hugging Face)",
    versionTag: "State-of-The-Art AI",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    description: "Pusat ekosistem model kecerdasan buatan terdepan dunia untuk Natural Language Processing (NLP), Large Language Models (LLM), RAG, dan generative AI.",
    logo: "/tech/transformers.svg",
    tags: ["LLM & RAG", "Model Fine-Tuning", "Deep Learning"],
    seoRole: "Integrasi Model Cerdas AI Transformers"
  },
  {
    name: "Google Colab",
    versionTag: "Cloud GPU Acceleration",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    description: "Infrastruktur cloud compute bertenaga GPU/TPU untuk eksplorasi data, pelatihan model machine learning, dan komputasi sains tingkat lanjut.",
    logo: "/tech/googlecolab.svg",
    tags: ["Cloud GPU/TPU", "Training Model", "Data Modeling"],
    seoRole: "Pelatihan & Riset Model AI Google Colab"
  },
  {
    name: "TypeScript",
    versionTag: "Type Safety",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    description: "Superset JavaScript dengan sistem pengetikan ketat (*strict typing*) untuk menjamin kode aplikasi bebas runtime error dan mudah dirawat jangka panjang.",
    logo: "/tech/typescript.svg",
    tags: ["Type-Safe", "Zero-Runtime-Bug", "Clean Code"],
    seoRole: "Pengembangan Perangkat Lunak TypeScript"
  },
  {
    name: "Python",
    versionTag: "Data & AI Core",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    description: "Bahasa pemrograman utama dalam rekayasa kecerdasan buatan, manipulasi data skala besar, serta otomatisasi alur kerja sistem perusahaan.",
    logo: "/tech/python.svg",
    tags: ["Machine Learning", "Workflow Automation", "High Computation"],
    seoRole: "Otomasi & Rekayasa Kecerdasan Buatan Python"
  },
  {
    name: "Docker",
    versionTag: "Containerization",
    category: "database",
    categoryLabel: "Database & Cloud",
    description: "Teknologi kontainerisasi untuk mengemas seluruh aplikasi dan dependensinya sehingga sistem dapat dideploy secara konsisten di server cloud mana pun.",
    logo: "/tech/docker.svg",
    tags: ["Cloud Isolation", "CI/CD Pipeline", "Microservices"],
    seoRole: "Deployment Cloud & Server Docker"
  },
  {
    name: "Redis",
    versionTag: "In-Memory Cache",
    category: "database",
    categoryLabel: "Database & Cloud",
    description: "Penyimpanan data in-memory berkecepatan mikrodetik untuk caching query berat, session management, dan antrean task background real-time.",
    logo: "/tech/redis.svg",
    tags: ["Ultra Fast Caching", "Queue Worker", "Low Latency"],
    seoRole: "Akselerasi Kecepatan Sistem Redis"
  }
]

const filterTabs = [
  { id: "all", label: "Semua Stack", icon: Layers },
  { id: "frontend", label: "Frontend & Web", icon: Code2 },
  { id: "backend", label: "Backend & API", icon: Server },
  { id: "database", label: "Database & Cloud", icon: Database },
  { id: "ai", label: "AI & Machine Learning", icon: Brain }
]

export function TechStackSection() {
  const [activeTab, setActiveTab] = React.useState<string>("all")

  const filteredTools = React.useMemo(() => {
    if (activeTab === "all") return techTools
    return techTools.filter((tool) => tool.category === activeTab)
  }, [activeTab])

  return (
    <section 
      id="tech-stack" 
      className="relative overflow-hidden border-b border-border/60 bg-background py-16 sm:py-24 lg:py-28"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 saas-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Header: Bait for Technical Inquiries */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider mb-3.5 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-primary animate-pulse" />
              Tech Stack &amp; Arsitektur Sistem
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
              <span>Tech Stack Modern: </span>
              <span className="text-primary">Next.js, NestJS, PostgreSQL &amp; AI</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stack modern untuk performa tinggi, keamanan, dan skalabilitas bisnis.
            </p>
          </AnimatedSection>
        </div>

        {/* Filter Navigation Tabs: Base Navy Styled */}
        <AnimatedSection animation="fade-in-up" delay={250} className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-2xl mx-auto rounded-2xl bg-[#142d52] border border-white/15 shadow-md">
            {filterTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-transform duration-200 cursor-pointer select-none",
                    isActive
                      ? "bg-white text-[#142d52] shadow-sm font-semibold"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Grid Tools Showcase with Base Navy Grid Style & Pure Motion Hover (No Color Change) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTools.map((tool, idx) => (
            <AnimatedSection
              key={tool.name}
              animation="fade-in-up"
              delay={(idx % 4) * 50}
            >
              <div 
                className="relative h-full rounded-2xl border border-white/15 bg-[#142d52] p-5 sm:p-6 shadow-md transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden text-white"
              >
                {/* Background Inverse Grid Pattern */}
                <div className="absolute inset-0 inverse-grid opacity-25 pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header: White Logo in Container + Version Tag */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 p-2 shadow-inner">
                      <Image
                        src={tool.logo}
                        alt={`Logo Resmi ${tool.name} - Flowdev Teams`}
                        width={26}
                        height={26}
                        className="brightness-0 invert object-contain max-h-6 max-w-6"
                      />
                    </div>

                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/10 text-blue-200 border border-white/15">
                      {tool.versionTag}
                    </span>
                  </div>

                  {/* Tool Title & SEO Role */}
                  <div className="mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {tool.name}
                    </h3>
                    <span className="text-[11px] font-medium text-blue-300 block mt-0.5">
                      {tool.seoRole}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-blue-100/75 leading-relaxed line-clamp-3 mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center gap-1.5">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/10 text-blue-100 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Engineering Quality Promise Banner: Base Navy Grid */}
        <AnimatedSection animation="fade-in-up" delay={300} className="mt-12 sm:mt-16">
          <div className="relative rounded-2xl border border-white/15 bg-[#142d52] p-5 sm:p-7 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 overflow-hidden text-white">
            <div className="absolute inset-0 inverse-grid opacity-25 pointer-events-none" />

            <div className="relative z-10 flex items-start sm:items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Garansi Standar Rekayasa &amp; Bebas Ketergantungan Lisensi
                </h4>
                <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mt-0.5">
                  Seluruh arsitektur software dibangun berbasis open-source enterprise standar global. Anda memiliki 100% kepemilikan kode sumber tanpa biaya lisensi tersembunyi.
                </p>
              </div>
            </div>

            <a
              href="/kontak"
              className="relative z-10 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-blue-200 whitespace-nowrap group shrink-0"
            >
              <span>Konsultasi Kebutuhan Stack Bisnis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
