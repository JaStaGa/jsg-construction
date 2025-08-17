import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

export const runtime = "nodejs"

const hits = new Map<string, { n: number; t: number }>()
function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
    const now = Date.now()
    const entry = hits.get(ip)
    if (!entry || now - entry.t > windowMs) { hits.set(ip, { n: 1, t: now }); return false }
    entry.n++; entry.t = now; return entry.n > limit
}

const Body = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    service: z.enum(["Kitchen Remodels", "Bathroom Renovations", "Home Additions", "Other"]),
    message: z.string().min(10),
})
type BodyT = z.infer<typeof Body>

export async function POST(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown"
    if (rateLimit(ip)) return NextResponse.json({ ok: false }, { status: 429 })

    const raw = (await req.json().catch(() => null)) as unknown
    const parsed = Body.safeParse(raw)
    if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 })
    const { name, email, phone, service, message } = parsed.data as BodyT

    const test = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: test.smtp.host, port: test.smtp.port, secure: test.smtp.secure,
        auth: { user: test.user, pass: test.pass },
    })

    const info = await transporter.sendMail({
        from: `"JSG Construction" <no-reply@jsg-demo.local>`,
        to: "test@inbox.local",
        subject: `New inquiry: ${service} — ${name}`,
        text: `Service: ${service}\nFrom: ${name} <${email}> ${phone || ""}\n\n${message}`,
    })

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info))
    return NextResponse.json({ ok: true })
}
