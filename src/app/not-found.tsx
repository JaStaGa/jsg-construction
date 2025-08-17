import Link from "next/link"

export default function NotFound() {
    return (
        <div className="mx-auto max-w-screen-md px-4 py-24 text-center">
            <h1 className="text-3xl font-bold text-[color:var(--brand-navy)]">Page not found</h1>
            <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
                <Link href="/" className="bg-[color:var(--brand-gold)] text-black px-5 py-3 rounded">
                    Back to Home
                </Link>
                <Link href="/contact" className="px-5 py-3 border rounded">
                    Get a Free Quote
                </Link>
            </div>
        </div>
    )
}
