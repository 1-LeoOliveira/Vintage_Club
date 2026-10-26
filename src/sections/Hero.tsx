import { Botao } from '@/components/Botao';
import { Disco } from '@/components/Disco';
import { dataCurta } from '@/lib/formato';
import type { Colecao } from '@/data/tipos';
import estilos from './Hero.module.css';

interface Props {
  colecao: Colecao | undefined;
}

export function Hero({ colecao }: Props) {
  return (
    <section className={estilos.hero}>
      <Disco />

      <div className={`wrap ${estilos.conteudo}`}>
        <div className={`${estilos.topo} rise rise--1`}>
          <p className="eyebrow">
            {colecao ? `Coleção ${colecao.id} — ${colecao.nome}` : 'Exclusive Collection'}
          </p>
          {colecao && (
            <p className={`meta ${estilos.desde}`}>No ar desde {dataCurta(colecao.abertura)}</p>
          )}
        </div>

        <h1 className={`display ${estilos.titulo} rise rise--2`}>
          Vintage
          <br />
          Club
          <span className={estilos.italico}>Exclusive Collection</span>
        </h1>

        <div className={estilos.rodape}>
          <p className="lede rise rise--3">
            Peças selecionadas para quem não segue tendências. Cria as próprias. Uma unidade de
            cada. Quando sai, não volta.
          </p>
          <Botao to="/#colecao" className="rise rise--4">
            Explorar coleção
          </Botao>
        </div>
      </div>
    </section>
  );
}
