import { colecoes } from './colecoes';
import type { Colecao, Peca } from './tipos';

export { colecoes };
export * from './tipos';

/** Coleções em ordem de lançamento, da mais recente para a mais antiga. */
export const colecoesPorData = [...colecoes].sort(
  (a, b) => Date.parse(b.abertura) - Date.parse(a.abertura),
);

export const colecaoNoAr = (): Colecao | undefined => colecoes.find((c) => c.estado === 'no-ar');

/** Próxima coleção agendada, a mais próxima de abrir. */
export const proximoDrop = (): Colecao | undefined =>
  colecoes
    .filter((c) => c.estado === 'agendada')
    .sort((a, b) => Date.parse(a.abertura) - Date.parse(b.abertura))[0];

export const buscarColecao = (id: string | undefined): Colecao | undefined =>
  id ? colecoes.find((c) => c.id === id) : undefined;

export const todasAsPecas = (): Peca[] => colecoes.flatMap((c) => c.pecas);

export const buscarPeca = (
  id: string | undefined,
): { peca: Peca; colecao: Colecao } | undefined => {
  if (!id) return undefined;
  for (const colecao of colecoes) {
    const peca = colecao.pecas.find((p) => p.id === id);
    if (peca) return { peca, colecao };
  }
  return undefined;
};

export const contarDisponiveis = (pecas: Peca[]): number =>
  pecas.filter((p) => !p.vendida).length;
