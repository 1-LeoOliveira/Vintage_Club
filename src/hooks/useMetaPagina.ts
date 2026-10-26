import { useEffect } from 'react';

const SUFIXO = 'Vintage Club';

/**
 * Ajusta título e descrição da página em cada rota.
 * Para SEO completo numa SPA, o passo seguinte é pré-renderizar o build.
 */
export function useMetaPagina(titulo: string, descricao?: string): void {
  useEffect(() => {
    document.title = titulo === SUFIXO ? titulo : `${titulo} — ${SUFIXO}`;

    if (!descricao) return;
    const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) return;

    const anterior = tag.content;
    tag.content = descricao;
    return () => {
      tag.content = anterior;
    };
  }, [titulo, descricao]);
}
