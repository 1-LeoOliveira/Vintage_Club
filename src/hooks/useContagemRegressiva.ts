import { useEffect, useState } from 'react';

export interface Restante {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  acabou: boolean;
}

const calcular = (alvo: number): Restante => {
  let resta = Math.floor((alvo - Date.now()) / 1000);
  if (resta <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0, acabou: true };

  const dias = Math.floor(resta / 86400);
  resta %= 86400;
  const horas = Math.floor(resta / 3600);
  resta %= 3600;
  const minutos = Math.floor(resta / 60);

  return { dias, horas, minutos, segundos: resta % 60, acabou: false };
};

/** Conta até a data ISO informada, atualizando a cada segundo. */
export function useContagemRegressiva(iso: string): Restante {
  const alvo = Date.parse(iso);
  const [restante, setRestante] = useState<Restante>(() => calcular(alvo));

  useEffect(() => {
    setRestante(calcular(alvo));
    const id = window.setInterval(() => {
      const atual = calcular(alvo);
      setRestante(atual);
      if (atual.acabou) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, [alvo]);

  return restante;
}
