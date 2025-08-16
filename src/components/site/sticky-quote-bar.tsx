import Link from "next/link";
export default function StickyQuoteBar() {
    return (
        <div className="bg-[color:var(--brand-navy)] text-white text-sm py-2">
            <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between">
                <span>Licensed • Insured • Free Estimates</span>
                <div className="flex items-center gap-4">
                    <a href="tel:+15555550123" className="underline">Call (555) 555-0123</a>
                    <Link href="/contact" className="bg-[color:var(--brand-gold)] text-black px-3 py-1 rounded">Get a Free Quote</Link>
                </div>
            </div>
        </div>
    );
}
