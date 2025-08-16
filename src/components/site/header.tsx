"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
            <div className="mx-auto max-w-screen-xl px-4 h-14 flex items-center justify-between">
                <Link href="/" className="font-semibold text-[color:var(--brand-navy)]">JSG Construction</Link>
                <nav className="hidden md:flex gap-6">
                    {links.map(l => (
                        <Link key={l.href} href={l.href} className="hover:text-[color:var(--brand-navy)]">
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <Sheet>
                    <SheetTrigger className="md:hidden p-2" aria-label="Open menu"><Menu /></SheetTrigger>
                    <SheetContent side="right">
                        <div className="mt-8 flex flex-col gap-4">
                            {links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
