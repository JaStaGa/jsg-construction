"use client"
import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import ky from "ky"
import { toast } from "sonner"
import dynamic from "next/dynamic"

const ContactMap = dynamic(() => import("@/components/site/contact-map"), { ssr: false })

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    service: z.enum(["Kitchen Remodels", "Bathroom Renovations", "Home Additions", "Other"]),
    message: z.string().min(10),
})
type FormValues = z.infer<typeof schema>

export default function ContactPage() {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [submitting, setSubmitting] = useState(false)

    const onSubmit: SubmitHandler<FormValues> = async (form) => {
        const parsed = schema.safeParse(form)
        if (!parsed.success) return toast.error("Please complete all required fields.")
        setSubmitting(true)
        try {
            const r = await ky.post("/api/contact", { json: parsed.data }).json<{ ok: boolean }>()
            if (r.ok) { toast.success("Message sent. We’ll reply soon."); reset() }
            else toast.error("Could not send. Try again later.")
        } catch {
            toast.error("Network error. Try again later.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("name")} placeholder="Name *" className="w-full border rounded p-3" />
                <input {...register("email")} placeholder="Email *" className="w-full border rounded p-3" />
                <input {...register("phone")} placeholder="Phone" className="w-full border rounded p-3" />
                <select {...register("service")} className="w-full border rounded p-3" defaultValue="Kitchen Remodels">
                    <option>Kitchen Remodels</option>
                    <option>Bathroom Renovations</option>
                    <option>Home Additions</option>
                    <option>Other</option>
                </select>
                <textarea {...register("message")} placeholder="How can we help? *" rows={5} className="w-full border rounded p-3" />
                <button disabled={submitting} className="bg-[color:var(--brand-gold)] text-black px-5 py-3 rounded">
                    {submitting ? "Sending…" : "Send"}
                </button>
                <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your request.</p>
            </form>

            <div>
                <p className="mb-2 font-semibold">JSG Construction</p>
                <p>Mon–Fri 8–5</p>
                <p className="mt-2"><a href="tel:+15555550123" className="underline">(555) 555-0123</a></p>
                <div className="mt-6" aria-label="Service area map">
                    <ContactMap />
                    <p className="mt-2 text-xs text-slate-500">
                        Map data &copy; OpenStreetMap contributors.
                    </p>
                </div>
            </div>
        </div>
    )
}
