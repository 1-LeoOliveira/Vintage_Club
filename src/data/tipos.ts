/** Classificação de estado usada no mercado de vintage. */
export type EstadoPeca = 'A' | 'B' | 'C';

export const descricaoEstado: Record<EstadoPeca, string> = {
  A: 'Sem uso aparente',
  B: 'Marcas leves de uso',
  C: 'Marcas de uso visíveis',
};

export interface Peca {
  /** Identificador estável, usado na URL: /peca/vc-003-01 */
  id: string;
  nome: string;
  marca: string;
  /** Ano ou década de fabricação, como consta na etiqueta. */
  ano: string;
  tamanho: string;
  estado: EstadoPeca;
  /** Preço em reais, sem centavos. */
  preco: number;
  vendida: boolean;
  /** Caminhos em /public — ex.: '/fotos/pecas/vc-003-01.jpg'. Vazio mostra o padrão de sulcos. */
  fotos: string[];
  descricao: string;
  /** Medidas da peça em centímetros, com a peça deitada. */
  medidas: Record<string, string>;
  /** Observações de estado, uma por linha — o que a foto não mostra. */
  observacoes?: string[];
}

export type EstadoColecao = 'no-ar' | 'agendada' | 'encerrada';

export interface Colecao {
  /** Número da coleção, usado na URL: /colecao/003 */
  id: string;
  nome: string;
  subtitulo: string;
  estado: EstadoColecao;
  /** Data/hora de abertura em ISO com fuso. */
  abertura: string;
  editorial: {
    titulo: string;
    paragrafos: string[];
    /** Duas fotos de clima para a banda editorial. */
    fotos: string[];
  };
  pecas: Peca[];
}
