import { ShieldCheck, BadgeCheck, PhoneCall } from "lucide-react"

const items = [
    { icon: ShieldCheck, title: "Licensed", text: "Proof on request" },
    { icon: BadgeCheck, title: "Insured", text: "General liability" },
    { icon: PhoneCall, title: "Free Estimates", text: "24–48 hr turnaround" },
]

export default function QuickBadges() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {items.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border bg-white shadow-sm p-6">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                            style={{ backgroundColor: "var(--brand-gray)" }}>
                            <Icon className="h-5 w-5" style={{ color: "var(--brand-navy)" }} />
                        </span>
                        <h3 className="font-semibold">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{text}</p>
                </article>
            ))}
        </div>
    )
}
