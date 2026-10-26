import { site, urlDirectInstagram } from '@/config/site';
import type { Peca } from '@/data/tipos';

/**
 * Monta o link de atendimento. Com WhatsApp configurado, abre a conversa
 * com a mensagem já escrita; sem ele, cai na DM do Instagram.
 */
export function linkDeContato(mensagem: string): string {
  if (site.whatsapp) {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  }
  return urlDirectInstagram;
}

export const linkSolicitarPeca = (peca: Peca): string =>
  linkDeContato(
    `Olá! Tenho interesse na peça ${peca.nome} (${peca.marca}, tam. ${peca.tamanho}) — ref. ${peca.id}.`,
  );

export const linkAvisarDrop = (nomeColecao: string): string =>
  linkDeContato(`Olá! Quero ser avisado da abertura do drop ${nomeColecao}.`);

/** Rótulo do canal ativo, para o texto dos botões. */
export const canalAtivo = (): 'WhatsApp' | 'Instagram' =>
  site.whatsapp ? 'WhatsApp' : 'Instagram';
