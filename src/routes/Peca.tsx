import { Link, Navigate, useParams } from 'react-router-dom';
import { Moldura } from '@/components/Moldura';
import { Botao } from '@/components/Botao';
import { GradePecas } from '@/components/GradePecas';
import { buscarPeca } from '@/data';
import { descricaoEstado } from '@/data/tipos';
import { linkSolicitarPeca, canalAtivo } from '@/lib/contato';
import { precoEmReais } from '@/lib/formato';
import { useMetaPagina } from '@/hooks/useMetaPagina';
import estilos from './Peca.module.css';

export default function Peca() {
  const { id } = useParams<{ id: string }>();
  const resultado = buscarPeca(id);

  useMetaPagina(
    resultado ? `${resultado.peca.nome} — ${resultado.peca.marca}` : 'Peça não encontrada',
    resultado?.peca.descricao,
  );

  if (!resultado) return <Navigate to="/404" replace />;

  const { peca, colecao } = resultado;
  const outras = colecao.pecas.filter((p) => p.id !== peca.id).slice(0, 3);
  const medidas = Object.entries(peca.medidas);

  return (
    <>
      <section className="band">
        <div className={`wrap ${estilos.ficha}`}>
          <div className={estilos.galeria}>
            {peca.fotos.length > 0 ? (
              peca.fotos.map((foto, i) => (
                <Moldura
                  key={foto}
                  src={foto}
                  alt={`${peca.nome}, ${peca.marca} — foto ${i + 1}`}
                  prioridade={i === 0}
                />
              ))
            ) : (
              <Moldura alt="" prioridade />
            )}
          </div>

          <div>
            <Link to={`/colecao/${colecao.id}`} className={estilos.voltar}>
              ← Coleção {colecao.id} · {colecao.nome}
            </Link>

            <p className={estilos.marca}>{peca.marca}</p>
            <h1 className={estilos.nome}>{peca.nome}</h1>

            <p className={`${estilos.preco} ${peca.vendida ? estilos.esgotada : ''}`}>
              {precoEmReais(peca.preco)}
            </p>

            <p className={estilos.descricao}>{peca.descricao}</p>

            <div className={estilos.bloco}>
              <h2>Ficha</h2>
              <dl className={estilos.specs}>
                <div>
                  <dt>Ano</dt>
                  <dd>{peca.ano}</dd>
                </div>
                <div>
                  <dt>Tamanho</dt>
                  <dd>{peca.tamanho}</dd>
                </div>
                <div>
                  <dt>Estado</dt>
                  <dd>
                    {peca.estado} — {descricaoEstado[peca.estado]}
                  </dd>
                </div>
                <div>
                  <dt>Referência</dt>
                  <dd>{peca.id}</dd>
                </div>
              </dl>
            </div>

            {medidas.length > 0 && (
              <div className={estilos.bloco}>
                <h2>Medidas (peça deitada)</h2>
                <dl className={estilos.specs}>
                  {medidas.map(([nome, valor]) => (
                    <div key={nome}>
                      <dt>{nome}</dt>
                      <dd>{valor}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {peca.observacoes && peca.observacoes.length > 0 && (
              <div className={estilos.bloco}>
                <h2>Estado de conservação</h2>
                <ul className={estilos.notas}>
                  {peca.observacoes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={estilos.acao}>
              {peca.vendida ? (
                <>
                  <Botao to={`/colecao/${colecao.id}`} variante="fantasma">
                    Ver peças disponíveis
                  </Botao>
                  <p>Esta peça já saiu. Era única, e não volta ao acervo.</p>
                </>
              ) : (
                <>
                  <Botao href={linkSolicitarPeca(peca)}>Solicitar peça</Botao>
                  <p>
                    Abre o {canalAtivo()} com a referência {peca.id} já escrita. Reserva por ordem
                    de chegada.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {outras.length > 0 && (
        <section className="band band--tight">
          <div className="wrap">
            <div className="shead">
              <div>
                <p className="eyebrow">Da mesma coleção</p>
                <h2>Coleção {colecao.id}</h2>
              </div>
              <Link to={`/colecao/${colecao.id}`} className="meta">
                Ver todas →
              </Link>
            </div>
            <GradePecas pecas={outras} />
          </div>
        </section>
      )}
    </>
  );
}
