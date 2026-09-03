"use client"

import { useState } from "react"
import { 
  Brain, 
  Globe, 
  LayoutDashboard, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight,
  Database,
  Code2,
  LineChart,
  Laptop,
  Flame,
  Activity,
  SlidersHorizontal,
  FileCheck,
  Server,
  Eye,
  Scan,
  Compass,
  Building2,
  Coffee,
  Truck,
  HeartPulse
} from "lucide-react"
import { CompareSlider, Reveal } from "react-kino"
import { SectionHeader } from "@/components/section-header"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// 3 Kategori Portofolio Utama
export type CategoryKey = "ai" | "webapp" | "landing"

interface ProjectItem {
  id: string
  title: string
  client: string
  tagline: string
  description: string
  highlights: { label: string; value: string; icon: any }[]
  features: string[]
  techStack: string[]
  accentColor: string
  gradient: string
  badgeText: string
  previewMode: "compare-slider" | "live-dashboard" | "interactive-landing"
}

const portfolioCategories: { key: CategoryKey; label: string; icon: any; subtitle: string }[] = [
  {
    key: "ai",
    label: "KECERDASAN BUATAN",
    icon: Brain,
    subtitle: "Machine Learning, LLM, Computer Vision & Predictive Analytics"
  },
  {
    key: "webapp",
    label: "APLIKASI BERBASIS WEB",
    icon: LayoutDashboard,
    subtitle: "Enterprise ERP, Custom SaaS, Dashboard & Portal Bisnis"
  },
  {
    key: "landing",
    label: "WEBSITE LANDING PAGE",
    icon: Globe,
    subtitle: "Corporate Profile, High-Conversion Landing & Brand Story"
  }
]

