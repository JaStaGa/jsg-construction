"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { track } from "@/lib/analytics"

export default function StickyQuoteBar() {
    const lastY = useRef(0)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            setHidden(y > lastY.current && y > 80) // hide on scroll down after 80px
            lastY.current = y
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className={`bg-[color:var(--brand-navy)] text-white text-sm py-2 transition-transform duration-200 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between">
                <span aria-label="Assurances">Licensed • Insured • Free Estimates</span>
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+15555550123"
                        className="underline"
                        onClick={() => track("click_call", { location: "sticky_bar" })}
                    >
                        Call (555) 555-0123
                    </a>
                    <Link
                        href="/contact"
                        className="bg-[color:var(--brand-gold)] text-black px-3 py-1 rounded"
                        onClick={() => track("click_quote", { location: "sticky_bar" })}
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </div>
        </div>
    )
}
