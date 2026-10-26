import { PecaCard } from './PecaCard';
import type { Peca } from '@/data/tipos';
import estilos from './GradePecas.module.css';

interface Props {
  pecas: Peca[];
  /** Texto exibido quando a coleção ainda não tem peças publicadas. */
  mensagemVazia?: string;
}

export function GradePecas({ pecas, mensagemVazia }: Props) {
  if (pecas.length === 0) {
    return (
      <p className={estilos.vazio}>
        {mensagemVazia ?? 'As peças desta coleção são reveladas na abertura do drop.'}
      </p>
    );
  }

  return (
    <div className={estilos.grade}>
      {pecas.map((peca, i) => (
        <PecaCard key={peca.id} peca={peca} prioridade={i < 3} />
      ))}
    </div>
  );
}
