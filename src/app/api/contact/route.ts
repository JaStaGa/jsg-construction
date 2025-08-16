import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const hits = new Map<string, { n: number; t: number }>()
function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
    const now = Date.now()
    const entry = hits.get(ip)
    if (!entry || now - entry.t > windowMs) { hits.set(ip, { n: 1, t: now }); return false }
    entry.n++; entry.t = now; return entry.n > limit
}

export async function POST(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown"
    if (rateLimit(ip)) return NextResponse.json({ ok: false }, { status: 429 })

    const { name, email, phone, message } = await req.json().catch(() => ({}))
    if (!name || !email || !message) return NextResponse.json({ ok: false }, { status: 400 })

    const test = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: test.smtp.host, port: test.smtp.port, secure: test.smtp.secure,
        auth: { user: test.user, pass: test.pass },
    })

    const info = await transporter.sendMail({
        from: `"JSG Construction" <no-reply@jsg-demo.local>`,
        to: "test@inbox.local",
        subject: `New inquiry from ${name}`,
        text: `From: ${name} <${email}> ${phone || ""}\n\n${message}`,
    })

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info))
    return NextResponse.json({ ok: true })
}
