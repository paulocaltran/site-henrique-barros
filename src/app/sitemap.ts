import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/quem-sou", priority: 0.8 },
    { path: "/contato", priority: 0.8 },
    { path: "/politica-de-privacidade", priority: 0.3 },
    { path: "/termos-de-uso", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
