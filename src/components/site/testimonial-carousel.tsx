"use client"
import { useEffect, useState } from "react"
import data from "@/data/testimonials.json"

export default function TestimonialCarousel() {
    const [i, setI] = useState(0)
    useEffect(() => {
        const id = setInterval(() => setI(v => (v + 1) % data.length), 6000)
        return () => clearInterval(id)
    }, [])
    const prev = () => setI(v => (v - 1 + data.length) % data.length)
    const next = () => setI(v => (v + 1) % data.length)

    const t = data[i] as { name: string; location: string; quote: string }

    return (
        <section
            className="mx-auto max-w-screen-md px-4 py-12"
            aria-label="Testimonials"
        >
            <div className="rounded-xl border p-6 bg-white">
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm text-slate-600">
                    — {t.name}, {t.location}
                </p>
                <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs text-slate-500" aria-live="polite">
                        {i + 1} / {data.length}
                    </div>
                    <div className="flex gap-2">
                        <button onClick={prev} className="border rounded px-3 py-1" aria-label="Previous testimonial">Prev</button>
                        <button onClick={next} className="border rounded px-3 py-1" aria-label="Next testimonial">Next</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
