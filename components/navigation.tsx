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

function PromoBadge() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white leading-none">
      Promo
    </span>
  )
}


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

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
      
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isOpen
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border shadow-lg shadow-primary/50"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground z-50 relative"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo/flowdevteams-logo.png"
                  alt="Flowdev Teams - Jasa Pengembangan Website & Aplikasi"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>

              <span className="hidden sm:inline text-sm lg:text-md xl:text-xl">
                Flowdev <span className="text-primary ">Teams</span>
              </span>
              <span className="sm:hidden inline text-sm">Flowdev <span className="text-primary">Teams</span></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}

                  {link.href === "/pricing" && (
                    <span className="
      absolute 
      -top-1.5 
      -right-1.5 
      rounded-full 
      bg-red-500 
      px-1.5 
      py-[1px] 
      text-[8px] 
      font-semibold 
      text-white 
      leading-none
    ">
                      PROMO
                    </span>
                  )}
                </Link>

              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Ganti Tema"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              <Button asChild>
                <Link href="/contact">
                  Mulai Proyek
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Ganti Tema"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu Navigasi"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div className="absolute top-16 left-0 right-0 bottom-0 bg-background border-t border-border overflow-y-auto">
          <div className="px-4 py-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative px-4 py-3 rounded-xl text-base font-medium",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "hover:bg-muted"
                  )}
                >
                  {link.label}

                  {link.href === "/pricing" && (
                    <span className="
      absolute 
      top-2 
      right-3 
      rounded-full 
      bg-red-500 
      px-1.5 
      py-[1px] 
      text-[9px] 
      font-semibold 
      text-white 
      leading-none
    ">
                      PROMO
                    </span>
                  )}
                </Link>

              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-border">
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Konsultasi Gratis
                </Link>
              </Button>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Siap meningkatkan website dan bisnis digital Anda?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
