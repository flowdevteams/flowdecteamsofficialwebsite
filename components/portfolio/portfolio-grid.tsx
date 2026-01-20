"use client"

import { useState } from "react"
import { ExternalLink, Globe, Smartphone, ShoppingCart, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const categories = [
  "Semua",
  "Web Application",
  "Mobile App",
  "E-Commerce",
  "Dashboard Sistem",
]

const projects = [
  {
    title: "FinanceFlow Dashboard",
    category: "Dashboard Sistem",
    description:
      "Contoh dashboard keuangan yang dirancang untuk membantu bisnis memantau arus kas, laporan keuangan, dan performa investasi secara real-time.",
    tags: ["React", "Node.js", "PostgreSQL"],
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ShopEase E-Commerce",
    category: "E-Commerce",
    description:
      "Simulasi platform e-commerce modern dengan fokus pada pengalaman pengguna, performa cepat, dan proses checkout yang optimal.",
    tags: ["Next.js", "Payment Gateway", "MongoDB"],
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "TravelMate Mobile App",
    category: "Mobile App",
    description:
      "Konsep aplikasi mobile untuk kebutuhan travel, termasuk perencanaan perjalanan, rekomendasi lokasi, dan sistem offline-friendly.",
    tags: ["React Native", "Firebase", "Maps API"],
    icon: Smartphone,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "HealthHub Web Platform",
    category: "Web Application",
    description:
      "Contoh aplikasi web layanan kesehatan yang dirancang untuk konsultasi online, manajemen jadwal, dan sistem user yang aman.",
    tags: ["Web App", "Backend API", "Security"],
    icon: Globe,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "EduLearn Learning System",
    category: "Web Application",
    description:
      "Ilustrasi sistem pembelajaran digital (LMS) dengan fitur kelas online, manajemen materi, dan pelacakan progres pengguna.",
    tags: ["Next.js", "API", "Cloud"],
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Foodie Delivery App",
    category: "Mobile App",
    description:
      "Contoh konsep aplikasi pemesanan makanan dengan tracking real-time, sistem promo, dan manajemen merchant.",
    tags: ["Mobile App", "Realtime System", "Backend"],
    icon: Smartphone,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "PropertyPro Platform",
    category: "Web Application",
    description:
      "Simulasi platform properti digital untuk listing, pencarian properti, dan kalkulator pembiayaan yang terintegrasi.",
    tags: ["React", "Backend System", "Database"],
    icon: Globe,
    color: "from-teal-500 to-green-500",
  },
  {
    title: "CryptoTrack Analytics",
    category: "Dashboard Sistem",
    description:
      "Contoh dashboard analitik untuk monitoring aset digital dan data market yang dirancang dengan visualisasi informatif.",
    tags: ["Dashboard", "Realtime Data", "Charts"],
    icon: BarChart3,
    color: "from-amber-500 to-yellow-500",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "Semua" || project.category === activeCategory
  )

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <AnimatedSection animation="fade-in-up">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-in-up"
              delay={index * 50}
            >
              <div className="group h-full rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl overflow-hidden transition-all duration-300">
                <div
                  className={cn(
                    "aspect-video bg-gradient-to-br flex items-center justify-center",
                    project.color
                  )}
                >
                  <project.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-lg text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
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
