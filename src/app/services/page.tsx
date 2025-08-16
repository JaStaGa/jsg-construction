import data from "@/data/services.json";
export const generateMetadata = () => ({
    title: "Services | JSG Construction",
    description: "Remodels, additions, and more.",
    alternates: { canonical: "/services" },
    openGraph: { title: "Services | JSG Construction", description: "Remodels, additions, and more.", url: "/services" }
});
export default function ServicesPage() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 grid gap-6 md:grid-cols-3">
            {data.map(s => (
                <article key={s.slug} className="border rounded-xl p-6">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-slate-600 mt-2">{s.excerpt}</p>
                </article>
            ))}
        </div>
    );
}
