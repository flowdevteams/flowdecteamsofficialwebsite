"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Check, 
  Star, 
  ArrowRight, 
  Globe, 
  LayoutDashboard, 
  Brain, 
  Clock, 
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

export type PricingCategory = "landing" | "webapp" | "ai"

interface PricingPlan {
  id: string
  name: string
  subtitle: string
  badgeText?: string
  price: string
  oldPrice?: string
  discount?: string
  periodNote: string
  maintenanceNote?: string
  popular: boolean
  bestFor: string
  deliveryTime: string
  features: string[]
  ctaText: string
  ctaHref: string
}

const landingPlans: PricingPlan[] = [
  {
    id: "landing-starter",
    name: "UMKM Starter",
    subtitle: "Solusi cepat & hemat untuk pemula yang ingin langsung go-digital dan jualan online",
    badgeText: "Entry Level",
    price: "150.000",
    oldPrice: "300.000",
    discount: "50% OFF",
    periodNote: "Investasi Sekali Bayar",
    maintenanceNote: "Opsional Maintenance Rp 20.000/bln (Mulai bulan ke-2)",
    popular: false,
    bestFor: "Pelaku UMKM, testing produk baru, dan promosi event berbatas waktu",
    deliveryTime: "1-2 Hari Kerja",
    features: [
      "Landing Page 1 Halaman Responsif (Mobile, Tablet, Desktop)",
      "3 Section Utama (Hero, Benefit Produk, Direct WhatsApp CTA)",
      "Gratis Subdomain Cloud (contoh: tokomu.flowdevteams.com) 1 Tahun",
      "Optimasi Kecepatan Standar Google PageSpeed",
      "Garansi Revisi & Gratis Maintenance 1 Bulan",
      "1x Update Minor Konten/Gambar Bulanan"
    ],
    ctaText: "Ambil Promo Rp 150.000",
    ctaHref: "/kontak?paket=umkm-starter"
  },
  {
    id: "landing-pro",
    name: "Bisnis Iklan & Toko (Best Seller)",
    subtitle: "Senjata konversi tinggi untuk kampanye iklan Meta Ads, TikTok & Google Ads",
    badgeText: "Paling Banyak Dipilih",
    price: "395.000",
    oldPrice: "790.000",
    discount: "50% OFF",
    periodNote: "Investasi Sekali Bayar",
    maintenanceNote: "Opsional Maintenance Rp 50.000/bln (Mulai bulan ke-2)",
    popular: true,
    bestFor: "Bisnis yang aktif beriklan, toko online, dan jasa profesional",
    deliveryTime: "3-5 Hari Kerja",
    features: [
      "Landing Page Konversi Tinggi 5 Section Lengkap (Formula AIDA)",
      "GRATIS Domain Utama .com / .id Resmi 1 Tahun Penuh",
      "Pemasangan Meta Pixel Ads, TikTok Pixel & Google Analytics",
      "On-Page SEO Fundamental agar Muncul di Pencarian Google",
      "Form Order Direct WhatsApp dengan Template Pesan Otomatis",
      "Garansi Revisi 3 Kali & Laporan Analitik Kunjungan Bulanan",
      "3x Update Minor Konten/Gambar Bulanan & Maintenance 1 Bulan"
    ],
    ctaText: "Pilih Paket Best Seller",
    ctaHref: "/kontak?paket=bisnis-iklan"
  },
  {
    id: "landing-super",
    name: "Brand Authority Pro",
    subtitle: "Standar prestise untuk brand mapan, klinik, properti, dan korporat B2B",
    badgeText: "Full Experience",
    price: "539.000",
    oldPrice: "1.078.000",
    discount: "50% OFF",
    periodNote: "Investasi Sekali Bayar",
    maintenanceNote: "Opsional Maintenance Rp 90.000/bln (Mulai bulan ke-2)",
    popular: false,
    bestFor: "Brand mapan, korporat B2B, klinik, properti, dan agensi profesional",
    deliveryTime: "4-7 Hari Kerja",
    features: [
      "Arsitektur Web Lengkap Hingga 10 Section Interaktif",
      "Desain Visual Glassmorphism & Micro-animations Modern",
      "Optimasi Kecepatan Ekstrem (Core Web Vitals 95+ Score)",
      "GRATIS Domain .com/.net + Hosting Cloud 1 Tahun Penuh",
      "On-Page SEO Lanjutan (Schema.org Rich Snippets & Sitemap XML)",
      "Integrasi Multi-Channel (WhatsApp, Form Email, Lead Capture)",
      "Garansi Revisi 6 Kali & Analitik Performa Mingguan",
      "6x Update Minor Bulanan & Prioritas Support Teknis"
    ],
    ctaText: "Ambil Paket Brand Authority",
    ctaHref: "/kontak?paket=brand-authority"
  }
]

