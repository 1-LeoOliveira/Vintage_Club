import { Botao } from '@/components/Botao';
import { ContagemRegressiva } from '@/components/ContagemRegressiva';
import { linkAvisarDrop, canalAtivo } from '@/lib/contato';
import { dataDoDrop } from '@/lib/formato';
import type { Colecao } from '@/data/tipos';
import estilos from './ProximoDrop.module.css';

interface Props {
  drop: Colecao;
}

export function ProximoDrop({ drop }: Props) {
  return (
    <section className="band" id="drop">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Upcoming drops</p>
            <h2>Next drop</h2>
          </div>
          <p className="meta">Acesso antecipado para membros</p>
        </div>

        <div className={estilos.painel}>
          <div>
            <p className="eyebrow">Collection {drop.id}</p>
            <h3 className={estilos.nome}>{drop.nome}</h3>
            <p className={estilos.quando}>
              {dataDoDrop(drop.abertura)} (horário de Brasília)
            </p>
          </div>
          <ContagemRegressiva abertura={drop.abertura} />
        </div>

        <div className={estilos.acoes}>
          <Botao href={linkAvisarDrop(`${drop.nome} (coleção ${drop.id})`)} variante="fantasma">
            Avise-me
          </Botao>
          <p>
            Mandamos o link do drop pelo {canalAtivo()}, 30 minutos antes de abrir.
          </p>
        </div>
      </div>
    </section>
  );
}
