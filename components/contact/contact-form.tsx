"use client"

import React, { useState, useTransition } from "react"
import { Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const services = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Development",
  "Backend & API Development",
  "Konsultasi & Lainnya",
]

const budgets = [
  "Di bawah Rp 500 Ribu",
  "Rp 500 Ribu – Rp 2 Juta",
  "Rp 2 Juta – Rp 10 Juta",
  "Rp 10 Juta – Rp 50 Juta",
  "Di atas Rp 50 Juta",
]

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    website: "", // honeypot field
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(async () => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) setIsSubmitted(true)
      else alert("Gagal mengirim pesan")
    })
  }


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Terima Kasih 🙌
        </h3>
        <p className="text-muted-foreground mb-6">
          Pesan Anda berhasil dikirim. Tim kami akan menghubungi Anda maksimal
          dalam waktu <strong>1×24 jam kerja</strong>.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Kirim Pesan Lain
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Contoh: Andi Pratama"
            required
          />
          {/* HONEYPOT FOR BOT PROTECTION */}
          <Input
            type="text"
            name="website"
            value={(formData as any).website || ""}
            onChange={handleChange}
            className="absolute left-[-9999px]"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Alamat Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="andi@email.com"
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Nama Perusahaan</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="PT / Startup / Brand Anda"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Nomor WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="service">Layanan yang Dibutuhkan *</Label>
          <Select
            value={formData.service}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, service: value }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih layanan" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Estimasi Anggaran</Label>
          <Select
            value={formData.budget}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, budget: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih range budget" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((budget) => (
                <SelectItem key={budget} value={budget}>
                  {budget}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Detail Proyek *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ceritakan kebutuhan bisnis Anda, tujuan proyek, dan timeline yang diharapkan..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Mengirim Pesan...
          </>
        ) : (
          "Konsultasi Gratis"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Dengan mengirim formulir ini, Anda menyetujui{" "}
        <a href="#" className="text-primary hover:underline">
          Kebijakan Privasi
        </a>{" "}
        dan{" "}
        <a href="#" className="text-primary hover:underline">
          Ketentuan Layanan
        </a>{" "}
        kami.
      </p>
    </form>
  )
}
