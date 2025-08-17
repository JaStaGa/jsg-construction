import Link from "next/link"

type Crumb = { href: string; label: string }
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
    return (
        <nav aria-label="Breadcrumb" className="text-sm mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-slate-600">
                {items.map((c, i) => (
                    <li key={c.href} className="flex items-center gap-1">
                        {i > 0 && <span className="text-slate-400">/</span>}
                        {i < items.length - 1 ? (
                            <Link href={c.href} className="hover:underline">{c.label}</Link>
                        ) : (
                            <span aria-current="page" className="text-slate-800">{c.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
