import type { ReactNode } from 'react';
import estilos from './Moldura.module.css';

interface Props {
  src?: string | undefined;
  alt?: string;
  /** Proporção CSS — '3/4' em peças, '1' no grid do Instagram. */
  proporcao?: string;
  /** Usa a cartela da banda areia. */
  clara?: boolean;
  /** Prioriza o carregamento (só na primeira imagem visível). */
  prioridade?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Moldura({
  src,
  alt = '',
  proporcao = '3/4',
  clara = false,
  prioridade = false,
  children,
  className,
}: Props) {
  const classe = [estilos.moldura, clara && estilos.clara, !src && estilos.vazia, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classe} style={{ aspectRatio: proporcao }}>
      {src && (
        <img
          className={estilos.foto}
          src={src}
          alt={alt}
          loading={prioridade ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      {children}
    </div>
  );
}
