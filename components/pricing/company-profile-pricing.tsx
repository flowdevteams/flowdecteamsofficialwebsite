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
  Car, 
  FileText,
  BadgePercent,
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
  oldPrice: string
  discount: string
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
    name: "Starter Toko & Profil Esensial",
    subtitle: "Kehadiran online instan agar bengkel / toko fisik ditemukan di Google & terima order cepat via WhatsApp",
    badgeText: "Hemat 25% • UMKM Entry",
    price: "3.600.000",
    oldPrice: "4.800.000",
    discount: "Diskon 25%",
    periodNote: "Investasi Sekali Bayar • Hak Milik 100%",
    popular: false,
    bestFor: "Toko fisik aki & terminal mobil, bengkel UMKM, dan profil legalitas CV/PT baru",
    deliveryTime: "5–7 Hari Kerja",
    pagesCount: "4–5 Halaman Esensial",
    features: [
      "4–5 Halaman Esensial (Beranda, Antar Pasang, Katalog Produk Inti, Lokasi & Kontak)",
      "Tombol Darurat Floating WhatsApp ('Aki Mogok? Panggil Bantuan Antar Pasang 1-Klik')",
      "Informasi Layanan Antar Pasang & Skema Tukar Tambah Aki Bekas / Trade-in",
      "Integrasi Google Maps Lokasi Toko & Rute Navigasi Langsung",
      "GRATIS Domain Resmi (.com / .my.id) & Hosting Cloud Berkecepatan Tinggi 1 Tahun",
      "Optimasi Local SEO Fundamental ('Toko Aki Mobil [Kota] Terdekat')",
      "Tampilan 100% Responsif & Ringan di Semua Smartphone Android & iPhone",
      "Garansi Perbaikan Bug 1 Bulan Penuh & Kuota Revisi 2x"
    ],
    ctaText: "Pilih Paket Starter Rp 3,6 Jt",
    ctaHref: "/kontak?paket=compro-starter"
  },
  {
    id: "compro-pro",
    name: "Spesialis Bisnis & Katalog Interaktif",
    subtitle: "Standar toko modern & PT berkembang dengan filter tipe mobil, katalog aksesoris lengkap, dan panel admin mandiri",
    badgeText: "Paling Banyak Dipilih (Best Value)",
    price: "5.925.000",
    oldPrice: "7.900.000",
    discount: "Diskon 25%",
    periodNote: "Investasi Sekali Bayar • Sweet Spot Closing",
    popular: true,
    bestFor: "Toko spesialis aki modern, bengkel rekanan resmi, dan PT berkembang butuh CMS & katalog",
    deliveryTime: "10–14 Hari Kerja",
    pagesCount: "7–8 Halaman Interaktif",
    features: [
      "7–8 Halaman Lengkap (Beranda Promo, Katalog Aki, Aksesoris, Panduan Mobil, Tukar Tambah, Galeri, Form Booking)",
      "Panduan Pencocokan Aki per Merk Mobil (Toyota, Honda, Mitsubishi, Daihatsu, Suzuki, dll.)",
      "Katalog Terminal Aki & Kelistrikan (Terminal Kuningan, Timah, Quick Release, Kabel Jumper, Voltmeter)",
      "Panel Admin (CMS) Simpel: Update harga aki & stok produk mandiri dari HP/Laptop tanpa koding",
      "Direct WhatsApp Auto-Format (Tipe mobil, jenis aki, & lokasi antar otomatis terisi di chat)",
      "Tombol Unduh Dokumen / Pricelist Brosur Resmi (Format PDF)",
      "On-Page Local SEO Komprehensif agar muncul di halaman 1 pencarian Google",
      "Integrasi Google Analytics & Meta Pixel untuk pelacakan calon pembeli",
      "Garansi Perbaikan Bug 3 Bulan Penuh & Kuota Revisi 3x"
    ],
    ctaText: "Pilih Paket Rekomendasi Rp 5,9 Jt",
    ctaHref: "/kontak?paket=compro-pro"
  },
  {
    id: "compro-enterprise",
    name: "Grosir & Multi-Cabang Enterprise",
    subtitle: "Skala ekspansi untuk distributor partai besar terminal accu, multi-outlet cabang kota, dan legalitas tender B2B",
    badgeText: "Hemat 25% • Skala Grosir & B2B",
    price: "9.990.000",
    oldPrice: "13.500.000",
    discount: "Diskon 25%",
    periodNote: "Investasi Sekali Bayar • Skala Korporat",
    popular: false,
    bestFor: "Distributor grosir terminal aki, jaringan toko multi-cabang, dan supplier sparepart B2B",
    deliveryTime: "3–4 Minggu",
    pagesCount: "12+ Halaman Fleksibel",
    features: [
      "12+ Halaman Fleksibel (Multi-Cabang, Portal Grosir B2B, Katalog Part Number, Karir, Legalitas)",
      "Multi-Outlet Location Selector (Pilihan cabang terdekat & kontak admin per kota / area)",
      "Modul Pesanan Partai Besar / Grosir (Form order B2B per lusin/dus & tier harga reseller)",
      "Tabel Spesifikasi Teknis Mendalam (Kapasitas Ah, dimensi aki, CCA, ukuran pole & material terminal)",
      "Headless CMS Lengkap untuk kelola cabang, staf, artikel edukasi, & daftar produk massal",
      "Local SEO Multi-Kota untuk seluruh cabang outlet yang beroperasi",
      "High Security DDoS Protection, Backup Otomatis Mingguan & SLA Support Tanggap",
      "Handover 100% Hak Milik Source Code + Garansi Bug 6 Bulan Prioritas"
    ],
    ctaText: "Konsultasi Paket Grosir Rp 9,9 Jt",
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
              <BadgePercent className="h-3.5 w-3.5" />
              Edisi Khusus Company Profile &amp; Toko Katalog UMKM
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground tracking-tight font-heading">
              Paket Investasi Khusus Company Profile &amp; Usaha Otomotif
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Diformulasikan khusus untuk UMKM toko retail (seperti penjualan Terminal &amp; Accu Mobil, Bengkel, dan Distributor Teknik) hingga Company Profile PT. Berdasarkan tarif wajar agensi di Indonesia yang telah dipotong <strong>diskon marketing 25%</strong> untuk memberikan ROI dan daya saing tertinggi bagi bisnis Anda.
            </p>
          </AnimatedSection>

          {/* Quick Value Highlights */}
          <AnimatedSection animation="fade-in-up" delay={300} className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background border border-border/80 shadow-2xs">
              <Car className="h-3.5 w-3.5 text-primary" />
              Siap Modul Katalog &amp; Filter Kendaraan
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background border border-border/80 shadow-2xs">
              <PhoneCall className="h-3.5 w-3.5 text-primary" />
              Floating Tombol Darurat WhatsApp
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

                {/* Promo Badge for non-popular */}
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

                {/* Price Display */}
                <div className="mb-4 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground line-through">
                      Harga Normal: Rp {plan.oldPrice}
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-destructive/10 text-destructive px-1.5 py-0.5 rounded">
                      {plan.discount}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-muted-foreground">Rp</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-primary font-medium">
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
              Opsi Mesin Pemeliharaan Rutin (Website Care &amp; Fluktuasi Harga)
            </div>
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              Butuh Tim untuk Rutin Update Harga Aki &amp; Stok Suku Cadang?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tersedia paket pemeliharaan berkala mulai <strong>Rp 250.000 – Rp 500.000/bulan</strong> untuk update berkala tabel harga aki/terminal, backup mingguan, monitoring uptime server 24/7, dan perpanjangan domain terkelola.
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
