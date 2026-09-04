import React from "react"
import type { Metadata, Viewport } from 'next'
import { Antic_Didone, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import "./globals.css"


const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.flowdevteams.com'),
  title: {
    default: 'Jasa Pembuatan Website, Web App & Otomasi Sistem | Gratis Konsultasi',
    template: '%s | Flowdev Teams',
  },
  description: 'Software House profesional untuk pembuatan Website, Web App kustom, dan Otomasi Sistem berbasis AI/ML. Siap pakai, bergaransi, dan gratis konsultasi bersama Flowdev Teams.',
  keywords: [
    'Jasa Pembuatan Website',
    'Jasa Web App',
    'Software House Indonesia',
    'Jasa Otomasi Sistem',
    'Jasa Pembuatan Aplikasi Web',
    'Jasa Website Profesional',
    'Konsultasi Pembuatan Website Gratis',
    'Flowdev Teams',
  ],
  authors: [{ name: 'Flowdev Teams', url: 'https://www.flowdevteams.com' }],
  creator: 'Flowdev Teams',
  publisher: 'Flowdev Teams',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.flowdevteams.com',
  },
  openGraph: {
    title: 'Jasa Pembuatan Website, Web App & Otomasi Sistem | Gratis Konsultasi',
    description: 'Software House profesional untuk pembuatan Website, Web App kustom, dan Otomasi Sistem cerdas (AI/ML). Siap pakai dan bergaransi.',
    url: 'https://www.flowdevteams.com',
    siteName: 'Flowdev Teams',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website, Web App & Otomasi Sistem | Gratis Konsultasi',
    description: 'Software House profesional untuk pembuatan Website, Web App kustom, dan Otomasi Sistem cerdas (AI/ML).',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Flowdev Teams',
  url: 'https://www.flowdevteams.com',
  logo: 'https://www.flowdevteams.com/logo.svg',
  description:
    'Software House profesional untuk pembuatan Website, Web App kustom, dan Otomasi Sistem berbasis AI/ML. Gratis konsultasi dan bergaransi.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
  },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Teknologi Flowdev Teams',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Jasa Pembuatan Website Profesional & Landing Page',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Jasa Pembuatan Aplikasi Web & Sistem Bisnis (SaaS/ERP)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Jasa Otomasi Sistem & Kecerdasan Buatan (AI/ML)',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${anticDidone.variable} ${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
