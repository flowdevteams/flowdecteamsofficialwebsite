"use client"

import Link from "next/link"
import { 
  Brain, 
  LayoutDashboard, 
  Globe, 
  ArrowRight, 
  Check, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Search,
  Server,
  ArrowBigRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
import { cn } from "@/lib/utils"

const mainPillars = [
  {
    icon: Globe,
    title: "Landing Page & Web Interaktif",
    shortTitle: "Landing Page & Web",
    badge: "Konversi & Penjualan Cepat",
    tagline: "Hadirkan kesan pertama yang memukau dan ubah trafik pengunjung menjadi pembeli aktif.",
    description: "Website dan landing page berkecepatan tinggi (< 1.5 detik) yang dirancang khusus untuk kampanye iklan berbayar (Meta/TikTok/Google Ads) serta company profile modern.",
    features: [
      "Optimasi Kecepatan Ekstrem (Google PageSpeed 95+ Score)",
      "Formula Copywriting AIDA & Tombol Order Direct WhatsApp",
      "Pemasangan Meta Pixel, TikTok Pixel & Google Tag Manager",
      "Gratis Domain & Hosting Cloud 1 Tahun Penuh"
    ],
    startingPrice: "Mulai Rp 150.000",
    href: "/layanan/landing-page",
    colSpan: "lg:col-span-4"
  },
  {
    icon: LayoutDashboard,
    title: "Aplikasi Web & Sistem Bisnis",
    shortTitle: "Web App & SaaS",
    badge: "Efisiensi Operasional",
    tagline: "Sistem operasional kustom yang mendigitalkan seluruh alur kerja bisnis tanpa batas lisensi.",
    description: "Pengembangan platform SaaS, sistem ERP/CRM internal, point of sale (POS) multi-cabang, hingga dashboard analitik real-time yang disesuaikan 100% dengan SOP bisnis Anda.",
    features: [
      "Arsitektur Full-Stack Modern (Next.js, TypeScript & PostgreSQL)",
      "Role-Based Access Control (RBAC) & Autentikasi Pengguna Aman",
      "Integrasi Payment Gateway Otomatis (Midtrans / Xendit)",
      "100% Hak Milik Source Code & Handover Repository Git"
    ],
    startingPrice: "Mulai Rp 2.500.000",
    href: "/layanan/aplikasi-web",
    colSpan: "lg:col-span-4"
  },
  {
    icon: Brain,
    title: "Kecerdasan Buatan (AI) & ML",
    shortTitle: "AI & Otomasi",
    badge: "Otomasi & Produktivitas 24/7",
    tagline: "Otomatisasi alur kerja berulang dan tingkatkan kecepatan respon pelanggan dengan teknologi AI mutakhir.",
    description: "Integrasi LLM RAG berbasis dokumen SOP bisnis, pembuatan agen AI otonom untuk memproses data transaksi, hingga sistem Computer Vision untuk inspeksi mutu industri.",
    features: [
      "Asisten AI RAG Cerdas Terlatih SOP Internal & Katalog Produk",
      "AI Agent Otomasi Alur Kerja Antar Aplikasi (Tool Calling)",
      "Computer Vision Real-time Quality Inspection (YOLO / PyTorch)",
      "Privasi Data Terjamin dengan Enkripsi End-to-End"
    ],
    startingPrice: "Mulai Rp 3.500.000",
    href: "/layanan/kecerdasan-buatan",
    colSpan: "lg:col-span-4"
  }
]

const supportingCapabilities = [
  {
    icon: Search,
    title: "On-Page SEO & Analytics",
    description: "Struktur data Schema.org dan sitemap XML agar bisnis Anda mendominasi pencarian Google."
  },
  {
    icon: Server,
    title: "Managed Cloud & Zero Vendor Lock",
    description: "Infrastruktur cloud berkecepatan tinggi dengan kepemilikan penuh tanpa biaya royalti tersembunyi."
  },
  {
    icon: ShieldCheck,
    title: "Pemeliharaan & SLA Support",
    description: "Pendampingan teknis, monitoring uptime, dan backup data berkala agar sistem selalu aman."
  }
]

export function ServicesPreview() {
  return (
    <section className="border-b border-border/60 bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="inverse-panel relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 sm:px-10 lg:px-14 lg:py-20 bg-[#142d52]">
          <div className="absolute inset-0 inverse-grid opacity-35" />
          
          {/* Animated Inverse Grid Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-dot-inverse animate-grid-light-1" />
            <div className="grid-dot-inverse animate-grid-light-2" />
            <div className="grid-dot-inverse animate-grid-light-3" />
          </div>

          <div className="relative z-10">
            <SectionHeader
              badge="3 PILAR UTAMA LAYANAN"
              title="Solusi Rekayasa Digital yang Dirancang Khusus untuk Kebutuhan Bisnis Anda"
              description="Kami fokus pada 3 domain keahlian inti: mendorong konversi penjualan, merapikan sistem manajemen operasional, dan menghadirkan otomatisasi kecerdasan buatan."
              tone="inverse"
            />

            {/* 3 Main Pillars Cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mainPillars.map((pillar, index) => (
                <AnimatedSection
                  key={pillar.title}
                  animation="fade-in-up"
                  delay={index * 120}
                  className="h-full"
                >
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-7 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.12]">
                    <div>
                      {/* Top Header & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-xs group-hover:scale-105 transition-transform">
                          <pillar.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-white transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-white/80 leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="space-y-2.5 mb-8 pb-6 border-b border-white/10 text-xs">
                        {pillar.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-white/90 leading-relaxed">
                            <Check className="h-3.5 w-3.5 text-white shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Price & Link */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="block text-[10px] uppercase font-mono text-white/60 font-semibold">Investasi</span>
                        <span className="text-sm font-bold text-white font-mono">{pillar.startingPrice}</span>
                      </div>
                      <Button asChild size="sm" className="rounded-lg font-semibold bg-white text-primary hover:bg-white/90">
                        <Link href={pillar.href}>
                          Pelajari
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
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
                <div key={cap.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur text-left">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-white mb-1">
                    <cap.icon className="h-4 w-4 text-white shrink-0" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Section Action */}
            <AnimatedSection animation="fade-in-up" delay={500} className="text-center mt-12">
              <Button asChild size="lg" className="rounded-xl font-semibold px-8 bg-white text-primary shadow-lg shadow-black/20 hover:bg-white/90">
                <Link href="/layanan">
                  Lihat Rincian Seluruh Kategori Layanan
                  <ArrowBigRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
