"use client"

import { Star, Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO, Startup Teknologi",
    content:
      "Flowdev Teams benar-benar membantu bisnis kami naik level. Websiteyang mereka bangun sangat cepat, modern, dan SEO-friendly. Dalam beberapa bulan, traffic Websitekami meningkat drastis dan konversi juga ikut naik.",
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
    <section className="border-b border-border/60 bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimoni Klien"
          title="Dipercaya oleh Klien dari Berbagai Industri"
          description="Bukan sekadar janji. Berikut pengalaman nyata klien yang telah menggunakan jasa pembuatan Website dari Flowdev Teams."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-in-up"
              delay={index * 100}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 lg:p-8">
                <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/10">
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
                <p className="mb-8 flex-1 leading-relaxed text-foreground opacity-90">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <span className="text-primary font-bold text-lg">
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
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
