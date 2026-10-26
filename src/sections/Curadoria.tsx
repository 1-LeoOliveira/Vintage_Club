import estilos from './Curadoria.module.css';

const criterios = [
  {
    titulo: 'Procedência',
    texto:
      'Etiqueta original conferida: marca, país de fabricação e código de período. Reprodução e reissue não entram.',
  },
  {
    titulo: 'Estado',
    texto:
      'Classificação de A a C. Grau A é peça sem uso aparente; B e C vêm com as marcas de uso descritas uma a uma na ficha.',
  },
  {
    titulo: 'Raridade',
    texto:
      'Modelo descontinuado, tiragem curta ou corte que a marca não repete. Se é fácil de achar, não é coleção.',
  },
];

export function Curadoria() {
  return (
    <section className="band band--tight" id="curadoria">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Curated with intention</p>
            <h2>
              Três critérios,
              <br />
              sem exceção.
            </h2>
            <p>
              Nenhuma peça entra na coleção sem passar pelos três. É o que separa garimpo de
              estoque.
            </p>
          </div>
        </div>

        <div className={estilos.criterios}>
          {criterios.map((c) => (
            <article key={c.titulo} className={estilos.criterio}>
              <div className={estilos.anel} aria-hidden="true" />
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
