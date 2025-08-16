export default function sitemap() {
    const urls = ["", "/services", "/projects", "/about", "/contact"];
    return urls.map(p => ({
        url: `https://jsg-construction.vercel.app${p}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: p === "" ? 1 : 0.7,
    }));
}
