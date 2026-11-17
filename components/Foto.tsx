import Image from "next/image";
import type { Foto as TFoto } from "@/lib/marca";
import { Icone } from "./Icone";

/**
 * Moldura de foto da marca (arco ou retângulo arredondado).
 * Com foto definida em lib/marca.ts → mostra a foto otimizada (next/image).
 * Sem foto → mostra um esboço da composição desejada, claramente marcado
 * como "espaço para fotografia", para nunca publicar imagem inventada.
 */
type Cabelo = "loiro" | "preto" | "grisalho";

export function Foto({
  foto,
  esboco,
  rotulo,
  sizes,
  priority = false,
  className = "",
}: {
  foto: TFoto | null;
  esboco: "grupo" | Cabelo;
  rotulo: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`foto ${foto ? "" : "foto--vazia"} ${className}`}>
      {foto ? (
        <Image src={foto.src} alt={foto.alt} fill sizes={sizes} priority={priority} className="foto__img" />
      ) : (
        <>
          <svg className="foto__esboco" viewBox="0 0 400 500" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
            {esboco === "grupo" ? (
              <>
                {/* Ordem de trás para frente: rapaz (mais alto), mulheres loiras, senhora sentada à frente */}
                <Busto x={262} y={170} r={34} cabelo="preto" />
                <Busto x={78} y={208} r={33} cabelo="loiro" />
                <Busto x={338} y={218} r={32} cabelo="loiro" />
                <Busto x={175} y={268} r={33} cabelo="grisalho" />
              </>
            ) : (
              <Busto x={200} y={205} r={58} cabelo={esboco} />
            )}
          </svg>
          <span className="foto__aviso">
            <Icone nome="camera" className="foto__aviso-icone" />
            <span>
              <strong>Espaço para fotografia</strong>
              <span>{rotulo}</span>
            </span>
          </span>
        </>
      )}
    </div>
  );
}

function Busto({ x, y, r, cabelo }: { x: number; y: number; r: number; cabelo: Cabelo }) {
  const w = r * 1.75; // meia-largura dos ombros
  const topoOmbro = y + r * 1.3;
  const corCabelo = { loiro: "#E2B35A", preto: "#0A1A2E", grisalho: "#E7E2D9" }[cabelo];
  return (
    <g>
      {cabelo === "loiro" && (
        // cabelo longo: cai atrás do rosto até os ombros
        <path
          d={`M${x - r * 1.12} ${y + r * 1.7} C${x - r * 1.35} ${y - r * 0.2} ${x - r * 0.9} ${y - r * 1.25} ${x} ${y - r * 1.2} C${x + r * 0.9} ${y - r * 1.25} ${x + r * 1.35} ${y - r * 0.2} ${x + r * 1.12} ${y + r * 1.7} Z`}
          fill={corCabelo}
        />
      )}
      <path
        d={`M${x - w} 520 L${x - w} ${topoOmbro + w * 0.5} C${x - w} ${topoOmbro + w * 0.08} ${x - w * 0.62} ${topoOmbro} ${x - w * 0.32} ${topoOmbro} L${x + w * 0.32} ${topoOmbro} C${x + w * 0.62} ${topoOmbro} ${x + w} ${topoOmbro + w * 0.08} ${x + w} ${topoOmbro + w * 0.5} L${x + w} 520 Z`}
        fill="#284B70"
        stroke="rgba(255,246,233,.28)"
        strokeWidth="1.5"
      />
      <circle cx={x} cy={y} r={r} fill="#EFD9BC" />
      {cabelo === "loiro" && (
        <path d={`M${x - r * 1.02} ${y - r * 0.05} C${x - r * 0.9} ${y - r * 1.05} ${x + r * 0.2} ${y - r * 1.3} ${x + r * 1.02} ${y - r * 0.2} C${x + r * 0.4} ${y - r * 0.55} ${x - r * 0.3} ${y - r * 0.55} ${x - r * 1.02} ${y - r * 0.05} Z`} fill={corCabelo} />
      )}
      {cabelo === "preto" && (
        <path d={`M${x - r * 1.0} ${y - r * 0.05} C${x - r * 1.05} ${y - r * 1.2} ${x + r * 1.05} ${y - r * 1.2} ${x + r * 1.0} ${y - r * 0.05} C${x + r * 0.6} ${y - r * 0.5} ${x - r * 0.6} ${y - r * 0.5} ${x - r * 1.0} ${y - r * 0.05} Z`} fill={corCabelo} stroke="rgba(255,246,233,.35)" strokeWidth="1.5" />
      )}
      {cabelo === "grisalho" && (
        <path d={`M${x - r * 1.08} ${y + r * 0.15} C${x - r * 1.25} ${y - r * 1.15} ${x + r * 1.25} ${y - r * 1.15} ${x + r * 1.08} ${y + r * 0.15} C${x + r * 0.7} ${y - r * 0.4} ${x - r * 0.7} ${y - r * 0.4} ${x - r * 1.08} ${y + r * 0.15} Z`} fill={corCabelo} />
      )}
    </g>
  );
}
