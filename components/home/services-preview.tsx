"use client"

import Link from "next/link"
import { 
  Brain, 
  LayoutDashboard, 
  Globe, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  Search, 
  Server, 
  ArrowBigRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const mainPillars = [
  {
    icon: Globe,
    title: "Landing Page & Web Interaktif",
    badge: "PROMO PERDANA 50%",
    isPopular: true,
    tagline: "Desain Berkecepatan Tinggi untuk Maksimalkan Konversi Penjualan",
    description: "Halaman web berkecepatan kilat (< 1.5 detik) yang dirancang khusus untuk mengubah trafik iklan (Meta, TikTok, Google Ads) menjadi closing penjualan WhatsApp.",
    features: [
      "Performa Cepat: Google PageSpeed 95+ Score",
      "Struktur Copywriting Persuasif & Direct WA Checkout",
      "Setup Tracking: Meta Pixel & Google Tag Manager",
      "Gratis Domain & Cloud Hosting 1 Tahun Penuh",
      "100% Hak Milik Source Code & Desain Kustom"
    ],
    priceLabel: "Paket UMKM & Iklan",
    discountBadge: "Hemat 50%",
    numericPrice: "Rp 150.000",
    hasPrefix: false,
    originalPrice: "Coret Rp 300.000",
    paymentTerm: "Bayar 1x • Tanpa Royalti",
    href: "/layanan/landing-page",
    ctaText: "Mulai Landing Page"
  },
  {
    icon: LayoutDashboard,
    title: "Aplikasi Web & Sistem Bisnis",
    badge: "SISTEM & SAAS",
    isPopular: false,
    tagline: "Digitalkan Operasional Bisnis Anda Tanpa Batas Lisensi",
    description: "Pengembangan platform SaaS, sistem ERP/CRM, POS kasir multi-cabang, dan dashboard analitik real-time yang disesuaikan 100% dengan alur kerja bisnis Anda.",
    features: [
      "Full-Stack Modern: Next.js 16, TypeScript & PostgreSQL",
      "Role-Based Access Control (RBAC) & Multi-Role User",
      "Integrasi Payment Gateway Otomatis (Midtrans / Xendit)",
      "RESTful API & Webhooks Siap Integrasi Eksternal",
      "Penyerahan Lengkap Git Repository & Dokumentasi"
    ],
    priceLabel: "Sistem Kustom & SaaS",
    discountBadge: "Milestone",
    numericPrice: "Rp 2.500.000",
    hasPrefix: true,
    originalPrice: "Coret Rp 5.000.000",
    paymentTerm: "Termin Bertahap (Milestone)",
    href: "/layanan/aplikasi-web",
    ctaText: "Konsultasi Sistem Bisnis"
  },
  {
    icon: Brain,
    title: "Kecerdasan Buatan (AI) & ML",
    badge: "AI & OTOMASI",
    isPopular: false,
    tagline: "Otomatisasi Cerdas 24/7 & Analitik Prediktif Bisnis",
    description: "Integrasi LLM RAG berbasis dokumen SOP perusahaan, AI Agent otonom pemroses tugas transaksi, hingga Computer Vision inspeksi mutu industri manufaktur.",
    features: [
      "Chatbot AI RAG Cerdas Membaca Dokumen SOP & PDF",
      "AI Agent Eksekusi Alur Kerja Otomatis (Tool Calling)",
      "Computer Vision Inspeksi Cacat Produk Real-time",
      "Keamanan Data Terjamin: Enkripsi End-to-End",
      "Dashboard Monitoring Token & Latensi Respon AI"
    ],
    priceLabel: "Model & Agent AI",
    discountBadge: "Custom AI",
    numericPrice: "Rp 3.500.000",
    hasPrefix: true,
    originalPrice: "Coret Rp 7.000.000",
    paymentTerm: "Dataset SOP Kustom",
    href: "/layanan/kecerdasan-buatan",
    ctaText: "Eksplorasi Solusi AI"
  }
]

const supportingCapabilities = [
  {
    icon: Search,
    title: "On-Page SEO & Schema Markup",
    description: "Struktur teknis teroptimasi agar website bisnis Anda mudah ditemukan di halaman pencarian Google."
  },
  {
    icon: Server,
    title: "Zero Vendor Lock-in",
    description: "Seluruh kode, database, dan aset diserahkan 100% kepada Anda tanpa biaya royalti sewa tahunan."
  },
  {
    icon: ShieldCheck,
    title: "Garansi & SLA Support Terkelola",
    description: "Pemantauan uptime, backup data rutin, dan pendampingan teknis responsif demi kelancaran operasional."
  }
]

export function ServicesPreview() {
  return (
    <section className="border-b border-border/60 bg-background py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inverse-panel relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 px-4 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-20 bg-[#142d52]">
          <div className="absolute inset-0 inverse-grid" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10">
            <SectionHeader
              badge="3 PILAR UTAMA &amp; INVESTASI TRANSPARAN"
              title="Pilihan Solusi Rekayasa Digital yang Dirancang untuk Pertumbuhan Nyata"
              description="Skema investasi terukur tanpa biaya terselubung. Pilih tingkatan solusi yang paling sesuai dengan target dan skala bisnis Anda."
              tone="inverse"
            />

            {/* 3 Main Pillars Cards Grid */}
            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {mainPillars.map((pillar, index) => (
                <AnimatedSection
                  key={pillar.title}
                  animation="fade-in-up"
                  delay={index * 120}
                  className="h-full"
                >
                  <article className={cn(
                    "group relative flex h-full flex-col justify-between rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1",
                    pillar.isPopular 
                      ? "border-2 border-white/35 bg-white/[0.10] shadow-2xl ring-1 ring-white/20" 
                      : "border border-white/15 bg-white/[0.06] hover:border-white/30 hover:bg-white/[0.09]"
                  )}>
                    
                    {/* Top Content Area */}
                    <div>
                      {/* Card Header: Icon & Badge */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-xs group-hover:scale-105 transition-transform">
                          <pillar.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className={cn(
                          "rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider",
                          pillar.isPopular 
                            ? "bg-white text-primary shadow-xs" 
                            : "bg-white/10 text-white border border-white/20"
                        )}>
                          {pillar.badge}
                        </span>
                      </div>

                      {/* Card Heading */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug font-heading">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-xs font-semibold text-white/90 mb-2 leading-relaxed">
                        {pillar.tagline}
                      </p>

                      <p className="text-xs text-white/75 leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="space-y-2.5 mb-6 pb-6 border-b border-white/15 text-xs">
                        {pillar.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-white/90 leading-relaxed">
                            <Check className="h-3.5 w-3.5 text-white shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DEDICATED ROBUST PRICE BOX (Zero Overflow) */}
                    <div className="flex flex-col gap-3.5">
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-4.5 backdrop-blur-md">
                        {/* Top Label & Discount Tag */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/70 truncate">
                            {pillar.priceLabel}
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/15 border border-white/20 text-white shrink-0">
                            {pillar.discountBadge}
                          </span>
                        </div>

                        {/* Large Clean Price Value */}
                        <div className="my-1.5">
                          <div className="flex items-baseline gap-1.5">
                            {pillar.hasPrefix && (
                              <span className="text-xs font-mono text-white/60 font-medium">Mulai</span>
                            )}
                            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                              {pillar.numericPrice}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Terms & Anchor Price */}
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/75">
                          <span className="font-medium truncate">{pillar.paymentTerm}</span>
                          <span className="font-mono line-through text-white/50 text-[10px] shrink-0">
                            {pillar.originalPrice}
                          </span>
                        </div>
                      </div>

                      {/* Full-width CTA Button */}
                      <Button 
                        asChild 
                        size="lg" 
                        className="w-full h-11 rounded-xl font-bold text-xs sm:text-sm bg-white text-primary hover:bg-white/90 shadow-md transition-all group/btn"
                      >
                        <Link href={pillar.href} className="flex items-center justify-center gap-2">
                          <span>{pillar.ctaText}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>

                  </article>
                </AnimatedSection>
              ))}
            </div>

            {/* 3 Supporting Capabilities Strip */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {supportingCapabilities.map((cap) => (
                <div key={cap.title} className="rounded-xl border border-white/15 bg-white/[0.05] p-4 backdrop-blur text-left flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <cap.icon className="h-4 w-4 text-white shrink-0" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Section Action Buttons */}
            <AnimatedSection animation="fade-in-up" delay={500} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-11 rounded-xl font-bold px-7 bg-white text-primary shadow-lg shadow-black/20 hover:bg-white/90">
                <Link href="/layanan">
                  Jelajahi Rincian Semua Layanan
                  <ArrowBigRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="h-11 rounded-xl font-semibold px-7 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/harga-paket">
                  Bandingkan Skema Harga Lengkap
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
