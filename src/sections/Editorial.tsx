import { Moldura } from '@/components/Moldura';
import estilos from './Editorial.module.css';

interface Props {
  titulo: string;
  subtitulo?: string;
  paragrafos: string[];
  /** Duas fotos de clima. Vazio mostra o padrão de sulcos. */
  fotos?: string[];
}

export function Editorial({ titulo, subtitulo, paragrafos, fotos = [] }: Props) {
  return (
    <section className="band band--sand">
      <div className={`wrap ${estilos.editorial}`}>
        <div className={estilos.texto}>
          <h2>
            {titulo}
            {subtitulo && <em>{subtitulo}</em>}
          </h2>
          {paragrafos.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <div className={estilos.pilha}>
          <Moldura src={fotos[0]} alt="" clara />
          <Moldura src={fotos[1]} alt="" clara />
        </div>
      </div>
    </section>
  );
}
