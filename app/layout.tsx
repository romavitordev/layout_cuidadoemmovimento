import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope, Parisienne } from "next/font/google";
import { marca } from "@/lib/marca";
import { whatsappConfigurado } from "@/lib/whatsapp";

const vitrine = process.env.NEXT_PUBLIC_VITRINE === "1";
import "./globals.css";

// next/font baixa as fontes no build e serve do próprio domínio (sem request ao Google, sem CLS)
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--fonte-titulo", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--fonte-texto", display: "swap" });
// manuscrita: uso pontual, sem preload para não competir com a fonte principal
const script = Parisienne({ subsets: ["latin"], weight: "400", variable: "--fonte-script", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(marca.siteUrl),
  title: {
    default: `${marca.nome} · Transporte e companhia para idosos`,
    template: `%s · ${marca.nome}`,
  },
  description: marca.descricaoSeo,
  applicationName: marca.nome,
  alternates: { canonical: `${marca.siteUrl}/` },
  // Vitrine (espelho no GitHub Pages) não deve competir com o domínio real no Google
  ...(vitrine && { robots: { index: false, follow: false } }),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: marca.nome,
    title: `${marca.nome} · ${marca.slogan}`,
    description: marca.descricaoSeo,
    url: `${marca.siteUrl}/`,
  },
  twitter: { card: "summary_large_image", title: marca.nome, description: marca.slogan },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#102B4C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Só publica no JSON-LD o que já é real: campos vazios ficam de fora
  const c = marca.contato;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: marca.nome,
    description: marca.descricaoSeo,
    slogan: marca.slogan,
    url: marca.siteUrl,
    image: `${marca.siteUrl}/opengraph-image`,
    ...(whatsappConfigurado && { telephone: `+${c.whatsapp}` }),
    ...(c.email && { email: c.email }),
    ...(c.regiao && { areaServed: c.regiao }),
    ...(c.instagram && { sameAs: [`https://instagram.com/${c.instagram}`] }),
  };

  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }} />
      </body>
    </html>
  );
}
