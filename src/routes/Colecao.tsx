import { Link, Navigate, useParams } from 'react-router-dom';
import { Disco } from '@/components/Disco';
import { GradePecas } from '@/components/GradePecas';
import { ContagemRegressiva } from '@/components/ContagemRegressiva';
import { Botao } from '@/components/Botao';
import { Editorial } from '@/sections/Editorial';
import { Fechamento } from '@/sections/Fechamento';
import { buscarColecao, contarDisponiveis } from '@/data';
import { linkAvisarDrop } from '@/lib/contato';
import { dataDoDrop, pluralDisponiveis, pluralPecas } from '@/lib/formato';
import { useMetaPagina } from '@/hooks/useMetaPagina';
import estilos from './Colecao.module.css';

export default function Colecao() {
  const { id } = useParams<{ id: string }>();
  const colecao = buscarColecao(id);

  useMetaPagina(
    colecao ? `Coleção ${colecao.id} — ${colecao.nome}` : 'Coleção não encontrada',
    colecao?.subtitulo,
  );

  if (!colecao) return <Navigate to="/404" replace />;

  const agendada = colecao.estado === 'agendada';
  const disponiveis = contarDisponiveis(colecao.pecas);

  return (
    <>
      <section className={estilos.capa}>
        <Disco />
        <div className={`wrap ${estilos.conteudo}`}>
          <Link to="/colecoes" className={estilos.voltar}>
            ← Arquivo
          </Link>

          <div className={estilos.cabecalho}>
            <p className="eyebrow">Collection {colecao.id}</p>
            <p className="meta" style={{ color: 'color-mix(in srgb, var(--cream) 48%, transparent)' }}>
              {agendada ? 'Abre em' : 'Aberta em'} {dataDoDrop(colecao.abertura)}
            </p>
          </div>

          <h1 className={`display ${estilos.titulo}`}>{colecao.nome}</h1>
          <p className={estilos.sub}>{colecao.subtitulo}</p>

          {agendada ? (
            <div style={{ marginTop: 'clamp(36px, 5vw, 60px)' }}>
              <ContagemRegressiva abertura={colecao.abertura} />
              <div style={{ paddingTop: 34 }}>
                <Botao
                  href={linkAvisarDrop(`${colecao.nome} (coleção ${colecao.id})`)}
                  variante="fantasma"
                >
                  Avise-me da abertura
                </Botao>
              </div>
            </div>
          ) : (
            <p className={`meta ${estilos.resumo}`}>
              <span>{pluralPecas(colecao.pecas.length)}</span>
              <span>{pluralDisponiveis(disponiveis)}</span>
              <span>
                {colecao.estado === 'encerrada' ? 'Coleção encerrada' : 'Coleção no ar'}
              </span>
            </p>
          )}
        </div>
      </section>

      <Editorial
        titulo={colecao.editorial.titulo}
        paragrafos={colecao.editorial.paragrafos}
        fotos={colecao.editorial.fotos}
      />

      <section className="band" id="pecas">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">As peças</p>
              <h2>{agendada ? 'Revelação na abertura' : 'A coleção'}</h2>
            </div>
            {!agendada && <p className="meta">{pluralDisponiveis(disponiveis)}</p>}
          </div>

          <GradePecas
            pecas={colecao.pecas}
            mensagemVazia={`As peças da coleção ${colecao.id} são reveladas na abertura do drop, ${dataDoDrop(colecao.abertura)}.`}
          />
        </div>
      </section>

      <Fechamento
        texto={
          colecao.estado === 'encerrada'
            ? 'Essa coleção encerrou. A próxima já está em garimpo.'
            : 'Atendimento e reserva pela DM. Uma unidade de cada peça.'
        }
        acao={{ rotulo: 'Ver outras coleções', to: '/colecoes' }}
      />
    </>
  );
}
