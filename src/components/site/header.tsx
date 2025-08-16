"use client";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border px-3 py-1 rounded"
            >
                Skip to content
            </a>

            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
                <div className="mx-auto max-w-screen-xl px-4 h-14 flex items-center justify-between">
                    <Link href="/" className="font-semibold text-[color:var(--brand-navy)]">
                        JSG Construction
                    </Link>

                    <nav className="hidden md:flex gap-6" aria-label="Primary">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="hover:text-[color:var(--brand-navy)]">
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger
                            className="md:hidden p-2"
                            aria-label="Open menu"
                            aria-controls="mobile-nav"
                            aria-expanded={open}
                            aria-haspopup="dialog"
                        >
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side="right" id="mobile-nav" aria-label="Mobile menu">
                            <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile">
                                {links.map((l) => (
                                    <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                                        {l.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    );
}
