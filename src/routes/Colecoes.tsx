import { Link } from 'react-router-dom';
import { Fechamento } from '@/sections/Fechamento';
import { colecoesPorData } from '@/data';
import type { EstadoColecao } from '@/data/tipos';
import { dataCurta, pluralPecas } from '@/lib/formato';
import { useMetaPagina } from '@/hooks/useMetaPagina';
import estilos from './Colecoes.module.css';

const rotuloEstado: Record<EstadoColecao, string> = {
  'no-ar': 'No ar',
  agendada: 'Em breve',
  encerrada: 'Encerrada',
};

export default function Colecoes() {
  useMetaPagina(
    'Arquivo',
    'Todas as coleções da Vintage Club, da mais recente à primeira.',
  );

  return (
    <>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">O arquivo</p>
              <h2>Todas as coleções</h2>
              <p>
                Cada drop vira arquivo quando a última peça sai. O que está encerrado fica aqui
                como registro.
              </p>
            </div>
            <p className="meta">{colecoesPorData.length} coleções</p>
          </div>

          <div className={estilos.lista}>
            {colecoesPorData.map((c) => (
              <Link key={c.id} to={`/colecao/${c.id}`} className={estilos.item}>
                <span className={estilos.numero}>{c.id}</span>
                <div>
                  <h3 className={estilos.nome}>{c.nome}</h3>
                  <p className={estilos.sub}>
                    {c.subtitulo} · {pluralPecas(c.pecas.length)} · {dataCurta(c.abertura)}
                  </p>
                </div>
                <span className={estilos.estado} data-estado={c.estado}>
                  <span className={estilos.ponto} aria-hidden="true" />
                  {rotuloEstado[c.estado]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Fechamento
        texto="O próximo drop é anunciado primeiro no Instagram, com acesso antecipado para membros."
        acao={{ rotulo: 'Voltar ao início', to: '/' }}
      />
    </>
  );
}
