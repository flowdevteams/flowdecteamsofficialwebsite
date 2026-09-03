"use client"

import Link from "next/link"
import Image from "next/image"
import { ShieldAlert, MessageCircle, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
import { useMemo } from "react"

export default function MaintenancePage() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 25 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 10,
        size: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    []
  )

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Effects — same pattern as hero-section */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyber Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {nodes.map((node, i) => (
          <span
            key={i}
            className="cyber-node"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              opacity: node.opacity,
              animationDelay: `${node.delay}s`,
              animationDuration: `${node.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        <AnimatedSection animation="fade-in-down">
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/logo/flowdevteams-logo.png"
                alt="Flowdev Teams"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              Flowdev <span className="text-primary">Teams</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Warning Icon */}
        <AnimatedSection animation="scale-in" delay={100}>
          <div className="relative mx-auto w-24 h-24 mb-8">
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-destructive/10 border-2 border-destructive/30 flex items-center justify-center">
              <ShieldAlert className="h-10 w-10 text-destructive" />
            </div>
          </div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection animation="fade-in-up" delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
            <AccentTitle text="Layanan Website" highlightWords={1} />{" "}
            <span className="text-destructive">Ditangguhkan</span>
          </h1>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="fade-in-up" delay={300}>
          <p className="text-md sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed text-pretty">
            Website ini tidak dapat diakses untuk sementara waktu karena
            pembayaran biaya maintenance belum diterima. Layanan akan aktif
            kembali secara otomatis setelah pembayaran dikonfirmasi.
          </p>
        </AnimatedSection>

        {/* Status Card */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 mb-10 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span>
                  Status:{" "}
                  <span className="font-semibold text-destructive">
                    Ditangguhkan
                  </span>
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Aktif kembali setelah pembayaran</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 h-12 gap-2 group">
              <a
                href="https://wa.me/6281574673448?text=Halo%20Flowdev%20Teams%2C%20saya%20ingin%20menyelesaikan%20pembayaran%20maintenance%20website%20saya."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Hubungi Kami via WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 bg-transparent"
            >
              <a href="mailto:flodev261123@gmail.com">
                Kirim Email
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection animation="fade-in" delay={600}>
          <p className="mt-16 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Flowdev Teams. Seluruh hak cipta
            dilindungi.
          </p>
        </AnimatedSection>
      </div>

      {/* Styles — same cyber-node animation from hero-section */}
      <style jsx>{`
        .cyber-node {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(56, 189, 248, 0.6);
          border-radius: 9999px;
          filter: blur(0.5px);
          animation-name: float-node;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes float-node {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate3d(80px, -140px, 0);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  )
}
