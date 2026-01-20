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
    question: "Berapa lama waktu pengerjaan proyek website atau aplikasi?",
    answer:
      "Durasi pengerjaan tergantung pada kompleksitas proyek. Website sederhana umumnya membutuhkan waktu sekitar 2–4 minggu. Untuk website bisnis, web aplikasi, atau sistem custom, waktu pengerjaan berkisar antara 2 hingga 6 bulan. Timeline detail akan kami jelaskan setelah sesi konsultasi awal.",
  },
  {
    question: "Apakah tersedia sistem pembayaran bertahap?",
    answer:
      "Ya, kami menyediakan skema pembayaran yang fleksibel. Umumnya pembayaran dilakukan dengan sistem 50% di awal proyek dan 50% setelah proyek selesai. Untuk proyek berskala besar, pembayaran dapat dibagi berdasarkan milestone yang disepakati bersama.",
  },
  {
    question: "Apa yang saya dapatkan setelah proyek selesai?",
    answer:
      "Setelah website atau aplikasi diluncurkan, Anda tetap mendapatkan masa support sesuai paket yang dipilih. Kami membantu perbaikan bug, penyesuaian minor, serta konsultasi teknis. Paket maintenance lanjutan juga tersedia untuk dukungan jangka panjang.",
  },
  {
    question: "Apakah paket layanan bisa di-upgrade di kemudian hari?",
    answer:
      "Tentu bisa. Website dan aplikasi Anda dapat dikembangkan seiring pertumbuhan bisnis. Kami dapat menambahkan fitur baru, halaman tambahan, atau integrasi sistem kapan saja sesuai kebutuhan Anda.",
  },

  {
    question: "Bagaimana jika hasil akhir tidak sesuai harapan?",
    answer:
      "Kepuasan klien adalah prioritas utama kami. Setiap proyek mencakup beberapa tahap revisi dan komunikasi intensif selama proses pengerjaan. Proyek tidak kami anggap selesai sebelum hasilnya sesuai dengan kebutuhan dan ekspektasi Anda.",
  },
]


export function PricingFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our pricing and services."
        />

        <AnimatedSection animation="fade-in-up" delay={200} className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
