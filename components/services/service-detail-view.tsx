"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Brain, 
  LayoutDashboard, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  Layers, 
  Code2, 
  Briefcase, 
  MessageSquare,
  Terminal,
  Server,
  FileCode2,
  Cpu,
  Minus
} from "lucide-react"
import { ServiceCategory } from "@/lib/services-data"
import { AnimatedSection } from "@/components/animated-section"
import { AccentTitle } from "@/components/accent-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const iconMap = {
  Brain: Brain,
  LayoutDashboard: LayoutDashboard,
  Globe: Globe,
}

interface ServiceDetailViewProps {
  service: ServiceCategory
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const IconComponent = iconMap[service.iconName] || Globe

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-16 pb-20 lg:space-y-24">
      
      {/* 1. HERO SECTION (DEEP BLUE & WHITE) */}
      <section className="relative px-4 pt-8 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              beranda
            </Link>
            <span>/</span>
            <Link href="/layanan" className="transition-colors hover:text-foreground">
              layanan
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{service.slug}</span>
          </div>

          <div className="inverse-panel relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20 bg-[#142d52]">
            <div className="absolute inset-0 inverse-grid" />
            
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-primary/20 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <AnimatedSection animation="fade-in-down">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white backdrop-blur-md mb-6">
                  <IconComponent className="h-3.5 w-3.5 text-white/90" />
                  <span>{service.badgeText}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={100}>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  <AccentTitle 
                    text={service.title} 
                    highlightWords={2} 
                    className="text-white" 
                    accentClassName="text-white/70" 
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <p className="mt-4 text-base font-semibold text-white/90 sm:text-lg">
                  {service.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/75 text-pretty max-w-3xl mx-auto">
                  {service.summary}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300} className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/30 font-semibold px-7 bg-white text-primary hover:bg-white/90">
                  <Link href="/kontak">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Konsultasi Kebutuhan Anda
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15">
                  <Link href="/portofolio">
                    <Sparkles className="mr-2 h-4 w-4 text-white/90" />
                    Lihat Contoh Portofolio
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROI & IMPACT METRICS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.roiMetrics.map((metric, idx) => (
              <AnimatedSection
                key={metric.label}
                animation="fade-in-up"
                delay={idx * 100}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                  <div className="text-3xl font-extrabold tracking-tight text-primary font-mono">
                    {metric.value}
                  </div>
                  <div className="mt-2 font-bold text-foreground text-sm">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VS SOLUTION (CLEAN SLATE GREY & DEEP BLUE MATRIX) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-md bg-muted/80 text-primary border border-border mb-3">
              <Terminal className="h-3.5 w-3.5" />
              <span>// ANALISIS MASALAH &amp; SOLUSI REKAYASA</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              <AccentTitle text="Tantangan Bisnis & Jawaban Rekayasa dari Flowdev Teams" />
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Problem Card (Neutral Slate Grey & White - No Red) */}
            <AnimatedSection animation="fade-in-right">
              <div className="h-full rounded-2xl border border-border/80 bg-muted/30 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted border border-border text-muted-foreground font-mono text-xs">
                        01
                      </div>
                      <h3 className="text-base font-bold text-foreground">Kendala Operasional yang Sering Dihadapi</h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-muted px-2 py-0.5 rounded text-muted-foreground font-semibold">
                      Tantangan
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.problemSolution.problem}
                  </p>

