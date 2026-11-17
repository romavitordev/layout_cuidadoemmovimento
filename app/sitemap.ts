import type { MetadataRoute } from "next";
import { marca } from "@/lib/marca";

// Gerado no build (necessário para o export estático da vitrine)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${marca.siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${marca.siteUrl}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
