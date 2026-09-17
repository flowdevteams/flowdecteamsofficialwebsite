"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Layers, 
  Briefcase, 
  Tag, 
  MessageSquare,
  Globe,
  LayoutDashboard,
  Brain,
  ChevronRight,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

const servicesList = [
  {
    href: "/layanan/landing-page",
    title: "Website & Landing Page",
    description: "Company Profile, Landing Page Iklan & Optimasi SEO Google",
    icon: Globe,
  },
  {
    href: "/layanan/aplikasi-web",
    title: "Aplikasi Web & Sistem Kustom",
    description: "Platform SaaS, Dashboard Operasional, ERP & CRM Bisnis",
    icon: LayoutDashboard,
  },
  {
    href: "/layanan/kecerdasan-buatan",
    title: "Kecerdasan Buatan (AI) & Otomasi",
    description: "Sistem Cerdas, Chatbot AI, Integrasi LLM & Otomasi Alur Kerja",
    icon: Brain,
  },
]

export function MobileBottomNav() {
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)

  // Auto-close sheet on route change
  React.useEffect(() => {
    setIsServicesOpen(false)
  }, [pathname])

  const isServicesActive = pathname.startsWith("/layanan") || isServicesOpen

  return (
    <>
      {/* Backdrop overlay */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity duration-200"
          onClick={() => setIsServicesOpen(false)}
        />
      )}

      {/* Clean Native Bottom Sheet: 3 Services */}
      {isServicesOpen && (
        <div 
          className="fixed bottom-0 inset-x-0 z-50 lg:hidden rounded-t-2xl border-t border-border bg-background shadow-2xl animate-in slide-in-from-bottom duration-200 ease-out"
          style={{
            paddingBottom: "max(1rem, env(safe-area-inset-bottom, 16px))",
          }}
        >
          {/* Native Drag Handle Indicator */}
          <div className="pt-2.5 pb-1 flex justify-center">
            <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
          </div>

          <div className="px-4 pt-1 pb-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="text-sm font-bold text-foreground">
                Pilih Layanan
              </h3>
              <button
                type="button"
                onClick={() => setIsServicesOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground rounded-md transition-colors"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 3 Services Clean List */}
            <div className="divide-y divide-border/50">
              {servicesList.map((svc) => {
                const Icon = svc.icon
                const isCurrent = pathname === svc.href

                return (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    onClick={() => setIsServicesOpen(false)}
                    className={cn(
                      "flex items-center gap-3.5 py-3 px-1 transition-colors",
                      isCurrent ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    <div className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                      isCurrent
                        ? "bg-primary/10 text-primary border-primary/30"
                        : "bg-muted text-muted-foreground border-border/60"
                    )}>
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-semibold truncate leading-tight">
                        {svc.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate mt-0.5 leading-normal">
                        {svc.description}
                      </div>
                    </div>

                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                  </Link>
                )
              })}
            </div>

            {/* Bottom Link to All Services */}
            <div className="pt-3 mt-1 border-t border-border/60 flex items-center justify-between">
              <Link
                href="/layanan"
                onClick={() => setIsServicesOpen(false)}
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Lihat Ringkasan Semua Layanan</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/tentang-kami"
                onClick={() => setIsServicesOpen(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Clean Native Mobile Bottom Bar */}
      <nav 
        aria-label="Navigasi Utama"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur-md"
        style={{
          paddingBottom: "max(0.35rem, env(safe-area-inset-bottom, 8px))",
        }}
      >
        <div className="flex items-center justify-around h-14 px-1">
          {/* 1. Beranda */}
          <Link
            href="/"
            onClick={() => setIsServicesOpen(false)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 gap-1 transition-colors select-none",
              pathname === "/" && !isServicesOpen
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground font-medium"
            )}
          >
            <Home className={cn("w-5 h-5", pathname === "/" && !isServicesOpen ? "stroke-[2.2]" : "stroke-[1.6]")} />
            <span className="text-[10px] leading-none tracking-tight">Beranda</span>
          </Link>

          {/* 2. Layanan (Toggles 3 Services Sheet) */}
          <button
            type="button"
            onClick={() => setIsServicesOpen((prev) => !prev)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 gap-1 transition-colors select-none cursor-pointer",
              isServicesActive
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground font-medium"
            )}
            aria-label="Buka Pilihan 3 Layanan"
            aria-expanded={isServicesOpen}
          >
            <Layers className={cn("w-5 h-5", isServicesActive ? "stroke-[2.2]" : "stroke-[1.6]")} />
            <span className="text-[10px] leading-none tracking-tight">Layanan</span>
          </button>

          {/* 3. Portofolio */}
          <Link
            href="/portofolio"
            onClick={() => setIsServicesOpen(false)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 gap-1 transition-colors select-none",
              pathname.startsWith("/portofolio") && !isServicesOpen
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground font-medium"
            )}
          >
            <Briefcase className={cn("w-5 h-5", pathname.startsWith("/portofolio") && !isServicesOpen ? "stroke-[2.2]" : "stroke-[1.6]")} />
            <span className="text-[10px] leading-none tracking-tight">Portofolio</span>
          </Link>

          {/* 4. Harga */}
          <Link
            href="/harga-paket"
            onClick={() => setIsServicesOpen(false)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 gap-1 transition-colors select-none",
              pathname.startsWith("/harga-paket") && !isServicesOpen
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground font-medium"
            )}
          >
            <Tag className={cn("w-5 h-5", pathname.startsWith("/harga-paket") && !isServicesOpen ? "stroke-[2.2]" : "stroke-[1.6]")} />
            <span className="text-[10px] leading-none tracking-tight">Harga</span>
          </Link>

          {/* 5. Kontak */}
          <Link
            href="/kontak"
            onClick={() => setIsServicesOpen(false)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 gap-1 transition-colors select-none",
              pathname.startsWith("/kontak") && !isServicesOpen
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground font-medium"
            )}
          >
            <MessageSquare className={cn("w-5 h-5", pathname.startsWith("/kontak") && !isServicesOpen ? "stroke-[2.2]" : "stroke-[1.6]")} />
            <span className="text-[10px] leading-none tracking-tight">Kontak</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
