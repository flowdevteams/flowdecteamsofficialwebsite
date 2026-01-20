import Link from "next/link"
import { Mail, Phone, MapPin, Github, Instagram } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  company: [
    { href: "/about", label: "Tentang Kami" },
    { href: "/features", label: "Keunggulan" },
    { href: "/services", label: "Layanan" },
    { href: "/portfolio", label: "Portofolio" },
  ],
  support: [
    { href: "/contact", label: "Kontak" },
    { href: "/pricing", label: "Harga & Paket" },
    { href: "#", label: "Dokumentasi" },
    { href: "#", label: "FAQ" },
  ],
  legal: [
    { href: "#", label: "Kebijakan Privasi" },
    { href: "#", label: "Syarat & Ketentuan" },
    { href: "#", label: "Kebijakan Cookie" },
  ],
}

const socialLinks = [
  { href: "https://github.com/flowdevteams", icon: Github, label: "GitHub Flowdev Teams" },
  { href: "https://www.instagram.com/flowdevteams/", icon: Instagram, label: "Instagram Flowdev Teams" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground z-50 relative"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo/flowdevteams-logo.png"
                  alt="Flowdev Teams - Jasa Pembuatan Website dan Aplikasi"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>

              <span className="hidden sm:inline">
                Flowdev <span className="text-primary">Teams</span>
              </span>
              <span className="sm:hidden">FT</span>
            </Link>

            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed mt-5">
              Flowdev Teams adalah software house yang menyediakan jasa pembuatan
              website dan aplikasi custom untuk membantu bisnis berkembang lebih
              cepat melalui solusi digital yang modern, aman, dan scalable.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:flodev261123@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>flodev261123@gmail.com</span>
              </a>

              <a
                href="tel:+6281574673448"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+62 815-7467-3448</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Bekasi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Bantuan</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Flowdev Teams. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
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
