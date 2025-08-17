"use client"

import Section from "@/components/site/section"
import JsonLd from "@/components/site/json-ld"
import raw from "@/data/faq.json"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

type FaqItem = { q: string; a: string }
const data = raw as FaqItem[]

export default function FAQ() {
    const ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    }

    return (
        <Section className="bg-[color:var(--brand-gray)] rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <div className="rounded-2xl border bg-white shadow-sm p-2">
                <Accordion type="single" collapsible className="w-full">
                    {data.map((f, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <JsonLd data={ld} />
        </Section>
    )
}
