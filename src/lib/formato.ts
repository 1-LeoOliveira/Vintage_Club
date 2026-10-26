import { site } from '@/config/site';

const moeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

export const precoEmReais = (valor: number): string => moeda.format(valor);

const partesData = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: site.fuso,
});

/** '01.11.2026 — 20:00' no fuso de Brasília. */
export const dataDoDrop = (iso: string): string => {
  const p = partesData.formatToParts(new Date(iso)).reduce<Record<string, string>>((acc, parte) => {
    acc[parte.type] = parte.value;
    return acc;
  }, {});
  return `${p.day}.${p.month}.${p.year} — ${p.hour}:${p.minute}`;
};

/** '18.10.2026' — só a data, para rótulos curtos. */
export const dataCurta = (iso: string): string => dataDoDrop(iso).split(' — ')[0] ?? '';

export const pluralPecas = (n: number): string => `${n} ${n === 1 ? 'peça' : 'peças'}`;

export const pluralDisponiveis = (n: number): string =>
  `${n} ${n === 1 ? 'disponível' : 'disponíveis'}`;
