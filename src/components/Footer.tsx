import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { site, urlPerfilInstagram } from '@/config/site';
import { linkDeContato } from '@/lib/contato';
import { IconeInstagram, IconeWhatsApp } from './Icones';
import estilos from './Footer.module.css';

const navegacao = [
  { para: '/#colecao', rotulo: 'Coleção no ar' },
  { para: '/colecoes', rotulo: 'Arquivo' },
  { para: '/#drop', rotulo: 'Próximo drop' },
  { para: '/#curadoria', rotulo: 'Curadoria' },
] as const;

export function Footer() {
  const whatsapp = linkDeContato('Olá! Vim pelo site da Vintage Club.');

  return (
    <footer className={estilos.footer}>
      <div className={`wrap ${estilos.topo}`}>
        <div className={estilos.sobre}>
          <Link to="/" className={estilos.marca}>
            <img src={logo} alt="" width={62} height={63} />
            <span>Vintage&nbsp;Club</span>
          </Link>
          <p>Garimpo autoral em lotes fechados. Uma unidade de cada peça.</p>
        </div>

        <nav className={estilos.coluna} aria-label="Rodapé">
          <h2>Navegar</h2>
          <ul>
            {navegacao.map((n) => (
              <li key={n.para}>
                <Link to={n.para}>{n.rotulo}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={estilos.coluna}>
          <h2>Fale com a gente</h2>

          <a
            className={estilos.canal}
            href={urlPerfilInstagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={estilos.icone}>
              <IconeInstagram tamanho={19} />
            </span>
            <span className={estilos.dados}>
              <span className={estilos.rotulo}>Instagram</span>
              <span className={estilos.valor}>@{site.instagram}</span>
            </span>
          </a>

          <a className={estilos.canal} href={whatsapp} target="_blank" rel="noopener noreferrer">
            <span className={estilos.icone}>
              <IconeWhatsApp tamanho={19} />
            </span>
            <span className={estilos.dados}>
              <span className={estilos.rotulo}>WhatsApp</span>
              <span className={estilos.valor}>{site.whatsappVisivel}</span>
            </span>
          </a>
        </div>
      </div>

      <div className={estilos.base}>
        <div className={`wrap ${estilos.baseBarra}`}>
          <p>© {new Date().getFullYear()} Vintage Club</p>
          <p>Atendimento e reservas pela DM ou WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
