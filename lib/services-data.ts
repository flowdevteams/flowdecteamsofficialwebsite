export interface ServiceCategory {
  slug: string
  aliases?: string[]
  title: string
  shortTitle: string
  badgeText: string
  tagline: string
  summary: string
  iconName: "Brain" | "LayoutDashboard" | "Globe"
  accentColor: string
  gradient: string
  badgeColor: string

  // Problem & Solution
  problemSolution: {
    problem: string
    solution: string
    marketPainPoints: string[]
  }

  // Business ROI & Impacts
  roiMetrics: {
    label: string
    value: string
    description: string
  }[]

  // Detailed Features & Deliverables
  deliverables: {
    title: string
    description: string
    tags: string[]
  }[]

  // Suitable for / Target Business
  targetAudience: {
    businessType: string
    description: string
  }[]

  // Tech Stack
  techStack: {
    category: string
    items: string[]
  }[]

  // Workflow / Process
  workflow: {
    step: string
    title: string
    description: string
  }[]

  // Specific FAQs
  faqs: {
    question: string
    answer: string
  }[]

  // Matching Portfolio Category filter key
  portfolioCategoryKey: "ai" | "webapp" | "landing"
}

export const servicesData: ServiceCategory[] = [
  // 1. KECERDASAN BUATAN (AI & MACHINE LEARNING)
  {
    slug: "kecerdasan-buatan",
    aliases: ["ai", "machine-learning", "artificial-intelligence"],
    title: "Kecerdasan Buatan (AI) & Machine Learning",
    shortTitle: "Kecerdasan Buatan (AI)",
    badgeText: "AI & Machine Learning",
    tagline: "Otomatisasi Cerdas & Analisis Prediktif Berbasis AI untuk Akselerasi Bisnis Modern",
    summary: "Transformasikan operasional bisnis Anda dengan integrasi AI mutakhir. Mulai dari LLM RAG untuk pemrosesan dokumen, Computer Vision inspeksi industri, hingga AI Agent otomatisasi 24/7.",
    iconName: "Brain",
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    portfolioCategoryKey: "ai",

    problemSolution: {
      problem: "Proses operasional manual yang memakan ribuan jam kerja, keterbatasan respon layanan pelanggan di luar jam kantor, serta tingginya risiko human-error dalam analisis data dan inspeksi kualitas.",
      solution: "Kami mengintegrasikan model AI terlatih yang dirancang khusus untuk alur kerja perusahaan Anda—mengotomatiskan tugas berulang, mengekstraksi wawasan berharga secara instan, dan meningkatkan akurasi operasional hingga 99.4%.",
      marketPainPoints: [
        "Tim kewalahan menjawab ribuan pertanyaan pelanggan yang repetitif",
        "Pencarian SOP dan data hukum/kontrak manual memakan waktu berjam-jam",
        "Inspeksi kualitas produk fisik masih bergantung pada ketelitian manual operator",
        "Banyak data perusahaan yang tidak termanfaatkan karena belum ada sistem prediktif"
      ]
    },

    roiMetrics: [
      {
        label: "Efisiensi Waktu Kerja",
        value: "Up to 80%",
        description: "Pengurangan waktu pemrosesan dokumen dan tugas rutin melalui otomatisasi AI."
      },
      {
        label: "Akurasi Model",
        value: "99.4%",
        description: "Tingkat presisi tinggi pada sistem Computer Vision dan pemrosesan teks semantik."
      },
      {
        label: "Ketersediaan Layanan",
        value: "24/7 Real-Time",
        description: "Asisten cerdas melayani pelanggan dan memonitor sistem tanpa jeda waktu."
      },
      {
        label: "Penghematan Biaya",
        value: "60% Cost Saving",
        description: "Reduksi biaya operasional jangka panjang dan minimasi risiko kerugian akibat cacat produk."
      }
    ],

    deliverables: [
      {
        title: "Enterprise Knowledge RAG & Chatbot Cerdas",
        description: "Asisten AI yang mempelajari seluruh SOP, katalog produk, dokumen PDF, dan database internal Anda untuk menjawab pertanyaan pelanggan & karyawan secara akurat dengan sitasi sumber.",
        tags: ["LLM Integration", "Vector Database", "LangChain/LlamaIndex", "Semantic Search"]
      },
      {
        title: "Computer Vision & Visual Quality Inspection",
        description: "Sistem penglihatan komputer real-time dengan kamera industri untuk inspeksi kecacatan produk mikro, pengenalan objek, dan verifikasi barcode/OCR berkecepatan tinggi.",
        tags: ["YOLOv8", "OpenCV", "PyTorch", "High-FPS Inference", "Edge AI"]
      },
      {
        title: "Custom AI Autonomous Agents & Workflow Automation",
        description: "Agent AI otonom yang mampu menjalankan serangkaian tugas berantai otomatis: membaca email masuk, mengekstrak lampiran invoice, memperbarui database, hingga mengirimkan notifikasi tim.",
        tags: ["Multi-Agent System", "API Tool Calling", "Background Workers", "CRM Sync"]
      },
      {
        title: "Predictive Analytics & Recommendation Engine",
        description: "Model machine learning untuk memprediksi tren penjualan, kebutuhan stok inventaris, deteksi anomali fraud transaksi, dan personalisasi rekomendasi produk untuk pengguna.",
        tags: ["Scikit-Learn", "Time-Series Forecasting", "Anomaly Detection", "Big Data"]
      }
    ],

    targetAudience: [
      {
        businessType: "Perusahaan Manufaktur & Logistik",
        description: "Otomasi inspeksi visual jalur perakitan, pelacakan armada cerdas, dan prediksi maintenance mesin."
      },
      {
        businessType: "Kantor Hukum, Konsultan & Korporat",
        description: "Pencarian cerdas basis data regulasi, verifikasi klausul kontrak instan, dan ringkasan dokumen otomatis."
      },
      {
        businessType: "E-Commerce & Retail Skala Menengah/Besar",
        description: "Chatbot konversi 24/7, rekomendasi personal, dan asisten belanja berbasis kecerdasan buatan."
      },
      {
        businessType: "Startup Berbasis AI",
        description: "Pengembangan MVP produk AI dari ide konsep hingga model siap produksi yang scalable."
      }
    ],

    techStack: [
      {
        category: "AI & ML Frameworks",
        items: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Hugging Face", "YOLOv8"]
      },
      {
        category: "LLM & Vector Search",
        items: ["OpenAI GPT-4o", "Anthropic Claude", "Ollama / DeepSeek", "Qdrant", "Pinecone", "ChromaDB"]
      },
      {
        category: "Deployment & Infrastructure",
        items: ["Docker", "NVIDIA CUDA", "AWS SageMaker", "GCP Vertex AI", "Redis", "Celery"]
      }
    ],

    workflow: [
      {
        step: "01",
        title: "Audit Kebutuhan & Kelayakan Data",
        description: "Kami menganalisis alur kerja bisnis Anda, ketersediaan dataset/dokumen, serta menentukan model AI paling efisien dan tepat sasaran."
      },
      {
        step: "02",
        title: "Prototyping & Validasi Model",
        description: "Membangun prototipe awal (PoC) untuk menguji akurasi inferensi, kecepatan respon, dan integrasi data nyata."
      },
      {
        step: "03",
        title: "Pengembangan Sistem & Integrasi API",
        description: "Membangun backend server berperforma tinggi dan mengintegrasikan model AI ke dalam antarmuka aplikasi atau dashboard bisnis Anda."
      },
      {
        step: "04",
        title: "Fine-Tuning, Security & Deployment",
        description: "Optimasi model dengan dataset spesifik, pengamanan enkripsi data, dan deployment ke cloud/server on-premise siap produksi."
      }
    ],

    faqs: [
      {
        question: "Apakah data rahasia perusahaan kami aman saat menggunakan model AI?",
        answer: "Sangat aman. Kami menerapkan arsitektur data privat (Private VPC / On-Premise / Enterprise API) dengan enkripsi end-to-end. Data perusahaan Anda tidak akan digunakan untuk melatih model publik manapun."
      },
      {
        question: "Apakah kami bisa menggunakan model AI lokal tanpa bergantung API luar?",
        answer: "Ya. Kami berpengalaman menerapkan model open-source berkinerja tinggi (seperti Llama, DeepSeek, Mistral) pada server lokal atau cloud privat Anda sendiri."
      },
      {
        question: "Berapa lama estimasi waktu pengerjaan proyek integrasi AI?",
        answer: "Tergantung kompleksitas: untuk implementasi Chatbot RAG / Knowledge Base berkisar 2-3 minggu, sedangkan sistem Computer Vision industri atau Custom AI Agent berkisar 3-6 minggu."
      }
    ]
  },

  // 2. APLIKASI WEB & SISTEM ENTERPRISE
  {
    slug: "aplikasi-web",
    aliases: ["webapp", "web-app", "aplikasi-bisnis", "custom-web"],
    title: "Aplikasi Web & Sistem Enterprise",
    shortTitle: "Aplikasi Web & Sistem",
    badgeText: "Web Application & SaaS",
    tagline: "Sistem Web Kustom Skalabel, Dashboard Manajemen & Platform Bisnis Kinerja Tinggi",
    summary: "Bangun fondasi digital bisnis Anda dengan aplikasi web kustom yang aman, cepat, dan siap berkembang. Dari platform SaaS, ERP/CRM internal, sistem transaksi multi-cabang, hingga dashboard analitik real-time.",
    iconName: "LayoutDashboard",
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    portfolioCategoryKey: "webapp",

    problemSolution: {
      problem: "Penggunaan software siap pakai (off-the-shelf) yang kaku dan tidak cocok dengan SOP unik perusahaan, data tersebar di banyak spreadsheet terpisah, serta sulitnya memantau performa bisnis real-time.",
      solution: "Kami membangun aplikasi web yang dibuat khusus mengikuti alur kerja bisnis Anda 100%—terintegrasi penuh, aman, mudah digunakan oleh staf, dan dapat diskalakan seiring pertumbuhan bisnis Anda tanpa biaya lisensi per user yang membebani.",
      marketPainPoints: [
        "Pencatatan inventori, keuangan, dan data order masih manual & rawan selisih",
        "Sistem lama lambat, sering crash saat jam sibuk, dan tidak bisa diakses dari HP",
        "Biaya langganan software per-user bulanan yang semakin mahal saat tim bertambah",
        "Ketiadaan hak milik atas kode sumber (source code) pada platform sewa"
      ]
    },

    roiMetrics: [
      {
        label: "Uptime Sistem",
        value: "99.9%",
        description: "Arsitektur cloud tangguh yang menjamin operasional bisnis berjalan tanpa henti."
      },
      {
        label: "Kecepatan Respon API",
        value: "< 120ms",
        description: "Performa query dan database yang dioptimasi untuk volume transaksi besar."
      },
      {
        label: "Sinkronisasi Data",
        value: "Real-Time",
        description: "Pembaruan data instan antar divisi, gudang, dan cabang tanpa jeda manual."
      },
      {
        label: "Hak Milik Kode",
        value: "100% Full IP",
        description: "Source code menjadi aset milik penuh perusahaan Anda tanpa keterikatan lisensi vendor."
      }
    ],

    deliverables: [
      {
        title: "Custom SaaS & Platform Berlangganan",
        description: "Membangun produk software-as-a-service lengkap dengan fitur multi-tenancy, manajemen langganan berkala, integrasi payment gateway otomatis, dan billing invoice.",
        tags: ["Multi-Tenancy", "Subscription Billing", "RBAC Access", "Next.js & Supabase"]
      },
      {
        title: "Sistem ERP, CRM & Manajemen Operasional",
        description: "Aplikasi internal untuk mengelola rantai pasok (supply chain), stok gudang multi-lokasi, pelacakan prospek sales, dan manajemen tugas karyawan dengan approval bertingkat.",
        tags: ["Custom ERP", "Warehouse POS", "Pipeline CRM", "Role Permission"]
      },
      {
        title: "Dashboard Analitik & Pelaporan Real-Time",
        description: "Pusat visualisasi data interaktif untuk memantau KPI utama bisnis, grafik profitabilitas, analitik perilaku pengguna, dan ekspor otomatis ke Excel/PDF.",
        tags: ["Interactive Charts", "WebSockets Live Data", "Data Aggregation", "Audit Logs"]
      },
      {
        title: "Integrasi API Eksternal & Payment Gateway",
        description: "Integrasi mulus dengan gateway pembayaran nasional (Midtrans, Xendit), kurir ekspedisi logistik, WhatsApp API blast, serta sistem perbankan.",
        tags: ["Midtrans / Xendit", "RajaOngkir", "WhatsApp Gateway", "REST & GraphQL"]
      }
    ],

    targetAudience: [
      {
        businessType: "Distributor, Retail & Multi-Cabang",
        description: "Sentralisasi sistem kasir (POS), sinkronisasi stok antar cabang, dan laporan laba-rugi otomatis."
      },
      {
        businessType: "Startup Digital & Tech Founders",
        description: "Pengembangan platform aplikasi web dari tahap MVP hingga arsitektur siap skala jutaan user."
      },
      {
        businessType: "Perusahaan Jasa & Klinik / Edukasi",
        description: "Sistem reservasi online, manajemen rekam medis/jadwal, dan portal interaktif khusus member."
      },
      {
        businessType: "Korporat & Instansi",
        description: "Digitalisasi birokrasi dokumen internal, approval workflow, dan sistem inventaris aset aman."
      }
    ],

    techStack: [
      {
        category: "Frontend & UI",
        items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"]
      },
      {
        category: "Backend & Database",
        items: ["Node.js", "FastAPI / Go", "PostgreSQL", "Prisma ORM", "Redis Caching", "Supabase"]
      },
      {
        category: "DevOps & Security",
        items: ["Docker", "AWS / Vercel / Cloudflare", "CI/CD Pipeline", "JWT & OAuth2", "Automated Backup"]
      }
    ],

    workflow: [
      {
        step: "01",
        title: "Analisis Arsitektur & SOP Bisnis",
        description: "Kami membedah proses bisnis Anda, merancang Entity Relationship Diagram (ERD) database, dan menyusun user flow detail."
      },
      {
        step: "02",
        title: "Desain UI/UX & Interaktif Prototype",
        description: "Merancang wireframe dan antarmuka dashboard yang bersih, intuitif, dan responsif agar staf Anda dapat menggunakannya tanpa kendala."
      },
      {
        step: "03",
        title: "Pengembangan Kode & Integrasi API",
        description: "Implementasi backend yang kokoh, pembuatan REST API, dan integrasi antarmuka frontend dengan standar clean code dan performa tinggi."
      },
      {
        step: "04",
        title: "Quality Assurance & Deployment Cloud",
        description: "Pengujian beban (load testing), uji celah keamanan, migrasi database, pelatihan staf, dan deployment ke server cloud."
      }
    ],

    faqs: [
      {
        question: "Apakah sistem aplikasi web ini bisa diakses melalui smartphone atau tablet?",
        answer: "Tentu. Seluruh aplikasi web yang kami bangun dirancang sepenuhnya responsif (mobile-friendly) dan juga dapat dikonfigurasi menjadi Progressive Web App (PWA) yang dapat diinstal langsung di layar utama smartphone."
      },
      {
        question: "Apakah kami mendapatkan akses penuh terhadap source code dan database?",
        answer: "Ya, 100%. Anda memiliki hak cipta penuh atas source code dan database setelah proyek selesai, tanpa keterikatan lisensi biaya bulanan."
      },
      {
        question: "Bagaimana jika di kemudian hari kami ingin menambah fitur baru?",
        answer: "Arsitektur kode kami dibangun modular dan terdokumentasi rapi. Penambahan modul atau fitur baru dapat dilakukan dengan sangat mudah kapan saja."
      }
    ]
  },

  // 3. LANDING PAGE & WEB INTERAKTIF
  {
    slug: "landing-page",
    aliases: ["landing", "company-profile", "web-bisnis", "landing-page-konversi"],
    title: "Landing Page & Web Interaktif",
    shortTitle: "Landing Page & Web",
    badgeText: "High-Conversion Web",
    tagline: "Website & Landing Page Berkecepatan Tinggi yang Dirancang untuk Memaksimalkan Penjualan",
    summary: "Hadirkan kesan pertama yang memukau bagi calon pelanggan Anda. Landing page berkecepatan kilat (< 1.5 detik), copywriting persuasif, dan desain berorientasi konversi yang siap menyulap trafik iklan menjadi pembeli setia.",
    iconName: "Globe",
    accentColor: "from-primary to-blue-800",
    gradient: "from-primary/20 via-blue-600/10 to-transparent",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    portfolioCategoryKey: "landing",

    problemSolution: {
      problem: "Trafik iklan berbayar (Meta Ads / Google Ads / TikTok Ads) terbuang sia-sia karena website memuat sangat lambat (> 3 detik), desain tampak usang dan tidak meyakinkan, serta alur kontak ke WhatsApp yang rumit.",
      solution: "Kami membangun Landing Page modern berkecepatan 95+ Google PageSpeed dengan psikologi konversi teruji—menampilkan pesan penawaran yang tajam, kredibilitas brand yang kuat, dan tombol aksi langsung (CTA) yang memudahkan pelanggan berbelanja.",
      marketPainPoints: [
        "Biaya iklan mahal tapi konversi closing ke WhatsApp sangat rendah",
        "Website lambat membuat lebih dari 50% calon pengunjung kabur sebelum melihat produk",
        "Tampilan website tidak rapi saat dibuka di HP pengguna Indonesia",
        "Website tidak muncul di pencarian Google untuk kata kunci bisnis lokal"
      ]
    },

    roiMetrics: [
      {
        label: "Kecepatan Loading",
        value: "< 1.2 Detik",
        description: "Waktu muat ultra cepat untuk menekan rasio bounce rate pengunjung serendah mungkin."
      },
      {
        label: "Google PageSpeed",
        value: "95+ Score",
        description: "Skor Core Web Vitals sempurna di desktop maupun perangkat mobile."
      },
      {
        label: "Peningkatan Konversi",
        value: "Up to 3.5x",
        description: "Kenaikan rasio klik menuju WhatsApp atau form prospek dibanding website standar."
      },
      {
        label: "SEO Score",
        value: "100% On-Page",
        description: "Struktur semantik HTML5 dan Schema.org lengkap untuk peringkat teratas Google."
      }
    ],

    deliverables: [
      {
        title: "Sales & Campaign Landing Page Berkinerja Tinggi",
        description: "Landing page khusus untuk kampanye iklan Google, Meta, dan TikTok Ads dengan tata letak visual dinamis, bukti sosial (social proof), dan penawaran berbatas waktu.",
        tags: ["Direct WhatsApp CTA", "Meta Pixel & GA4 Ready", "Fast Loading", "A/B Testing Friendly"]
      },
      {
        title: "Company Profile Interaktif & Berkelas",
        description: "Website profil perusahaan modern yang mencerminkan prestise dan reputasi tinggi brand Anda di mata investor, klien korporat, dan mitra bisnis.",
        tags: ["Glassmorphism & Micro-animations", "About & Portfolio Showcase", "Interactive Map", "PDF Catalog Download"]
      },
      {
        title: "On-Page SEO & Optimasi Mesin Pencari",
        description: "Penerapan metadata OpenGraph, canonical URL, sitemap XML otomatis, schema markup JSON-LD, serta optimasi kata kunci target bisnis Anda.",
        tags: ["Schema.org Markup", "Fast Indexing", "Rich Snippets", "Mobile-First Index"]
      },
      {
        title: "Integrasi Pelacakan Analitik & Direct Leads",
        description: "Pemasangan lengkap Google Tag Manager, Meta Pixel Ads, TikTok Pixel, serta formulir pemesanan instan dengan notifikasi otomatis ke WhatsApp / Email.",
        tags: ["Meta Pixel Tracking", "Google Analytics 4", "Form to WhatsApp", "Instant Notification"]
      }
    ],

    targetAudience: [
      {
        businessType: "Pelaku Usaha UMKM & Brand Lokal",
        description: "Meningkatkan kepercayaan pembeli dan mengubah audiens media sosial menjadi pelanggan tetap."
      },
      {
        businessType: "Bisnis Jasa Profesional & Konsultan",
        description: "Menampilkan portofolio pengalaman, daftar paket layanan, dan menjadwalkan konsultasi klien."
      },
      {
        businessType: "Advertiser & Performance Marketer",
        description: "Landing page khusus iklan dengan loading secepat kilat untuk memaksimalkan Return on Ad Spend (ROAS)."
      },
      {
        businessType: "Property, Kuliner & Event",
        description: "Penyajian visual properti interaktif, menu kuliner modern, dan registrasi tiket event online."
      }
    ],

    techStack: [
      {
        category: "Framework & Styling",
        items: ["Next.js 16 (App Router)", "React 19", "Tailwind CSS", "Framer Motion Animations"]
      },
      {
        category: "Performance & Optimizations",
        items: ["Next Image Optimization", "Turbopack Build", "Brotli Compression", "CDN Edge Caching"]
      },
      {
        category: "Marketing & Analytics",
        items: ["Meta Pixel", "Google Tag Manager", "Google Analytics 4", "Schema.org Rich Data"]
      }
    ],

    workflow: [
      {
        step: "01",
        title: "Briefing Produk & Target Pembeli",
        description: "Kami memetakan keunggulan unik produk Anda (USP), persona target konsumen, dan tujuan konversi utama."
      },
      {
        step: "02",
        title: "Penyusunan Copywriting Persuasif",
        description: "Menulis kalimat penawaran yang memikat dengan formula AIDA (Attention, Interest, Desire, Action) yang fokus menghasilkan penjualan."
      },
      {
        step: "03",
        title: "Desain Visual & Koding Responsif",
        description: "Mendesain elemen visual premium dan mengoding website dengan standar kecepatan tinggi tanpa bloatware."
      },
      {
        step: "04",
        title: "Pemasangan Tracking Pixel & Launching",
        description: "Integrasi sistem pelacakan iklan, uji kecepatan di PageSpeed Insights, menghubungkan domain kustom, dan peluncuran resmi."
      }
    ],

    faqs: [
      {
        question: "Berapa lama proses pembuatan landing page hingga siap diiklankan?",
        answer: "Proses pembuatan rata-rata memakan waktu 3-5 hari kerja setelah materi penawaran dan konten dasar kami terima."
      },
      {
        question: "Apakah landing page ini sudah include domain dan hosting?",
        answer: "Ya, kami menyediakan paket lengkap termasuk domain (.com / .id), hosting cloud berkecepatan tinggi dengan sertifikat SSL (HTTPS) gratis seumur hidup."
      },
      {
        question: "Apakah bisa dibantu menghubungkan ke nomor WhatsApp tim sales kami?",
        answer: "Tentu. Kami akan mengatur tombol CTA dengan pesan template otomatis yang rapi sehingga saat calon pelanggan mengklik tombol, mereka langsung terhubung ke WhatsApp bisnis Anda."
      }
    ]
  }
]

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  const normalized = slug.toLowerCase().trim()
  return servicesData.find(
    (item) => item.slug === normalized || item.aliases?.includes(normalized)
  )
}
