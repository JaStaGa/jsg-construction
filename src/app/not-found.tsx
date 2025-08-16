import Link from "next/link";
export default function NotFound() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-24 text-center">
            <h1 className="text-2xl font-semibold">Page not found</h1>
            <p className="mt-2">Try the homepage.</p>
            <Link href="/" className="mt-6 inline-block underline">Back home</Link>
        </div>
    );
}
