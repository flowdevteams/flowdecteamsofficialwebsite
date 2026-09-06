"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Globe,
  LayoutDashboard,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ExternalLink,
  Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AccentTitle } from "@/components/accent-title"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

interface SolutionItem {
  id: string
  number: string
  category: "website" | "webapp"
  categoryLabel: string
  title: string
  description: string
  target: string
  image: string
  tags: string[]
  serviceUrl: string
}

const websiteSolutions: SolutionItem[] = [
  {
    id: "web-01",
    number: "01",
    category: "website",
    categoryLabel: "Website Perusahaan",
    title: "Corporate Company Profile (Website Resmi)",
    description: "Membangun kredibilitas resmi dan reputasi prestisius brand di hadapan mitra korporat, investor, dan tender pengadaan dengan showcase proyek dan profil PDF ready.",
    target: "PT, CV, Manufaktur, Kontraktor & Jasa Profesional",
    image: "/services/types/company-profile-v2.jpg",
    tags: ["Multi-Halaman", "Otoritas Brand", "Legalitas B2B", "PDF Ready"],
    serviceUrl: "/layanan/landing-page"
  },
  {
    id: "web-02",
    number: "02",
    category: "website",
    categoryLabel: "Landing Page Iklan",
    title: "High-Converting Sales Landing Page",
    description: "Halaman penawaran tunggal berkecepatan ultra tinggi (< 1.2 detik) tanpa distraksi, dirancang dengan psikologi direct-response untuk mengunci konversi iklan ke WhatsApp.",
    target: "Advertiser Meta Ads, TikTok Ads, Google Ads & Brand D2C",
    image: "/services/types/sales-landing-v3.jpg",
    tags: ["Direct WhatsApp CTA", "Meta Pixel Siap", "Zero Distraction", "Speed < 1.2s"],
    serviceUrl: "/layanan/landing-page"
  },
  {
    id: "web-03",
    number: "03",
    category: "website",
    categoryLabel: "Showcase & Portofolio",
    title: "Katalog Produk & Showcase Portofolio",
    description: "Etalase digital 24 jam dengan visual beresolusi tinggi, filter kategori cerdas, galeri interaktif, dan formulir permintaan penawaran harga (request quote) otomatis.",
    target: "Properti, Arsitektur, Furnitur, Interior & Studio Kreatif",
    image: "/services/types/portfolio-catalog-v2.jpg",
    tags: ["Visual Showcase", "Filter Kategori", "Request Quote", "Galeri Interaktif"],
    serviceUrl: "/layanan/landing-page"
  },
  {
    id: "web-04",
    number: "04",
    category: "website",
    categoryLabel: "Portal Edukasi & Event",
    title: "Portal Informasi, Edukasi & Registrasi",
    description: "Pusat informasi dan edukasi interaktif dengan sistem pendaftaran online, kalender booking konsultasi, artikel edukasi SEO-ready, dan manajemen prospek otomatis.",
    target: "Klinik & Medis, Lembaga Kursus/Bimbel & Event Organizer",
    image: "/services/types/portal-booking-v2.jpg",
    tags: ["Online Booking", "Artikel SEO", "Sistem Registrasi", "Database Leads"],
    serviceUrl: "/layanan/landing-page"
  },
  {
    id: "web-05",
    number: "05",
    category: "website",
    categoryLabel: "SaaS & Tech Web",
    title: "Modern SaaS & Tech Product Landing Page",
    description: "Halaman penawaran khusus produk digital, SaaS, dan platform AI dengan toggle harga bulanan/tahunan interaktif, visualisasi fitur, dan alur trial yang seamless.",
    target: "Startup Digital, Software House, SaaS B2B & Tech Founders",
    image: "/services/types/saas-product-v2.jpg",
    tags: ["Interactive Pricing", "Live UI Preview", "Trust Badges", "Trial Funnel"],
    serviceUrl: "/layanan/landing-page"
  },
  {
    id: "web-06",
    number: "06",
    category: "website",
    categoryLabel: "Toko Online Brand",
    title: "D2C E-Commerce & Brand Experience Store",
    description: "Etalase digital independen berkecepatan instan tanpa potongan komisi marketplace. Terintegrasi payment gateway (QRIS/VA), ongkir otomatis, dan checkout WhatsApp.",
    target: "Brand Fashion, Skincare & Beauty, Gadget & Retail D2C",
    image: "/services/types/d2c-store-v2.jpg",
    tags: ["Bebas Komisi", "Direct WhatsApp Order", "Payment Gateway", "Cek Ongkir Auto"],
    serviceUrl: "/layanan/landing-page"
  }
]

