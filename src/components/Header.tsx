import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Botao } from './Botao';
import estilos from './Header.module.css';

const secoes = [
  { para: '/#colecao', rotulo: 'Coleção' },
  { para: '/#drop', rotulo: 'Próximo drop' },
  { para: '/colecoes', rotulo: 'Arquivo' },
  { para: '/#curadoria', rotulo: 'Curadoria' },
] as const;

export function Header() {
  return (
    <header className={estilos.header}>
      <div className={`wrap ${estilos.barra}`}>
        <Link to="/" className={estilos.marca}>
          <img src={logo} alt="Monograma Vintage Club" width={54} height={55} />
          <span>Vintage&nbsp;Club</span>
        </Link>

        <nav className={estilos.nav} aria-label="Navegação principal">
          {secoes.map((s) => (
            <NavLink key={s.para} to={s.para}>
              {s.rotulo}
            </NavLink>
          ))}
        </nav>

        <Botao to="/colecoes" variante="fantasma" className={estilos.cta}>
          Explorar
        </Botao>
      </div>
    </header>
  );
}
