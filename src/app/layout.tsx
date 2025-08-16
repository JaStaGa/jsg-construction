import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import StickyQuoteBar from "@/components/site/sticky-quote-bar";

export const metadata: Metadata = {
  metadataBase: new URL("https://jsg-construction.vercel.app"),
  title: "JSG Construction | General Contractor",
  description: "Licensed, insured general contractor. Free estimates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JSG Construction",
    description: "General contractor in Beacon Ridge",
    url: "https://jsg-construction.vercel.app",
    siteName: "JSG Construction",
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#0b1f3b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[color:var(--bg)] text-slate-900">
        <StickyQuoteBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
