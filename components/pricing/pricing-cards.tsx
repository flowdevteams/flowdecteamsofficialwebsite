"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Check, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  LayoutDashboard, 
  Brain, 
  Zap, 
  Lock, 
  Clock, 
  MessageSquare,
  BadgePercent,
  GitBranch,
  Terminal,
  Cpu,
  CheckCircle2,
  Gauge,
  FileCode2,
  FolderGit2,
  Layers,
  Scale
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Category Switcher Tabs */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <BadgePercent className="h-3.5 w-3.5" />
            Promo Subsidi Digitalisasi UMKM 2026 Aktif
          </div>
          <div className="inline-flex p-1.5 rounded-xl border border-border/80 bg-card/90 shadow-sm backdrop-blur">
            <button
              type="button"
              onClick={() => setActiveCategory("landing")}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "landing"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Globe className="h-4 w-4" />
              <span>Landing Page & Web</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("webapp")}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "webapp"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Aplikasi Web & Sistem</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("ai")}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "ai"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Brain className="h-4 w-4" />
              <span>Kecerdasan Buatan (AI)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <AnimatedSection
              key={plan.id}
              animation="fade-in-up"
              delay={index * 100}
              className="h-full"
            >
              <div
                className={cn(
                  "relative h-full flex flex-col p-7 sm:p-8 rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-card border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/35 -translate-y-1"
                    : "bg-card/70 border-border/80 hover:border-primary/50 hover:shadow-md"
                )}
              >
                {/* Popular / Best Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {plan.badgeText || "Rekomendasi Utama"}
                    </div>
                  </div>
                )}

                {/* Promo Ribbon */}
                {plan.discount && !plan.popular && (
                  <div className="inline-flex self-start mb-3">
                    <span className="rounded-md bg-muted/90 text-foreground border border-border px-2.5 py-0.5 text-[11px] font-mono font-bold">
                      {plan.discount}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-foreground mb-1.5 leading-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-border/60">
                  {plan.oldPrice && (
                    <div className="text-xs text-muted-foreground line-through mb-1">
                      Rp {plan.oldPrice}
                    </div>
                  )}

                  <div className="flex items-baseline gap-1.5">
                    {plan.price !== "Custom Scope" && (
                      <span className="text-sm font-semibold text-muted-foreground">Rp</span>
                    )}
                    <span className={cn(
                      "font-extrabold tracking-tight text-foreground",
                      plan.price === "Custom Scope" ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
                    )}>
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground">
                    {plan.periodNote}
                  </div>

                  {plan.maintenanceNote && (
                    <div className="mt-2.5">
                      <span className="inline-block rounded-md bg-muted/60 border border-border/50 text-foreground/80 text-[11px] font-medium px-2.5 py-1">
                        {plan.maintenanceNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Scope & Target Summary */}
                <div className="mb-6 space-y-2 text-xs">
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
                <div className="space-y-3 mb-8 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Spesifikasi & Keunggulan Fitur:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed">
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
                  className="w-full rounded-lg font-semibold shadow-sm"
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

        {/* ============================================================ */}
        {/* BESPOKE ENGINEERING TRUST MATRIX (HANDCRAFTED BENTO GRID)   */}
        {/* ============================================================ */}
        <div className="mt-20 rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-10 shadow-lg backdrop-blur relative overflow-hidden">
          {/* Subtle tech background accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          {/* Section Header */}
          <div className="relative z-10 mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-md bg-muted/80 border border-border px-3 py-1 text-xs font-mono font-semibold text-primary mb-3">
              <Terminal className="h-3.5 w-3.5" />
              <span>// PROTOKOL REKAYASA &amp; STANDAR SLA TEKNIS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              <AccentTitle text="Arsitektur Bersih, Transparansi Penuh, & Jaminan Kualitas" />
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Setiap baris kode ditulis secara presisi menggunakan stack modern Next.js 16 tanpa plugin berat. Dirancang untuk keandalan jangka panjang bisnis Anda.
            </p>
          </div>

          {/* 4 Bespoke Engineering Bento Cards */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2">

            {/* BENTO CARD 1: Full IP Handover & Repository Transfer */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-primary">
                    100% IP HANDOVER
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  Hak Cipta &amp; Source Code Milik Penuh Anda
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Tidak ada sistem sewa terikat atau biaya royalti tersembunyi. Seluruh repository kode, skema database, dan aset desain diserahkan penuh kepada Anda.
                </p>
              </div>

              {/* Developer UI Widget: Terminal / Git Handover */}
              <div className="rounded-xl border border-border/80 bg-muted/40 p-3.5 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground pb-1.5 border-b border-border/50">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-border inline-block" />
                    <span className="h-2 w-2 rounded-full bg-border inline-block" />
                    <span className="h-2 w-2 rounded-full bg-border inline-block" />
                    <span className="ml-1 text-foreground/70 font-semibold">repo-transfer.sh</span>
                  </div>
                  <span className="text-primary font-semibold">Verified Clean Handover</span>
                </div>
                <div className="text-[11px] text-foreground/90 space-y-1">
                  <div className="text-primary font-semibold flex items-center gap-1">
                    <span>$</span>
                    <span className="text-foreground">git remote add client-repo git@github.com:client/app.git</span>
                  </div>
                  <div className="text-muted-foreground text-[10px]">
                    ✔ Source Code &bull; ✔ PostgreSQL Schema &bull; ✔ Figma File &bull; ✔ No Vendor Lock-in
                  </div>
                </div>
              </div>
            </div>

            {/* BENTO CARD 2: Milestone Payment Pipeline */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Layers className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-primary">
                    ESCROW MILESTONE
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  Pembayaran Bertahap Berbasis Capaian Nyata
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Keamanan dana Anda terjamin dengan skema termin transparan. Pembayaran hanya dilakukan setelah bukti capaian kerja tiap fase disetujui.
                </p>
              </div>

              {/* Developer UI Widget: 3-Stage Progress Pipeline */}
              <div className="rounded-xl border border-border/80 bg-muted/40 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-muted-foreground font-semibold">Alur Termin Proyek:</span>
                  <span className="text-primary font-bold">3-Stage Transparent Flow</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="rounded-lg bg-card border border-primary/30 p-2 shadow-xs">
                    <div className="text-xs font-bold text-primary">30% DP</div>
                    <div className="text-[9px] text-muted-foreground mt-0.5">Arsitektur &amp; UI</div>
                  </div>
                  <div className="rounded-lg bg-card border border-primary/30 p-2 shadow-xs">
                    <div className="text-xs font-bold text-primary">40% Mid</div>
                    <div className="text-[9px] text-muted-foreground mt-0.5">Fitur &amp; API</div>
                  </div>
                  <div className="rounded-lg bg-card border border-primary/30 p-2 shadow-xs">
                    <div className="text-xs font-bold text-primary">30% Final</div>
                    <div className="text-[9px] text-muted-foreground mt-0.5">Live &amp; Handover</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BENTO CARD 3: Zero Bloatware & Lighthouse 99 Performance */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-primary">
                    LIGHTHOUSE 99+ SCORE
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  Zero Bloatware &amp; Core Web Vitals Ekstrem
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Dibangun murni menggunakan Next.js App Router dan Turbopack, tanpa WordPress atau page-builder berat yang memperlambat laju website.
                </p>
              </div>

              {/* Developer UI Widget: Performance Metrics Gauge */}
              <div className="rounded-xl border border-border/80 bg-muted/40 p-3.5 space-y-2">
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="rounded-lg bg-primary/10 border border-primary/25 p-2">
                    <div className="text-base font-black text-primary leading-none">99</div>
                    <div className="text-[9px] text-muted-foreground uppercase mt-1">PageSpeed</div>
                  </div>
                  <div className="rounded-lg bg-card border border-border/70 p-2">
                    <div className="text-xs font-bold text-foreground leading-none">&lt; 0.8s</div>
                    <div className="text-[9px] text-muted-foreground uppercase mt-1">LCP Speed</div>
                  </div>
                  <div className="rounded-lg bg-card border border-border/70 p-2">
                    <div className="text-xs font-bold text-foreground leading-none">0.00</div>
                    <div className="text-[9px] text-muted-foreground uppercase mt-1">CLS Shift</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BENTO CARD 4: NDA & Isolated Data Privacy */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Lock className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-primary">
                    STRICT PRIVACY NDA
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  Kerahasiaan Hukum NDA &amp; Keamanan Data
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Perlindungan hukum sah dengan penandatanganan Non-Disclosure Agreement (NDA). Data dan ide bisnis Anda diisolasi secara ketat dan aman.
                </p>
              </div>

              {/* Developer UI Widget: Security Badge */}
              <div className="rounded-xl border border-border/80 bg-muted/40 p-3.5 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="flex items-center gap-1.5 text-foreground font-semibold">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                    Legally Binding NDA Ready
                  </span>
                  <span className="text-primary font-bold">AES-256</span>
                </div>
                <div className="text-[10px] text-muted-foreground leading-relaxed">
                  Semua kredensial, API keys, dan basis data disimpan dalam Environment Variables terenkripsi dengan audit log aman.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Custom Scope / Estimator Callout */}
        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
