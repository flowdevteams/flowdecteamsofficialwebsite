import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
})

export async function POST(req: Request) {
  try {
    
    // RATE LIMIT
  
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      )
    }

    const body = await req.json()

   
    // HONEYPOT CHECK
   
    if (body.website) {
      // bot detected 
      return NextResponse.json({ success: true })
    }

   
    // VALIDASI DATA
 
    const data = ContactSchema.parse(body)

   
    // EMAIL TRANSPORT
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    
    // SEND EMAIL
  
    await transporter.sendMail({
      from: `"Flowdev Teams Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject: `New Contact Message - ${data.name}`,
      text: `
Nama       : ${data.name}
Email      : ${data.email}
Perusahaan : ${data.company || "-"}
WhatsApp   : ${data.phone || "-"}
Layanan    : ${data.service}
Budget     : ${data.budget || "-"}

Pesan:
${data.message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact error:", error)

    return NextResponse.json(
      { success: false, message: "Gagal mengirim pesan" },
      { status: 500 }
    )
  }
}
