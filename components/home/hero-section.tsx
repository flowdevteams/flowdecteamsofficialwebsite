"use client"

import Link from "next/link"
import { ArrowRight, Play, Code2, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { useEffect, useState, useMemo} from "react"

const images = [
  "/mockups/mockup.webp",
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const fullText = "Website & Aplikasi"
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    let index = 0
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(typing)
    }, 80)

    return () => clearInterval(typing)
  }, [])

  const nodes = useMemo(
    () =>
      Array.from({ length: 35 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 10,
        size: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    []
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Cyber Nodes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {nodes.map((node, i) => (
          <span
            key={i}
            className="cyber-node"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              opacity: node.opacity,
              animationDelay: `${node.delay}s`,
              animationDuration: `${node.duration}s`,
            }}
          />
        ))}
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <AnimatedSection animation="fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:tex-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Solusi Digital Profesional untuk Bisnis Anda</span>
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              <span className="block">Jasa Pembuatan</span>

              <span className="relative block text-primary">
                {/* Placeholder agar layout stabil */}
                <span className="invisible">Website & Aplikasi</span>

                {/* Typewriter text */}
                <span className="absolute inset-0 flex justify-center">
                  {typedText}
                  <span className="animate-caret">|</span>
                </span>
              </span>

              <span className="block">Custom untuk Bisnis Modern</span>
            </h1>


          </AnimatedSection>

          {/* Subheading */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
              Flowdev Teams adalah software house yang fokus pada
              <strong> custom web development </strong>
              dan
              <strong> custom app development</strong>.
              Kami membantu bisnis Anda tumbuh melalui website dan aplikasi
              yang cepat, aman, scalable, dan dirancang khusus sesuai kebutuhan.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-base px-8 h-12 gap-2 group">
                <Link href="/contact">
                  Konsultasi Proyek Sekarang
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 gap-2 bg-transparent">
                <Link href="/portfolio">
                  <Play className="h-4 w-4" />
                  Lihat Portofolio Kami
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Feature Pills */}
          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              {[
                { icon: Code2, text: "Pengembangan Web & Aplikasi Custom" },
                { icon: Zap, text: "Performa Cepat & Optimal" },
                { icon: Sparkles, text: "UI/UX Modern & Profesional" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Hero Visual */}
          <div className="group perspective-[1200px]">
            <div className="transition-transform duration-700 group-hover:rotateX-[4deg] group-hover:rotateY-[-4deg]">
              <AnimatedSection animation="scale-in" delay={500}>
                <div className="mt-16 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
                  <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-muted-foreground">
                          FlowdevTeams | Web & App Development
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-video overflow-hidden">
                      <div className="relative w-full h-full animate-float group">
                        {images.map((src, index) => (
                          <Image
                            key={src}
                            src={src}
                            alt="Preview dashboard website dan aplikasi custom Flowdev Teams"
                            fill
                            priority={index === 0}
                            className={`
                              absolute inset-0
                              object-cover
                              rounded-2xl
                              transition-all duration-[1200ms] ease-in-out
                              ${index === activeIndex
                                ? "opacity-100 scale-100 z-10"
                                : "opacity-0 scale-105 z-0"}
                            `}
                          />
                        ))}

                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.animate-caret {
  animation: blink 1.2s infinite;
  margin-left: 2px;
}

.cyber-node {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(56, 189, 248, 0.6); /* cyan-blue */
  border-radius: 9999px;
  filter: blur(0.5px);
  animation-name: float-node;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes float-node {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate3d(80px, -140px, 0);
    opacity: 0;
  }
}


      `}</style>
    </section>
  )
}
