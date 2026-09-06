"use client"

import Link from "next/link"
import { 
  Brain, 
  LayoutDashboard, 
  Globe, 
  ArrowRight, 
  Check, 
  ArrowBigRight,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const unifiedTheme = {
  cardBorder: "border-indigo-400/30 hover:border-indigo-400/60",
  cardBg: "bg-gradient-to-b from-indigo-950/30 via-white/[0.07] to-white/[0.04]",
  iconContainer: "border-indigo-400/40 bg-indigo-500/15 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.35)]",
  badge: "border-indigo-400/30 bg-indigo-500/15 text-indigo-200",
  checkCircle: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
  topGlowBar: "bg-gradient-to-r from-transparent via-indigo-400 to-transparent",
  audienceBox: "border-indigo-400/25 bg-indigo-950/40 text-indigo-300",
  hoverShadow: "hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]"
}

const mainPillars = [
  {
    icon: Globe,
    title: "Pembuatan Website & Landing Page",
    badge: "WEB & BRANDING",
    isPopular: true,
    tagline: "Tingkatkan Visibilitas Brand & Konversi Penjualan Secara Online",
    features: [
      {
        highlight: "Company Profile Profesional",
        detail: "Bangun kredibilitas resmi dan kepercayaan mitra bisnis dengan profil perusahaan yang elegan."
      },
      {
        highlight: "Landing Page Iklan (High-Conversion)",
        detail: "Halaman fokus pemasaran untuk melipatgandakan hasil dari kampanye iklan digital Anda."
      },
      {
        highlight: "Katalog & Portofolio Bisnis",
        detail: "Pamerkan produk dan karya unggulan yang siap diakses klien 24 jam penuh tanpa batas."
      },
      {
        highlight: "Portal Edukasi & Berita (Blog)",
        detail: "Tingkatkan otoritas brand (SEO) di Google melalui publikasi artikel dan wawasan industri."
      },
      {
        highlight: "Website Lead Generation",
        detail: "Jaring prospek potensial secara otomatis melalui formulir penawaran dan kontak terintegrasi."
      }
    ],
    targetAudience: "Perusahaan dan profesional yang ingin membangun identitas digital resmi atau meluncurkan kampanye marketing online.",
    href: "/layanan/landing-page",
    ctaText: "Konsultasi Website",
    theme: unifiedTheme
  },
  {
    icon: LayoutDashboard,
    title: "Aplikasi Web & Sistem Kustom",
    badge: "SISTEM & SAAS",
    isPopular: false,
    tagline: "Otomatisasi Operasional Bisnis dengan Perangkat Lunak Tepat Guna",
    features: [
      {
        highlight: "Sistem Manajemen Perusahaan (ERP)",
        detail: "Sentralisasi operasional gudang, keuangan, hingga pembelian dalam satu sistem terpadu."
      },
      {
        highlight: "Aplikasi Manajemen SDM (HRIS)",
        detail: "Kelola absensi, cuti, KPI, hingga perhitungan gaji (payroll) karyawan secara otomatis."
      },
      {
        highlight: "Aplikasi Kasir & Inventaris (POS)",
        detail: "Percepat transaksi penjualan toko dan pantau ketersediaan stok barang secara real-time."
      },
      {
        highlight: "Manajemen Pelanggan (CRM)",
        detail: "Lacak riwayat interaksi prospek dan jaga hubungan baik pelanggan untuk loyalitas jangka panjang."
      },
      {
        highlight: "Aplikasi Kustom Spesifik Bisnis",
        detail: "Software fleksibel yang dibangun 100% mengikuti prosedur operasional unik (SOP) bisnis Anda."
      }
    ],
    targetAudience: "Bisnis berkembang yang membutuhkan digitalisasi untuk menggantikan alur kerja manual berbasis kertas atau spreadsheet.",
    href: "/layanan/aplikasi-web",
    ctaText: "Konsultasi Sistem Bisnis",
    theme: unifiedTheme
  },
  {
    icon: Brain,
    title: "Kecerdasan Buatan (AI) & Otomasi",
    badge: "AI & OTOMASI",
    isPopular: false,
    tagline: "Percepat Kinerja Bisnis dan Pangkas Biaya dengan Teknologi Masa Depan",
    features: [
      {
        highlight: "Chatbot AI & Asisten Virtual 24/7",
        detail: "Respon instan ribuan pesan pelanggan seketika dengan AI yang memahami konteks produk Anda."
      },
      {
        highlight: "Sistem Ekstraksi Dokumen (OCR AI)",
        detail: "Ubah foto KTP, faktur, atau dokumen fisik menjadi rekapitulasi data digital secara otomatis."
      },
      {
        highlight: "Otomasi Alur Kerja (Workflow AI)",
        detail: "Hilangkan tugas repetitif antar departemen sehingga tim dapat fokus pada inovasi strategis."
      },
      {
        highlight: "Mesin Rekomendasi (Recommendation Engine)",
        detail: "Tingkatkan nilai penjualan dengan menyajikan saran produk paling relevan ke setiap pembeli."
      },
      {
        highlight: "Analitik & Prediksi Bisnis (Data AI)",
        detail: "Gunakan data historis untuk memprediksi tren permintaan pasar dan optimasi inventaris Anda."
      }
    ],
    targetAudience: "Perusahaan yang siap bertransformasi untuk meningkatkan efisiensi staf dan kualitas pelayanan melalui otomatisasi AI.",
    href: "/layanan/kecerdasan-buatan",
    ctaText: "Eksplorasi Solusi AI",
    theme: unifiedTheme
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
              badge="SOLUSI UNTUK BISNIS ANDA"
              title="Layanan Website, Aplikasi & Otomasi Bisnis"
              description="Pilih Sesuai Kebutuhan Bisnis Anda: Website Resmi Agar Lebih Dipercaya, Aplikasi Untuk Merapikan Operasional, Atau Sistem Otomatis Yang Efisien."
              tone="inverse"
            />

            {/* 3 Main Pillars Cards Grid */}
            <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {mainPillars.map((pillar, index) => (
                <AnimatedSection
                  key={pillar.title}
                  animation="fade-in-up"
                  delay={index * 120}
                  className="h-full"
                >
                  <article className={cn(
                    "group relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7 lg:p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 overflow-hidden border",
                    pillar.theme.cardBorder,
                    pillar.theme.cardBg,
                    pillar.theme.hoverShadow
                  )}>
                    {/* Top Glow Accent Bar */}
                    <div className={cn("absolute top-0 left-0 right-0 h-[2px]", pillar.theme.topGlowBar)} />
                    
                    {/* Top Content Area */}
                    <div>
                      {/* Card Header: Icon & Badge */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110",
                          pillar.theme.iconContainer
                        )}>
                          <pillar.icon className="h-6 w-6" />
                        </div>
                        <span className={cn(
                          "rounded-full px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider border shadow-xs",
                          pillar.theme.badge
                        )}>
                          {pillar.badge}
                        </span>
                      </div>

                      {/* Card Heading */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-snug font-heading tracking-tight">
                        {pillar.title}
                      </h3>
                      
                      {/* Tagline / Subtitle */}
                      <p className="text-sm sm:text-[14.5px] font-medium text-white/90 mb-7 leading-relaxed">
                        {pillar.tagline}
                      </p>

                      {/* Feature Bullet Points with Clear Highlighting */}
                      <div className="space-y-3.5 mb-7 pb-7 border-b border-white/15">
                        {pillar.features.map((feat) => (
                          <div key={feat.highlight} className="flex items-start gap-3">
                            <div className={cn(
                              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border mt-0.5 shadow-xs transition-transform group-hover:scale-105",
                              pillar.theme.checkCircle
                            )}>
                              <Check className="h-3 w-3 stroke-[3]" />
                            </div>
                            <div className="text-[13.5px] sm:text-[14px] leading-snug">
                              <span className="font-bold text-white tracking-normal block sm:inline mr-1.5">
                                {feat.highlight}:
                              </span>
                              <span className="text-white/85 font-normal">
                                {feat.detail}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience Qualification & CTA */}
                    <div className="flex flex-col gap-4 mt-auto">
                      <div className={cn(
                        "rounded-xl border p-4 backdrop-blur-sm transition-colors",
                        pillar.theme.audienceBox
                      )}>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider">
                            <Users className="h-4 w-4 shrink-0" />
                            <span>Cocok Untuk:</span>
                          </div>
                          <p className="text-[13px] sm:text-sm text-white/95 font-medium leading-relaxed pl-6">
                            {pillar.targetAudience}
                          </p>
                        </div>
                      </div>

                      {/* Full-width High-Impact CTA Button */}
                      <Button 
                        asChild 
                        size="lg" 
                        className="w-full h-11 sm:h-12 rounded-xl font-bold text-sm bg-white text-primary hover:bg-white/95 shadow-lg shadow-black/25 transition-all duration-200 group/btn"
                      >
                        <Link href={pillar.href} className="flex items-center justify-center gap-2">
                          <span>{pillar.ctaText}</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>

                  </article>
                </AnimatedSection>
              ))}
            </div>

            {/* Bottom Section Action Buttons */}
            <AnimatedSection animation="fade-in-up" delay={500} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-11 rounded-xl font-bold px-7 bg-white text-primary shadow-lg shadow-black/20 hover:bg-white/90">
                <Link href="/portofolio">
                  Lihat Showcase Portofolio
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

