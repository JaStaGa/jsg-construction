import "./globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import StickyQuoteBar from "@/components/site/sticky-quote-bar"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  metadataBase: new URL("https://jsg-construction.vercel.app"),
  title: "JSG Construction | General Contractor",
  description: "Licensed, insured general contractor. Free estimates.",
  twitter: { card: "summary_large_image", title: "JSG Construction", description: "General contractor in Beacon Ridge" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Analytics */}
      <script defer data-domain="jsg-construction.vercel.app" src="https://plausible.io/js/script.js"></script>
      <body className="min-h-screen bg-[color:var(--bg)] text-slate-900">
        <StickyQuoteBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
