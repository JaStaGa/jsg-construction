import JsonLd from "@/components/site/json-ld"
import data from "@/data/projects.json"
import BeforeAfter from "@/components/site/before-after"

export const generateMetadata = () => ({
    title: "Projects | JSG Construction",
    description: "Before and after results.",
    alternates: { canonical: "/projects" },
    openGraph: { title: "Projects | JSG Construction", description: "Before and after results.", url: "/projects" },
})

export default function ProjectsPage() {
    const site = "https://jsg-construction.vercel.app"
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-12 grid gap-8 md:grid-cols-2">
                {data.map((p) => (
                    <figure key={p.caption} className="space-y-2">
                        <BeforeAfter before={p.before} after={p.after} alt={p.caption} />
                        <figcaption className="text-sm text-slate-600">{p.caption}</figcaption>
                    </figure>
                ))}
            </div>

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
                        { "@type": "ListItem", position: 2, name: "Projects", item: `${site}/projects` },
                    ],
                }}
            />
        </>
    )
}
