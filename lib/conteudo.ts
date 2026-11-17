/**
 * Textos das seções (serviços, etapas, diferenciais, perguntas).
 * Edite aqui para mudar o conteúdo sem mexer no layout.
 */
import type { NomeIcone } from "@/components/Icone";

export const servicos: { icone: NomeIcone; titulo: string; texto: string }[] = [
  {
    icone: "calendario",
    titulo: "Consultas e exames",
    texto: "Acompanhamos na ida, na espera e na volta, para que ninguém enfrente a sala de espera sozinho.",
  },
  {
    icone: "arvore",
    titulo: "Passeios e parques",
    texto: "Uma caminhada na praça, um banco à sombra, um fim de tarde ao ar livre. Sem pressa.",
  },
  {
    icone: "cesta",
    titulo: "Compras e supermercado",
    texto: "Companhia para escolher com calma, ajuda com as sacolas e tudo de volta para casa.",
  },
  {
    icone: "casaCoracao",
    titulo: "Visitas a familiares e amigos",
    texto: "Para matar a saudade de quem está longe: levamos, aguardamos e trazemos de volta.",
  },
  {
    icone: "cafe",
    titulo: "Shoppings, restaurantes e cafés",
    texto: "Um almoço fora, um café com bolo, uma volta pelas lojas. Pequenos prazeres que fazem bem.",
  },
  {
    icone: "presente",
    titulo: "Eventos e ocasiões especiais",
    texto: "Aniversários, casamentos, encontros de família e celebrações em que estar presente faz diferença.",
  },
];

export const outrosDestinos = [
  "Atividades recreativas",
  "Compromissos do dia a dia",
  "Passeios sem motivo especial",
];

export const incluso: { icone: NomeIcone; texto: string }[] = [
  { icone: "casa", texto: "Busca na residência" },
  { icone: "carro", texto: "Transporte até o destino" },
  { icone: "pessoas", texto: "Companhia durante a atividade" },
  { icone: "maoCoracao", texto: "Auxílio na locomoção" },
  { icone: "ampulheta", texto: "Espera, quando necessário" },
  { icone: "retorno", texto: "Retorno para casa" },
];

export const etapas: { icone: NomeIcone; titulo: string; texto: string }[] = [
  {
    icone: "mensagem",
    titulo: "Conte para onde quer ir",
    texto: "Fale com a gente pelo WhatsApp e informe o destino, a atividade e o que for importante saber.",
  },
  {
    icone: "calendario",
    titulo: "Escolha o dia e o horário",
    texto: "Agendamos o melhor momento para você e para quem será acompanhado.",
  },
  {
    icone: "casa",
    titulo: "Buscamos em casa",
    texto: "Um integrante da equipe vai até a residência no horário combinado.",
  },
  {
    icone: "pessoas",
    titulo: "Companhia durante a atividade",
    texto: "Ficamos junto durante todo o compromisso ou passeio, com atenção e paciência.",
  },
  {
    icone: "retorno",
    titulo: "De volta para casa",
    texto: "Ao final, levamos de volta para casa e avisamos a família, se ela desejar.",
  },
];

export const diferenciais: { icone: NomeIcone; titulo: string; texto: string }[] = [
  {
    icone: "maoCoracao",
    titulo: "Atendimento humanizado",
    texto: "Cada pessoa é tratada pelo nome, com respeito à sua história, ao seu ritmo e às suas preferências.",
  },
  {
    icone: "pessoas",
    titulo: "Companhia do início ao fim",
    texto: "Quem busca é quem acompanha e quem traz de volta. Ninguém fica sozinho no meio do caminho.",
  },
  {
    icone: "usuarioCheck",
    titulo: "Atenção a cada necessidade",
    texto: "Antes de cada saída, conversamos sobre cuidados, preferências e o que for importante naquele dia.",
  },
  {
    icone: "relogio",
    titulo: "Pontualidade",
    texto: "Respeitamos o horário combinado, porque compromissos e expectativas importam.",
  },
  {
    icone: "mensagemCoracao",
    titulo: "Família por perto",
    texto: "Mantemos os familiares informados durante o atendimento, do jeito que for combinado com vocês.",
  },
  {
    icone: "rota",
    titulo: "Tudo em um só serviço",
    texto: "Transporte e acompanhamento juntos, sem precisar combinar motorista e acompanhante separadamente.",
  },
];

/** {regiao} é trocado pela região definida em lib/marca.ts */
export const perguntas: { pergunta: string; resposta: string }[] = [
  {
    pergunta: "Para quais destinos vocês levam?",
    resposta:
      "O destino é você quem define: consultas, exames, passeios, compras, visitas, restaurantes, eventos e outros compromissos do dia a dia. Região de atendimento: {regiao}.",
  },
  {
    pergunta: "Preciso agendar com antecedência?",
    resposta:
      "Sim. Trabalhamos com agendamento para organizar a equipe e dedicar a cada atendimento a atenção que ele merece. Fale com a gente para verificar a disponibilidade.",
  },
  {
    pergunta: "A equipe espera durante a consulta ou o passeio?",
    resposta:
      "Sim. Acompanhamos durante a atividade e aguardamos quando necessário, até o momento de voltar para casa.",
  },
  {
    pergunta: "Vocês são um serviço de enfermagem?",
    resposta:
      "Não. O Cuidado em Movimento é um serviço de transporte e companhia. Ajudamos na locomoção dentro das nossas capacidades, mas não realizamos procedimentos de saúde nem atendimento médico.",
  },
  {
    pergunta: "A família recebe notícias durante o atendimento?",
    resposta:
      "Sim. Combinamos com vocês a melhor forma de manter a família informada, do início ao retorno para casa.",
  },
  {
    pergunta: "Como é definido o valor?",
    resposta:
      "O valor depende da duração do atendimento. Conte para a gente o que precisa e informamos as condições pelo WhatsApp.",
  },
];
