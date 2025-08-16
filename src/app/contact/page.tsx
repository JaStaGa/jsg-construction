"use client"
import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import ky from "ky"

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().min(10),
})
type FormValues = z.infer<typeof schema>

export default function ContactPage() {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [ok, setOk] = useState<string | null>(null)

    const onSubmit: SubmitHandler<FormValues> = async (form) => {
        const parsed = schema.safeParse(form)
        if (!parsed.success) return setOk("Please complete all fields.")
        const r = await ky.post("/api/contact", { json: parsed.data }).json<{ ok: boolean }>()
        setOk(r.ok ? "Message sent." : "Try again later.")
        if (r.ok) reset()
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("name")} placeholder="Name" className="w-full border rounded p-3" />
                <input {...register("email")} placeholder="Email" className="w-full border rounded p-3" />
                <input {...register("phone")} placeholder="Phone (optional)" className="w-full border rounded p-3" />
                <textarea {...register("message")} placeholder="How can we help?" rows={5} className="w-full border rounded p-3" />
                <button className="bg-[color:var(--brand-gold)] text-black px-5 py-3 rounded">Send</button>
                {ok && <p className="text-sm">{ok}</p>}
            </form>
            <div>
                <p className="mb-2 font-semibold">JSG Construction</p>
                <p>Mon–Fri 8–5</p>
                <p className="mt-2"><a href="tel:+15555550123" className="underline">(555) 555-0123</a></p>
                <div className="mt-6 h-56 rounded-xl bg-[color:var(--brand-gray)]" aria-label="Service area map"></div>
            </div>
        </div>
    )
}
