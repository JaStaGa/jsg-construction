export const generateMetadata = () => ({
    title: "About | JSG Construction",
    description: "Team, values, and process.",
    alternates: { canonical: "/about" },
    openGraph: { title: "About | JSG Construction", description: "Team, values, and process.", url: "/about" }
});
export default function AboutPage() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 prose">
            <h2>Who we are</h2>
            <p>Local team focused on quality and clear communication.</p>
            <h3>Our process</h3>
            <ol>
                <li>Free quote</li><li>Scope & schedule</li><li>Build</li><li>Final walkthrough</li>
            </ol>
        </div>
    );
}
