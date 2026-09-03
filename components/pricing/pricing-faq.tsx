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
    question: "Bagaimana skema pembayaran dan termin proyek di Flowdev Teams?",
    answer:
      "Untuk proyek Landing Page standar, pembayaran dapat dilakukan dengan DP 50% di awal dan pelunasan 50% saat website telah diuji dan siap online. Untuk proyek Aplikasi Web & Sistem atau AI berskala menengah/besar, kami menggunakan sistem termin berbasis milestone pengerjaan (misal: DP 30% Desain & Arsitektur, 40% Pengembangan Fitur Inti, 30% Testing & Serah Terima Handover).",
  },
  {
    question: "Apakah saya mendapatkan akses penuh terhadap Source Code dan Database?",
    answer:
      "Ya, 100%. Kami memberikan hak milik penuh (Full IP Ownership) atas seluruh kode sumber (source code), aset desain, dan database proyek Anda setelah pelunasan. Tidak ada sistem sewa terikat atau biaya royalti bulanan tersembunyi.",
  },
  {
    question: "Berapa lama estimasi waktu pengerjaan dari awal hingga peluncuran?",
    answer:
      "Landing Page konversi umumnya selesai dalam 3–7 hari kerja. Aplikasi Web MVP berkisar 2–4 minggu. Sedangkan untuk Sistem Enterprise atau solusi Kecerdasan Buatan (AI) berkisar antara 4 hingga 8 minggu tergantung kompleksitas integrasi.",
  },
  {
    question: "Apakah bisa dibuatkan surat perjanjian kerja sama dan NDA (Non-Disclosure Agreement)?",
    answer:
      "Tentu. Kami sangat menjunjung tinggi keamanan data dan kerahasiaan ide bisnis klien. Kami siap menandatangani dokumen NDA resmi dan kontrak kerja sama tertulis sebelum proyek dimulai.",
  },
  {
    question: "Bagaimana jika di kemudian hari kami ingin menambah fitur baru atau upgrade?",
    answer:
      "Arsitektur kode yang kami bangun menerapkan standar industri modern yang modular dan bersih (clean architecture). Hal ini memudahkan penambahan fitur baru, integrasi API tambahan, atau upgrade kapasitas server seiring pertumbuhan bisnis Anda.",
  },
  {
    question: "Apakah sudah termasuk layanan pemeliharaan (maintenance) dan perbaikan bug?",
    answer:
      "Setiap paket sudah mencakup garansi masa pemeliharaan gratis pasca-peluncuran untuk memastikan sistem berjalan lancar tanpa bug. Kami juga menyediakan paket Maintenance & Support Terkelola berkala untuk kebutuhan backup, pemantauan server, dan pembaruan berkala.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparansi & FAQ"
          title="Pertanyaan Seputar Investasi & Alur Kerja"
          description="Temukan jawaban lengkap mengenai skema pembayaran, kepemilikan kode, dan jaminan kualitas layanan kami."
        />

        <AnimatedSection animation="fade-in-up" delay={200} className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm sm:text-base">
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
