"use client";

import { useEffect, useState } from "react";
import { Icone } from "./Icone";

/** Botão fixo que aparece depois do hero (onde já há CTA) e some na seção de contato. */
export function WhatsappFlutuante({ href }: { href: string }) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const contato = document.getElementById("contato");
    if (!hero || !contato || !("IntersectionObserver" in window)) {
      setVisivel(true);
      return;
    }
    let passouHero = false;
    let noContato = false;
    const atualizar = () => setVisivel(passouHero && !noContato);
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.target === hero) passouHero = !e.isIntersecting;
        if (e.target === contato) noContato = e.isIntersecting;
      }
      atualizar();
    });
    io.observe(hero);
    io.observe(contato);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={href}
      className={`whatsapp-flutuante ${visivel ? "whatsapp-flutuante--visivel" : ""}`}
      aria-label="Fale conosco pelo WhatsApp"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      data-evento="whatsapp_flutuante"
    >
      <Icone nome="whatsapp" />
    </a>
  );
}
