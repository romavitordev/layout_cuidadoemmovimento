import type { NextConfig } from "next";

/**
 * Vitrine estática para GitHub Pages (romavitordev.github.io/layout_cuidadoemmovimento).
 * Difere do repo principal (CuidadoEmMovimento) só aqui: output export, basePath,
 * trailingSlash, imagens sem otimizador e NEXT_PUBLIC_VITRINE (noindex).
 */
const basePath = "/layout_cuidadoemmovimento";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: `https://romavitordev.github.io${basePath}`,
    NEXT_PUBLIC_VITRINE: "1",
  },
  images: { unoptimized: true },
};

export default nextConfig;
