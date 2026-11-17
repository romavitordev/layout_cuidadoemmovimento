import { ImageResponse } from "next/og";
import { marca } from "@/lib/marca";

// Gerado no build (necessário para o export estático da vitrine)
export const dynamic = "force-static";

export const alt = `${marca.nome} · ${marca.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const simbolo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 104"><path d="M24 72C9 58 5 36 18 24 30 13 47 17 56 31 64 15 86 9 100 21 113 33 108 55 97 66" fill="none" stroke="#E9A52B" stroke-width="7" stroke-linecap="round"/><path d="M22 64V56Q22 50.5 27 48.5L31 40Q32.5 37 36 37H44Q47.5 37 49 40L53 48.5Q58 50.5 58 56V64Z" fill="#FFF6E9"/><rect x="24" y="61" width="7" height="8" rx="2" fill="#FFF6E9"/><rect x="49" y="61" width="7" height="8" rx="2" fill="#FFF6E9"/><path d="M31.5 47.5 34.4 41.3Q35 40.2 36.4 40.2H43.6Q45 40.2 45.6 41.3L48.5 47.5Z" fill="#102B4C"/><circle cx="70" cy="32" r="6.2" fill="#FFF6E9"/><path d="M61 66V52Q61 41.5 70 41.5 79 41.5 79 52V66Z" fill="#FFF6E9"/><circle cx="88.5" cy="42" r="5" fill="#FFF6E9"/><path d="M82 66V56.5Q82 49.5 88.5 49.5 95 49.5 95 56.5V66Z" fill="#FFF6E9"/><path d="M6 96C26 76 54 68 108 67 66 72 42 82 26 98Z" fill="#FFF6E9"/><path d="M30 101C50 84 80 75 116 72 84 78 62 88 48 103Z" fill="#E9A52B"/></svg>`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 56, padding: "0 90px", background: "#102B4C", color: "#FFF6E9" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(simbolo)}`} width={330} height={286} alt="" />
        <div style={{ display: "flex", flexDirection: "column", borderLeft: "3px solid #E9A52B", paddingLeft: 48 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1 }}>Cuidado</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            <span style={{ color: "#E9A52B", fontStyle: "italic", marginRight: 20 }}>em</span>Movimento
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#C9D3DF", maxWidth: 560 }}>{marca.slogan}</div>
        </div>
      </div>
    ),
    size
  );
}
