import { useContagemRegressiva } from '@/hooks/useContagemRegressiva';
import estilos from './ContagemRegressiva.module.css';

const doisDigitos = (n: number) => String(n).padStart(2, '0');

interface Props {
  /** Data/hora de abertura em ISO com fuso. */
  abertura: string;
}

export function ContagemRegressiva({ abertura }: Props) {
  const { dias, horas, minutos, segundos, acabou } = useContagemRegressiva(abertura);

  if (acabou) {
    return (
      <div className={`${estilos.relogio} ${estilos.aberto}`}>
        <div className={estilos.unidade} style={{ minWidth: 'auto' }}>
          <strong className={estilos.numero}>No ar</strong>
          <span className={estilos.rotulo}>O drop abriu</span>
        </div>
      </div>
    );
  }

  const unidades = [
    { valor: String(dias), rotulo: 'Dias' },
    { valor: doisDigitos(horas), rotulo: 'Horas' },
    { valor: doisDigitos(minutos), rotulo: 'Min' },
    { valor: doisDigitos(segundos), rotulo: 'Seg' },
  ];

  return (
    <div
      className={estilos.relogio}
      role="timer"
      aria-label={`Faltam ${dias} dias, ${horas} horas e ${minutos} minutos para a abertura`}
    >
      {unidades.map((u) => (
        <div key={u.rotulo} className={estilos.unidade}>
          <strong className={estilos.numero}>{u.valor}</strong>
          <span className={estilos.rotulo}>{u.rotulo}</span>
        </div>
      ))}
    </div>
  );
}
