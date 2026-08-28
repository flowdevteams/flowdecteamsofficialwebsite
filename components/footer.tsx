import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  company: [
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/fitur", label: "Keunggulan" },
    { href: "/layanan", label: "Layanan" },
    { href: "/portofolio", label: "Portofolio" },
  ],
  support: [
    { href: "/kontak", label: "Kontak" },
    { href: "/harga-paket", label: "Harga & Paket" },
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
  { href: "https://www.instagram.com/flowdevteams/", icon: Instagram, label: "Instagram Flowdev Teams" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-2">
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

            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed mt-5">
              Flowdev Teams adalah Website House yang menyediakan jasa pembuatan
              Website custom untuk membantu bisnis berkembang lebih
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

              <a
                href="tel:+6285716454348"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+62 857-1645-4348</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Bekasi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Bantuan</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row">
          <p className="text-muted-foreground text-sm">
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
