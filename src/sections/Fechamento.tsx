import { Botao } from '@/components/Botao';
import { Disco } from '@/components/Disco';
import estilos from './Fechamento.module.css';

interface Props {
  texto: string;
  acao: { rotulo: string; href?: string; to?: string };
}

export function Fechamento({ texto, acao }: Props) {
  return (
    <section className={estilos.fechamento}>
      <Disco posicao="central" />
      <div className={`wrap ${estilos.conteudo}`}>
        <h2 className={estilos.titulo}>
          Welcome
          <br />
          to the club.
        </h2>
        <p className={estilos.texto}>{texto}</p>
        {acao.to ? (
          <Botao to={acao.to}>{acao.rotulo}</Botao>
        ) : (
          <Botao href={acao.href ?? '#colecao'}>{acao.rotulo}</Botao>
        )}
      </div>
    </section>
  );
}
