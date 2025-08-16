import data from "@/data/projects.json";
import Image from "next/image";
export const generateMetadata = () => ({
    title: "Projects | JSG Construction",
    description: "Before and after results.",
    alternates: { canonical: "/projects" },
    openGraph: { title: "Projects | JSG Construction", description: "Before and after results.", url: "/projects" }
});
export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 grid gap-8 md:grid-cols-2">
            {data.map(p => (
                <figure key={p.caption} className="space-y-2">
                    <Image src={p.after} alt={p.caption} width={800} height={600} className="rounded-xl object-cover w-full h-64" />
                    <figcaption className="text-sm text-slate-600">{p.caption}</figcaption>
                </figure>
            ))}
        </div>
    );
}
