import JsonLd from "@/components/site/json-ld"
import data from "@/data/services.json"

export const generateMetadata = () => ({
    title: "Services | JSG Construction",
    description: "Remodels, additions, and more.",
    alternates: { canonical: "/services" },
    openGraph: { title: "Services | JSG Construction", description: "Remodels, additions, and more.", url: "/services" }
})

export default function ServicesPage() {
    const site = "https://jsg-construction.vercel.app"
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-12 grid gap-6 md:grid-cols-3">
                {data.map(s => (
                    <article key={s.slug} className="border rounded-xl p-6">
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="text-sm text-slate-600 mt-2">{s.excerpt}</p>
                    </article>
                ))}
            </div>

            {/* JSON-LD goes here, after markup */}
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
                    { "@type": "ListItem", position: 2, name: "Services", item: `${site}/services` }
                ]
            }} />
        </>
    )
}
