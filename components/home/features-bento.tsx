"use client"

import Image from "next/image"
import { 
  CheckCircle2, 
  TrendingUp, 
  Search, 
  Gauge, 
  BarChart3, 
  Target, 
  Code2, 
  Zap,
  Globe,
  ArrowUpRight
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function FeaturesBentoSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-10 sm:py-16 lg:py-28">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="absolute inset-0 saas-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl relative z-10 mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-16">
          <AnimatedSection animation="fade-in-down">
            <span className="inline-flex items-center px-2.5 py-1 sm:px-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-xs">
              Optimalisasi &amp; Ekosistem SEO Siap Pakai
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Website Berperforma Tinggi, </span>
              <span className="text-primary">Terindeks Cepat &amp; Siap Iklan</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-2 sm:mt-3 lg:mt-4 text-[11px] sm:text-xs lg:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Setiap website yang dikembangkan Flowdev Teams dirancang memenuhi standar teknis Google modern: loading secepat kilat, terintegrasi Google Search Console, Google Ads, dan pelacakan konversi otomatis.
            </p>
          </AnimatedSection>
        </div>

        {/* BENTO GRID: 5 Cards Layout - 2-Column Super Compact Mobile Grid & 12-Col Desktop Bento */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-1.5 sm:gap-3 lg:gap-6 items-stretch">
          
          {/* ============================================================ */}
          {/* CARD 1: Google Search Console & Technical SEO (Top Left, 4 cols) */}
          {/* ============================================================ */}
          <div className="col-span-1 lg:col-span-4 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/90 to-muted/20 p-2.5 sm:p-5 lg:p-7 shadow-2xs flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-block text-[9.5px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary mb-1 sm:mb-2 truncate">
                Technical SEO
              </span>
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-foreground mb-1 sm:mb-2 leading-tight line-clamp-2">
                Google Search Console &amp; Indeks Kilat
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-muted-foreground leading-snug mb-2 sm:mb-4 lg:mb-5 line-clamp-2 sm:line-clamp-none">
                Website terverifikasi langsung di Google Search Console, dilengkapi sitemap XML dan struktur ramah bot pencari untuk percepat ranking kata kunci bisnis.
              </p>
            </div>

            {/* Visual GSC Highlighted Mockup */}
            <div className="relative mt-auto rounded-lg sm:rounded-2xl bg-background border border-border/70 shadow-2xs group-hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="relative h-20 sm:h-36 lg:h-60 w-full overflow-hidden bg-muted/20">
                <Image
                  src="/seo/gsc-dashboard.jpg"
                  alt="Google Search Console Performance Dashboard Flowdev Teams"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 450px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 bg-primary/95 text-white text-[7.5px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-2xs backdrop-blur-xs flex items-center gap-0.5 sm:gap-1.5">
                  <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-300 shrink-0" />
                  <span className="sm:hidden">+145K Clicks</span>
                  <span className="hidden sm:inline">Organic Clicks +145K</span>
                </span>
                <span className="absolute bottom-1 left-1 sm:bottom-2.5 sm:left-2.5 text-[7.5px] sm:text-[11px] font-semibold text-foreground bg-background/95 backdrop-blur-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded border border-border/80 shadow-2xs">
                  <span className="sm:hidden">Rank #1 - #3</span>
                  <span className="hidden sm:inline">Peringkat Google: #1 - #3</span>
                </span>
              </div>

              {/* Bottom Quick Feature Tags */}
              <div className="p-1.5 sm:p-3 border-t border-border/60 flex items-center justify-between text-[8px] sm:text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1 font-medium text-foreground truncate">
                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
                  <span className="sm:hidden">Sitemap XML</span>
                  <span className="hidden sm:inline">XML Sitemap Otomatis</span>
                </span>
                <span className="font-semibold text-primary shrink-0 ml-1">Verified</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: Google PageSpeed & Core Web Vitals (Top Center, 5 cols) */}
          {/* ============================================================ */}
          <div className="col-span-1 lg:col-span-5 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/95 to-muted/20 p-2.5 sm:p-5 lg:p-7 shadow-2xs flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-block text-[9.5px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary mb-1 sm:mb-2 truncate">
                Core Web Vitals
              </span>
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-foreground mb-1 sm:mb-2 leading-tight line-clamp-2">
                Skor PageSpeed 95+ Bebas Lemot
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-muted-foreground leading-snug mb-2 sm:mb-4 lg:mb-5 line-clamp-2 sm:line-clamp-none">
                Arsitektur Next.js dengan kompresi WebP modern, edge CDN caching, dan audit Lighthouse sempurna untuk loading kilat di bawah 1 detik di setiap layar.
              </p>
            </div>

            {/* Visual PageSpeed Browser Highlighted Mockup */}
            <div className="relative mt-auto rounded-lg sm:rounded-2xl overflow-hidden border border-border/80 bg-background shadow-2xs">
              {/* Window Header */}
              <div className="flex items-center justify-between px-1.5 py-1 sm:px-3.5 sm:py-2.5 bg-muted/60 border-b border-border/70">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
                  <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[7.5px] sm:text-[10px] font-medium text-muted-foreground truncate max-w-[65px] sm:max-w-[170px]">
                  pagespeed
                </span>
                <span className="inline-flex items-center gap-0.5 text-[7px] sm:text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1 py-0.2 sm:px-2 rounded-full">
                  Skor 99/100
                </span>
              </div>

              {/* Workspace with PageSpeed Dashboard Image */}
              <div className="p-1 sm:p-3 bg-muted/10">
                <div className="relative h-16 sm:h-32 lg:h-52 rounded sm:rounded-xl overflow-hidden bg-white border border-border/60">
                  <Image
                    src="/seo/pagespeed-dash.jpg"
                    alt="Audit PageSpeed Insights Skor 99 Flowdev Teams"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 550px"
                    priority
                  />
                  <div className="absolute top-1 right-1 sm:top-2.5 sm:right-2.5 bg-emerald-600 text-white text-[7px] sm:text-[9px] font-bold px-1 py-0.2 sm:px-2 rounded shadow-2xs flex items-center gap-0.5">
                    <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> LULUS
                  </div>
                </div>

                {/* Performance Metric Pills below image */}
                <div className="mt-1 sm:mt-2.5 grid grid-cols-3 gap-0.5 sm:gap-2 text-center">
                  <div className="bg-background/80 border border-border/60 p-0.5 sm:p-2 rounded">
                    <div className="text-muted-foreground text-[7px] sm:text-[9px] truncate">LCP</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-xs">0.8s</div>
                  </div>
                  <div className="bg-background/80 border border-border/60 p-0.5 sm:p-2 rounded">
                    <div className="text-muted-foreground text-[7px] sm:text-[9px] truncate">FID</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-xs">10ms</div>
                  </div>
                  <div className="bg-background/80 border border-border/60 p-0.5 sm:p-2 rounded">
                    <div className="text-muted-foreground text-[7px] sm:text-[9px] truncate">CLS</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-xs">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: Google Analytics 4 (GA4) (Top Right, 3 cols) - Base Brand Navy */}
          {/* ============================================================ */}
          <div className="col-span-1 lg:col-span-3 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-blue-500/30 bg-[#142d52] text-white p-2.5 sm:p-5 lg:p-7 shadow-md flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="inline-block text-[9.5px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-blue-300 mb-1 sm:mb-2 truncate">
                Data &amp; Analytics
              </span>
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight line-clamp-2">
                Google Analytics 4 (GA4)
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-blue-100/80 leading-snug mb-2 sm:mb-4 lg:mb-5 line-clamp-2 sm:line-clamp-none">
                Pantau trafik pengunjung, demografi, saluran akuisisi, dan event konversi secara real-time tanpa setup rumit.
              </p>
            </div>

            {/* Visual GA4 Dashboard - Mobile-First Layout */}
            <div className="space-y-1.5 sm:space-y-2.5 relative z-10 mt-auto">
              <div className="relative h-20 sm:h-32 lg:h-44 rounded-lg sm:rounded-xl overflow-hidden border border-white/20 shadow-xs">
                <Image
                  src="/seo/ga4-analytics-dash.jpg"
                  alt="Google Analytics 4 Realtime Dashboard"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142d52]/80 via-transparent to-transparent" />
                <span className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 bg-emerald-500/90 text-white text-[7px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-2xs backdrop-blur-xs">
                  <span className="w-1 h-1 rounded-full bg-white" /> 2.4K Aktif
                </span>
                <span className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2.5 text-[7px] sm:text-[10px] font-medium text-blue-100 bg-[#142d52]/90 px-1 py-0.2 sm:px-2 rounded border border-white/20">
                  Live Traffic
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-xl p-1 sm:p-2 text-center border border-white/15">
                  <div className="text-[7px] sm:text-[10px] text-blue-200 truncate">Events</div>
                  <div className="text-[8.5px] sm:text-sm font-bold text-white">312K</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-xl p-1 sm:p-2 text-center border border-white/15">
                  <div className="text-[7px] sm:text-[10px] text-blue-200 truncate">Growth</div>
                  <div className="text-[8.5px] sm:text-sm font-bold text-emerald-300">+148%</div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="bg-white/15 backdrop-blur-md rounded-md sm:rounded-xl p-1 sm:p-2.5 flex items-center gap-1 sm:gap-2 border border-white/20 text-[7.5px] sm:text-[11px] text-blue-100">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold truncate">GA4 Siap Pakai</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 4: Google Ads & Conversion (Bottom Left, 6 cols) - Base Brand Navy */}
          {/* ============================================================ */}
          <div className="col-span-1 lg:col-span-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#0d1f38] via-[#142d52] to-[#1a3865] text-white p-2.5 sm:p-5 lg:p-8 shadow-xl flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
            {/* Background Texture Graphic */}
            <div className="absolute inset-0 inverse-grid opacity-30 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[9.5px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-blue-300 mb-1 sm:mb-2 truncate">
                SEM &amp; Paid Conversion
              </span>
              <h3 className="text-sm sm:text-xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight line-clamp-2">
                Google Ads &amp; Pelacakan Konversi
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-blue-100/80 leading-snug mb-2 sm:mb-4 lg:mb-6 max-w-xl line-clamp-2 sm:line-clamp-none">
                Website dirancang siap kampanye Google Ads (Search &amp; Display) dan Meta Pixel dengan event tracking presisi tinggi untuk melipatgandakan ROAS dan menekan biaya per klik (CPC).
              </p>
            </div>

            {/* Visual Google Ads Large Highlighted Dashboard */}
            <div className="relative z-10 space-y-1.5 sm:space-y-3.5 mt-auto">
              {/* Large Image Showcase with Dashboard Details */}
              <div className="relative h-20 sm:h-36 md:h-64 rounded-lg sm:rounded-2xl overflow-hidden border border-white/20 shadow-xs bg-white/5 group/ads">
                <Image
                  src="/seo/google-ads-dash.jpg"
                  alt="Google Ads Conversion Tracking Dashboard"
                  fill
                  className="object-cover object-top group-hover/ads:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 650px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f38]/90 via-[#0d1f38]/20 to-transparent" />
                
                {/* Floating Badges on Image */}
                <div className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 flex items-center gap-1">
                  <span className="bg-[#142d52]/95 text-white text-[7px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/25 shadow-2xs backdrop-blur-xs">
                    Verified
                  </span>
                  <span className="bg-emerald-500/90 text-white text-[7px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-2xs backdrop-blur-xs flex items-center gap-0.5">
                    <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 shrink-0" />
                    4.8x
                  </span>
                </div>

                <div className="absolute bottom-1 left-1 right-1 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-[7px] sm:text-[11px] text-blue-100 bg-[#0d1f38]/90 backdrop-blur-xs px-1.5 py-0.5 sm:px-3 sm:py-2 rounded border border-white/15">
                  <span className="flex items-center gap-0.5 sm:gap-1.5 truncate">
                    <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span className="sm:hidden">Tracking Auto</span>
                    <span className="hidden sm:inline">Tracking Pembelian Otomatis</span>
                  </span>
                  <span className="font-semibold text-emerald-300 shrink-0 ml-1">CPC Rendah</span>
                </div>
              </div>

              {/* Bottom 3 Metric Pills - Dual-Label Zero-Wrap System */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
                <div className="bg-white/10 backdrop-blur-md p-1 sm:p-2.5 rounded-md sm:rounded-xl border border-white/15">
                  <div className="text-blue-200 text-[7px] sm:text-[10px] truncate">
                    <span className="sm:hidden">ROAS</span>
                    <span className="hidden sm:inline">Return On Ad Spend</span>
                  </div>
                  <div className="font-bold text-emerald-300 text-[8.5px] sm:text-sm mt-0.5">4.8x</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-1 sm:p-2.5 rounded-md sm:rounded-xl border border-white/15">
                  <div className="text-blue-200 text-[7px] sm:text-[10px] truncate">
                    <span className="sm:hidden">Conv.</span>
                    <span className="hidden sm:inline">Conversion Rate</span>
                  </div>
                  <div className="font-bold text-white text-[8.5px] sm:text-sm mt-0.5">3.5%</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-1 sm:p-2.5 rounded-md sm:rounded-xl border border-white/15">
                  <div className="text-blue-200 text-[7px] sm:text-[10px] truncate">
                    <span className="sm:hidden">Pixel</span>
                    <span className="hidden sm:inline">Tag &amp; Pixel</span>
                  </div>
                  <div className="font-bold text-emerald-300 text-[8.5px] sm:text-sm mt-0.5">Aktif</div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 5: Google Tag Manager & Schema.org (Bottom Right, 6 cols - Spans 2 cols on mobile) */}
          {/* ============================================================ */}
          <div className="col-span-2 lg:col-span-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border/80 bg-gradient-to-b from-primary/[0.04] via-card to-card dark:from-primary/[0.08] dark:via-card dark:to-card p-2.5 sm:p-5 lg:p-8 shadow-2xs flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-block text-[9.5px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-primary mb-1 sm:mb-2 truncate">
                Centralized Tags &amp; On-Page SEO
              </span>
              <h3 className="text-sm sm:text-xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                Google Tag Manager &amp; Struktur Data Kaya
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-sm text-muted-foreground leading-snug mb-2 sm:mb-4 lg:mb-5 max-w-xl line-clamp-2 sm:line-clamp-none">
                Kelola semua skrip analitik secara terpusat melalui GTM dan sematkan Schema.org (JSON-LD) agar bisnis Anda tampil menonjol dengan Rich Snippets bintang di Google.
              </p>
            </div>

            {/* Visual GTM & Schema Large Highlighted Mockup */}
            <div className="space-y-1.5 sm:space-y-3 mt-auto">
              {/* Tool Ecosystem Badges */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                {[
                  "Google Tag Manager",
                  "Schema.org JSON-LD",
                  "Google Business Profile",
                  "OpenGraph Social Share",
                  "Cloudflare Edge CDN",
                  "Robots.txt & Sitemap"
                ].map((tool) => (
                  <span 
                    key={tool}
                    className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-lg text-[9.5px] sm:text-[11px] font-semibold bg-background border border-border/70 text-foreground shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Large Image Showcase with Schema Validation Details */}
              <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-background border border-border/80 shadow-2xs">
                <div className="relative h-24 sm:h-40 md:h-56 rounded sm:rounded-xl overflow-hidden border border-border/60 mb-1.5 sm:mb-2.5 group/gtm">
                  <Image
                    src="/seo/gtm-schema-dash.jpg"
                    alt="Google Tag Manager & Schema.org JSON-LD Validation Dashboard"
                    fill
                    className="object-cover object-top group-hover/gtm:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 650px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  
                  {/* Floating Badges */}
                  <span className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 bg-emerald-500/95 text-white text-[7.5px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded flex items-center gap-0.5 sm:gap-1 shadow-2xs backdrop-blur-xs">
                    <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3" /> Schema: 0 Errors
                  </span>
                  <span className="absolute bottom-1 left-1 sm:bottom-2.5 sm:left-2.5 text-[7.5px] sm:text-[10px] font-semibold text-foreground bg-background/90 backdrop-blur-xs px-1.5 py-0.5 rounded border border-border/70">
                    Sitemap XML OK
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center pt-0.5 sm:pt-1">
                  <div className="bg-muted/40 p-1 sm:p-2 rounded">
                    <div className="text-muted-foreground text-[7.5px] sm:text-[9px] truncate">GTM Container</div>
                    <div className="font-bold text-foreground text-[8.5px] sm:text-xs">Live &amp; Synced</div>
                  </div>
                  <div className="bg-muted/40 p-1 sm:p-2 rounded">
                    <div className="text-muted-foreground text-[7.5px] sm:text-[9px] truncate">Rich Snippets</div>
                    <div className="font-bold text-foreground text-[8.5px] sm:text-xs">Bintang Google</div>
                  </div>
                  <div className="bg-muted/40 p-1 sm:p-2 rounded">
                    <div className="text-muted-foreground text-[7.5px] sm:text-[9px] truncate">Kecepatan Tag</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-[8.5px] sm:text-xs">&lt; 20ms</div>
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
