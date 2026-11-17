import type { CSSProperties } from "react";
import { Cabecalho } from "@/components/Cabecalho";
import { Foto } from "@/components/Foto";
import { FormularioContato } from "@/components/FormularioContato";
import { Icone, type NomeIcone } from "@/components/Icone";
import { Logo, Simbolo } from "@/components/Logo";
import { Revelar } from "@/components/Revelar";
import { WhatsappFlutuante } from "@/components/WhatsappFlutuante";
import { diferenciais, etapas, incluso, outrosDestinos, perguntas, servicos } from "@/lib/conteudo";
import { marca, pendente } from "@/lib/marca";
import { linkInstagram, linkWhatsapp, whatsappConfigurado } from "@/lib/whatsapp";
import Link from "next/link";

export default function Home() {
  const wa = linkWhatsapp();
  const ano = new Date().getFullYear();

  return (
    <>
      <a href="#conteudo" className="pular-link">
        Pular para o conteúdo
      </a>
      <Cabecalho linkWhatsapp={wa} />

      <main id="conteudo">
        {/* 1 — HERO */}
        <section id="inicio" className="hero" aria-labelledby="hero-titulo">
          <svg className="hero__caminho" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path d="M-40 640C220 700 420 560 560 470S860 380 980 300 1220 120 1500 140" />
          </svg>
          <div className="container hero__grade">
            <div className="hero__texto">
              <p className="eyebrow">Transporte e companhia para idosos</p>
              <h1 id="hero-titulo" className="hero__titulo">
                Mais que transporte, <em>companhia</em> em todos os momentos.
              </h1>
              <p className="hero__sub">
                Levamos você ou quem você ama aos compromissos, passeios e momentos especiais, com acompanhamento,
                atenção e cuidado em cada trajeto.
              </p>
              <div className="hero__acoes">
                <a href={wa} className="botao botao--ouro" data-evento="whatsapp_hero">
                  <Icone nome="whatsapp" className="botao__icone" />
                  Fale conosco pelo WhatsApp
                </a>
                <a href="#servicos" className="botao botao--contorno">
                  Conheça nossos serviços
                </a>
              </div>
              <ul className="hero__provas">
                <li>
                  <Icone nome="casa" /> Busca e retorno em casa
                </li>
                <li>
                  <Icone nome="pessoas" /> Companhia do início ao fim
                </li>
                <li>
                  <Icone nome="calendario" /> Atendimento com agendamento
                </li>
              </ul>
            </div>

            <div className="hero__visual">
              <Foto
                foto={marca.fotos.hero}
                esboco="grupo"
                rotulo="Senhora idosa com as três pessoas da equipe"
                sizes="(min-width: 1024px) 480px, 92vw"
                priority
                className="foto--arco hero__foto"
              />
              <div className="hero__trajeto" aria-hidden="true">
                <span>
                  <Icone nome="casa" />
                  Busca
                </span>
                <i />
                <span>
                  <Icone nome="coracao" />
                  Companhia
                </span>
                <i />
                <span>
                  <Icone nome="retorno" />
                  Retorno
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — SOBRE */}
        <section id="sobre" className="secao secao--branca" aria-labelledby="sobre-titulo">
          <div className="container sobre">
            <div className="sobre__intro" data-revelar>
              <p className="eyebrow">Quem somos</p>
              <h2 id="sobre-titulo" className="titulo-secao">
                Cuidado que nasce de perto.
              </h2>
              <blockquote className="sobre__citacao">
                <p>
                  “Acreditamos que ninguém deveria deixar de passear, visitar alguém ou realizar uma atividade por falta
                  de companhia.”
                </p>
              </blockquote>
            </div>
            <div className="sobre__texto" data-revelar>
              <p className="destaque">
                O Cuidado em Movimento nasceu da vontade de oferecer mais atenção, companhia e tranquilidade aos idosos e
                às suas famílias.
              </p>
              <p>
                Somos uma mãe, uma amiga e um filho, unidos pelo propósito de tornar cada saída mais tranquila, segura e
                agradável para quem merece aproveitar cada momento da vida.
              </p>
              <p>
                Sabemos que nem sempre filhos e netos conseguem estar presentes em todos os compromissos. Por isso,
                buscamos em casa, acompanhamos durante toda a atividade e levamos de volta, com a mesma atenção que
                daríamos a alguém da nossa própria família.
              </p>
              <ul className="pilares" aria-label="O que oferecemos">
                {(
                  [
                    ["carro", "Transporte"],
                    ["pessoas", "Companhia"],
                    ["maoCoracao", "Acompanhamento"],
                    ["coracao", "Bem-estar"],
                  ] as [NomeIcone, string][]
                ).map(([icone, rotulo]) => (
                  <li key={rotulo}>
                    <Icone nome={icone} />
                    {rotulo}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3 — SERVIÇOS */}
        <section id="servicos" className="secao" aria-labelledby="servicos-titulo">
          <div className="container">
            <header className="cabeca-secao" data-revelar>
              <p className="eyebrow">Nossos serviços</p>
              <h2 id="servicos-titulo" className="titulo-secao">
                Para onde a vida chamar, a gente acompanha.
              </h2>
              <p className="lead">
                Consultas, passeios, compras, visitas ou uma tarde especial: <strong>o destino é você quem escolhe</strong>.
                Nós cuidamos do trajeto e da companhia.
              </p>
            </header>

            <ul className="servicos">
              {servicos.map((s, i) => (
                <li key={s.titulo} className="cartao-servico" data-revelar style={{ "--atraso": `${(i % 3) * 80}ms` } as CSSProperties}>
                  <span className="cartao-servico__icone">
                    <Icone nome={s.icone} />
                  </span>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </li>
              ))}
            </ul>

            <div className="outros" data-revelar>
              <p>E também:</p>
              <ul>
                {outrosDestinos.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <a href="#contato" className="link-seta">
                Não encontrou o seu destino? Conte para a gente <Icone nome="seta" />
              </a>
            </div>

            <div className="incluso" data-revelar>
              <div className="incluso__cabeca">
                <h3>Em cada atendimento</h3>
                <p>Uma pessoa de confiança do começo ao fim, não apenas uma carona.</p>
              </div>
              <ol className="incluso__lista">
                {incluso.map((item) => (
                  <li key={item.texto}>
                    <span className="incluso__icone">
                      <Icone nome={item.icone} />
                    </span>
                    {item.texto}
                  </li>
                ))}
              </ol>
              <p className="incluso__nota">O auxílio na locomoção é oferecido dentro das capacidades da equipe.</p>
            </div>
          </div>
        </section>

        {/* 4 — COMO FUNCIONA */}
        <section id="como-funciona" className="secao secao--branca" aria-labelledby="como-titulo">
          <div className="container">
            <header className="cabeca-secao cabeca-secao--centro" data-revelar>
              <p className="eyebrow">Como funciona</p>
              <h2 id="como-titulo" className="titulo-secao">
                Simples, do primeiro contato à volta para casa.
              </h2>
            </header>
            <ol className="etapas">
              {etapas.map((e, i) => (
                <li key={e.titulo} className="etapa" data-revelar style={{ "--atraso": `${i * 90}ms` } as CSSProperties}>
                  <span className="etapa__marco">
                    <span className="etapa__numero">{i + 1}</span>
                  </span>
                  <div className="etapa__corpo">
                    <Icone nome={e.icone} className="etapa__icone" />
                    <h3>{e.titulo}</h3>
                    <p>{e.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="centro" data-revelar>
              <a href={wa} className="botao botao--azul" data-evento="whatsapp_como_funciona">
                <Icone nome="whatsapp" className="botao__icone" />
                Começar pelo primeiro passo
              </a>
            </div>
          </div>
        </section>

        {/* 5 — DIFERENCIAIS */}
        <section id="diferenciais" className="secao secao--azul" aria-labelledby="dif-titulo">
          <Simbolo tom="escuro" className="marca-dagua" />
          <div className="container">
            <header className="cabeca-secao" data-revelar>
              <p className="eyebrow eyebrow--ouro">Nossos diferenciais</p>
              <h2 id="dif-titulo" className="titulo-secao">
                O cuidado está nos detalhes.
              </h2>
              <p className="lead">
                Para que a família fique tranquila e quem é acompanhado se sinta respeitado, à vontade e bem tratado.
              </p>
            </header>
            <ul className="diferenciais">
              {diferenciais.map((d, i) => (
                <li key={d.titulo} data-revelar style={{ "--atraso": `${(i % 3) * 80}ms` } as CSSProperties}>
                  <Icone nome={d.icone} className="diferenciais__icone" />
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6 — EQUIPE */}
        <section id="equipe" className="secao" aria-labelledby="equipe-titulo">
          <div className="container">
            <header className="cabeca-secao cabeca-secao--centro" data-revelar>
              <p className="eyebrow">A equipe</p>
              <h2 id="equipe-titulo" className="titulo-secao">
                Uma mãe, uma amiga e um filho.
              </h2>
              <p className="lead">
                Pessoas próximas, com nome e rosto. Trabalhamos em revezamento e sempre com agendamento, para que cada
                atendimento tenha a atenção que merece.
              </p>
            </header>
            <ul className="equipe">
              {marca.equipe.map((p, i) => (
                <li key={i} className="membro" data-revelar style={{ "--atraso": `${i * 100}ms` } as CSSProperties}>
                  <Foto
                    foto={p.foto}
                    esboco={i === 2 ? "preto" : "loiro"}
                    rotulo={i === 2 ? "Retrato do integrante" : "Retrato da integrante"}
                    sizes="(min-width: 900px) 340px, 80vw"
                    className="foto--arco membro__foto"
                  />
                  <h3 className={p.nome ? "" : "pendente"}>{p.nome || pendente(i === 2 ? "nome do integrante" : "nome da integrante")}</h3>
                  <p className="membro__papel">{p.papel}</p>
                  {p.frase && <p className="membro__frase">{p.frase}</p>}
                </li>
              ))}
            </ul>
            <p className="equipe__assinatura" data-revelar>
              <span className="script">{marca.assinatura}</span>
            </p>
          </div>
        </section>

        {/* DÚVIDAS (apoio à conversão: responde objeções sem prometer o que não foi definido) */}
        <section id="duvidas" className="secao secao--branca" aria-labelledby="duvidas-titulo">
          <div className="container duvidas">
            <header className="duvidas__cabeca" data-revelar>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 id="duvidas-titulo" className="titulo-secao">
                Antes de agendar
              </h2>
              <p className="lead">Não encontrou a sua pergunta? Fale com a gente, vamos conversar com calma.</p>
              <a href={wa} className="link-seta">
                Perguntar pelo WhatsApp <Icone nome="seta" />
              </a>
            </header>
            <div className="duvidas__lista" data-revelar>
              {perguntas.map((q) => (
                <details key={q.pergunta} className="pergunta">
                  <summary>
                    {q.pergunta}
                    <span className="pergunta__sinal" aria-hidden="true" />
                  </summary>
                  <p>{q.resposta.replace("{regiao}", marca.contato.regiao || pendente("região de atendimento"))}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — CONTATO */}
        <section id="contato" className="secao contato-secao" aria-labelledby="contato-titulo">
          <div className="container contato">
            <div className="contato__painel" data-revelar>
              <p className="eyebrow eyebrow--ouro">Contato e agendamento</p>
              <h2 id="contato-titulo" className="titulo-secao">
                Seu próximo passeio pode começar com uma conversa.
              </h2>
              <p className="contato__texto">
                Conte para onde quer ir e quando. Respondemos pelo WhatsApp para combinar todos os detalhes com calma.
              </p>
              <a href={wa} className="botao botao--ouro botao--largo" data-evento="whatsapp_contato">
                <Icone nome="whatsapp" className="botao__icone" />
                Fale conosco pelo WhatsApp
              </a>
              {!whatsappConfigurado && <p className="aviso-pendente">{pendente("WhatsApp")} — o botão será ativado quando o número for definido.</p>}
              <ul className="canais">
                <Canal icone="whatsapp" rotulo="WhatsApp" valor={marca.contato.whatsappExibicao} falta="WhatsApp" href={whatsappConfigurado ? wa : ""} />
                <Canal icone="telefone" rotulo="Telefone" valor={marca.contato.telefone} falta="telefone" href={marca.contato.telefone ? `tel:+55${marca.contato.telefone.replace(/\D/g, "")}` : ""} />
                <Canal icone="instagram" rotulo="Instagram" valor={marca.contato.instagram && `@${marca.contato.instagram}`} falta="perfil" href={linkInstagram()} />
                <Canal icone="local" rotulo="Região de atendimento" valor={marca.contato.regiao} falta="região" />
                <Canal icone="relogio" rotulo="Horários" valor={marca.contato.horario} falta="horários" />
              </ul>
            </div>
            <div className="contato__form" data-revelar>
              <FormularioContato numero={marca.contato.whatsapp} />
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container rodape__grade">
          <div className="rodape__marca">
            <Logo tom="escuro" />
            <p className="script rodape__assinatura">{marca.assinatura}</p>
          </div>
          <nav aria-label="Rodapé" className="rodape__nav">
            <a href="#servicos">Serviços</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#equipe">Equipe</a>
            <a href="#contato">Contato</a>
            <Link href="/privacidade">Política de Privacidade</Link>
          </nav>
          <p className="rodape__aviso">
            Serviço de transporte e companhia para idosos. Não prestamos atendimento médico, de enfermagem ou de remoção.
          </p>
        </div>
        <div className="container rodape__base">
          <p>
            © {ano} {marca.nome}
            {marca.legal.cnpj ? ` · CNPJ ${marca.legal.cnpj}` : ""}
          </p>
          {marca.credito.nome && (
            <p>
              Site por{" "}
              {marca.credito.url ? (
                <a href={marca.credito.url} rel="noopener" target="_blank">
                  {marca.credito.nome}
                </a>
              ) : (
                marca.credito.nome
              )}
            </p>
          )}
        </div>
      </footer>

      <WhatsappFlutuante href={wa} />
      <Revelar />
    </>
  );
}

function Canal({ icone, rotulo, valor, falta, href }: { icone: NomeIcone; rotulo: string; valor: string; falta: string; href?: string }) {
  const conteudo = valor ? valor : <span className="pendente">{pendente(falta)}</span>;
  return (
    <li className="canal">
      <span className="canal__icone">
        <Icone nome={icone} />
      </span>
      <span>
        <span className="canal__rotulo">{rotulo}</span>
        {href && valor ? (
          <a href={href} className="canal__valor" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
            {conteudo}
          </a>
        ) : (
          <span className="canal__valor">{conteudo}</span>
        )}
      </span>
    </li>
  );
}
