"use client"

import Image from "next/image"
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Truck, 
  CreditCard, 
  Zap, 
  ShoppingCart, 
  Tag, 
  ShieldCheck,
  Star,
  Activity,
  Layers,
  Search,
  ExternalLink
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

export function FeaturesBentoSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 sm:py-24 lg:py-28">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="absolute inset-0 saas-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              Fitur Lengkap &amp; Ekosistem Siap Pakai
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Dilengkapi Semua Fitur </span>
              <span className="text-primary">Kebutuhan Skalabilitas Bisnis</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Memudahkan Pengelolaan Operasional, Transaksi Penjualan, Dan Ekspansi Pasar Perusahaan Anda Secara Profesional.
            </p>
          </AnimatedSection>
        </div>

        {/* BENTO GRID: 5 Cards Layout matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ============================================================ */}
          {/* CARD 1: E-Commerce & Katalog Produk (Top Left, 4 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/90 to-muted/20 p-6 sm:p-7 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                <ShoppingCart className="w-3.5 h-3.5" />
                E-Commerce Terintegrasi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Katalog &amp; Transaksi Cepat
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Kemudahan Menampilkan Produk Unggulan Serta Checkout Otomatis Langsung Ke WhatsApp Maupun Sistem Kasir Toko.
              </p>
            </div>

            {/* Visual Real Product Card Mockup */}
            <div className="relative mt-2 p-3.5 rounded-2xl bg-background border border-border/70 shadow-md group-hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3.5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-muted/30 shrink-0 border border-border/50">
                  <Image
                    src="/products/chair.jpg"
                    alt="Katalog Produk Kursi Minimalis"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="120px"
                  />
                  <span className="absolute top-1.5 left-1.5 bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow-xs">
                    PROMO
                  </span>
                </div>

                <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-semibold">Home &amp; Office</span>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">
                      Nordic Minimalist Armchair
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-[11px] font-semibold text-foreground">4.9</span>
                      <span className="text-[10px] text-muted-foreground">(128 Ulasan)</span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-baseline gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-primary">Rp 850.000</span>
                    <span className="text-[10px] text-muted-foreground line-through">Rp 1.200.000</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Tags */}
              <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Siap Kirim Hari Ini
                </span>
                <span className="font-semibold text-primary">Google Shopping Ready</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: Desain Memukau & Editor UI (Top Center, 5 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/95 to-muted/20 p-6 sm:p-7 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                <Layers className="w-3.5 h-3.5" />
                UI/UX Eksklusif &amp; Modern
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Desain Berkelas &amp; Akses Kilat
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Tampilan Website Yang Memukau Dan Proporsional Di Setiap Layar Dengan Skor Loading PageSpeed 95+ Bebas Lemot.
              </p>
            </div>

            {/* Visual Realistic UI / Browser Editor Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-background shadow-lg">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-muted/60 border-b border-border/70">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[150px]">
                  store.flowdevteams.com
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  ⚡ 98/100
                </span>
              </div>

              {/* Editor Workspace with Real Product Photography */}
              <div className="p-3.5 sm:p-4 bg-muted/10 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-medium text-muted-foreground">Pilihan Warna:</span>
                    <span className="w-3 h-3 rounded-full bg-[#142d52] ring-1 ring-primary/40 cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-slate-400 cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-emerald-600 cursor-pointer" />
                  </div>
                  <span className="text-[10px] font-mono text-primary font-bold">100% Responsif</span>
                </div>

                <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-border/60">
                  <Image
                    src="/products/earbuds.jpg"
                    alt="Desain Showcase Audio Earbuds"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="300px"
                  />
                  {/* Floating Price Tag on Image */}
                  <div className="absolute bottom-2.5 left-2.5 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border/80 shadow-md">
                    <div className="text-[10px] font-semibold text-muted-foreground">AeroPod Pro Earbuds</div>
                    <div className="text-xs sm:text-sm font-bold text-primary">Rp 1.450.000</div>
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
                    Live Demo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: Payment Gateway (Top Right, 3 cols) - Vibrant Blue */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 rounded-3xl border border-blue-500/30 bg-[#142d52] text-white p-6 sm:p-7 shadow-lg flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-300 mb-2">
                <CreditCard className="w-3.5 h-3.5" />
                Payment Gateway
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Pembayaran Otomatis
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-6">
                Mendukung Pembayaran Debit, Kredit, QRIS, Virtual Account, Dan E-Wallet Terkemuka Indonesia.
              </p>
            </div>

            {/* Realistic Payment Partner Badges & Status */}
            <div className="space-y-2.5 relative z-10">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15 text-xs font-bold tracking-wide">
                  QRIS Instant
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15 text-xs font-bold tracking-wide">
                  BCA / Mandiri
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15 text-xs font-bold tracking-wide">
                  Virtual Account
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15 text-xs font-bold tracking-wide">
                  E-Wallet Lengkap
                </div>
              </div>

              {/* Status Pill */}
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2 border border-white/20 text-[11px] text-blue-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Verifikasi Real-Time 24 Jam</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 4: Fitur Pendongkrak Penjualan (Bottom Left, 6 cols) - Gradient Blue */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
            {/* Background Texture Graphic */}
            <div className="absolute inset-0 saas-grid opacity-20 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-200 mb-2">
                <Tag className="w-3.5 h-3.5" />
                Marketing &amp; Ads Conversion
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Fitur Pendongkrak Penjualan
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed mb-6 max-w-xl">
                Lengkap Dengan Berbagai Fitur Pemasaran: Kode Promo, Kupon Diskon, Flash Sale Countdown, Pop-Up Penawaran, Dan Integrasi Meta Pixel Ads.
              </p>
            </div>

            {/* Visual Real Sale Graphics + Perfume Product Card */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Left Widget: Performance Chart */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-sky-100">Pertumbuhan Konversi</span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                    SALE +240%
                  </span>
                </div>
                
                {/* Simulated Chart Bars */}
                <div className="h-14 flex items-end gap-2 pt-2">
                  {[40, 55, 45, 70, 65, 90, 80, 100].map((val, idx) => (
                    <div 
                      key={idx}
                      className="w-full rounded-t-sm bg-gradient-to-t from-white/30 to-white transition-all duration-500"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px]">
                  <span className="text-sky-100">Kupon Aktif:</span>
                  <span className="font-mono font-bold bg-white text-blue-800 px-2 py-0.5 rounded text-[10px]">
                    FLOWDEV20
                  </span>
                </div>
              </div>

              {/* Right Widget: Real Product Flash Sale Mockup */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 flex items-center gap-3">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/10 shrink-0 border border-white/30">
                  <Image
                    src="/products/perfume.jpg"
                    alt="Produk Promo Parfum Mewah"
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                  <span className="absolute top-1 left-1 bg-red-500 text-white text-[8px] font-bold px-1 rounded">
                    HOT
                  </span>
                </div>

                <div className="flex flex-col justify-between min-w-0">
                  <span className="text-[10px] text-sky-100 font-semibold uppercase">Flash Sale 12 Jam</span>
                  <h4 className="text-xs font-bold text-white truncate">
                    Aura Eau De Parfum 50ml
                  </h4>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-xs font-bold text-white">Rp 650.000</span>
                    <span className="text-[9px] text-sky-200 line-through">Rp 1.100.000</span>
                  </div>
                  <span className="mt-1 text-[10px] text-emerald-300 font-medium">✓ Kupon 15% Terpasang</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 5: Terhubung Ekspedisi & Sistem Bisnis (Bottom Right, 6 cols) - Ice/Mint */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 rounded-3xl border border-border/80 bg-gradient-to-b from-sky-50/50 via-card to-card dark:from-sky-950/20 dark:via-card dark:to-card p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                <Truck className="w-3.5 h-3.5" />
                Otomasi Logistik &amp; Resi
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Terhubung Ekspedisi &amp; Sistem ERP
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
                Terhubung Langsung Dengan Jasa Ekspedisi Unggulan Lokal Dan Internasional Yang Siap Cek Ongkir Otomatis Hingga Cetak Resi Kilat.
              </p>
            </div>

            {/* Visual Real Logistics & Tracking Dashboard */}
            <div className="space-y-3.5">
              {/* Courier Partner Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {["JNE Express", "SiCepat", "J&T Express", "GoSend", "Paxel", "DHL"].map((courier) => (
                  <span 
                    key={courier}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-background border border-border/70 text-foreground shadow-2xs"
                  >
                    {courier}
                  </span>
                ))}
              </div>

              {/* Realistic Order Tracking Box */}
              <div className="p-4 rounded-2xl bg-background border border-border/80 shadow-md">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Order ID: #FT-882910</span>
                  </div>
                  <span className="text-[10px] font-mono text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                    Resi Terbit Otomatis
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                  <div className="bg-muted/40 p-2 rounded-lg">
                    <div className="text-muted-foreground">Kurir</div>
                    <div className="font-bold text-foreground">J&amp;T Regular</div>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg">
                    <div className="text-muted-foreground">Ongkir</div>
                    <div className="font-bold text-foreground">Otomatis Terhitung</div>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg">
                    <div className="text-muted-foreground">Status</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400">Dalam Pengantaran</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
