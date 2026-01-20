"use client"

import { Check, Users, Rocket, Award, Clock } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"

const features = [
  {
    icon: Users,
    title: "Tim Profesional & Berpengalaman",
    description:
      "Didukung oleh developer dan desainer berpengalaman yang terbiasa menangani proyek website dan aplikasi skala bisnis.",
  },
  {
    icon: Rocket,
    title: "Pengerjaan Cepat & Terstruktur",
    description:
      "Menggunakan metode agile untuk memastikan pengembangan lebih cepat, terukur, dan tepat waktu tanpa mengorbankan kualitas.",
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    description:
      "Setiap proyek melalui proses testing dan review ketat untuk memastikan performa, keamanan, dan stabilitas terbaik.",
  },
  {
    icon: Clock,
    title: "Support & Respons Cepat",
    description:
      "Dukungan teknis berkelanjutan untuk memastikan website dan aplikasi Anda selalu berjalan optimal.",
  },
]

const benefits = [
  "Solusi website & aplikasi custom sesuai kebutuhan bisnis",
  "Harga transparan tanpa biaya tersembunyi",
  "Update progres rutin dan komunikasi yang jelas",
  "Support dan maintenance setelah project selesai",
  "Arsitektur scalable untuk pertumbuhan jangka panjang",
  "Mengikuti standar industri dan best practice teknologi",
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <SectionHeader
              badge="Kenapa Memilih Kami"
              title="Partner Digital yang Fokus pada Hasil Nyata"
              description="Flowdev Teams adalah software house yang memahami kebutuhan bisnis Anda dan mampu mewujudkannya menjadi website dan aplikasi yang efektif."
              centered={false}
            />

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={feature.title}
                  animation="fade-in-left"
                  delay={index * 100}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <AnimatedSection animation="fade-in-right" delay={200}>
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Keuntungan Bekerja dengan Flowdev Teams
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
