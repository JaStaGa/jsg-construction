"use client"
import data from "@/data/faq.json"
import JsonLd from "@/components/site/json-ld"
import Section from "@/components/site/section"

export default function FAQ() {
    const ld = {
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: data.map((f: any) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    }
    return (
        <Section className="bg-[color:var(--brand-gray)] rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <div className="rounded-2xl border bg-white shadow-sm divide-y">
                {data.map((f: any, i: number) => (
                    <details key={i} className="group p-5">
                        <summary className="cursor-pointer font-medium list-none">
                            {f.q}
                        </summary>
                        <p className="mt-2 text-slate-600">{f.a}</p>
                    </details>
                ))}
            </div>
            <JsonLd data={ld} />
        </Section>
    )
}
