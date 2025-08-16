"use client"
import data from "@/data/faq.json"
import JsonLd from "@/components/site/json-ld"

export default function FAQ() {
    const ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.map((f: { q: string; a: string }) => ({
            "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
    }
    return (
        <section className="container py-12">
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <div className="divide-y">
                {data.map((f, i) => (
                    <details key={i} className="py-3">
                        <summary className="cursor-pointer font-medium">{f.q}</summary>
                        <p className="mt-2 text-slate-600">{f.a}</p>
                    </details>
                ))}
            </div>
            <JsonLd data={ld} />
        </section>
    )
}