const portfolioData: Record<CategoryKey, ProjectItem[]> = {
  ai: [
    {
      id: "ai-vision",
      title: "VisionAI - Industrial Quality Inspection",
      client: "Manufaktur Komponen Presisi",
      badgeText: "Computer Vision & YOLOv8",
      tagline: "Sistem Otomatisasi Deteksi Cacat Produk Berkecepatan Tinggi Real-Time",
      description: "Solusi computer vision cerdas yang terhubung langsung dengan kamera industri 120 FPS. Menggunakan Deep Learning untuk mendeteksi retak mikro, ketidaksesuaian dimensi, dan anomali permukaan pada lini perakitan secara instan.",
      highlights: [
        { label: "Akurasi Deteksi", value: "99.4%", icon: Sparkles },
        { label: "Kecepatan Inferensi", value: "< 22ms", icon: Zap },
        { label: "Reduksi Defect", value: "85%", icon: TrendingUp }
      ],
      features: [
        "Deteksi retak mikro sub-milimeter & cacat las otomatis",
        "Slider Interaktif: Geser untuk melihat perbandingan Raw Feed vs AI Bounding Box",
        "Integrasi alarm pneumatic auto-eject untuk membuang produk cacat",
        "Dashboard analitik reject rate per shift kerja & ekspor laporan ISO"
      ],
      techStack: ["Python", "PyTorch", "YOLOv8", "FastAPI", "Docker", "CUDA"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "compare-slider"
    },
    {
      id: "ai-rag",
      title: "FlowBrain - Enterprise Knowledge RAG",
      client: "Corporate Legal & Consulting",
      badgeText: "LLM & Vector Semantic Search",
      tagline: "Asisten AI Multi-Agent dengan Verifikasi Dokumen Legal Otomatis",
      description: "Sistem kecerdasan buatan enterprise yang mempelajari jutaan halaman SOP, klausul kontrak, dan regulasi pemerintah. Menjawab pertanyaan kompleks secara akurat dengan menyertakan kutipan nomor pasal asli.",
      highlights: [
        { label: "Response Latency", value: "< 1.1s", icon: Zap },
        { label: "Akurasi Sitasi", value: "98.9%", icon: ShieldCheck },
        { label: "Hemat Jam Kerja", value: "-75%", icon: TrendingUp }
      ],
      features: [
        "Pencarian semantik cerdas membaca PDF, DOCX, & database ERP internal",
        "Role-based permission menjamin dokumen confidential tetap terproteksi",
        "Integrasi chatbot otomatis ke Slack, WhatsApp Bisnis, & Internal Web Portal",
        "Zero-Hallucination Guardrails dengan verifikasi sitasi ganda"
      ],
      techStack: ["OpenAI API", "LangChain", "Qdrant Vector DB", "Next.js 16", "FastAPI"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "live-dashboard"
    },
    {
      id: "ai-forecast",
      title: "Predicta - Demand & Inventory AI",
      client: "Distributor FMCG Nasional",
      badgeText: "Time-Series Predictive ML",
      tagline: "Model Prediktif Machine Learning untuk Estimasi Stok & Peramalan Demand",
      description: "Mesin peramalan penjualan berbasis Time-Series Forecasting yang menganalisis historis transaksi, hari libur nasional, tren inflasi, dan cuaca guna mencegah kehabisan stok sekaligus menekan biaya gudang.",
      highlights: [
        { label: "Forecast Accuracy", value: "95.2%", icon: Sparkles },
        { label: "Reduksi Overstock", value: "42%", icon: TrendingUp },
        { label: "Auto Purchase Order", value: "100%", icon: Zap }
      ],
      features: [
        "Prediksi volume pesanan per SKU untuk 30, 60, hingga 90 hari ke depan",
        "Kalkulasi safety stock dinamis per titik gudang regional",
        "Simulasi dampak diskon promosi terhadap proyeksi omset & cashflow",
        "Grafik tren interaktif dengan sistem alert stok menipis"
      ],
      techStack: ["Python", "LightGBM", "Prophet", "PostgreSQL", "React", "FastAPI"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "live-dashboard"
    }
  ],
  webapp: [
    {
      id: "erp-logistics",
      title: "LogistiQ - Integrated Fleet & Cargo ERP",
      client: "PT. Rafay Anugrah Logistik",
      badgeText: "Enterprise ERP & GIS",
      tagline: "Sistem ERP Logistik Terpadu dengan Live GPS Tracking & E-Surat Jalan",
      description: "Platform manajemen transportasi menyeluruh yang menangani ratusan armada truk antar-pulau, surat jalan digital, monitoring sensor bahan bakar, hingga rekonsiliasi biaya jalan dan penagihan klien secara otomatis.",
      highlights: [
        { label: "Armada Aktif", value: "250+ Unit", icon: Truck },
        { label: "SLA Ketepatan", value: "99.4%", icon: ShieldCheck },
        { label: "Efisiensi Biaya", value: "19.5%", icon: TrendingUp }
      ],
      features: [
        "Live tracking posisi GPS armada dengan telemetri konsumsi solar",
        "E-Surat Jalan (e-POD) dengan tanda tangan digital & bukti foto bongkar",
        "Otomatisasi invoice, faktur pajak logistik, dan laporan laba rugi rute",
        "Portal tracking publik untuk klien cek posisi barang mandiri"
      ],
      techStack: ["Next.js 16", "Node.js", "PostgreSQL", "WebSockets", "Leaflet GIS"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "live-dashboard"
    },
    {
      id: "hospital-cloud",
      title: "MedCare Cloud - Smart Clinic & RME",
      client: "Jaringan Fasilitas Kesehatan",
      badgeText: "HealthTech & SATUSEHAT",
      tagline: "Platform Rekam Medis Elektronik (RME) & Antrean Pasien Standar Kemenkes",
      description: "Aplikasi web cloud-native untuk klinik dan fasilitas kesehatan dengan integrasi bridging BPJS P-Care & SatuSehat Kemenkes RI, memangkas antrean loket dan merapikan rekam medis elektronik terenkripsi.",
      highlights: [
        { label: "Bridging SATUSEHAT", value: "100% Lolos", icon: HeartPulse },
        { label: "Waktu Antrean", value: "-65%", icon: Zap },
        { label: "Enkripsi Medis", value: "AES-256", icon: ShieldCheck }
      ],
      features: [
        "Pendaftaran online via WhatsApp terhubung langsung ke antrean loket",
        "Modul dokter dengan rekam medis SOAP interaktif & e-Resep digital",
        "Kasir billing terpadu, klaim BPJS, dan kontrol stok obat otomatis",
        "Dashboard analitik morbiditas penyakit & performa pendapatan dokter"
      ],
      techStack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Redis Cache"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "live-dashboard"
    },
    {
      id: "finance-dashboard",
      title: "FinTrack Pro - Corporate Treasury Suite",
      client: "Holding Multi-Sektor Bisnis",
      badgeText: "FinTech & Banking API",
      tagline: "Dashboard Analitik Finansial Korporat dengan Auto-Bank Reconciliation",
      description: "Sistem keuangan terpusat yang menggabungkan mutasi dari multi-rekening bank korporat, mengotomasi rekonsiliasi transaksi kas masuk/keluar, dan menyajikan proyeksi runway kas perusahaan real-time.",
      highlights: [
        { label: "Auto Reconcile", value: "99.2%", icon: Zap },
        { label: "Multi-Entity", value: "12 PT", icon: Layers },
        { label: "Export Laporan", value: "1-Click", icon: Sparkles }
      ],
      features: [
        "Integrasi Open Banking API & parser mutasi rekening koran instan",
        "Alur approval pengeluaran bertingkat dengan OTP & notifikasi WhatsApp",
        "Budget tracking per divisi dengan early-warning batas overbudget",
        "Visualisasi grafik arus kas, EBITDA, dan profitabilitas real-time"
      ],
      techStack: ["Next.js 16", "TypeScript", "Prisma ORM", "PostgreSQL", "TailwindCSS"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "live-dashboard"
    }
  ],
  landing: [
    {
      id: "corporate-maritime",
      title: "Masagena Jaya Maritim Corporate Hub",
      client: "PT. Masagena Jaya Maritim",
      badgeText: "Enterprise Corporate Profile",
      tagline: "Website Korporat Mewah & Berkecepatan Tinggi untuk Jasa Pelayaran & Tugboat",
      description: "Company profile kelas enterprise yang menonjolkan kredibilitas internasional, sertifikasi kelautan BKI, armada kapal tugboat & tongkang, serta sistem permohonan sewa kapal (Charter Inquiry) langsung.",
      highlights: [
        { label: "PageSpeed Score", value: "99 / 100", icon: Zap },
        { label: "Peringkat SEO", value: "Page 1 Google", icon: TrendingUp },
        { label: "Inquiry Global", value: "+140%", icon: Globe }
      ],
      features: [
        "Desain elegan berestetika maritim dengan video background sinematik",
        "Katalog armada kapal interaktif lengkap dengan spesifikasi teknis PDF",
        "Formulir Charter Request multi-tahap dengan kalkulator estimasi rute",
        "Dukungan multibahasa (Bahasa Indonesia & English) ramah investor"
      ],
      techStack: ["Next.js 16", "TailwindCSS", "SEO Architecture", "Vercel Edge"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "interactive-landing"
    },
    {
      id: "luxury-property",
      title: "Aethel Luxury Residence & Villa",
      client: "Pengembang Properti Mewah",
      badgeText: "High-End Real Estate Landing",
      tagline: "Landing Page Imersif dengan Virtual 3D Showcase & High-Conversion Leads",
      description: "Landing page penjualan properti mewah dengan pengalaman visual sinematik, galeri interaktif tiap tipe unit, denah arsitektur interaktif, serta integrasi instant booking konsultasi privat VIP.",
      highlights: [
        { label: "Conversion Rate", value: "5.4%", icon: TrendingUp },
        { label: "Smooth 60 FPS", value: "Ultra Smooth", icon: Zap },
        { label: "Leads Berkualitas", value: "3.2x Lipat", icon: Sparkles }
      ],
      features: [
        "Showcase arsitektur interaktif dengan zoom denah unit resolusi tinggi",
        "Kalkulator simulasi KPR interaktif terhubung dengan suku bunga bank",
        "Integrasi tombol jadwal Private VIP Viewing langsung ke WhatsApp Marketing",
        "Optimasi Core Web Vitals untuk pengalaman scrolling tanpa lag"
      ],
      techStack: ["Next.js 16", "TailwindCSS", "Framer Motion", "Cloudflare CDN"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "interactive-landing"
    },
    {
      id: "zenith-coffee",
      title: "Zenith Specialty Coffee Roasters",
      client: "Brand F&B & Roastery B2B",
      badgeText: "Brand Story & D2C Showcase",
      tagline: "Landing Page Brand Storytelling dengan Pemesanan Katalog Grosir & Retail",
      description: "Website berkarakter kuat yang menceritakan perjalanan biji kopi dari petani lokal, profil rasa cupping, dan sistem pemesanan sampel kopi untuk jaringan kafe dan hotel di seluruh Indonesia.",
      highlights: [
        { label: "Load Time", value: "< 0.5s", icon: Zap },
        { label: "B2B Wholesale", value: "+210%", icon: TrendingUp },
        { label: "User Engagement", value: "4m 12s", icon: Sparkles }
      ],
      features: [
        "Peta interaktif asal single-origin kopi dari berbagai perkebunan Nusantara",
        "Flavor Wheel interaktif untuk membantu calon pembeli memilih profil sangrai",
        "Katalog e-menu B2B interaktif dengan form pemesanan sampel instan",
        "Desain dark theme premium dengan tipografi editorial modern"
      ],
      techStack: ["Next.js 16", "TailwindCSS", "Micro-Interactions", "PWA Ready"],
      accentColor: "from-primary to-blue-800",
      gradient: "from-primary/20 via-blue-600/10 to-transparent",
      previewMode: "interactive-landing"
    }
  ]
}

export function PortfolioShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("ai")
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const currentProjects = portfolioData[activeCategory]
  const currentProject = currentProjects[selectedProjectIndex] || currentProjects[0]

  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategory(key)
    setSelectedProjectIndex(0)
  }

  return (
    <section className="relative border-b border-border/60 bg-gradient-to-b from-background via-card/50 to-background py-20 lg:py-28 overflow-hidden">
      
      {/* Background Ambient Saas Glows & Grid */}
      <div className="absolute inset-0 saas-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-[450px] h-[450px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
            Showcase Portofolio & Produk Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Karya & Solusi Digital Berstandar Tinggi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Eksplorasi portfolio interaktif Flowdev Teams mulai dari kecerdasan buatan, sistem web enterprise, hingga website berdesain mewah dengan performa optimal.
          </p>
        </div>

        {/* 3 Main Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-card/90 backdrop-blur-md rounded-2xl border border-border/80 shadow-md gap-1.5 max-w-full">
            {portfolioCategories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-[1.02]" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-primary-foreground" : "text-primary")} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Sub-Selector for Projects within Category */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {currentProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectIndex(idx)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200",
                selectedProjectIndex === idx
                  ? "border-primary bg-primary/10 text-primary font-bold shadow-xs scale-105"
                  : "border-border/70 bg-card/60 text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              <span className={cn("w-2 h-2 rounded-full", selectedProjectIndex === idx ? "bg-primary animate-pulse" : "bg-muted-foreground/40")} />
              {proj.title}
            </button>
          ))}
        </div>

        {/* MAIN IMMERSIVE SHOWCASE CARD */}
        <div className="relative rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300">
          
          {/* Subtle Ambient Glow corresponding to Project Accent */}
          <div className={cn("absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-35 pointer-events-none bg-gradient-to-br", currentProject.accentColor)} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Project Details & Value Proposition */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Badge & Client */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/25">
                    {currentProject.client}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-muted-foreground bg-muted border border-border/70">
                    {currentProject.badgeText}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug font-serif">
                  {currentProject.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-primary leading-snug">
                  {currentProject.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* 3 Glowing Highlight Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/40 border border-border/70">
                {currentProject.highlights.map((h, i) => {
                  const Icon = h.icon
                  return (
                    <div key={i} className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                      <div className="flex items-center gap-1.5 text-primary">
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-xs text-muted-foreground font-medium">{h.label}</span>
                      </div>
                      <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                        {h.value}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Core Feature Highlights */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Keunggulan & Fitur Kunci:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/60">
                <span className="text-xs font-semibold text-muted-foreground mr-1">Tech Stack:</span>
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-background border border-border/70 text-foreground shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button 
                  asChild
                  className="rounded-xl px-6 py-5 shadow-lg shadow-primary/20 gap-2 text-xs sm:text-sm font-semibold"
                >
                  <a href="#kontak">
                    Konsultasi Solusi Serupa
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="rounded-xl px-5 py-5 gap-2 text-xs sm:text-sm font-semibold border-border/80 hover:bg-muted/60"
                >
                  <a href="/portofolio">
                    Lihat Seluruh Portofolio
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>

            </div>

            {/* RIGHT COLUMN: Realistic Immersive Device & UI Preview */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden border border-border/80 bg-background/95 shadow-2xl transition-all duration-300 group hover:border-primary/40">
                
                {/* Browser Window Chrome / Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border/70">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 border border-border/60 text-[11px] font-mono text-muted-foreground max-w-[240px] truncate">
                    <ShieldCheck className="w-3 h-3 text-primary shrink-0" />
                    <span>https://flowdevteams.com/showcase/{currentProject.id}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground/60">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Interactive Dynamic Mockup Screen according to project type */}
                <div className="p-5 sm:p-6 bg-gradient-to-br from-card to-muted/20 min-h-[400px] sm:min-h-[440px] flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle Grid in Mockup */}
                  <div className="absolute inset-0 saas-grid opacity-20 pointer-events-none" />

                  {/* Top Bar inside mockup */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-border/60">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-br shadow-xs", currentProject.accentColor)}>
                        {activeCategory === "ai" && <Brain className="w-4 h-4" />}
                        {activeCategory === "webapp" && <LayoutDashboard className="w-4 h-4" />}
                        {activeCategory === "landing" && <Globe className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-foreground">{currentProject.title}</h4>
                        <p className="text-[10px] text-muted-foreground">Production Environment Active</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-primary/10 text-primary border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      ONLINE LIVE
                    </span>
                  </div>

                  {/* MIDDLE DYNAMIC CONTENT: React-Kino Compare Slider OR Live Interactive Graph */}
                  {currentProject.previewMode === "compare-slider" ? (
                    <div className="relative z-10 my-3 rounded-xl overflow-hidden border border-border/80 shadow-md">
                      <div className="text-[10px] px-3 py-1.5 bg-muted/80 border-b border-border/60 flex items-center justify-between text-muted-foreground">
                        <span className="flex items-center gap-1 font-semibold text-primary">
                          <SlidersHorizontal className="w-3 h-3" />
                          React-Kino Compare Slider: Geser Garis Pemisah
                        </span>
                        <span className="font-mono">RAW vs AI DETECTION</span>
                      </div>
                      <div className="h-56 w-full relative">
                        <CompareSlider
                          ariaLabel="Bandingkan Raw Feed vs AI Inference"
                          before={
                            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4 text-slate-300 relative">
                              <Scan className="w-10 h-10 text-slate-500 mb-2" />
                              <span className="text-xs font-mono font-bold text-slate-400">RAW CAMERA INPUT</span>
                              <span className="text-[10px] text-slate-500 mt-1">Komponen belum terdeteksi (Manual)</span>
                              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-slate-400">
                                Cam: Sensor_01 [1080p 120fps]
                              </div>
                            </div>
                          }
                          after={
                            <div className="w-full h-full bg-gradient-to-br from-slate-950 to-blue-950 flex flex-col items-center justify-center p-4 text-white relative">
                              {/* Simulated AI Detection Box */}
                              <div className="absolute top-4 left-6 border border-primary/40 bg-primary/20 px-3 py-2 rounded text-[10px] font-mono font-bold text-white flex flex-col gap-0.5 shadow-xs">
                                <span>[OK] Dimension: 45.02mm (99.8%)</span>
                                <span className="text-[8px] text-white/70">PASS QUALITY ASSURANCE</span>
                              </div>
                              <div className="absolute bottom-4 right-6 border border-border bg-slate-900/80 px-3 py-2 rounded text-[10px] font-mono font-bold text-slate-300 flex flex-col gap-0.5">
                                <span>[LOG] Micro-Crack Sensor Ready</span>
                                <span className="text-[8px] text-muted-foreground">AUTO-EJECT SENSOR ONLINE</span>
                              </div>
                              <Sparkles className="w-10 h-10 text-white animate-pulse mb-2" />
                              <span className="text-xs font-mono font-bold text-white">AI INFERENCE ACTIVE</span>
                              <span className="text-[10px] text-white/75 mt-1">YOLOv8 Realtime Detection Active</span>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 my-3 flex-1 flex flex-col justify-center gap-3">
                      
                      {/* Visual Card: Interactive Live Graph / Status */}
                      <div className="p-4 rounded-xl border border-border/70 bg-card/80 backdrop-blur-sm shadow-xs flex flex-col gap-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <LineChart className="w-3.5 h-3.5 text-primary" />
                            {activeCategory === "webapp" ? "Realtime Fleet & Transaction Telemetry" : "High-Conversion Traffic & Leads Funnel"}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground">Streaming data</span>
                        </div>
                        
                        {/* Simulated Graphical Waves / Bars */}
                        <div className="h-16 flex items-end gap-1.5 pt-2">
                          {[35, 60, 50, 75, 65, 90, 80, 100, 85, 70, 95, 100].map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                              <div 
                                className="w-full rounded-t-sm transition-all duration-500 bg-gradient-to-t from-primary/40 to-primary"
                                style={{ height: `${val}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visual Card 2: 2 Metric Status Cards in Mockup */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl border border-border/60 bg-muted/40 flex flex-col gap-1">
                          <span className="text-[10px] font-semibold text-muted-foreground uppercase">Response Speed</span>
                          <span className="text-sm font-bold text-foreground font-mono">99.98% FAST</span>
                          <div className="w-full bg-border/60 h-1 rounded-full overflow-hidden mt-1">
                            <div className="bg-primary h-full w-[96%]" />
                          </div>
                        </div>
                        <div className="p-3 rounded-xl border border-border/60 bg-muted/40 flex flex-col gap-1">
                          <span className="text-[10px] font-semibold text-muted-foreground uppercase">Security & Uptime</span>
                          <span className="text-sm font-bold text-foreground font-mono">GRADE A+ (99.9%)</span>
                          <div className="w-full bg-border/60 h-1 rounded-full overflow-hidden mt-1">
                            <div className="bg-primary h-full w-[100%]" />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Bottom Bar inside Mockup */}
                  <div className="relative z-10 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-primary" />
                      Engineered with Flowdev Teams Standards
                    </span>
                    <span className="font-mono text-primary font-bold">Ready for Production</span>
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
