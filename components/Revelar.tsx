"use client";

import { useEffect } from "react";

/**
 * Revela com suavidade os elementos [data-revelar] ao entrarem na tela.
 * Sem JS ou com "reduzir movimento", tudo aparece normalmente: a classe que
 * esconde só é aplicada aqui, depois de confirmar que dá para animar.
 */
export function Revelar() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const raiz = document.documentElement;
    raiz.classList.add("pode-revelar");
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("revelado");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll("[data-revelar]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
