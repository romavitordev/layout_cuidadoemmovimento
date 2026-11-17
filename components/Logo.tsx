/**
 * Símbolo e logotipo (redesenho vetorial do conceito aprovado pela equipe:
 * coração dourado aberto + carro + duas pessoas + estrada com faixa dourada).
 * Os mesmos traços estão em /marca (SVGs para impressão, redes e uniformes).
 * Mudou aqui? Atualize lá também.
 */
type Tom = "claro" | "escuro"; // claro = sobre fundo claro; escuro = sobre azul

export const SIMBOLO_VIEWBOX = "0 0 120 104";

export function Simbolo({ tom = "claro", className }: { tom?: Tom; className?: string }) {
  const tinta = tom === "claro" ? "#102B4C" : "#FFF6E9";
  const vazado = tom === "claro" ? "#FFF6E9" : "#102B4C";
  const ouro = "#E9A52B";
  return (
    <svg viewBox={SIMBOLO_VIEWBOX} className={className} fill="none" aria-hidden="true" focusable="false">
      {/* coração aberto: acolhimento */}
      <path d="M24 72C9 58 5 36 18 24 30 13 47 17 56 31 64 15 86 9 100 21 113 33 108 55 97 66" stroke={ouro} strokeWidth="7" strokeLinecap="round" />
      {/* carro */}
      <path d="M22 64V56Q22 50.5 27 48.5L31 40Q32.5 37 36 37H44Q47.5 37 49 40L53 48.5Q58 50.5 58 56V64Z" fill={tinta} />
      <rect x="24" y="61" width="7" height="8" rx="2" fill={tinta} />
      <rect x="49" y="61" width="7" height="8" rx="2" fill={tinta} />
      <path d="M31.5 47.5 34.4 41.3Q35 40.2 36.4 40.2H43.6Q45 40.2 45.6 41.3L48.5 47.5Z" fill={vazado} />
      <rect x="25" y="53" width="6.5" height="3.2" rx="1.6" fill={vazado} />
      <rect x="48.5" y="53" width="6.5" height="3.2" rx="1.6" fill={vazado} />
      {/* acompanhante e pessoa acompanhada */}
      <circle cx="70" cy="32" r="6.2" fill={tinta} />
      <path d="M61 66V52Q61 41.5 70 41.5 79 41.5 79 52V66Z" fill={tinta} />
      <circle cx="88.5" cy="42" r="5" fill={tinta} />
      <path d="M82 66V56.5Q82 49.5 88.5 49.5 95 49.5 95 56.5V66Z" fill={tinta} />
      {/* estrada + faixa dourada: movimento */}
      <path d="M6 96C26 76 54 68 108 67 66 72 42 82 26 98Z" fill={tinta} />
      <path d="M30 101C50 84 80 75 116 72 84 78 62 88 48 103Z" fill={ouro} />
    </svg>
  );
}

export function Logo({ tom = "claro", className }: { tom?: Tom; className?: string }) {
  return (
    <span className={`logo logo--${tom} ${className ?? ""}`}>
      <Simbolo tom={tom} className="logo__simbolo" />
      <span className="logo__divisor" aria-hidden="true" />
      <span className="logo__nome">
        Cuidado
        <br />
        <em>em</em> Movimento
        <svg className="logo__traco" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M2 8C60 2 140 1 198 6 140 4 70 5 2 8Z" fill="#E9A52B" />
        </svg>
      </span>
    </span>
  );
}
