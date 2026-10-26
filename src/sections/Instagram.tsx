import { Botao } from '@/components/Botao';
import { Moldura } from '@/components/Moldura';
import { site, urlPerfilInstagram } from '@/config/site';
import estilos from './Instagram.module.css';

/** Fotos do feed. Vazio mostra o padrão de sulcos no lugar. */
const feed = [
  '/fotos/instagram/01.jpg',
  '/fotos/instagram/02.jpg',
  '/fotos/instagram/03.jpg',
  '/fotos/instagram/04.jpg',
  '/fotos/instagram/05.jpg',
  '/fotos/instagram/06.jpg',
];

export function Instagram() {
  const celulas = Array.from({ length: 6 }, (_, i) => feed[i]);

  return (
    <section className="band band--tight" id="instagram">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Follow the club</p>
            <h2>@{site.instagram}</h2>
          </div>
          <p className="meta">Drops anunciados primeiro no stories</p>
        </div>

        <div className={estilos.grade}>
          {celulas.map((foto, i) => (
            <Moldura
              key={i}
              src={foto}
              alt=""
              proporcao="1"
              className={estilos.celula}
            />
          ))}
        </div>

        <div className={estilos.rodape}>
          <Botao href={urlPerfilInstagram} variante="fantasma">
            Seguir no Instagram
          </Botao>
          <p className="meta">Atendimento e reservas pela DM</p>
        </div>
      </div>
    </section>
  );
}
