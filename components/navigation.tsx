"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Menu, 
  X, 
  Sparkles, 
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
    label: "Landing Page & Web Interaktif",
    shortLabel: "Landing Page & Web",
    description: "Sales Page Iklan, Company Profile Modern & Konversi Tinggi",
    icon: Globe,
    badge: "High-Conversion",
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
  { href: "/kontak", label: "Kontak" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  React.useEffect(() => {
    setIsOpen(false)
    setIsServicesDropdownOpen(false)
    setIsMobileServicesOpen(false)
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
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
          isScrolled || isOpen
            ? "border-b border-primary/20 bg-background/40 backdrop-blur-xl"
            : "border-b border-transparent bg-background/5 backdrop-blur-sm"
        )}
        style={{
          boxShadow: (isScrolled || isOpen) 
            ? '0 4px 20px -2px color-mix(in oklch, var(--primary) 40%, transparent), 0 12px 40px -8px color-mix(in oklch, var(--primary) 90%, transparent)' 
            : 'none'
        }}
      >
        <div className={cn(
          "absolute inset-x-0 top-0 h-[1px] bg-primary/20 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
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
                      <Link
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={cn(
                          "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-1.5",
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

                        <ChevronDown 
                          className={cn(
                            "relative z-10 h-3.5 w-3.5 transition-transform duration-200",
                            isServicesDropdownOpen && "rotate-180"
                          )} 
                        />
                      </Link>

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
                              href="/layanan"
                              className="font-semibold text-primary hover:underline flex items-center gap-1"
                            >
                              Lihat Semua Layanan
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                            <Link
                              href="/kontak"
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
            </div>

            <div className="flex items-center gap-2">
              <Button
                asChild
                className="hidden lg:inline-flex relative h-10 rounded-lg px-5 shadow-sm transition-all duration-200 hover:shadow-primary/20"
              >
                <Link href="/kontak" className="relative z-10 font-semibold tracking-wide">
                  Mulai Proyek
                </Link>
              </Button>

              {/* Mobile Menu Button with morph animation */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden relative h-10 w-10 overflow-hidden rounded-lg border border-border/70 bg-card/70 shadow-sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu Navigasi"
              >
                <span className="relative z-10">
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[90] transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-background/80 transition-all duration-300 touch-none",
            isOpen ? "backdrop-blur-xl" : "backdrop-blur-none"
          )}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            "absolute top-0 right-0 h-[100dvh] w-[min(340px,88vw)] border-l border-border/70 bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out",
            isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"
          )}
        >
          <div className="flex flex-col h-full pt-20 px-4 pb-6 relative z-10">
            <nav className="flex flex-col gap-1.5 overflow-y-auto flex-1 pr-1">
              {navLinks.map((link) => {
                const isActive = link.hasDropdown ? isServiceActive : pathname === link.href

                if (link.hasDropdown) {
                  return (
                    <div key={link.href} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex-1 rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200",
                            pathname === "/layanan"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="p-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
                          aria-label="Toggle Layanan Submenu"
                        >
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileServicesOpen && "rotate-180")} />
                        </button>
                      </div>

                      {/* Mobile Collapsible Submenu */}
                      {isMobileServicesOpen && (
                        <div className="ml-3 pl-3 border-l border-primary/20 space-y-1 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          {serviceCategoriesNav.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                                pathname === item.href
                                  ? "bg-primary/15 text-primary font-semibold"
                                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
                              )}
                            >
                              <item.icon className="h-3.5 w-3.5 text-primary shrink-0" />
                              <span>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "relative overflow-hidden rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200 active:scale-[0.98] group",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {link.label}
                      {link.href === "/harga-paket" && (
                        <span className="rounded-full bg-primary-foreground/15 px-2 py-0.5 text-[10px] font-semibold">
                          PROMO
                        </span>
                      )}
                    </span>
                  </Link>
                )
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-border/50 relative">
              <Button
                asChild
                size="lg"
                className="w-full relative overflow-hidden rounded-lg shadow-lg shadow-primary/20"
              >
                <Link href="/kontak" onClick={() => setIsOpen(false)} className="relative z-10">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Konsultasi Gratis
                </Link>
              </Button>
              <p className="mt-4 text-center text-[12px] text-muted-foreground leading-tight">
                Siap meningkatkan bisnis digital Anda?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
