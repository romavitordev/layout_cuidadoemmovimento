import type { MetadataRoute } from "next";
import { marca } from "@/lib/marca";

// Gerado no build (necessário para o export estático da vitrine)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Na vitrine (NEXT_PUBLIC_VITRINE=1) bloqueia indexação para não duplicar o site oficial
  if (process.env.NEXT_PUBLIC_VITRINE === "1") return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${marca.siteUrl}/sitemap.xml` };
}
