import { Botao } from '@/components/Botao';
import { Disco } from '@/components/Disco';
import { useMetaPagina } from '@/hooks/useMetaPagina';
import estilos from './NaoEncontrada.module.css';

export default function NaoEncontrada() {
  useMetaPagina('Página não encontrada');

  return (
    <section className={estilos.tela}>
      <Disco posicao="central" />
      <div className={`wrap ${estilos.conteudo}`}>
        <p className="eyebrow">Erro 404</p>
        <h1 className={`display ${estilos.titulo}`}>
          Essa peça
          <br />
          não existe.
        </h1>
        <p className={`lede ${estilos.texto}`}>
          O endereço está errado, ou a coleção saiu do ar.
        </p>
        <Botao to="/">Voltar ao início</Botao>
      </div>
    </section>
  );
}
