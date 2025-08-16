"use client"
import Image from "next/image"
import { useState } from "react"

export default function BeforeAfter({ before, after, alt }: {
    before: string; after: string; alt: string
}) {
    const [v, setV] = useState(50)
    return (
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image src={after} alt={`${alt} after`} fill className="object-cover" />
            <div style={{ width: `${v}%` }} className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none">
                <Image src={before} alt={`${alt} before`} fill className="object-cover" />
            </div>
            <input
                aria-label="Before and after slider"
                type="range" min={0} max={100} value={v}
                onChange={e => setV(parseInt(e.target.value))}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3"
            />
        </div>
    )
}
