"use client"

import { useMemo, useState } from "react"
import BeforeAfter from "@/components/site/before-after"

type Project = { tags: string[]; before: string; after: string; caption: string }

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
    const tags = useMemo(
        () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
        [projects]
    )
    const [active, setActive] = useState<string>("All")
    const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active))

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-8">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActive("All")}
                        className={`rounded-full border px-3 py-1 text-sm ${active === "All" ? "bg-[color:var(--brand-navy)] text-white" : "bg-white"
                            }`}
                        aria-pressed={active === "All"}
                    >
                        All
                    </button>
                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActive(t)}
                            className={`rounded-full border px-3 py-1 text-sm ${active === t ? "bg-[color:var(--brand-navy)] text-white" : "bg-white"
                                }`}
                            aria-pressed={active === t}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 pb-12 grid gap-8 md:grid-cols-2">
                {filtered.map((p) => (
                    <figure key={p.caption} className="space-y-2">
                        <BeforeAfter before={p.before} after={p.after} alt={p.caption} />
                        <figcaption className="text-sm text-slate-600">{p.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </>
    )
}
