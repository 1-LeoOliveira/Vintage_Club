import estilos from './Disco.module.css';

interface Props {
  posicao?: 'lateral' | 'central';
}

export function Disco({ posicao = 'lateral' }: Props) {
  return <div className={`grooves ${estilos.disco} ${estilos[posicao]}`} aria-hidden="true" />;
}
