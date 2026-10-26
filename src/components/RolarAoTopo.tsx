import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Em troca de rota, volta ao topo. Com âncora na URL (/#colecao),
 * rola até a seção correspondente.
 */
export function RolarAoTopo() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const alvo = document.querySelector(hash);
      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
