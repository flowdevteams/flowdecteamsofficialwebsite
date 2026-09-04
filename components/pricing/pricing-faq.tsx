"use client"

import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Bagaimana skema pembayaran dan termin di Flowdev Teams?",
    answer:
      "Untuk Landing Page: DP 50% di awal dan pelunasan 50% saat website siap tayang. Untuk Aplikasi Web & AI: sistem termin milestone (DP 30% Desain/Arsitektur, 40% Fitur Inti, 30% Serah Terima Handover)."
  },
  {
    question: "Apakah saya mendapatkan 100% hak milik Source Code dan Database?",
    answer:
      "Ya, 100%. Anda mendapatkan hak milik penuh atas repositori Git, skema database, dan seluruh aset digital tanpa sistem sewa atau royalti bulanan tersembunyi."
  },
  {
    question: "Berapa lama estimasi waktu pengerjaan dari awal hingga online?",
    answer:
      "Landing Page: 3–7 hari kerja. Aplikasi Web / SaaS MVP: 2–4 minggu. Sistem Enterprise & Custom AI: 4–8 minggu sesuai ruang lingkup yang disepakati."
  },
  {
    question: "Apakah tersedia perjanjian kerja sama resmi dan dokumen NDA?",
    answer:
      "Tentu. Kami menjamin kerahasiaan ide bisnis dan keamanan data Anda dengan menandatangani dokumen NDA (Non-Disclosure Agreement) dan kontrak kerja tertulis sebelum proyek dimulai."
  },
  {
    question: "Bagaimana jika bisnis kami ingin menambah fitur baru di masa depan?",
    answer:
      "Arsitektur kode kami dibangun secara modular dan clean code (Next.js 16/TypeScript/Python), sehingga penambahan fitur atau integrasi sistem baru dapat dilakukan dengan sangat mudah."
  },
  {
    question: "Apakah ada garansi dan dukungan teknis setelah website diluncurkan?",
    answer:
      "Setiap paket mendapatkan garansi perbaikan bug pasca-rilis. Kami juga menyediakan opsi pemeliharaan terkelola berkala untuk monitoring uptime server dan backup data rutin."
  }
]

export function PricingFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TRANSPARANSI &amp; FAQ"
          title="Pertanyaan Seputar Investasi &amp; Alur Kerja"
          description="Jawaban Ringkas Dan Transparan Mengenai Skema Pembayaran, Hak Milik Kode, Dan Jaminan Keamanan Proyek Anda."
        />

        <AnimatedSection animation="fade-in-up" delay={200} className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/80 rounded-2xl px-6 data-[state=open]:border-primary/50 shadow-xs"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm sm:text-base text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-xs sm:text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
