export default function sitemap() {
    const paths = ["", "/services", "/projects", "/about", "/contact"]
    return paths.map(p => ({
        url: `https://jsg-construction.vercel.app${p}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: p === "" ? 1 : 0.7,
    }))
}
