"use client"

import Image from "next/image"
import { 
  Sparkles, 
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
              Optimalisasi &amp; Ekosistem SEO Siap Pakai
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Website Berperforma Tinggi, </span>
              <span className="text-primary">Terindeks Cepat &amp; Siap Iklan</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Setiap website yang dikembangkan Flowdev Teams dirancang memenuhi standar teknis Google modern: loading secepat kilat, terintegrasi Google Search Console, Google Ads, dan pelacakan konversi otomatis.
            </p>
          </AnimatedSection>
        </div>

        {/* BENTO GRID: 5 Cards Layout with Enlarged Highlighted Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ============================================================ */}
          {/* CARD 1: Google Search Console & Technical SEO (Top Left, 4 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/90 to-muted/20 p-6 sm:p-7 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                <Search className="w-3.5 h-3.5" />
                Technical SEO &amp; Indexing
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Google Search Console &amp; Indeks Kilat
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                Website terverifikasi langsung di Google Search Console, dilengkapi sitemap XML dan struktur ramah bot pencari untuk percepat ranking kata kunci bisnis.
              </p>
            </div>

            {/* Visual GSC Highlighted Mockup */}
            <div className="relative mt-2 rounded-2xl bg-background border border-border/70 shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-52 sm:h-56 lg:h-60 w-full overflow-hidden bg-muted/20">
                <Image
                  src="/seo/gsc-dashboard.jpg"
                  alt="Google Search Console Performance Dashboard Flowdev Teams"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute top-3 left-3 bg-primary/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm backdrop-blur-md flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-emerald-300" /> Organic Clicks +145K
                </span>
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-foreground bg-background/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-border/80 shadow-xs">
                  Peringkat Google: #1 - #3
                </span>
              </div>

              {/* Bottom Quick Feature Tags */}
              <div className="p-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> XML Sitemap Otomatis
                </span>
                <span className="font-semibold text-primary">Google Search Verified</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: Google PageSpeed & Core Web Vitals (Top Center, 5 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/95 to-muted/20 p-6 sm:p-7 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                <Gauge className="w-3.5 h-3.5" />
                Core Web Vitals &amp; Speed
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Skor PageSpeed 95+ Bebas Lemot
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                Arsitektur Next.js dengan kompresi WebP modern, edge CDN caching, dan audit Lighthouse sempurna untuk loading kilat di bawah 1 detik di setiap layar.
              </p>
            </div>

            {/* Visual PageSpeed Browser Highlighted Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-background shadow-lg">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-muted/60 border-b border-border/70">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[170px]">
                  pagespeed.web.dev/audit
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  ⚡ Skor 99/100 Lulus
                </span>
              </div>

              {/* Workspace with PageSpeed Dashboard Image - Enlarged */}
              <div className="p-3 bg-muted/10">
                <div className="relative h-44 sm:h-48 lg:h-52 rounded-xl overflow-hidden bg-white border border-border/60">
                  <Image
                    src="/seo/pagespeed-dash.jpg"
                    alt="Audit PageSpeed Insights Skor 99 Flowdev Teams"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 550px"
                    priority
                  />
                  <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Core Web Vitals: LULUS
                  </div>
                </div>

                {/* Performance Metric Pills below image */}
                <div className="mt-2.5 grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-background/80 border border-border/60 p-2 rounded-lg">
                    <div className="text-muted-foreground text-[9px]">LCP (Render)</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">0.8 detik</div>
                  </div>
                  <div className="bg-background/80 border border-border/60 p-2 rounded-lg">
                    <div className="text-muted-foreground text-[9px]">FID / INP</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">10 ms</div>
                  </div>
                  <div className="bg-background/80 border border-border/60 p-2 rounded-lg">
                    <div className="text-muted-foreground text-[9px]">CLS (Stabilitas)</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">0 (Sempurna)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: Google Analytics 4 (GA4) (Top Right, 3 cols) - Base Brand Navy */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 rounded-3xl border border-blue-500/30 bg-[#142d52] text-white p-6 sm:p-7 shadow-lg flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-300 mb-2">
                <BarChart3 className="w-3.5 h-3.5" />
                Data &amp; Analytics
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Google Analytics 4 (GA4)
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-5">
                Pantau trafik pengunjung, demografi, saluran akuisisi, dan event konversi secara real-time tanpa setup rumit.
              </p>
            </div>

            {/* Visual GA4 Dashboard - Enlarged Highlight */}
            <div className="space-y-2.5 relative z-10">
              <div className="relative h-36 sm:h-40 lg:h-44 rounded-xl overflow-hidden border border-white/20 shadow-md">
                <Image
                  src="/seo/ga4-analytics-dash.jpg"
                  alt="Google Analytics 4 Realtime Dashboard"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142d52]/80 via-transparent to-transparent" />
                <span className="absolute top-2.5 left-2.5 bg-emerald-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> 2,415 User Aktif
                </span>
                <span className="absolute bottom-2 left-2.5 text-[10px] font-medium text-blue-100 bg-[#142d52]/90 px-2 py-0.5 rounded border border-white/20">
                  Real-time Traffic Tracking
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 text-center border border-white/15">
                  <div className="text-[10px] text-blue-200">Total Events</div>
                  <div className="text-xs font-bold text-white">312K Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 text-center border border-white/15">
                  <div className="text-[10px] text-blue-200">Organic Growth</div>
                  <div className="text-xs font-bold text-emerald-300">+148% Trafik</div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2 border border-white/20 text-[11px] text-blue-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Event Tracking GA4 Siap Pakai</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 4: Google Ads & Conversion (Bottom Left, 6 cols) - Base Brand Navy */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#0d1f38] via-[#142d52] to-[#1a3865] text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
            {/* Background Texture Graphic */}
            <div className="absolute inset-0 inverse-grid opacity-30 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-300 mb-2">
                <Target className="w-3.5 h-3.5" />
                SEM &amp; Paid Conversion
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Google Ads &amp; Pelacakan Konversi Presisi
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-6 max-w-xl">
                Website dirancang siap kampanye Google Ads (Search &amp; Display) dan Meta Pixel dengan event tracking presisi tinggi untuk melipatgandakan ROAS dan menekan biaya per klik (CPC).
              </p>
            </div>

            {/* Visual Google Ads Large Highlighted Dashboard */}
            <div className="relative z-10 space-y-3.5">
              {/* Large Image Showcase with Dashboard Details */}
              <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white/5 group/ads">
                <Image
                  src="/seo/google-ads-dash.jpg"
                  alt="Google Ads Conversion Tracking Dashboard"
                  fill
                  className="object-cover object-top group-hover/ads:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f38]/90 via-[#0d1f38]/20 to-transparent" />
                
                {/* Floating Badges on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#142d52]/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/25 shadow-xs backdrop-blur-md">
                    Google Ads Verified
                  </span>
                  <span className="bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs backdrop-blur-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> ROAS 4.8x Maksimal
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-blue-100 bg-[#0d1f38]/85 backdrop-blur-md p-2 rounded-xl border border-white/15">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Tracking Pembelian &amp; Kontak Otomatis
                  </span>
                  <span className="font-semibold text-emerald-300">Biaya CPC Rendah</span>
                </div>
              </div>

              {/* Bottom 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-blue-200">Return On Ad Spend</div>
                  <div className="font-bold text-emerald-300 text-xs sm:text-sm mt-0.5">ROAS 4.8x</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-blue-200">Conversion Rate</div>
                  <div className="font-bold text-white text-xs sm:text-sm mt-0.5">3.5% (+12%)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-blue-200">Tag &amp; Pixel Status</div>
                  <div className="font-bold text-emerald-300 text-xs sm:text-sm mt-0.5">Aktif Terhubung</div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 5: Google Tag Manager & Schema.org (Bottom Right, 6 cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 rounded-3xl border border-border/80 bg-gradient-to-b from-primary/[0.04] via-card to-card dark:from-primary/[0.08] dark:via-card dark:to-card p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                <Code2 className="w-3.5 h-3.5" />
                Centralized Tags &amp; On-Page SEO
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Google Tag Manager &amp; Struktur Data Kaya
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl">
                Kelola semua skrip analitik secara terpusat melalui GTM dan sematkan Schema.org (JSON-LD) agar bisnis Anda tampil menonjol dengan Rich Snippets bintang di Google.
              </p>
            </div>

            {/* Visual GTM & Schema Large Highlighted Mockup */}
            <div className="space-y-3">
              {/* Tool Ecosystem Badges */}
              <div className="flex flex-wrap items-center gap-1.5">
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
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-background border border-border/70 text-foreground shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Large Image Showcase with Schema Validation Details */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-background border border-border/80 shadow-md">
                <div className="relative h-44 sm:h-52 md:h-56 rounded-xl overflow-hidden border border-border/60 mb-2.5 group/gtm">
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
                  <span className="absolute top-2.5 left-2.5 bg-emerald-500/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs backdrop-blur-xs">
                    <CheckCircle2 className="w-3 h-3" /> Schema JSON-LD: 0 Errors
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold text-foreground bg-background/90 backdrop-blur-md px-2 py-0.5 rounded border border-border/70">
                    Sitemap XML Terverifikasi
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                  <div className="bg-muted/40 p-2 rounded-lg">
                    <div className="text-muted-foreground text-[9px]">Kontainer GTM</div>
                    <div className="font-bold text-foreground text-xs">Live &amp; Terhubung</div>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg">
                    <div className="text-muted-foreground text-[9px]">Rich Snippets</div>
                    <div className="font-bold text-foreground text-xs">Bintang &amp; Sitelink</div>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg">
                    <div className="text-muted-foreground text-[9px]">Kecepatan Tag</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">Asinkron &lt; 20ms</div>
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
