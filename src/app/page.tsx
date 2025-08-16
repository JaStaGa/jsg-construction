import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/site/json-ld";
import TestimonialCarousel from "@/components/site/testimonial-carousel";
import FAQ from "@/components/site/faq";

export const generateMetadata = () => ({
  title: "General Contractor | JSG Construction",
  description: "Local contractor. Kitchens, baths, additions. Free quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "General Contractor | JSG Construction",
    description: "Local contractor. Kitchens, baths, additions. Free quotes.",
    url: "/",
  },
});

export default function HomePage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JSG Construction",
    telephone: "+1-555-555-0123",
    areaServed: "Beacon Ridge",
    url: "https://jsg-construction.vercel.app",
  };

  return (
    <>
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600"
          alt="Construction site"
          width={1600}
          height={800}
          priority
          className="w-full h-[56vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-screen-xl px-4 text-white">
            <h1 className="text-3xl md:text-5xl font-bold">Built right. On time.</h1>
            <p className="mt-3 max-w-xl">
              Trusted general contractor serving Beacon Ridge and nearby towns.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-[color:var(--brand-gold)] text-black px-5 py-3 rounded">
                Get a Free Quote
              </Link>
              <Link href="/projects" className="px-5 py-3 border border-white rounded">
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-12 grid gap-6 md:grid-cols-3">
        {["Licensed", "Insured", "Free Estimates"].map((b) => (
          <div key={b} className="rounded-xl border p-6">
            <p className="text-lg font-semibold">{b}</p>
            <p className="text-sm text-slate-600 mt-1">JSG Construction</p>
          </div>
        ))}
      </section>

      <TestimonialCarousel />
      <FAQ />
      <JsonLd data={ld} />
    </>
  );
}
