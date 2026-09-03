import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  company: [
    { href: "/layanan", label: "Layanan" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/portofolio", label: "Portofolio" },
  ],
  services: [
    { href: "/layanan/kecerdasan-buatan", label: "Kecerdasan Buatan (AI)" },
    { href: "/layanan/aplikasi-web", label: "Aplikasi Web & Sistem" },
    { href: "/layanan/landing-page", label: "Landing Page & Web" },
  ],
  support: [
    { href: "/kontak", label: "Kontak" },
    { href: "/harga-paket", label: "Harga & Paket" },
    { href: "#", label: "FAQ" },
  ],
  legal: [
    { href: "#", label: "Kebijakan Privasi" },
    { href: "#", label: "Syarat & Ketentuan" },
  ],
}

const socialLinks = [
  { href: "https://www.instagram.com/flowdevteams/", icon: Instagram, label: "Instagram Flowdev Teams" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="relative z-20 flex items-center gap-3 text-xl font-bold text-foreground"
            >
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-primary/15 bg-background shadow-sm">
                <Image
                  src="/logo/flowdevteams-logo.png"
                  alt="Flowdev Teams - Jasa Pembuatan Website"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>

              <span className="hidden sm:inline">
                Flowdev <span className="text-primary">Teams</span>
              </span>
              <span className="sm:hidden"> Flowdev <span className="text-primary">Teams</span></span>
            </Link>

            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed mt-4 sm:mt-5">
              Flowdev Teams adalah Software House yang menyediakan rekayasa AI,
              aplikasi web kustom, dan landing page performa tinggi untuk membantu bisnis berkembang lebih
              cepat melalui solusi digital yang modern, aman, dan scalable.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:flodev261123@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span>flodev261123@gmail.com</span>
              </a>

              <div className="space-y-2">
                <a
                  href="tel:+6281574673448"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+62 815-7467-3448</span>
                </a>
                <a
                  href="tel:+6287709165697"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+62 877-0916-5697</span>
                </a>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Bekasi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Service Categories Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Kategori Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Bantuan & Legal</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-6 sm:pt-8 sm:flex-row">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Flowdev Teams. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-lg border border-border/70 bg-background p-2 text-muted-foreground transition-colors hover:border-primary/35 hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
