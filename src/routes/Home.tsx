import { Hero } from '@/sections/Hero';
import { Editorial } from '@/sections/Editorial';
import { ProximoDrop } from '@/sections/ProximoDrop';
import { Curadoria } from '@/sections/Curadoria';
import { Instagram } from '@/sections/Instagram';
import { Fechamento } from '@/sections/Fechamento';
import { GradePecas } from '@/components/GradePecas';
import { Botao } from '@/components/Botao';
import { colecaoNoAr, proximoDrop, contarDisponiveis } from '@/data';
import { pluralPecas, pluralDisponiveis } from '@/lib/formato';
import { useMetaPagina } from '@/hooks/useMetaPagina';

export default function Home() {
  const atual = colecaoNoAr();
  const drop = proximoDrop();

  useMetaPagina(
    'Vintage Club',
    'Garimpo autoral de peças vintage. Uma unidade de cada, em coleções lançadas por drop.',
  );

  const disponiveis = atual ? contarDisponiveis(atual.pecas) : 0;

  return (
    <>
      <Hero colecao={atual} />

      <section className="band" id="colecao">
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">The private collection</p>
              <h2>
                Poucas peças.
                <br />
                Nenhuma igual.
              </h2>
              <p>
                Garimpo autoral em lotes fechados. Cada peça passa por higienização, conferência de
                etiqueta e classificação de estado antes de entrar na coleção.
              </p>
            </div>
            {atual && (
              <p className="meta">
                {pluralPecas(atual.pecas.length)} · {pluralDisponiveis(disponiveis)}
              </p>
            )}
          </div>

          <GradePecas pecas={atual?.pecas ?? []} />

          {atual && (
            <div style={{ paddingTop: 'clamp(40px, 6vw, 68px)' }}>
              <Botao to={`/colecao/${atual.id}`} variante="fantasma">
                Ver a coleção completa
              </Botao>
            </div>
          )}
        </div>
      </section>

      {atual && (
        <Editorial
          titulo="More than clothing"
          subtitulo="An attitude."
          paragrafos={atual.editorial.paragrafos}
          fotos={atual.editorial.fotos}
        />
      )}

      {drop && <ProximoDrop drop={drop} />}

      <Curadoria />
      <Instagram />

      <Fechamento
        texto={
          atual
            ? `A coleção ${atual.id} está no ar. Quando a peça sai da grade, ela não volta.`
            : 'O próximo drop é anunciado primeiro no Instagram.'
        }
        acao={{ rotulo: 'Explorar coleção', to: '/#colecao' }}
      />
    </>
  );
}
