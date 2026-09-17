"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronDown, 
  Brain, 
  LayoutDashboard, 
  Globe, 
  ArrowRight,
  Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

export const serviceCategoriesNav = [
  {
    href: "/layanan/kecerdasan-buatan",
    label: "Kecerdasan Buatan (AI)",
    shortLabel: "AI & Machine Learning",
    description: "LLM RAG, Computer Vision, AI Agent & Otomasi Cerdas",
    icon: Brain,
    badge: "AI & ML",
    accentColor: "group-hover:text-primary group-hover:border-primary/30",
    iconBg: "bg-primary/10 text-primary border-primary/20"
  },
  {
    href: "/layanan/aplikasi-web",
    label: "Aplikasi Web & Sistem",
    shortLabel: "Web App & SaaS",
    description: "Platform SaaS, ERP/CRM, Dashboard & Sistem Bisnis Kustom",
    icon: LayoutDashboard,
    badge: "Sistem & SaaS",
    accentColor: "group-hover:text-primary group-hover:border-primary/30",
    iconBg: "bg-primary/10 text-primary border-primary/20"
  },
  {
    href: "/layanan/landing-page",
    label: "Website & Landing Page",
    shortLabel: "Website & Landing Page",
    description: "Website Perusahaan, Company Profile & Landing Page Kredibilitas Tinggi",
    icon: Globe,
    badge: "Profil & Web",
    accentColor: "group-hover:text-primary group-hover:border-primary/30",
    iconBg: "bg-primary/10 text-primary border-primary/20"
  },
]

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan", hasDropdown: true },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/harga-paket", label: "Harga" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/kontak", label: "Konsultasi Gratis" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 10
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsServicesDropdownOpen(false)
  }, [pathname])

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 150)
  }

  const isServiceActive = pathname.startsWith("/layanan")

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out",
          isScrolled
            ? "border-b border-primary/20 bg-background/85 sm:bg-background/40 backdrop-blur-md sm:backdrop-blur-xl"
            : "border-b border-transparent bg-background/5 backdrop-blur-xs sm:backdrop-blur-sm"
        )}
        style={{
          boxShadow: isScrolled 
            ? '0 4px 20px -2px rgba(20, 45, 82, 0.15)' 
            : 'none'
        }}
      >
        <div className={cn(
          "absolute inset-x-0 top-0 h-[1px] bg-primary/20 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold text-foreground z-50 relative group"
            >
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-primary/15 bg-card shadow-sm transition-all duration-300 group-hover:border-primary/35">
                <Image
                  src="/logo/flowdevteams-logo.png"
                  alt="Flowdev Teams - Jasa Pembuatan Website"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base lg:text-xl leading-none relative">
                Flowdev{" "}
                <span className="text-primary relative inline-block">
                  Teams
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 rounded-xl border border-border/70 bg-card/70 p-1 shadow-sm backdrop-blur">
              {navLinks.map((link) => {
                const isActive = link.hasDropdown ? isServiceActive : pathname === link.href

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                        onMouseEnter={() => setHoveredLink(link.label)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={cn(
                          "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-1.5 cursor-pointer outline-none select-none",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        aria-expanded={isServicesDropdownOpen}
                      >
                        <span className={cn(
                          "absolute inset-0 rounded-lg bg-accent/70 opacity-0 transition-opacity duration-200",
                          hoveredLink === link.label && !isActive && "opacity-100"
                        )} />

                        <span className="relative z-10 inline-block">
                          {link.label}
                        </span>

                        <ChevronDown 
                          className={cn(
                            "relative z-10 h-3.5 w-3.5 transition-transform duration-200",
                            isServicesDropdownOpen && "rotate-180"
                          )} 
                        />
                      </button>

                      {/* Dropdown Menu Popover */}
                      {isServicesDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-[420px] rounded-2xl border border-border/80 bg-card/95 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-[110]"
                        >
                          <div className="px-3 py-2 border-b border-border/50 mb-2 flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              3 Kategori Layanan Utama
                            </span>
                            <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                              Kustom & Teruji
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {serviceCategoriesNav.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className={cn(
                                  "group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-accent/60 border border-transparent hover:border-border/60",
                                  pathname === item.href && "bg-accent/80 border-primary/20"
                                )}
                              >
                                <div className={cn(
                                  "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105",
                                  item.iconBg
                                )}>
                                  <item.icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] font-semibold text-muted-foreground border border-border/60 rounded px-1.5 py-0.2 bg-muted/40">
                                      {item.badge}
                                    </span>
                                  </div>
                                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed line-clamp-1">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Dropdown Footer */}
                          <div className="mt-2.5 pt-2.5 border-t border-border/50 flex items-center justify-between px-2 text-xs">
                            <Link
                              href="/harga-paket"
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="font-semibold text-primary hover:underline flex items-center gap-1"
                            >
                              Lihat Estimasi Biaya
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                            <Link
                              href="/kontak"
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="text-muted-foreground hover:text-foreground font-medium"
                            >
                              Konsultasi Gratis →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className={cn(
                      "absolute inset-0 rounded-lg bg-accent/70 opacity-0 transition-opacity duration-200",
                      hoveredLink === link.href && !isActive && "opacity-100"
                    )} />

                    <span className="relative z-10 inline-block">
                      {link.label}
                    </span>

                    {link.href === "/harga-paket" && (
                      <span className="absolute -top-2 -right-2 rounded-full bg-primary px-1.5 py-[1px] text-[8px] font-semibold text-primary-foreground shadow-sm">
                        PROMO
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>            <div className="hidden lg:flex items-center gap-2">
              <Button
                asChild
                className="relative h-10 rounded-lg px-5 shadow-sm transition-all duration-200 hover:shadow-primary/20"
              >
                <Link href="/kontak" className="relative z-10 font-semibold tracking-wide">
                  Mulai Proyek
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern Sticky Mobile Bottom Nav Dock (Khusus Mobile & Tablet) */}
      <MobileBottomNav />
    </>
  )
}