const webAppSolutions: SolutionItem[] = [
  {
    id: "app-01",
    number: "01",
    category: "webapp",
    categoryLabel: "Sistem Kasir & Stok",
    title: "Sistem Kasir Cloud POS & Inventori Multi-Cabang",
    description: "Sentralisasi penjualan dan stok untuk retail, F&B, dan distributor. Fitur multi-gudang real-time, barcode scanner, cetak struk Bluetooth, dan laporan margin otomatis.",
    target: "UMKM Retail, F&B Multi-Outlet, Grosir, Distributor & Toko Bangunan",
    image: "/services/types/webapp-pos-inventory.jpg",
    tags: ["Cloud POS", "Multi-Gudang Real-Time", "Laporan Margin", "Tanpa Biaya Per-Kasir"],
    serviceUrl: "/layanan/aplikasi-web"
  },
  {
    id: "app-02",
    number: "02",
    category: "webapp",
    categoryLabel: "ERP & Operasional",
    title: "Sistem ERP & Manajemen Operasional Internal",
    description: "Menyatukan alur kerja lintas divisi: pengadaan barang (procurement), purchase order (PO), approval bertingkat, progres proyek, dan otomasi penagihan invoice keuangan.",
    target: "Pabrik Manufaktur, Kontraktor Proyek & Perusahaan Logistik",
    image: "/services/types/webapp-custom-erp.jpg",
    tags: ["Approval Workflow", "Manajemen Proyek & PO", "Otomasi Invoice", "Multi-Divisi RBAC"],
    serviceUrl: "/layanan/aplikasi-web"
  },
  {
    id: "app-03",
    number: "03",
    category: "webapp",
    categoryLabel: "SaaS & Langganan",
    title: "Platform SaaS Berlangganan & Produk Digital MVP",
    description: "Aplikasi web multi-tenant dengan sistem langganan bulanan/tahunan otomatis terhubung Midtrans/Xendit, manajemen kuota user (tiering), dan dashboard pelanggan mandiri.",
    target: "Startup Founder, Software Innovator & Pemilik Produk Digital",
    image: "/services/types/webapp-saas-platform.jpg",
    tags: ["Multi-Tenancy", "Subscription Billing", "Payment Auto", "Tiering Limits"],
    serviceUrl: "/layanan/aplikasi-web"
  },
  {
    id: "app-04",
    number: "04",
    category: "webapp",
    categoryLabel: "CRM Penjualan",
    title: "Portal CRM Terintegrasi WhatsApp API & Leads Pipeline",
    description: "Kelola ribuan leads iklan tanpa tercecer. Integrasi WhatsApp Official/Gateway, auto-assign leads ke tim sales (round-robin), pelacakan deal stage, dan audit riwayat chat.",
    target: "Bisnis Online D2C, Tim Sales B2B, Properti & Agensi Konsultan",
    image: "/services/types/webapp-crm-leads.jpg",
    tags: ["WhatsApp API Sync", "Auto Lead Distribution", "Pipeline Tracker", "Audit Chat"],
    serviceUrl: "/layanan/aplikasi-web"
  },
  {
    id: "app-05",
    number: "05",
    category: "webapp",
    categoryLabel: "Portal Reservasi",
    title: "Portal Reservasi, Booking Online & Member Area",
    description: "Reservasi mandiri 24 jam dengan kalender ketersediaan real-time, pembayaran deposit QRIS/VA otomatis, rekam data member/pasien, dan pengingat WhatsApp terjadwal.",
    target: "Klinik Dokter & Medis, Lembaga Bimbel & Konsultan Profesional",
    image: "/services/types/webapp-booking-portal.jpg",
    tags: ["Live Booking", "Instant Deposit", "Portal Member Privat", "Reminder WhatsApp"],
    serviceUrl: "/layanan/aplikasi-web"
  },
  {
    id: "app-06",
    number: "06",
    category: "webapp",
    categoryLabel: "Executive BI Dashboard",
    title: "Dashboard Analitik Eksekutif & Sistem Agregasi Data",
    description: "Pusat kendali bisnis interaktif untuk jajaran direksi. Agregasi omset multi-cabang & marketplace real-time, kalkulasi laba-rugi otomatis, dan ekspor instan Excel/PDF.",
    target: "Direktur, Pemilik Multi-Bisnis, Investor & Tim Finance Korporat",
    image: "/services/types/webapp-bi-dashboard.jpg",
    tags: ["Real-Time WebSocket", "Otomasi Cash Flow & PnL", "Ekspor Excel/PDF", "Audit Trail"],
    serviceUrl: "/layanan/aplikasi-web"
  }
]

