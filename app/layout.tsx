import React from "react"
import type { Metadata, Viewport } from 'next'
import { Antic_Didone, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import "./globals.css"
import "leaflet/dist/leaflet.css"


const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Untuk Bisnis UMKM/UKM Termurah Graitis Domain dan Hosting',
  description: 'Flowdev Teams adalah Website House yang fokus pada custom web development dan custom app development. Kami membantu bisnis berkembang lebih cepat melalui solusi digital yang modern, aman, dan scalable.',
  keywords: ['web development', 'app development', 'software agency', 'digital solutions', 'UI/UX design'],
  authors: [{ name: 'Flowdev Teams' }],
  openGraph: {
    title: 'Flowdev Teams ',
    description: 'We build stunning websites and applications that drive growth and deliver exceptional user experiences.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
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
