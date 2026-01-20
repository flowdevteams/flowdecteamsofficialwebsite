"use client"

import { Star, Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO, Startup Teknologi",
    content:
      "Flowdev Teams benar-benar membantu bisnis kami naik level. Website yang mereka bangun sangat cepat, modern, dan SEO-friendly. Dalam beberapa bulan, traffic website kami meningkat drastis dan konversi juga ikut naik.",
    rating: 5,
  },
  {
    name: "Rizky Mahendra",
    role: "Founder, Digital Agency",
    content:
      "Bekerja sama dengan Flowdev Teams adalah keputusan terbaik. Aplikasi yang dikembangkan stabil, mudah digunakan, dan sesuai kebutuhan bisnis kami. Timnya profesional, komunikatif, dan tepat waktu.",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "Marketing Manager, Perusahaan Retail",
    content:
      "Flowdev Teams sangat memahami kebutuhan kami. Mulai dari desain UI/UX hingga performa website, semuanya dieksekusi dengan sangat baik. Hasilnya terlihat jelas dari peningkatan engagement pelanggan.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimoni Klien"
          title="Dipercaya oleh Klien dari Berbagai Industri"
          description="Bukan sekadar janji. Berikut pengalaman nyata klien yang telah menggunakan jasa pembuatan website dan aplikasi dari Flowdev Teams."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
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
