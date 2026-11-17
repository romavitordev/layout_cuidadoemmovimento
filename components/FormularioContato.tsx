"use client";

import { useState, type FormEvent } from "react";
import { Icone } from "./Icone";
import Link from "next/link";

/**
 * O formulário NÃO envia nada para servidor: ele monta uma mensagem e abre o
 * WhatsApp da equipe já preenchido. Assim não guardamos dados pessoais no
 * site (menos risco e menos obrigação de LGPD) e o atendimento continua no
 * canal que a família já usa. Se um dia houver backend, troque o onSubmit.
 */
const tipos = [
  "Consulta ou exame",
  "Passeio ou parque",
  "Compras ou supermercado",
  "Visita a familiares ou amigos",
  "Shopping, restaurante ou café",
  "Evento ou ocasião especial",
  "Outro compromisso",
];

type Estado = { tipo: "inicial" } | { tipo: "erro"; mensagem: string } | { tipo: "enviando" } | { tipo: "ok" };

export function FormularioContato({ numero }: { numero: string }) {
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });
  const configurado = /^\d{12,13}$/.test(numero);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);

    // honeypot: campo invisível que só robôs preenchem
    if (d.get("site")) return setEstado({ tipo: "ok" });

    if (!form.checkValidity()) {
      form.reportValidity();
      return setEstado({ tipo: "erro", mensagem: "Confira os campos destacados e tente de novo." });
    }
    if (!configurado) {
      return setEstado({
        tipo: "erro",
        mensagem: "O WhatsApp da equipe ainda está sendo configurado. Em breve este formulário estará ativo.",
      });
    }

    const linhas = [
      "Olá! Vim pelo site do Cuidado em Movimento.",
      `Meu nome é ${String(d.get("nome")).trim()}.`,
      d.get("paraQuem") ? `O atendimento é para: ${String(d.get("paraQuem")).trim()}.` : "",
      `Tipo de saída: ${d.get("tipo")}.`,
      d.get("data") ? `Data desejada: ${formatarData(String(d.get("data")))}${d.get("hora") ? `, por volta das ${d.get("hora")}` : ""}.` : "",
      d.get("mensagem") ? `\n${String(d.get("mensagem")).trim().slice(0, 800)}` : "",
    ].filter(Boolean);

    setEstado({ tipo: "enviando" });
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(linhas.join("\n"))}`;
    // "noopener" na string de features faz window.open devolver null; zeramos o opener à mão
    const janela = window.open(url, "_blank");
    if (janela) janela.opener = null;
    else window.location.href = url; // pop-up bloqueado: abre na mesma aba
    setTimeout(() => setEstado({ tipo: "ok" }), 600);
  }

  if (estado.tipo === "ok") {
    return (
      <div className="formulario formulario--ok" role="status">
        <span className="formulario__ok-icone">
          <Icone nome="check" />
        </span>
        <h3>Mensagem pronta no WhatsApp</h3>
        <p>É só tocar em enviar por lá. Respondemos o quanto antes para combinar os detalhes.</p>
        <button type="button" className="botao botao--contorno" onClick={() => setEstado({ tipo: "inicial" })}>
          Preencher de novo
        </button>
      </div>
    );
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate aria-describedby="form-nota">
      <h3 className="formulario__titulo">Prefere adiantar as informações?</h3>
      <p className="formulario__sub">Preencha e abrimos o WhatsApp com a sua mensagem pronta.</p>

      <div className="campo">
        <label htmlFor="f-nome">Seu nome</label>
        <input id="f-nome" name="nome" type="text" autoComplete="name" required maxLength={80} />
      </div>
      <div className="campo">
        <label htmlFor="f-para">
          Para quem é o atendimento? <span className="campo__opcional">(opcional)</span>
        </label>
        <input id="f-para" name="paraQuem" type="text" placeholder="Ex.: minha mãe, meu avô" maxLength={80} />
      </div>
      <div className="campo">
        <label htmlFor="f-tipo">Tipo de saída</label>
        <select id="f-tipo" name="tipo" required defaultValue="">
          <option value="" disabled>
            Selecione
          </option>
          {tipos.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="campo-duplo">
        <div className="campo">
          <label htmlFor="f-data">
            Data desejada <span className="campo__opcional">(opcional)</span>
          </label>
          <input id="f-data" name="data" type="date" />
        </div>
        <div className="campo">
          <label htmlFor="f-hora">
            Horário <span className="campo__opcional">(opcional)</span>
          </label>
          <input id="f-hora" name="hora" type="time" />
        </div>
      </div>
      <div className="campo">
        <label htmlFor="f-msg">
          Algo que devemos saber? <span className="campo__opcional">(opcional)</span>
        </label>
        <textarea id="f-msg" name="mensagem" rows={3} maxLength={800} placeholder="Destino, cuidados, preferências…" />
      </div>

      {/* honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="f-site">Não preencha</label>
        <input id="f-site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="consentimento">
        <input type="checkbox" name="consentimento" required />
        <span>
          Concordo em enviar estas informações pelo WhatsApp para o agendamento, conforme a{" "}
          <Link href="/privacidade">Política de Privacidade</Link>.
        </span>
      </label>

      {estado.tipo === "erro" && (
        <p className="formulario__erro" role="alert">
          {estado.mensagem}
        </p>
      )}

      <button type="submit" className="botao botao--azul botao--largo" disabled={estado.tipo === "enviando"}>
        <Icone nome="whatsapp" className="botao__icone" />
        {estado.tipo === "enviando" ? "Abrindo o WhatsApp…" : "Enviar pelo WhatsApp"}
      </button>
      <p id="form-nota" className="formulario__nota">
        Nenhum dado fica armazenado neste site.
      </p>
    </form>
  );
}

function formatarData(iso: string) {
  const [a, m, d] = iso.split("-");
  return a && m && d ? `${d}/${m}/${a}` : iso;
}
