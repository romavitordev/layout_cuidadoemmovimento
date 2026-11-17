import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { marca, pendente } from "@/lib/marca";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como o ${marca.nome} trata as informações recebidas pelo site e pelo WhatsApp.`,
  alternates: { canonical: `${marca.siteUrl}/privacidade` },
};

// Modelo inicial: revisar com assessoria jurídica antes de publicar.
export default function Privacidade() {
  const controlador = marca.legal.razaoSocial || pendente("razão social");
  const cnpj = marca.legal.cnpj || pendente("CNPJ");
  const email = marca.contato.email || pendente("e-mail de contato");
  return (
    <main className="pagina-simples">
      <div className="container">
        <Link href="/" aria-label="Voltar para a página inicial" style={{ display: "inline-block", marginBottom: 40 }}>
          <Logo />
        </Link>
        <h1>Política de Privacidade</h1>
        <p>
          Esta política explica como o {marca.nome} trata as informações que você compartilha com a gente pelo site e
          pelo WhatsApp.
        </p>
        <h2>Quem é o responsável</h2>
        <p>
          {controlador}, CNPJ {cnpj}. Contato para assuntos de privacidade: {email}.
        </p>
        <h2>Quais dados recebemos</h2>
        <p>
          O formulário do site não guarda informações: ele apenas monta uma mensagem e abre o WhatsApp no seu aparelho.
          Recebemos somente o que você decidir enviar por lá, como nome, telefone, nome de quem será acompanhado, destino,
          data e observações sobre o atendimento.
        </p>
        <h2>Para que usamos</h2>
        <ul>
          <li>Responder ao seu contato e agendar atendimentos;</li>
          <li>Organizar o trajeto, o horário e os cuidados combinados;</li>
          <li>Manter a família informada durante o atendimento, quando solicitado.</li>
        </ul>
        <p>Não vendemos nem compartilhamos seus dados com terceiros para fins de publicidade.</p>
        <h2>Por quanto tempo guardamos</h2>
        <p>
          Mantemos as conversas e informações de agendamento apenas pelo tempo necessário para prestar o serviço e cumprir
          obrigações legais. Prazo definido: {pendente("prazo de retenção")}.
        </p>
        <h2>Seus direitos</h2>
        <p>
          Você pode pedir a qualquer momento acesso, correção ou exclusão dos seus dados, conforme a Lei Geral de Proteção
          de Dados (Lei 13.709/2018), pelo contato acima.
        </p>
        <h2>Cookies</h2>
        <p>Este site não utiliza cookies de publicidade nem ferramentas de rastreamento de terceiros.</p>
        <p style={{ marginTop: 40 }}>
          <Link href="/" className="link-seta">
            Voltar para a página inicial
          </Link>
        </p>
      </div>
    </main>
  );
}
