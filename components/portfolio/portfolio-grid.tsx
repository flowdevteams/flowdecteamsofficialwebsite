"use client"

import { useState } from "react"
import { ExternalLink, Globe, Smartphone, ShoppingCart, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const categories = ["All", "Web Apps", "Mobile", "E-commerce", "Dashboard"]

const projects = [
  {
    title: "FinanceFlow",
    category: "Dashboard",
    description: "A comprehensive financial dashboard for tracking investments, expenses, and portfolio performance.",
    tags: ["React", "Node.js", "PostgreSQL"],
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ShopEase",
    category: "E-commerce",
    description: "Modern e-commerce platform with advanced filtering, wishlist, and seamless checkout experience.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "TravelMate",
    category: "Mobile",
    description: "Travel companion app with itinerary planning, local recommendations, and offline maps.",
    tags: ["React Native", "Firebase", "Maps API"],
    icon: Smartphone,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "HealthHub",
    category: "Web Apps",
    description: "Telemedicine platform connecting patients with healthcare providers for virtual consultations.",
    tags: ["Vue.js", "Python", "WebRTC"],
    icon: Globe,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "EduLearn",
    category: "Web Apps",
    description: "Interactive learning management system with video courses, quizzes, and progress tracking.",
    tags: ["Next.js", "GraphQL", "AWS"],
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "FoodieApp",
    category: "Mobile",
    description: "Food delivery app with real-time tracking, restaurant reviews, and loyalty rewards.",
    tags: ["Flutter", "Node.js", "Redis"],
    icon: Smartphone,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "PropertyPro",
    category: "Web Apps",
    description: "Real estate platform with virtual tours, mortgage calculator, and agent matching.",
    tags: ["React", "Django", "PostgreSQL"],
    icon: Globe,
    color: "from-teal-500 to-green-500",
  },
  {
    title: "CryptoTrack",
    category: "Dashboard",
    description: "Cryptocurrency portfolio tracker with real-time prices, alerts, and market analysis.",
    tags: ["Next.js", "WebSocket", "Charts"],
    icon: BarChart3,
    color: "from-amber-500 to-yellow-500",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-in-up"
              delay={index * 50}
            >
              <div className="group h-full rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl overflow-hidden transition-all duration-300">
                {/* Project Preview */}
                <div className={cn(
                  "aspect-video bg-gradient-to-br flex items-center justify-center",
                  project.color
                )}>
                  <project.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
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
