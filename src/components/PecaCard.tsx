import { Link } from 'react-router-dom';
import { Moldura } from './Moldura';
import { linkSolicitarPeca } from '@/lib/contato';
import { precoEmReais } from '@/lib/formato';
import type { Peca } from '@/data/tipos';
import estilos from './PecaCard.module.css';

interface Props {
  peca: Peca;
  /** Carrega a foto imediatamente — só nas primeiras da grade. */
  prioridade?: boolean;
}

export function PecaCard({ peca, prioridade = false }: Props) {
  const rota = `/peca/${peca.id}`;
  const capa = peca.fotos[0];

  return (
    <article className={`${estilos.peca} ${peca.vendida ? estilos.vendida : ''}`}>
      <Link to={rota} className={estilos.linkFoto} tabIndex={-1} aria-hidden="true">
        <Moldura
          src={capa}
          alt={`${peca.nome}, ${peca.marca}`}
          prioridade={prioridade}
          className={estilos.moldura}
        >
          <span className={estilos.selo} data-vendida={peca.vendida}>
            {peca.vendida ? 'Vendida' : 'Disponível'}
          </span>
        </Moldura>
      </Link>

      <div className={estilos.info}>
        <p className={estilos.marca}>{peca.marca}</p>
        <h3 className={estilos.nome}>
          <Link to={rota}>{peca.nome}</Link>
        </h3>

        <div className={estilos.specs}>
          <span>{peca.ano}</span>
          <span>Tam. {peca.tamanho}</span>
          <span>Estado {peca.estado}</span>
        </div>

        <div className={estilos.rodape}>
          <span className={estilos.preco}>{precoEmReais(peca.preco)}</span>
          {peca.vendida ? (
            <span className={estilos.esgotada}>Esgotada</span>
          ) : (
            <a
              className={estilos.acao}
              href={linkSolicitarPeca(peca)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar peça
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
