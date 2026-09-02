"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/fitur", label: "Fitur" },
  { href: "/layanan", label: "Layanan" },
  { href: "/harga-paket", label: "Harga" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/kontak", label: "Kontak" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
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
  }, [pathname])

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

            <div className="hidden lg:flex items-center gap-1 rounded-xl border border-border/70 bg-card/70 p-1 shadow-sm backdrop-blur">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className={cn(
                    "absolute inset-0 rounded-lg bg-accent/70 opacity-0 transition-opacity duration-200",
                    hoveredLink === link.href && pathname !== link.href && "opacity-100"
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
              ))}
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
            "absolute top-0 right-0 h-[100dvh] w-[min(320px,86vw)] border-l border-border/70 bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out",
            isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"
          )}
        >
          <div className="flex flex-col h-full pt-20 px-4 pb-6 relative z-10">
            <nav className="flex flex-col gap-2 overflow-y-auto flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative overflow-hidden rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 active:scale-[0.98] group",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                  style={{
                    animation: isOpen ? `slideIn 0.4s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  }}
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
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border/50 relative">
              <Button
                asChild
                size="lg"
                className="w-full relative overflow-hidden rounded-lg shadow-lg shadow-primary/20"
                style={{
                  animation: isOpen ? 'scaleIn 0.5s ease-out 0.6s forwards' : 'none',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.9)',
                }}
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
