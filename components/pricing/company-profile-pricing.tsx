"use client"

import Link from "next/link"
import { 
  Check, 
  Star, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Zap, 
  PhoneCall, 
  Building2, 
  Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

interface ComproPlan {
  id: string
  name: string
  subtitle: string
  badgeText?: string
  price: string
  periodNote: string
  popular: boolean
  bestFor: string
  deliveryTime: string
  pagesCount: string
  features: string[]
  ctaText: string
  ctaHref: string
}

const comproPlans: ComproPlan[] = [
  {
    id: "compro-starter",
    name: "Corporate Starter (Profil & Legalitas)",
    subtitle: "Kehadiran online instan untuk legalitas usaha, profil bisnis kredibel, dan penerimaan prospek via WhatsApp",
    badgeText: "Entry Level",
    price: "2.800.000",
    periodNote: "Investasi Fiks Sekali Bayar • Hak Milik 100%",
    popular: false,
    bestFor: "PT/CV baru berdiri, konsultan independen, UMKM naik kelas, dan pemenuhan syarat tender awal",
    deliveryTime: "5–7 Hari Kerja",
    pagesCount: "7–8 Halaman Lengkap",
    features: [
      "7–8 Halaman Lengkap (Beranda, Tentang Kami, Visi-Misi, Layanan/Produk, Galeri/Dokumentasi, Legalitas, Kontak & Lokasi)",
      "Tombol Direct WhatsApp Interaktif & Form Inquiry Calon Klien Cepat",
      "Seksi Struktur Organisasi, Nilai Perusahaan, & Dokumen Izin Usaha",
      "Integrasi Google Maps Interaktif & Profil Google Bisnis Resmi",
      "Tombol Unduh Dokumen Company Profile Resmi (Format PDF)",
      "GRATIS Domain Resmi (.com / .id) & Hosting Cloud Berkecepatan Tinggi 1 Tahun",
      "Optimasi Local SEO Fundamental agar nama perusahaan mudah dicari di Google",
      "Tampilan 100% Responsif & Ringan di Semua Smartphone Android & iPhone",
      "Garansi Pemeliharaan Bug 1 Bulan Penuh & Kuota Revisi 2x"
    ],
    ctaText: "Pilih Paket Starter Rp 2,8 Jt",
    ctaHref: "/kontak?paket=compro-starter"
  },
  {
    id: "compro-pro",
    name: "Corporate Pro (Katalog & Interaktif)",
    subtitle: "Standar representatif untuk PT berkembang dengan katalog produk/layanan lengkap dan panel admin mandiri",
    badgeText: "Paling Banyak Dipilih (Best Value)",
    price: "4.900.000",
    periodNote: "Investasi Fiks Sekali Bayar • Best Value",
    popular: true,
    bestFor: "Perusahaan berkembang, distributor, kontraktor, konsultan profesional, dan bisnis B2B",
    deliveryTime: "10–14 Hari Kerja",
    pagesCount: "10–12 Halaman Interaktif",
    features: [
      "Hingga 10–12 Halaman Lengkap (Beranda Korporat, Tentang Kami, Katalog Produk/Jasa, Galeri Proyek, Klien & Testimoni, Form RFQ, Berita/Blog)",
      "Katalog Produk & Portofolio Interaktif (Kategori dinamis, detail spesifikasi, & galeri dokumentasi)",
      "Panel Admin (CMS) Simpel: Update produk, galeri proyek, & artikel mandiri dari HP/Laptop tanpa koding",
      "Form Permintaan Penawaran Resmi (RFQ - Request for Quotation)",
      "Direct WhatsApp Auto-Format (Nama layanan/produk yang diminati otomatis terisi di pesan chat)",
      "Tombol Unduh Brosur, Katalog Produk, & Dokumen Legalitas (Format PDF)",
      "On-Page SEO Bisnis Komprehensif agar ranking teratas di mesin pencarian Google",
      "Integrasi Google Analytics & Meta Pixel untuk pelacakan calon klien potensial",
      "Garansi Pemeliharaan Bug 3 Bulan Penuh & Kuota Revisi 3x"
    ],
    ctaText: "Pilih Paket Rekomendasi Rp 4,9 Jt",
    ctaHref: "/kontak?paket=compro-pro"
  },
  {
    id: "compro-enterprise",
    name: "Corporate Enterprise (Multi-Cabang & Global)",
    subtitle: "Skala ekspansi untuk holding company, distributor multi-cabang, eksportir, dan tender korporat besar",
    badgeText: "Skala Korporat & B2B",
    price: "8.900.000",
    periodNote: "Investasi Fiks Sekali Bayar • Skala Korporat",
    popular: false,
    bestFor: "Holding company, distributor multi-outlet, eksportir, manufaktur, dan korporat skala besar",
    deliveryTime: "3–4 Minggu",
    pagesCount: "15+ Halaman Fleksibel",
    features: [
      "15+ Halaman Fleksibel (Multi-Cabang, Karir, Investor Relations, Katalog Mitra B2B, Legalitas ISO)",
      "Multi-Outlet / Branch Location Selector (Pilihan kantor cabang & kontak admin per kota / area)",
      "Modul Kerjasama B2B / Kemitraan Bisnis (Form pengajuan kemitraan & proposal resmi)",
      "Dukungan Struktur Multi-Bahasa / Bilingual (Bahasa Indonesia & English)",
      "Headless CMS Lengkap untuk kelola cabang, berita/CSR, & lowongan kerja perusahaan",
      "Local SEO Multi-Kota untuk seluruh cabang operasional yang terdaftar",
      "High Security DDoS Protection, Backup Otomatis Mingguan & SLA Support Tanggap",
      "Handover 100% Hak Milik Source Code + Garansi Bug 6 Bulan Prioritas"
    ],
    ctaText: "Konsultasi Paket Korporat Rp 8,9 Jt",
    ctaHref: "/kontak?paket=compro-enterprise"
  }
]

export function CompanyProfilePricing() {
  return (
    <section id="company-profile-pricing" className="py-12 sm:py-16 lg:py-24 bg-muted/20 border-t border-border/60">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <AnimatedSection animation="fade-in-down">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
              <Building2 className="h-3.5 w-3.5" />
              Paket Resmi Company Profile &amp; Bisnis
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground tracking-tight font-heading">
              Paket Investasi Website Company Profile &amp; Katalog Bisnis
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pilihan investasi terukur untuk CV, PT, penyedia jasa profesional, distributor, hingga korporat modern. Harga fiks transparan tanpa biaya tersembunyi, siap tayang dengan teknologi Next.js native berkecepatan tinggi, SEO optimal, dan 100% hak kepemilikan source code.
            </p>
          </AnimatedSection>

          {/* Quick Value Highlights */}
          <AnimatedSection animation="fade-in-up" delay={300} className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background border border-border/80 shadow-2xs">
              <Building2 className="h-3.5 w-3.5 text-primary" />
              Struktur Profil &amp; Legalitas Resmi
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background border border-border/80 shadow-2xs">
              <PhoneCall className="h-3.5 w-3.5 text-primary" />
              Direct WhatsApp CTA &amp; Form RFQ
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background border border-border/80 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              100% Hak Milik Source Code Next.js
            </span>
          </AnimatedSection>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {comproPlans.map((plan, index) => (
            <AnimatedSection
              key={plan.id}
              animation="fade-in-up"
              delay={index * 150}
              className={cn("h-full flex flex-col", index === 2 ? "md:col-span-2 lg:col-span-1" : "")}
            >
              <div
                className={cn(
                  "relative h-full flex flex-col p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-card border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/40 -translate-y-1"
                    : "bg-card/75 border-border/80 hover:border-primary/50 hover:shadow-md"
                )}
              >
                {/* Popular Recommendation Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md whitespace-nowrap">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {plan.badgeText}
                    </div>
                  </div>
                )}

                {/* Badge for non-popular */}
                {!plan.popular && plan.badgeText && (
                  <div className="inline-flex self-start mb-3">
                    <span className="rounded-md bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 text-xs font-bold">
                      {plan.badgeText}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 leading-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display (Clean, Fixed, Direct) */}
                <div className="mb-4 pb-4 border-b border-border/60">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-muted-foreground">Rp</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground font-medium">
                    {plan.periodNote}
                  </div>
                </div>

                {/* Scope & Delivery Info */}
                <div className="mb-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-muted-foreground py-1 px-2.5 rounded-lg bg-muted/40">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      Waktu Kerja:
                    </span>
                    <strong className="text-foreground">{plan.deliveryTime}</strong>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground py-1 px-2.5 rounded-lg bg-muted/40">
                    <span className="flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      Kapasitas Halaman:
                    </span>
                    <strong className="text-foreground">{plan.pagesCount}</strong>
                  </div>
                  <div className="rounded-lg bg-muted/20 p-2.5 text-muted-foreground leading-relaxed border border-border/40">
                    <strong className="text-foreground block mb-0.5">Direkomendasikan untuk:</strong>
                    {plan.bestFor}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Fitur &amp; Kemampuan Bawaan:
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 text-primary">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full rounded-lg font-semibold shadow-sm h-10 lg:h-11 text-xs sm:text-sm mt-auto"
                >
                  <Link href={plan.ctaHref}>
                    {plan.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Maintenance / Website Care Bottom Notice */}
        <div className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/[0.04] via-card to-primary/[0.02] p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
              <Zap className="h-4 w-4" />
              Opsi Pemeliharaan Rutin (Website Care &amp; Growth)
            </div>
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              Butuh Tim untuk Rutin Pemeliharaan &amp; Update Konten Bisnis?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tersedia paket pemeliharaan berkala mulai <strong>Rp 250.000 – Rp 500.000/bulan</strong> untuk update materi promosi berkala, posting artikel SEO, monitoring uptime server 24/7, backup mingguan, dan perpanjangan domain terkelola.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 font-semibold border-primary/30 hover:bg-primary/10">
            <Link href="/kontak?kategori=maintenance-care">
              <PhoneCall className="mr-2 h-4 w-4 text-primary" />
              Tanya Opsi Maintenance
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