const webappPlans: PricingPlan[] = [
  {
    id: "webapp-mvp",
    name: "MVP Web App Launchpad",
    subtitle: "Aplikasi web fungsional cepat untuk memvalidasi ide produk dan alur kerja inti",
    badgeText: "Harga Bersahabat",
    price: "2.500.000",
    oldPrice: "5.000.000",
    discount: "Hemat 50%",
    periodNote: "Mulai dari / Estimasi Dasar",
    popular: false,
    bestFor: "Startup tahap awal, otomatisasi internal UMKM, dan prototipe fungsional",
    deliveryTime: "2-3 Minggu",
    features: [
      "Frontend Responsif Modern (Next.js & TypeScript)",
      "Sistem Autentikasi Pengguna & Manajemen Sesi Aman",
      "Database Relasional Terstruktur (PostgreSQL / Supabase)",
      "Dashboard Admin CRUD untuk Pengelolaan Data Cepat",
      "Arsitektur REST API & Integrasi Cloud Server",
      "Dokumentasi Kode & Handover Source Code 100%"
    ],
    ctaText: "Konsultasi MVP Rp 2.5jt",
    ctaHref: "/kontak?paket=webapp-mvp"
  },
  {
    id: "webapp-suite",
    name: "Integrated Business Suite",
    subtitle: "Sistem operasional kustom terintegrasi: ERP, CRM, POS & Multi-Cabang",
    badgeText: "Solusi Paling Lengkap",
    price: "5.500.000",
    oldPrice: "11.000.000",
    discount: "Hemat 50%",
    periodNote: "Mulai dari / Sesuai Modul",
    popular: true,
    bestFor: "Perusahaan distributor, ritel multi-outlet, klinik, dan bisnis jasa berkembang",
    deliveryTime: "3-5 Minggu",
    features: [
      "Arsitektur Modul Kustom Mengikuti 100% SOP Bisnis Anda",
      "Role-Based Access Control (RBAC) Multi-Level (Admin, Staf, Kasir, Manager)",
      "Integrasi Payment Gateway Otomatis (Midtrans / Xendit)",
      "Sinkronisasi Data Real-Time & Notifikasi WhatsApp Otomatis",
      "Dashboard Analitik Interaktif & Ekspor Laporan Excel/PDF",
      "Audit Log Aktivitas Pengguna & Backup Data Otomatis",
      "Pelatihan Staf & Garansi Support Pemeliharaan 3 Bulan"
    ],
    ctaText: "Diskusikan Sistem Bisnis",
    ctaHref: "/kontak?paket=webapp-suite"
  },
  {
    id: "webapp-enterprise",
    name: "Enterprise SaaS Platform",
    subtitle: "Platform software berskala besar dengan arsitektur cloud multi-tenant dan high availability",
    badgeText: "Enterprise Grade",
    price: "Custom Scope",
    periodNote: "Berdasarkan Spesifikasi Arsitektur",
    popular: false,
    bestFor: "Perusahaan korporat, fintech, platform berlangganan, dan startup berpendanaan",
    deliveryTime: "Custom Timeline",
    features: [
      "Arsitektur Multi-Tenancy & Database Partitioning",
      "High-Concurrency Cloud Architecture (Docker, Microservices, Redis)",
      "Sistem Langganan Berulang (Recurring Billing) & Invoicing Otomatis",
      "Dokumentasi Public API & Webhooks untuk Pihak Ketiga",
      "Uji Beban (Stress Testing) & Penetration Security Audit",
      "Perjanjian Kerahasiaan (NDA) & SLA Uptime Dedicated"
    ],
    ctaText: "Request Proposal Kustom",
    ctaHref: "/kontak?paket=webapp-enterprise"
  }
]