                  <div className="space-y-2.5">
                    {service.problemSolution.marketPainPoints.map((pain, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/85 leading-relaxed">
                        <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded bg-muted border border-border text-[10px] font-mono text-muted-foreground">
                          —
                        </span>
                        <span>{pain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Solution Card (Deep Blue & Clean White) */}
            <AnimatedSection animation="fade-in-left">
              <div className="h-full rounded-2xl border border-primary/30 bg-primary/[0.03] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-primary/20">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold">
                        02
                      </div>
                      <h3 className="text-base font-bold text-foreground">Solusi Rekayasa yang Kami Bangun</h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-primary/10 px-2 py-0.5 rounded text-primary font-bold">
                      Solusi Teruji
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-6 font-medium">
                    {service.problemSolution.solution}
                  </p>

                  <div className="rounded-xl border border-primary/20 bg-card p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-1.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Arsitektur Skalabel &amp; Handal
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Setiap sistem dibangun dengan kode bersih, terstruktur rapi, dan siap berkembang tanpa batas lisensi.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES & KEY FEATURES */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-md bg-primary/10 text-primary mb-3">
              CAKUPAN LAYANAN &amp; FITUR
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              <AccentTitle text="Apa yang Anda Dapatkan dalam Layanan Ini?" />
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
              Paket menyeluruh dari perencanaan arsitektur, desain antarmuka, hingga implementasi kode siap produksi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {service.deliverables.map((item, idx) => (
              <AnimatedSection
                key={item.title}
                animation="fade-in-up"
                delay={idx * 100}
              >
                <div className="group h-full rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Code2 className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-muted-foreground">
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted/60 px-2 py-0.5 text-[10px] font-mono font-medium text-foreground/80 border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TARGET AUDIENCE & TECH STACK */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Target Audience */}
            <AnimatedSection animation="fade-in-right">
              <div className="h-full rounded-2xl border border-border/80 bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Siapa yang Membutuhkan Solusi Ini?</h3>
                    <p className="text-xs text-muted-foreground">Disesuaikan untuk skala UMKM hingga Korporat</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {service.targetAudience.map((target, i) => (
                    <div key={i} className="rounded-xl border border-border/60 bg-muted/20 p-3.5 transition-colors hover:bg-muted/40">
                      <div className="font-bold text-xs sm:text-sm text-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {target.businessType}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed pl-3.5">
                        {target.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Tech Stack */}
            <AnimatedSection animation="fade-in-left">
              <div className="h-full rounded-2xl border border-border/80 bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Teknologi &amp; Tools yang Digunakan</h3>
                    <p className="text-xs text-muted-foreground">Modern, stabil, dan berkinerja tinggi</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {service.techStack.map((stack, i) => (
                    <div key={i} className="rounded-xl border border-border/60 bg-muted/20 p-3.5">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary mb-2">
                        {stack.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.items.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-mono font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 6. WORKFLOW / STEP-BY-STEP PROCESS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-md bg-primary/10 text-primary mb-3">
              TAHAPAN REKAYASA
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              <AccentTitle text="Alur Kerja Transparan dari Konsultasi hingga Rilis" />
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.workflow.map((flow) => (
              <AnimatedSection
                key={flow.step}
                animation="fade-in-up"
                delay={parseInt(flow.step) * 80}
              >
                <div className="relative h-full rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                  <div className="mb-3 font-mono text-xl font-black text-primary">
                    {flow.step}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1.5">
                    {flow.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {flow.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-md bg-primary/10 text-primary mb-3">
              TANYA JAWAB TEKNIS
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              <AccentTitle text="Pertanyaan yang Sering Diajukan" />
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <AnimatedSection key={faq.question} animation="fade-in-up" delay={index * 50}>
                  <div className="overflow-hidden rounded-xl border border-border/80 bg-card transition-all duration-200">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-5 text-left font-bold text-foreground text-sm hover:text-primary transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/60 bg-muted/20 px-5 py-4 text-xs text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER (DARK BLUE & WHITE) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="inverse-panel relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12 lg:py-16 bg-[#142d52]">
            <div className="absolute inset-0 inverse-grid" />
            
            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Siap Mengakselerasi Bisnis Anda dengan {service.shortTitle}?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                Diskusikan kebutuhan spesifik Anda dengan tim developer kami sekarang. Konsultasi awal 100% gratis tanpa komitmen.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/30 font-semibold px-8 bg-white text-primary hover:bg-white/90">
                  <Link href="/kontak">
                    Hubungi Kami via WhatsApp / Email
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15">
                  <Link href="/harga-paket">
                    Cek Skema Investasi &amp; Harga
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
