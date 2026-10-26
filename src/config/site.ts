/**
 * Configuração da marca.
 * É o único arquivo que precisa ser editado para trocar contato ou handles.
 */
export const site = {
  nome: 'Vintage Club',
  instagram: 'vintageclubr',

  /**
   * Número com DDI e DDD, só dígitos — ex.: '5511987654321'.
   * Em `null`, os botões de contato caem na DM do Instagram.
   *
   * ⚠️ CONFERIR: o número informado foi "82 9101-2334", que tem 8 dígitos.
   * Celular no Brasil tem 9 desde a migração, então está gravado com o nono
   * dígito: 55 (Brasil) + 82 (Alagoas) + 99101-2334.
   */
  whatsapp: '5582991012334',

  /** Como o número aparece escrito na tela. */
  whatsappVisivel: '(82) 99101-2334',

  /** Fuso usado para exibir datas de drop. */
  fuso: 'America/Sao_Paulo',
} as const;

export const urlPerfilInstagram = `https://www.instagram.com/${site.instagram}/`;
export const urlDirectInstagram = `https://ig.me/m/${site.instagram}`;