const aiPlans: PricingPlan[] = [
  {
    id: "ai-rag",
    name: "Enterprise Knowledge RAG",
    subtitle: "Asisten AI cerdas terlatih dengan seluruh SOP, katalog produk & dokumen internal bisnis",
    badgeText: "AI Cerdas Bisnis",
    price: "3.500.000",
    oldPrice: "7.000.000",
    discount: "Hemat 50%",
    periodNote: "Mulai dari / Estimasi Implementasi",
    popular: false,
    bestFor: "Customer service 24/7, kantor hukum, konsultan, dan tim HR internal",
    deliveryTime: "2-3 Minggu",
    features: [
      "Integrasi LLM State-of-the-Art (GPT-4o / Claude / DeepSeek)",
      "Penyimpanan Vektor Semantik (Vector Database & Embeddings)",
      "Ekstraksi & Pembacaan Otomatis Dokumen PDF, DOCX, & Web",
      "Widget Chat Interaktif untuk Website atau Integrasi WhatsApp",
      "Dashboard Monitoring Riwayat Percakapan & Akurasi Jawaban",
      "Enkripsi Data Privat (Data Anda 100% Aman & Terlindungi)"
    ],
    ctaText: "Mulai Sistem AI RAG",
    ctaHref: "/kontak?paket=ai-rag"
  },
  {
    id: "ai-agent",
    name: "Autonomous AI Agent Suite",
    subtitle: "Agent AI cerdas yang mengotomatisasi alur kerja berantai antar sistem dan aplikasi bisnis",
    badgeText: "Efisiensi Maksimal",
    price: "6.500.000",
    oldPrice: "13.000.000",
    discount: "Hemat 50%",
    periodNote: "Mulai dari / Sesuai Alur Kerja",
    popular: true,
    bestFor: "Perusahaan yang ingin menghemat ratusan jam kerja operasional rutin per bulan",
    deliveryTime: "3-5 Minggu",
    features: [
      "Arsitektur Multi-Agent dengan Kemampuan Tool Calling Otomatis",
      "Ekstraksi Data Otomatis dari Email, Form & Dokumen Transaksi",
      "Integrasi Mulus ke Sistem Database, Spreadsheet & CRM Internal",
      "Human-in-the-Loop Fallback untuk Validasi Kasus Kritis",
      "Logging Detail Eksekusi Tugas & Analitik Penghematan Waktu",
      "Dukungan Pemeliharaan & Kalibrasi Prompting Berkelanjutan"
    ],
    ctaText: "Mulai Otomasi AI",
    ctaHref: "/kontak?paket=ai-agent"
  },
  {
    id: "ai-vision",
    name: "Computer Vision & Edge AI",
    subtitle: "Model AI penglihatan komputer berkecepatan tinggi untuk industri dan inspeksi fisik",
    badgeText: "Industrial Grade",
    price: "Custom Scope",
    periodNote: "Berdasarkan Kebutuhan Dataset & Hardware",
    popular: false,
    bestFor: "Pabrik manufaktur, logistik, pengawasan keamanan, dan quality control lini produksi",
    deliveryTime: "Custom Timeline",
    features: [
      "Pelatihan Model Kustom (Custom Dataset Fine-Tuning YOLO / PyTorch)",
      "Inferensi Real-Time Ultra-Low Latency (< 30ms)",
      "Integrasi Kamera Industri & Sistem Rejector Otomatis",
      "Dashboard Analitik Tingkat Reject & Laporan Standar ISO",
      "Deployment On-Premise (NVIDIA Jetson / GPU Server Lokal)",
      "Garansi Akurasi Deteksi & Pendampingan Uji Lapangan"
    ],
    ctaText: "Konsultasi Teknis AI",
    ctaHref: "/kontak?paket=ai-vision"
  }
]

