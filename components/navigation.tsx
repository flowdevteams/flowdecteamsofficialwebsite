"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/features", label: "Fitur" },
  { href: "/services", label: "Layanan" },
  { href: "/pricing", label: "Harga" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/contact", label: "Kontak" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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
  }, [pathname])

  return (
    <>
      {/* Gradient glow effect on top */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-[101] opacity-0 animate-[fadeIn_1s_ease-in_forwards]" />

      {/* Header with glassmorphism */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
          isScrolled || isOpen
            ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]"
            : "bg-transparent"
        )}
      >
        {/* Animated gradient bar */}
        <div className={cn(
          "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/50 via-primary to-primary/50 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 animate-[shimmer_3s_ease-in-out_infinite]"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
            }} />
        </div>

        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Floating orb effect */}
          <div
            className="absolute pointer-events-none opacity-30 transition-opacity duration-300 hidden lg:block"
            style={{
              left: mousePosition.x - 100,
              top: mousePosition.y - 100,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              transform: 'translate3d(0, 0, 0)',
            }}
          />

          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with animation */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground z-50 relative group"
            >
              <div className="relative w-8 h-8  overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/logo/flowdevteams-logo.png"
                  alt="Flowdev Teams - Jasa Pembuatan Website dan Aplikasi"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base lg:text-xl relative">
                Flowdev{" "}
                <span className="text-primary relative inline-block">
                  Teams
                  <span className="absolute -inset-1 bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </span>
              </span>
            </Link>

            {/* Desktop Navigation with magnetic effect */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{
                    transform: hoveredLink === link.href ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  {/* Active background */}
                  {pathname === link.href && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
                  )}

                  {/* Hover gradient background */}
                  <span className={cn(
                    "absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 opacity-0 transition-opacity duration-300",
                    hoveredLink === link.href && pathname !== link.href && "opacity-100"
                  )} />

                  {/* Text with gradient on hover */}
                  <span className="relative z-10 inline-block">
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 animate-[shimmer_2s_ease-in-out_infinite]"
                        style={{ backgroundSize: '200% 100%' }} />
                    )}
                  </span>

                  {link.href === "/pricing" && (
                    <span className="absolute -top-1.5 -right-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-1.5 py-[1px] text-[8px] font-semibold text-white shadow-lg shadow-red-500/50 animate-pulse">
                      PROMO
                    </span>
                  )}

                  {/* Magnetic dot effect */}
                  {hoveredLink === link.href && pathname !== link.href && (
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary animate-ping" />
                  )}
                </Link>
              ))}
            </div>

            {/* Actions with enhanced effects */}
            <div className="flex items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Ganti Tema"
                  className="relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" />
                  ) : (
                    <Moon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  )}
                </Button>
              )}

              <Button
                asChild
                className="hidden lg:inline-flex relative overflow-hidden group bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
              >
                <Link href="/contact" className="relative z-10">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Mulai Proyek
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>

              {/* Mobile Menu Button with morph animation */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden relative overflow-hidden group"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu Navigasi"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {isOpen ? (
                    <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="h-6 w-6 transition-transform duration-300" />
                  )}
                </span>
              </Button>
            </div>
          </div>
        </nav>

        <style jsx>{`
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </header>

      {/* Mobile Navigation with enhanced animations */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[90] transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop with gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 touch-none",
            isOpen ? "backdrop-blur-xl" : "backdrop-blur-none"
          )}
          onClick={() => setIsOpen(false)}
          style={{
            background: isOpen
              ? 'radial-gradient(circle at top right, rgba(99,102,241,0.1), rgba(0,0,0,0.5))'
              : 'transparent'
          }}
        />

        {/* Menu Panel with slide & scale animation */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[280px] h-[100dvh] bg-gradient-to-b from-background via-background to-background/95 backdrop-blur-2xl border-l border-border/50 transition-all duration-500 ease-out shadow-2xl",
            isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"
          )}
          style={{
            boxShadow: isOpen ? '0 0 80px rgba(99,102,241,0.3)' : 'none',
          }}
        >
          {/* Decorative gradient orb */}
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-primary/40 rounded-full blur-3xl opacity-50 animate-pulse" />

          <div className="flex flex-col h-full pt-20 px-4 pb-6 relative z-10">
            <nav className="flex flex-col gap-2 overflow-y-auto flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 active:scale-95 group overflow-hidden",
                    pathname === link.href
                      ? "text-primary bg-gradient-to-r from-primary/20 via-primary/10 to-transparent shadow-lg shadow-primary/20"
                      : "hover:bg-gradient-to-r hover:from-muted hover:to-transparent"
                  )}
                  style={{
                    animation: isOpen ? `slideIn 0.4s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  }}
                >
                  {/* Shine effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <span className="relative z-10 flex items-center justify-between">
                    {link.label}
                    {link.href === "/pricing" && (
                      <span className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-2 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-red-500/50 animate-pulse">
                        PROMO
                      </span>
                    )}
                  </span>

                  {pathname === link.href && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary/50 via-primary to-primary/50 rounded-r-full shadow-lg shadow-primary/50" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border/50 relative">
              {/* Glow effect */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary/30 rounded-full blur-3xl" />

              <Button
                asChild
                size="lg"
                className="w-full relative overflow-hidden group bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60"
                style={{
                  animation: isOpen ? 'scaleIn 0.5s ease-out 0.6s forwards' : 'none',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.9)',
                }}
              >
                <Link href="/contact" onClick={() => setIsOpen(false)} className="relative z-10">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Konsultasi Gratis
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
              <p className="mt-4 text-center text-[12px] text-muted-foreground leading-tight animate-pulse">
                Siap meningkatkan bisnis digital Anda?
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </>
  )
}