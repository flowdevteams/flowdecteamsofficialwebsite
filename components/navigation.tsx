"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
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
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

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

  // Lock scroll saat menu terbuka agar tidak "jumping"
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
      {/* Header menggunakan fixed untuk stabilitas maksimal di mobile */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 transform-gpu",
          isScrolled || isOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground z-50 relative"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo/flowdevteams-logo.png"
                  alt="Flowdev Teams"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base lg:text-xl">
                Flowdev <span className="text-primary">Teams</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                  {link.href === "/pricing" && (
                    <span className="absolute -top-1.5 -right-1.5 rounded-full bg-red-500 px-1.5 py-[1px] text-[8px] font-semibold text-white">
                      PROMO
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Actions (Theme & CTA) */}
            <div className="flex items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Ganti Tema"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}

              <Button asChild className="hidden lg:inline-flex">
                <Link href="/contact">Mulai Proyek</Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu Navigasi"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay & Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[90] transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop dengan touch-none untuk mencegah scroll bocor */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm touch-none"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel - Menggunakan h-[100dvh] agar pas dengan layar mobile */}
        <div 
          className={cn(
            "absolute top-0 right-0 w-[280px] h-[100dvh] bg-background border-l border-border transition-transform duration-300 ease-in-out transform shadow-2xl",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-20 px-4 pb-6">
            <nav className="flex flex-col gap-2 overflow-y-auto flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative px-4 py-3 rounded-xl text-base font-medium transition-all active:scale-95",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "hover:bg-muted"
                  )}
                >
                  {link.label}
                  {link.href === "/pricing" && (
                    <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                      PROMO
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border">
              <Button asChild size="lg" className="w-full shadow-lg shadow-primary/20">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
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