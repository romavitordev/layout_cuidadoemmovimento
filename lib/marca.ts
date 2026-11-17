/**
 * FONTE ÚNICA DA MARCA.
 * Contatos, fotos, nomes da equipe e dados legais ficam SÓ aqui.
 * Campo vazio ("") = informação ainda não definida: o site mostra um aviso
 * "[INSERIR ...]" no lugar e os botões de WhatsApp levam para a seção de contato.
 * Veja docs/INFORMACOES-PENDENTES.md para a lista do que falta.
 */

export type Foto = {
  /** Caminho a partir de /public, ex.: "/fotos/hero.jpg" */
  src: string;
  /** Descrição da foto para leitores de tela e Google. */
  alt: string;
  width: number;
  height: number;
};

export type Integrante = {
  nome: string; // "" enquanto não definido
  papel: string;
  frase: string; // apresentação curta, opcional
  foto: Foto | null;
};

export const marca = {
  nome: "Cuidado em Movimento",
  descricaoCurta: "Transporte e companhia para idosos",
  slogan: "Mais que transporte, uma companhia em todas as ocasiões.",
  assinatura: "Cuidado que acompanha. Sempre.",
  descricaoSeo:
    "Transporte e acompanhamento para idosos em consultas, passeios, compras, visitas, restaurantes e eventos. Buscamos em casa, acompanhamos durante toda a atividade e levamos de volta.",

  /** Domínio final, sem barra no fim. Também pode vir de NEXT_PUBLIC_SITE_URL. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3010",

  contato: {
    /** Só dígitos, com DDI e DDD. Ex.: "5511999999999". */
    whatsapp: "",
    /** Como o número aparece escrito. Ex.: "(11) 99999-9999". */
    whatsappExibicao: "",
    /** Telefone fixo ou celular para ligação (opcional). Ex.: "(11) 3333-3333". */
    telefone: "",
    /** Usuário do Instagram SEM @. Ex.: "cuidadoemmovimento". */
    instagram: "",
    email: "",
    /** Ex.: "Zona Sul de São Paulo e região". */
    regiao: "",
    /** Ex.: "Segunda a sábado, das 7h às 19h, com agendamento". */
    horario: "",
  },

  /** Mensagem que já aparece escrita quando a pessoa abre o WhatsApp. */
  mensagemWhatsapp:
    "Olá! Vim pelo site do Cuidado em Movimento e gostaria de saber mais sobre o acompanhamento.",

  fotos: {
    /** Foto principal: senhora idosa com as três pessoas da equipe. Formato retrato ~4:5. */
    hero: null as Foto | null,
  },

  equipe: [
    { nome: "", papel: "Cofundadora", frase: "", foto: null },
    { nome: "", papel: "Cofundadora", frase: "", foto: null },
    { nome: "", papel: "Cofundador", frase: "", foto: null },
  ] as Integrante[],

  /** Dados do controlador para a Política de Privacidade (LGPD). */
  legal: {
    razaoSocial: "",
    cnpj: "",
  },

  credito: { nome: "Roma & Buganza", url: "" },
};

/** Texto exibido quando um dado ainda não foi definido. */
export function pendente(rotulo: string) {
  return `[INSERIR ${rotulo.toUpperCase()}]`;
}
