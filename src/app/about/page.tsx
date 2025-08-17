import Image from "next/image"
import Section from "@/components/site/section"
import JsonLd from "@/components/site/json-ld"
import Breadcrumbs from "@/components/site/breadcrumbs"

export const generateMetadata = () => ({
    title: "About | JSG Construction",
    description: "Team, values, and process.",
    alternates: { canonical: "/about" },
    openGraph: { title: "About | JSG Construction", description: "Team, values, and process.", url: "/about" }
})

export default function AboutPage() {
    const site = "https://jsg-construction.vercel.app"
    return (
        <>
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]} />
            <Section className="grid gap-10 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-3xl font-bold text-[color:var(--brand-navy)]">Built on trust</h1>
                    <p className="mt-4 text-slate-700">
                        Local crew focused on clean job sites, clear schedules, and dependable finishes.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[
                            ["Clear scopes", "No surprises mid-project"],
                            ["Respect for your home", "Dust control and daily cleanup"],
                            ["Licensed & insured", "Proof available on request"],
                            ["Reliable partners", "Electric, plumbing, and HVAC pros"],
                        ].map(([t, s]) => (
                            <div key={t} className="rounded-xl border bg-white shadow-sm p-5">
                                <p className="font-semibold">{t}</p>
                                <p className="text-sm text-slate-600 mt-1">{s}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-72 md:h-full min-h-72 rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1600"
                        alt="Crew reviewing plans on site"
                        fill className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                </div>
            </Section>

            <Section>
                <h2 className="text-xl font-semibold">Our process</h2>
                <ol className="mt-4 grid gap-6 md:grid-cols-4">
                    {["Free quote", "Scope & schedule", "Build", "Final walkthrough"].map((step, i) => (
                        <li key={step} className="rounded-xl border bg-white shadow-sm p-5">
                            <span className="text-sm text-slate-500">Step {i + 1}</span>
                            <p className="mt-1 font-semibold">{step}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            <JsonLd data={{
                "@context": "https://schema.org", "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
                    { "@type": "ListItem", position: 2, name: "About", item: `${site}/about` }
                ]
            }} />
        </>
    )
}
