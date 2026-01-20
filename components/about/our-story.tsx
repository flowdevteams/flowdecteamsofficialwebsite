"use client"

import { Target, Lightbulb, TrendingUp } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Story Content */}
          <div>
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Perjalanan Kami
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Dari Startup Kecil hingga Agensi Digital Profesional
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Flowdev Teams lahir dari satu tujuan sederhana: membantu bisnis berkembang
                  di era digital. Berawal dari tim kecil yang berfokus pada pengembangan website
                  dan aplikasi, kami tumbuh menjadi agensi digital yang menangani berbagai
                  kebutuhan teknologi modern.
                </p>

                <p>
                  Kami telah bekerja dengan berbagai klien, mulai dari UMKM, startup,
                  hingga perusahaan skala besar. Setiap proyek menjadi pengalaman berharga
                  yang memperkuat keahlian kami dalam menciptakan solusi digital yang efektif,
                  efisien, dan berorientasi pada hasil.
                </p>

                <p>
                  Hingga hari ini, kami terus berinovasi, mengadopsi teknologi terbaru,
                  dan menghadirkan solusi digital yang memberikan dampak nyata bagi bisnis
                  klien dan pengalaman terbaik bagi penggunanya.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Mission, Vision, Goal */}
          <div className="space-y-6">
            
            <AnimatedSection animation="fade-in-right" delay={100}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Misi Kami
                </h3>
                <p className="text-muted-foreground">
                  Memberdayakan bisnis melalui solusi digital inovatif yang mampu
                  meningkatkan pertumbuhan, memperkuat brand, dan menciptakan
                  pengalaman pengguna yang optimal.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Visi Kami
                </h3>
                <p className="text-muted-foreground">
                  Menjadi partner digital terpercaya bagi bisnis inovatif,
                  dikenal karena kreativitas, profesionalisme, serta
                  hasil nyata yang berdampak jangka panjang.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Tujuan Kami
                </h3>
                <p className="text-muted-foreground">
                  Terus berinovasi dan menghadirkan pengalaman digital berkualitas tinggi
                  agar klien kami selalu unggul dan kompetitif di tengah
                  perkembangan teknologi yang cepat.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  )
}
