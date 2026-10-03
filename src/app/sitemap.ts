import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/shop", "/about", "/beauty-notes", "/contact", "/policies"];
  return routes.map((route) => ({
    url: `https://saintjamescosmetics.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/shop" ? 0.9 : 0.7,
  }));
}