export function SolutionsShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"all" | "website" | "webapp">("all")

  return (
    <section id="katalog-spesifikasi" className="relative py-20 sm:py-28 overflow-hidden bg-background">
      {/* Background Decor Ambient (Blue & White Only) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-4">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span>PILIHAN WEBSITE &amp; APLIKASI WEB KUSTOM</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-heading">
              <AccentTitle
                text="Jasa Pembuatan Website & Aplikasi Web Kustom Sesuai Kebutuhan Bisnis Anda"
                highlightWords={4}
              />
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal max-w-2xl mx-auto">
              Temukan Solusi Website dan Aplikasi yang Tepat Untuk Bisnis Anda. Dari profil perusahaan, landing page iklan, Hingga Sistem Kasir dan Operasional.
            </p>
          </AnimatedSection>

          {/* Interactive Category Filter Pills */}
          <AnimatedSection animation="fade-in-up" delay={300} className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 border",
                activeTab === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              Semua Pilihan (12 Tipe)
            </button>
            <button
              onClick={() => setActiveTab("website")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 border",
                activeTab === "website"
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              <Globe className="h-4 w-4" />
              <span>Website &amp; Landing Page (6)</span>
            </button>
            <button
              onClick={() => setActiveTab("webapp")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 border",
                activeTab === "webapp"
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Aplikasi Web &amp; Sistem Bisnis (6)</span>
            </button>
          </AnimatedSection>
        </div>
      </div>

      {/* Infinite Looping Marquee Area with Edge Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Soft Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />

        {/* Row 1: Website & Landing Page (Sliding Left ←) */}
        {(activeTab === "all" || activeTab === "website") && (
          <div className="mb-6 group">
            <div className="flex items-center gap-2 px-6 sm:px-12 mb-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                <Globe className="h-3 w-3" />
                PILIHAN WEBSITE &amp; LANDING PAGE
              </span>
              <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline-block">
                // Arahkan kursor untuk menjeda animasi
              </span>
            </div>

            <div className="animate-marquee-left flex gap-5 gpu-accelerated">
              {/* Double array for infinite continuous loop */}
              {[...websiteSolutions, ...websiteSolutions].map((item, idx) => (
                <SolutionCard key={`${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Row 2: Aplikasi Web & Sistem Enterprise (Sliding Right →) */}
        {(activeTab === "all" || activeTab === "webapp") && (
          <div className="group mt-2">
            <div className="flex items-center gap-2 px-6 sm:px-12 mb-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                <LayoutDashboard className="h-3 w-3" />
                PILIHAN APLIKASI WEB &amp; SISTEM BISNIS
              </span>
              <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline-block">
                // Arahkan kursor untuk menjeda animasi
              </span>
            </div>

            <div className="animate-marquee-right flex gap-5 gpu-accelerated">
              {/* Double array for infinite continuous loop */}
              {[...webAppSolutions, ...webAppSolutions].map((item, idx) => (
                <SolutionCard key={`${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Micro-Trust Value Bar */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left sm:text-center">
            <div className="flex items-center sm:justify-center gap-2 text-xs font-semibold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>100% Hak Milik Source Code</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 text-xs font-semibold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>Bebas Biaya Lisensi Per-User</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 text-xs font-semibold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>Desain Kustom Tanpa Template</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 text-xs font-semibold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>Integrasi API &amp; Payment Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionCard({ item }: { item: SolutionItem }) {
  return (
    <div className="w-[310px] sm:w-[370px] shrink-0 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden group/card select-none">
      <div>
        {/* Browser Chrome Header Mockup */}
        <div className="relative rounded-xl overflow-hidden border border-primary/25 bg-[#0b1728] shadow-md group-hover/card:border-primary/50 transition-all duration-300 mb-3.5">
          <div className="flex items-center justify-between px-3 py-2 bg-[#0d1c33] border-b border-white/10 text-white select-none">
            {/* 3 Window dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="rounded bg-white/10 px-2 py-0.5 text-[8px] font-mono font-semibold uppercase tracking-wider text-white/80">
                {item.categoryLabel}
              </span>
              <span className="rounded bg-primary/25 px-2 py-0.5 text-[8px] font-mono font-bold uppercase tracking-wider text-sky-200 border border-primary/40">
                TIPE {item.number}
              </span>
            </div>
          </div>

          {/* High-Resolution Mockup Viewport */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a1424]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
              sizes="370px"
              loading="lazy"
            />
          </div>
        </div>

        {/* Target Audience Pill */}
        <div className="mb-2.5 flex items-start gap-2 rounded-lg bg-primary/[0.04] px-2.5 py-1.5 border border-primary/15 text-[11px]">
          <span className="font-semibold text-primary shrink-0">Cocok:</span>
          <span className="text-foreground/85 font-medium line-clamp-1 leading-normal">{item.target}</span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug mb-1.5 group-hover/card:text-primary transition-colors line-clamp-1">
          {item.title}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2.5 border-t border-border/50 mb-3">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted/60 px-2 py-0.5 text-[9px] font-mono font-medium text-foreground/75 border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="flex-1 rounded-xl bg-primary text-primary-foreground font-semibold text-xs h-8.5 shadow-sm shadow-primary/20 hover:bg-primary/90 transition-all duration-200"
          >
            <Link
              href={`https://wa.me/62882008453472?text=Halo%20Flowdev%20Teams,%20saya%20tertarik%20konsultasi%20pembuatan%20${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5"
            >
              <span>Konsultasi Jenis Ini</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-xl border-border hover:border-primary/40 text-muted-foreground hover:text-foreground h-8.5 px-2.5"
            title="Lihat Detail Layanan"
          >
            <Link href={item.serviceUrl}>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
