export function Footer() {
    return (
        <footer className="mt-16 border-t bg-[color:var(--brand-gray)]">
            <div className="mx-auto max-w-screen-xl px-4 py-10 text-sm">
                <p className="font-semibold text-[color:var(--brand-navy)]">JSG Construction</p>
                <p className="mt-2">Demo site for portfolio. No affiliation. Do not submit sensitive information.</p>
                <p className="mt-4 text-slate-500">© {new Date().getFullYear()} JSG</p>
            </div>
        </footer>
    );
}
