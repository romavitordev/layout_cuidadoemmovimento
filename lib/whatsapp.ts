import { marca } from "./marca";

/** true quando o número do WhatsApp já foi preenchido em lib/marca.ts */
export const whatsappConfigurado = /^\d{12,13}$/.test(marca.contato.whatsapp);

/**
 * Link do WhatsApp com mensagem pronta.
 * Enquanto o número não existe, os botões levam para a seção de contato
 * (nenhum link quebrado ou número inventado vai para o ar).
 */
export function linkWhatsapp(mensagem: string = marca.mensagemWhatsapp) {
  if (!whatsappConfigurado) return "#contato";
  return `https://wa.me/${marca.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function linkInstagram() {
  return marca.contato.instagram ? `https://instagram.com/${marca.contato.instagram}` : "";
}
