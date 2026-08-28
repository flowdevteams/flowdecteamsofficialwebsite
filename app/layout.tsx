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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0284c7' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anticDidone.variable} ${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
