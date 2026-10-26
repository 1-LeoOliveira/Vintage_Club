import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import estilos from './Botao.module.css';

export type VarianteBotao = 'solido' | 'fantasma' | 'escuro';

interface Base {
  children: ReactNode;
  variante?: VarianteBotao;
  /** Mostra a seta que avança no hover. */
  seta?: boolean;
  className?: string;
}

type Props = Base & ({ to: string; href?: undefined } | { href: string; to?: undefined });

/**
 * Um único botão para o site inteiro.
 * `to` navega por rota interna; `href` sai para fora e abre em nova aba.
 */
export function Botao(props: Props) {
  const { children, variante = 'solido', seta = true, className } = props;
  const classe = [estilos.botao, estilos[variante], className].filter(Boolean).join(' ');

  const conteudo = (
    <>
      {children}
      {seta && (
        <span className={estilos.seta} aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (props.to) {
    return (
      <Link to={props.to} className={classe}>
        {conteudo}
      </Link>
    );
  }

  const href = props.href ?? '#';
  const externo = href.startsWith('http');

  return (
    <a
      href={href}
      className={classe}
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {conteudo}
    </a>
  );
}
