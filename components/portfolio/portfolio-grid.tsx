"use client"

import { useState, useMemo } from "react"
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
  Search,
  SlidersHorizontal,
  X,
  Truck,
  HeartPulse,
  Sun,
  Scan,
  Radio,
  FileSpreadsheet
} from "lucide-react"
import { CompareSlider } from "react-kino"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type PortfolioCategory = "all" | "ai" | "webapp" | "landing"

export interface FullProject {
  id: string
  title: string
  client: string
  category: "ai" | "webapp" | "landing"
  categoryLabel: string
  badgeText: string
  tagline: string
  description: string
  problemSolution: {
    problem: string
    solution: string
  }
  highlights: { label: string; value: string; icon: any }[]
  features: string[]
  techStack: string[]
  accentColor: string
  gradient: string
  hasCompareSlider?: boolean
}

export const allPortfolioProjects: FullProject[] = [
  // === 1. KECERDASAN BUATAN (AI & MACHINE LEARNING) ===
  {
    id: "ai-vision",
    title: "VisionAI - Industrial Quality Inspection",
    client: "PT. Precision Component Indonesia",
    category: "ai",
    categoryLabel: "Kecerdasan Buatan",
    badgeText: "Computer Vision & YOLOv8",
    tagline: "Sistem Otomatisasi Deteksi Cacat Produk Industri Berkecepatan Tinggi Real-Time",
    description: "Solusi computer vision cerdas yang terhubung langsung dengan kamera industri 120 FPS. Menggunakan Deep Learning untuk mendeteksi retak mikro, ketidaksesuaian dimensi, dan anomali permukaan pada lini perakitan secara instan.",
    problemSolution: {
      problem: "Inspeksi manual oleh operator memakan waktu 45 detik per komponen dengan tingkat kelolosan cacat (human error) sebesar 4.2%.",
      solution: "VisionAI memproses gambar dalam 22ms dengan akurasi 99.4%, terintegrasi langsung ke aktuator pembuang produk cacat (pneumatic rejector)."
    },
    highlights: [
      { label: "Akurasi Deteksi", value: "99.4%", icon: Sparkles },
      { label: "Kecepatan Inferensi", value: "< 22ms", icon: Zap },
      { label: "Reduksi Defect", value: "85%", icon: TrendingUp }
    ],
    features: [
      "Deteksi retak mikro sub-milimeter & cacat las otomatis",
      "Live Camera Stream 120 FPS dengan bounding box visualisasi real-time",
      "Integrasi alarm pneumatic auto-eject untuk membuang produk reject",
      "Dashboard analitik reject rate per shift kerja & ekspor laporan ISO"
    ],
    techStack: ["Python", "PyTorch", "YOLOv8", "FastAPI", "Docker", "CUDA"],
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent",
    hasCompareSlider: true
  },
  {
    id: "ai-rag",
    title: "FlowBrain - Enterprise Knowledge RAG",
    client: "Lexis & Partners Legal Consulting",
    category: "ai",
    categoryLabel: "Kecerdasan Buatan",
    badgeText: "LLM & Vector Semantic Search",
    tagline: "Asisten AI Multi-Agent dengan Verifikasi Dokumen Legal Otomatis",
    description: "Sistem kecerdasan buatan enterprise yang mempelajari jutaan halaman SOP, klausul kontrak, dan regulasi pemerintah. Menjawab pertanyaan kompleks secara akurat dengan menyertakan kutipan nomor pasal asli.",
    problemSolution: {
      problem: "Tim legal menghabiskan rata-rata 3.5 jam per berkas hanya untuk mencari referensi klausul dan kepatuhan regulasi.",
      solution: "FlowBrain mengindeks dokumen ke Qdrant Vector DB dan menghasilkan ringkasan kepatuhan dalam 1.1 detik dengan sitasi pasal terverifikasi."
    },
    highlights: [
      { label: "Response Latency", value: "< 1.1s", icon: Zap },
      { label: "Akurasi Sitasi", value: "98.9%", icon: ShieldCheck },
      { label: "Hemat Jam Riset", value: "-75%", icon: TrendingUp }
    ],
    features: [
      "Pencarian semantik cerdas membaca PDF, DOCX, & database ERP internal",
      "Role-based permission menjamin dokumen confidential tetap terproteksi",
      "Integrasi chatbot otomatis ke Slack, WhatsApp Bisnis, & Internal Web Portal",
      "Zero-Hallucination Guardrails dengan verifikasi sitasi ganda"
    ],
    techStack: ["OpenAI API", "LangChain", "Qdrant Vector DB", "Next.js 16", "FastAPI"],
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "ai-forecast",
    title: "Predicta - Demand & Inventory AI",
    client: "PT. Sumber Pangan Distribusi",
    category: "ai",
    categoryLabel: "Kecerdasan Buatan",
    badgeText: "Time-Series Predictive ML",
    tagline: "Model Prediktif Machine Learning untuk Estimasi Stok & Peramalan Demand",
    description: "Mesin peramalan penjualan berbasis Time-Series Forecasting yang menganalisis historis transaksi, hari libur nasional, tren inflasi, dan cuaca guna mencegah kehabisan stok sekaligus menekan biaya gudang.",
    problemSolution: {
      problem: "Kerugian overstock produk kedaluwarsa mencapai ratusan juta per kuartal serta sering terjadi stock-out pada barang fast-moving.",
      solution: "Predicta memberikan rekomendasi reorder dinamis 30-90 hari ke depan dengan tingkat akurasi peramalan 95.2%."
    },
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
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "ai-speech",
    title: "AudioSense - Contact Center Speech AI",
    client: "National Customer Care Center",
    category: "ai",
    categoryLabel: "Kecerdasan Buatan",
    badgeText: "Speech-to-Text & NLP",
    tagline: "Transkripsi & Sentimen Analisis Otomatis untuk Quality Assurance Call Center",
    description: "Sistem automasi audit rekaman suara pelanggan yang mentranskripsi percakapan ke teks bahasa Indonesia dan mendeteksi tingkat kepuasan, nada emosi, serta kepatuhan skrip agen secara otomatis.",
    problemSolution: {
      problem: "Tim QA hanya mampu mengaudit 3% dari total 10.000 panggilan per hari secara manual.",
      solution: "AudioSense mengaudit 100% panggilan masuk secara otomatis dalam hitungan menit dan memberikan skor performa agen instan."
    },
    highlights: [
      { label: "Akurasi STT Indo", value: "96.8%", icon: Sparkles },
      { label: "Coverage Audit", value: "100%", icon: ShieldCheck },
      { label: "Kecepatan Audit", value: "10x Lipat", icon: Zap }
    ],
    features: [
      "Transkripsi audio otomatis mendukung aksen bahasa daerah & istilah gaul",
      "Deteksi kata kunci sensitif (keluhan, komplain, ancaman penipuan)",
      "Pemberian skor kepatuhan SOP otomatis bagi setiap agen CS",
      "Integrasi webhook ke sistem ticketing CRM secara instan"
    ],
    techStack: ["Whisper AI", "Python", "Transformers", "Node.js", "ClickHouse"],
    accentColor: "from-primary to-blue-700",
    gradient: "from-primary/20 via-blue-500/10 to-transparent"
  },

  // === 2. APLIKASI BERBASIS WEB (ENTERPRISE ERP & SAAS) ===
  {
    id: "erp-logistics",
    title: "LogistiQ - Integrated Fleet & Cargo ERP",
    client: "PT. Rafay Anugrah Logistik",
    category: "webapp",
    categoryLabel: "Aplikasi Berbasis Web",
    badgeText: "Enterprise ERP & GIS",
    tagline: "Sistem ERP Logistik Terpadu dengan Live GPS Tracking & E-Surat Jalan",
    description: "Platform manajemen transportasi menyeluruh yang menangani ratusan armada truk antar-pulau, surat jalan digital, monitoring sensor bahan bakar, hingga rekonsiliasi biaya jalan dan penagihan klien secara otomatis.",
    problemSolution: {
      problem: "Surat jalan fisik rentan hilang di perjalanan dan penagihan invoice ke klien tertunda hingga 2-3 minggu.",
      solution: "LogistiQ menerapkan e-POD digital dengan tanda tangan elektronik dan auto-invoicing begitu barang sampai di tujuan."
    },
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
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "hospital-cloud",
    title: "MedCare Cloud - Smart Clinic & RME",
    client: "Jaringan Klinik Pratama Sehat Sejahtera",
    category: "webapp",
    categoryLabel: "Aplikasi Berbasis Web",
    badgeText: "HealthTech & SATUSEHAT",
    tagline: "Platform Rekam Medis Elektronik (RME) & Antrean Pasien Standar Kemenkes",
    description: "Aplikasi web cloud-native untuk klinik dan fasilitas kesehatan dengan integrasi bridging BPJS P-Care & SatuSehat Kemenkes RI, memangkas antrean loket dan merapikan rekam medis elektronik terenkripsi.",
    problemSolution: {
      problem: "Pasien menunggu lebih dari 1 jam di ruang tunggu loket dan riwayat rekam medis kertas sulit dilacak antar poli.",
      solution: "MedCare Cloud memangkas antrean sebesar 65% via WhatsApp Check-in dan menyinkronkan seluruh riwayat ke SatuSehat Kemenkes."
    },
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
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "finance-dashboard",
    title: "FinTrack Pro - Corporate Treasury Suite",
    client: "PT. Nusantara Megah Holding",
    category: "webapp",
    categoryLabel: "Aplikasi Berbasis Web",
    badgeText: "FinTech & Banking API",
    tagline: "Dashboard Analitik Finansial Korporat dengan Auto-Bank Reconciliation",
    description: "Sistem keuangan terpusat yang menggabungkan mutasi dari multi-rekening bank korporat, mengotomasi rekonsiliasi transaksi kas masuk/keluar, dan menyajikan proyeksi runway kas perusahaan real-time.",
    problemSolution: {
      problem: "Proses tutup buku bulanan memakan waktu 10 hari kerja karena staf harus mencocokkan ribuan transaksi mutasi bank manual.",
      solution: "FinTrack Pro mengotomasi pencocokan transaksi 99.2% via Open Banking API sehingga tutup buku selesai hanya dalam 1 hari."
    },
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
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "procure-flow",
    title: "ProcureFlow - Enterprise B2B Procurement",
    client: "Konstruksi & Engineering Perkasa",
    category: "webapp",
    categoryLabel: "Aplikasi Berbasis Web",
    badgeText: "Procurement & E-Bidding",
    tagline: "Sistem Pengadaan Barang B2B Digital dengan E-Bidding & Vendor Rating",
    description: "Platform e-procurement yang mendigitalkan seluruh siklus pengadaan mulai dari Purchase Requisition, tender harga vendor, evaluasi teknis, hingga penerbitan Purchase Order otomatis.",
    problemSolution: {
      problem: "Proses tender vendor via email tidak transparan, lambat, dan rawan penyimpangan harga barang.",
      solution: "ProcureFlow menyediakan portal tender online dengan matriks perbandingan harga otomatis yang menghemat biaya belanja proyek 14%."
    },
    highlights: [
      { label: "Efisiensi Biaya", value: "14%", icon: TrendingUp },
      { label: "Kecepatan PO", value: "3.5x Lipat", icon: Zap },
      { label: "Transparansi", value: "100%", icon: ShieldCheck }
    ],
    features: [
      "Pembuatan Request for Quotation (RFQ) instan ke puluhan vendor terverifikasi",
      "Matriks perbandingan harga dan spesifikasi teknis berdampingan",
      "Sistem penilaian KPI & performa ketepatan pengiriman vendor",
      "Approval matrix pengadaan bertingkat berbasis nilai anggaran"
    ],
    techStack: ["Next.js 16", "Golang", "PostgreSQL", "TailwindCSS", "Docker"],
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },

  // === 3. WEBSITE LANDING PAGE (COMPANY PROFILE & D2C) ===
  {
    id: "corporate-maritime",
    title: "Masagena Jaya Maritim Corporate Hub",
    client: "PT. Masagena Jaya Maritim",
    category: "landing",
    categoryLabel: "Website Landing Page",
    badgeText: "Enterprise Corporate Profile",
    tagline: "Website Korporat Mewah & Berkecepatan Tinggi untuk Jasa Pelayaran & Tugboat",
    description: "Company profile kelas enterprise yang menonjolkan kredibilitas internasional, sertifikasi kelautan BKI, armada kapal tugboat & tongkang, serta sistem permohonan sewa kapal (Charter Inquiry) langsung.",
    problemSolution: {
      problem: "Website lama lambat (skor PageSpeed 38) dan tidak menampilkan spesifikasi armada kapal yang memadai untuk calon klien industri tambang.",
      solution: "Flowdev Teams membangun ulang website dengan skor PageSpeed 99/100, video showcase maritim sinematik, dan inquiry charter instan."
    },
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
    accentColor: "from-blue-700 to-sky-500",
    gradient: "from-blue-700/20 via-sky-500/10 to-transparent"
  },
  {
    id: "luxury-property",
    title: "Aethel Luxury Residence & Villa",
    client: "Prime Heritage Development",
    category: "landing",
    categoryLabel: "Website Landing Page",
    badgeText: "High-End Real Estate Landing",
    tagline: "Landing Page Imersif dengan Virtual 3D Showcase & High-Conversion Leads",
    description: "Landing page penjualan properti mewah dengan pengalaman visual sinematik, galeri interaktif tiap tipe unit, denah arsitektur interaktif, serta integrasi instant booking konsultasi privat VIP.",
    problemSolution: {
      problem: "Brosur konvensional gagal memberikan sensasi kemewahan dan interaktivitas bagi calon pembeli properti bernilai miliaran rupiah.",
      solution: "Landing page imersif 60 FPS dengan kalkulator KPR interaktif melipatgandakan lead calon pembeli VIP sebesar 3.2x lipat."
    },
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
    techStack: ["Next.js 16", "Three.js", "TailwindCSS", "Cloudflare CDN"],
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "zenith-coffee",
    title: "Zenith Specialty Coffee Roasters",
    client: "Zenith Coffee Roastery Indonesia",
    category: "landing",
    categoryLabel: "Website Landing Page",
    badgeText: "Brand Story & D2C Showcase",
    tagline: "Landing Page Brand Storytelling dengan Pemesanan Katalog Grosir & Retail",
    description: "Website berkarakter kuat yang menceritakan perjalanan biji kopi dari petani lokal, profil rasa cupping, dan sistem pemesanan sampel kopi untuk jaringan kafe dan hotel di seluruh Indonesia.",
    problemSolution: {
      problem: "Bisnis roastery B2B kesulitan menjangkau jaringan kafe di luar kota karena katalog hanya berupa file PDF statis.",
      solution: "Website interaktif dengan Flavor Wheel & form sampel instan meningkatkan permintaan kemitraan B2B hingga +210%."
    },
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
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  },
  {
    id: "nusa-solar",
    title: "Nusa Solar - Clean Energy Solutions",
    client: "PT. Nusa Solar Energi Indonesia",
    category: "landing",
    categoryLabel: "Website Landing Page",
    badgeText: "CleanTech & Green Energy",
    tagline: "Landing Page Edukatif Panel Surya dengan Kalkulator Penghematan Listrik PLN",
    description: "Website konversi tinggi untuk edukasi dan penjualan instalasi solar panel PLTS Atap residensial dan industri, dilengkapi simulator kalkulator penghematan biaya listrik PLN real-time.",
    problemSolution: {
      problem: "Masyarakat ragu memasang panel surya karena tidak mengetahui estimasi biaya investasi dan berapa lama balik modal (Payback Period).",
      solution: "Kalkulator interaktif Flowdev Teams menyajikan kalkulasi ROI dan penghematan langsung, mendorong konversi survey atap hingga 4.9%."
    },
    highlights: [
      { label: "Conversion Rate", value: "4.9%", icon: TrendingUp },
      { label: "Page 1 Google", value: "Top SEO", icon: Globe },
      { label: "Survey Booking", value: "+180%", icon: Zap }
    ],
    features: [
      "Kalkulator simulasi hemat tagihan listrik bulanan & estimasi kapasitas kWp",
      "Perhitungan Payback Period dan pengurangan jejak karbon otomatis",
      "Formulir booking survey kelayakan atap rumah/pabrik via WhatsApp",
      "Struktur SEO optimal mendominasi kata kunci PLTS Atap Indonesia"
    ],
    techStack: ["Next.js 16", "TailwindCSS", "React Hook Form", "SEO Engine"],
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent"
  }
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<FullProject | null>(null)

  const filteredProjects = useMemo(() => {
    return allPortfolioProjects.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section className="py-16 lg:py-24 bg-background relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* 4 Category Filter Pills */}
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-card rounded-2xl border border-border/80 shadow-xs gap-1.5 max-w-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              Semua Proyek ({allPortfolioProjects.length})
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "ai"
                  ? "bg-primary text-primary-foreground shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Brain className="w-3.5 h-3.5" />
              Kecerdasan Buatan (AI)
            </button>
            <button
              onClick={() => setActiveCategory("webapp")}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "webapp"
                  ? "bg-primary text-primary-foreground shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Aplikasi Web & ERP
            </button>
            <button
              onClick={() => setActiveCategory("landing")}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                activeCategory === "landing"
                  ? "bg-primary text-primary-foreground shadow-xs scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Globe className="w-3.5 h-3.5" />
              Website Landing Page
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari proyek, teknologi, klien..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-card border border-border/80 focus:border-primary focus:outline-hidden focus:ring-1 focus:ring-primary shadow-xs transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Tidak ada portofolio yang cocok</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Coba gunakan kata kunci pencarian yang lain atau ubah kategori filter.
            </p>
            <Button 
              variant="outline"
              size="sm"
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="mt-4 rounded-xl"
            >
              Reset Filter
            </Button>
          </div>
        )}

        {/* COMPREHENSIVE PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-in-up"
              delay={index * 50}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                
                {/* Top Mockup Preview Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border/70 p-4 flex flex-col justify-between">
                  
                  {/* Subtle Grid in Card Mockup */}
                  <div className="absolute inset-0 saas-grid opacity-25 pointer-events-none" />
                  <div className={cn("absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl opacity-30 pointer-events-none bg-gradient-to-br", project.accentColor)} />

                  {/* Browser Bar Mini */}
                  <div className="relative z-10 flex items-center justify-between pb-2 border-b border-border/60">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground/80 px-2 py-0.5 rounded bg-background/80 border border-border/60 truncate max-w-[150px]">
                      flowdevteams.com/demo/{project.id}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Visual Simulation in Mockup */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center p-2">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br shadow-md transition-transform duration-300 group-hover:scale-110", project.accentColor)}>
                      {project.category === "ai" && <Brain className="w-6 h-6" />}
                      {project.category === "webapp" && <LayoutDashboard className="w-6 h-6" />}
                      {project.category === "landing" && <Globe className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-foreground mt-2 font-mono">{project.title}</span>
                    <span className="text-[10px] text-muted-foreground">{project.client}</span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border/50 text-[10px]">
                    <span className="font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {project.badgeText}
                    </span>
                    <span className="font-mono text-muted-foreground font-medium">
                      {project.categoryLabel}
                    </span>
                  </div>

                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary line-clamp-1">
                      {project.tagline}
                    </p>
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* 3 Metrics */}
                    <div className="mt-4 grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-muted/40 border border-border/60 text-center">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] text-muted-foreground font-medium truncate">{h.label}</span>
                          <span className="text-xs sm:text-sm font-bold text-foreground font-mono">{h.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-background border border-border/70 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-muted-foreground bg-muted">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group/btn"
                    >
                      Lihat Detail & Studi Kasus
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <Button
                      size="sm"
                      asChild
                      className="rounded-lg text-xs h-8 px-3 gap-1 shadow-xs"
                    >
                      <a href="#kontak">
                        Konsultasi
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>

                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* INTERACTIVE DEEP DIVE MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-muted/80 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/25">
                  {selectedProject.client}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono text-muted-foreground bg-muted border border-border/70">
                  {selectedProject.badgeText}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-serif">
                {selectedProject.title}
              </h2>
              <p className="text-sm font-medium text-primary mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* CompareSlider if available */}
            {selectedProject.hasCompareSlider && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-border/80 shadow-md">
                <div className="text-xs px-4 py-2 bg-muted/90 border-b border-border/70 flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-semibold text-primary">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    React-Kino Compare Slider (Geser ke Kiri/Kanan)
                  </span>
                  <span className="font-mono text-[11px]">RAW vs AI INFERENCE</span>
                </div>
                <div className="h-64 w-full relative">
                  <CompareSlider
                    ariaLabel="Compare Raw Feed and AI Inference"
                    before={
                      <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4 text-slate-300 relative">
                        <Scan className="w-12 h-12 text-slate-500 mb-2" />
                        <span className="text-sm font-mono font-bold text-slate-400">RAW CAMERA INPUT</span>
                        <span className="text-xs text-slate-500 mt-1">Komponen belum dianalisis (Manual QC)</span>
                      </div>
                    }
                    after={
                      <div className="w-full h-full bg-gradient-to-br from-slate-950 to-blue-950 flex flex-col items-center justify-center p-4 text-white relative">
                        <div className="absolute top-4 left-6 border border-primary/40 bg-primary/20 px-3 py-1.5 rounded text-xs font-mono font-bold text-white shadow-xs">
                          [OK] Dimension: 45.02mm (99.8%)
                        </div>
                        <div className="absolute bottom-4 right-6 border border-border bg-slate-900/80 px-3 py-1.5 rounded text-xs font-mono font-bold text-slate-300">
                          [LOG] Auto-Inspection Active
                        </div>
                        <Sparkles className="w-12 h-12 text-white animate-pulse mb-2" />
                        <span className="text-sm font-mono font-bold text-white">AI DETEKSI OTOMATIS</span>
                      </div>
                    }
                  />
                </div>
              </div>
            )}

            {/* Problem & Solution Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/70 flex flex-col gap-1.5">
                <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">Tantangan Klien:</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{selectedProject.problemSolution.problem}</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/[0.04] border border-primary/30 flex flex-col gap-1.5">
                <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">Solusi Flowdev Teams:</span>
                <p className="text-xs text-foreground/90 leading-relaxed font-medium">{selectedProject.problemSolution.solution}</p>
              </div>
            </div>

            {/* 3 Metrics in Modal */}
            <div className="mt-4 grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/30 border border-border/70 text-center">
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs text-muted-foreground">{h.label}</span>
                  <span className="text-base sm:text-lg font-bold text-foreground font-mono">{h.value}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                Fitur & Spesifikasi Arsitektur:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills in Modal */}
            <div className="mt-5 pt-4 border-t border-border/60">
              <span className="text-xs font-semibold text-muted-foreground mr-2">Teknologi yang Digunakan:</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-muted border border-border/70 text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-border/60 flex flex-wrap items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="rounded-xl text-xs sm:text-sm"
              >
                Tutup
              </Button>
              <Button
                asChild
                className="rounded-xl text-xs sm:text-sm shadow-md gap-2"
              >
                <a href="#kontak">
                  Konsultasi Proyek Seperti Ini
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
