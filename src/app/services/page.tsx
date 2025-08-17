import JsonLd from "@/components/site/json-ld"
import raw from "@/data/services.json"
import Breadcrumbs from "@/components/site/breadcrumbs"
import Section from "@/components/site/section"

type Service = { slug: string; title: string; excerpt: string; icon: string; copy?: string }
const services = raw as Service[]

export const generateMetadata = () => ({
    title: "Services | JSG Construction",
    description: "Remodels, additions, and more.",
    alternates: { canonical: "/services" },
    openGraph: { title: "Services | JSG Construction", description: "Remodels, additions, and more.", url: "/services" },
})

export default function ServicesPage() {
    const site = "https://jsg-construction.vercel.app"
    return (
        <>
            <Section>
                <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }]} />
                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((s) => (
                        <article key={s.slug} className="border rounded-xl p-6 bg-white shadow-sm">
                            <h3 className="font-semibold">{s.title}</h3>
                            <p className="text-sm text-slate-600 mt-2">{s.excerpt}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@graph": services.map((s) => ({
                        "@type": "Service",
                        name: s.title,
                        description: s.excerpt,
                        areaServed: "Beacon Ridge",
                        provider: {
                            "@type": "LocalBusiness",
                            name: "JSG Construction",
                            url: `${site}/`,
                        },
                        url: `${site}/services#${s.slug}`,
                    })),
                }}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
                        { "@type": "ListItem", position: 2, name: "Services", item: `${site}/services` },
                    ],
                }}
            />
        </>
    )
}