export function PricingCards() {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("landing")

  const currentPlans = 
    activeCategory === "landing" 
      ? landingPlans 
      : activeCategory === "webapp" 
        ? webappPlans 
        : aiPlans

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Category Switcher Tabs */}
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 border border-primary/20">
            Promo Subsidi Digitalisasi UMKM 2026 Aktif
          </div>
          <div className="grid grid-cols-3 gap-1 p-1 sm:p-1.5 rounded-xl border border-border/80 bg-card/90 shadow-xs backdrop-blur w-full max-w-sm sm:max-w-none sm:inline-flex sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveCategory("landing")}
              className={cn(
                "flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "landing"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>
                <span className="sm:hidden">Landing</span>
                <span className="hidden sm:inline">Landing Page &amp; Web</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("webapp")}
              className={cn(
                "flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "webapp"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutDashboard className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>
                <span className="sm:hidden">Web App</span>
                <span className="hidden sm:inline">Aplikasi Web &amp; Sistem</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("ai")}
              className={cn(
                "flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "ai"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Brain className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>
                <span className="sm:hidden">AI &amp; ML</span>
                <span className="hidden sm:inline">Kecerdasan Buatan (AI)</span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
          {currentPlans.map((plan, index) => (
            <AnimatedSection
              key={plan.id}
              animation="fade-in-up"
              delay={index * 100}
              className={cn("h-full", index === 2 ? "col-span-2 sm:col-span-1" : "")}
            >
              <div
                className={cn(
                  "relative h-full flex flex-col p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-card border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/35 -translate-y-1"
                    : "bg-card/70 border-border/80 hover:border-primary/50 hover:shadow-md"
                )}
              >
                {/* Popular / Best Badge */}
                {plan.popular && (
                  <div className="absolute -top-2.5 sm:-top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {plan.badgeText || "Rekomendasi Utama"}
                    </div>
                  </div>
                )}

                {/* Promo Ribbon */}
                {plan.discount && !plan.popular && (
                  <div className="inline-flex self-start mb-3">
                    <span className="rounded-md bg-muted/90 text-foreground border border-border px-2 py-0.5 sm:px-2.5 text-[10.5px] sm:text-[11px] font-bold">
                      {plan.discount}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-2 sm:mb-3 lg:mb-5">
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-foreground mb-0.5 sm:mb-1 lg:mb-1.5 leading-tight line-clamp-2 sm:line-clamp-none">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] sm:text-[11px] lg:text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-3 sm:mb-4 lg:mb-6 pb-3 sm:pb-4 lg:pb-6 border-b border-border/60">
                  {plan.oldPrice && (
                    <div className="text-[11px] sm:text-xs text-muted-foreground line-through mb-0.5 sm:mb-1">
                      Rp {plan.oldPrice}
                    </div>
                  )}

                  <div className="flex items-baseline gap-1.5">
                    {plan.price !== "Custom Scope" && (
                      <span className="text-xs sm:text-xs lg:text-sm font-semibold text-muted-foreground">Rp</span>
                    )}
                    <span className={cn(
                      "font-extrabold tracking-tight text-foreground",
                      plan.price === "Custom Scope" ? "text-base sm:text-xl lg:text-3xl" : "text-lg sm:text-2xl lg:text-4xl"
                    )}>
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-muted-foreground">
                    {plan.periodNote}
                  </div>

                  {plan.maintenanceNote && (
                    <div className="mt-2.5">
                      <span className="inline-block rounded-md bg-muted/60 border border-border/50 text-foreground/80 text-[10px] sm:text-[10px] lg:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1">
                        {plan.maintenanceNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Scope & Target Summary */}
                <div className="mb-3 sm:mb-4 lg:mb-6 space-y-1 sm:space-y-1.5 lg:space-y-2 text-[11px] sm:text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Estimasi: <strong className="text-foreground">{plan.deliveryTime}</strong></span>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-2.5 text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-0.5">Ideal untuk:</strong>
                    {plan.bestFor}
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8 flex-1">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground">
                    Spesifikasi & Keunggulan Fitur:
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5 sm:gap-2 lg:gap-2.5 text-[11.5px] sm:text-xs text-foreground/90 leading-relaxed">
                        <div className="flex-shrink-0 w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 text-primary">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="line-clamp-2 sm:line-clamp-none">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full rounded-lg font-semibold shadow-sm h-9 sm:h-10 lg:h-11 text-xs sm:text-xs lg:text-sm"
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

        {/* Custom Scope / Estimator Callout */}
        <div className="mt-8 sm:mt-12 lg:mt-16 rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/[0.03] p-3 sm:p-5 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-lg font-bold text-foreground mb-1">
              Membutuhkan Arsitektur Kustom atau Spesifikasi Khusus?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tim engineering kami siap membantu merumuskan solusi teknis yang tepat dan menyusun proposal biaya terinci sesuai skala bisnis Anda.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 font-semibold rounded-lg shadow-md shadow-primary/20">
            <Link href="/kontak">
              <MessageSquare className="mr-2 h-4 w-4" />
              Konsultasi Langsung via WhatsApp
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
