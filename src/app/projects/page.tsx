import JsonLd from "@/components/site/json-ld"
import dataRaw from "@/data/projects.json"
import ProjectsGrid from "@/components/site/projects-grid"
import Breadcrumbs from "@/components/site/breadcrumbs"
import Section from "@/components/site/section"

type Project = { tags: string[]; before: string; after: string; caption: string }
const data = dataRaw as Project[]

export const generateMetadata = () => ({
    title: "Projects | JSG Construction",
    description: "Before and after results.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projects | JSG Construction",
        description: "Before and after results.",
        url: "/projects",
    },
})

export default function ProjectsPage() {
    const site = "https://jsg-construction.vercel.app"
    return (
        <>
            <Section>
                <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }]} />
            </Section>
            <ProjectsGrid projects={data} />
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
