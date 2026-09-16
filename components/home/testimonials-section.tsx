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
    <section className="border-b border-border/60 bg-background py-8 sm:py-16 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimoni Klien"
          title="Dipercaya oleh Klien dari Berbagai Industri"
          description="Bukan Sekadar Janji. Berikut Pengalaman Nyata Klien Yang Telah Menggunakan Jasa Pembuatan Website Dari Flowdev Teams."
        />

        <div className="mt-6 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-1.5 sm:gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-in-up"
              delay={index * 100}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg sm:rounded-xl border border-border/70 bg-card/90 p-2 sm:p-5 lg:p-8 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Quote Icon */}
                  <div className="mb-2 sm:mb-4 lg:mb-6 flex h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 items-center justify-center rounded sm:rounded-lg border border-primary/15 bg-primary/10">
                    <Quote className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5 sm:gap-1 mb-1.5 sm:mb-3 lg:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-2.5 w-2.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-primary text-primary shrink-0"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-2 sm:mb-6 lg:mb-8 flex-1 text-[9px] sm:text-xs lg:text-base leading-snug sm:leading-relaxed text-foreground opacity-90 line-clamp-3 sm:line-clamp-none">
                    {`"${testimonial.content}"`}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 pt-2 sm:pt-4 lg:pt-6 border-t border-border/50 mt-auto">
                    <div className="flex h-6 w-6 sm:h-9 sm:w-9 lg:h-12 lg:w-12 items-center justify-center rounded sm:rounded-lg border border-primary/20 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15 shrink-0">
                      <span className="text-primary font-bold text-[10px] sm:text-sm lg:text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-foreground text-[10px] sm:text-xs lg:text-base truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-[7.5px] sm:text-[11px] lg:text-sm text-muted-foreground truncate">
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
