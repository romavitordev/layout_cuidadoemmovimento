"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icone } from "./Icone";

const links = [
  { href: "#sobre", rotulo: "Quem somos" },
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#equipe", rotulo: "Equipe" },
  { href: "#duvidas", rotulo: "Dúvidas" },
];

export function Cabecalho({ linkWhatsapp }: { linkWhatsapp: string }) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className={`cabecalho ${rolou ? "cabecalho--rolou" : ""}`}>
      <div className="container cabecalho__linha">
        <a href="#inicio" className="cabecalho__marca" aria-label="Cuidado em Movimento, voltar ao início">
          <Logo />
        </a>
        <nav aria-label="Principal" className="cabecalho__nav">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={linkWhatsapp} className="botao botao--ouro botao--compacto cabecalho__cta" data-evento="whatsapp_cabecalho">
          <Icone nome="whatsapp" className="botao__icone" />
          <span>Agendar</span>
        </a>
        <button
          type="button"
          className="cabecalho__menu-botao"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          onClick={() => setAberto((v) => !v)}
        >
          <Icone nome={aberto ? "fechar" : "menu"} />
          <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>
      <div id="menu-movel" className={`menu-movel ${aberto ? "menu-movel--aberto" : ""}`} hidden={!aberto}>
        <nav aria-label="Menu">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setAberto(false)}>
                  {l.rotulo}
                  <Icone nome="seta" />
                </a>
              </li>
            ))}
          </ul>
          <a href={linkWhatsapp} className="botao botao--ouro botao--largo" onClick={() => setAberto(false)}>
            <Icone nome="whatsapp" className="botao__icone" />
            Fale conosco pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
