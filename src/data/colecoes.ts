import type { Colecao } from './tipos';

/**
 * ─────────────────────────────────────────────────────────────────
 *  ACERVO
 *  Para publicar um drop: adicione a coleção aqui e mude `estado`
 *  para 'no-ar' na data da abertura. Fotos vão em /public/fotos.
 * ─────────────────────────────────────────────────────────────────
 */
export const colecoes: Colecao[] = [
  {
    id: '004',
    nome: 'Workwear Anos 90',
    subtitulo: 'Lona, rebite e desbote de obra',
    estado: 'agendada',
    abertura: '2026-11-01T20:00:00-03:00',
    editorial: {
      fotos: ['/fotos/editorial/004-a.jpg', '/fotos/editorial/004-b.jpg'],
      titulo: 'A roupa que trabalhou antes de virar moda',
      paragrafos: [
        'Jaquetas de lona, calças de carpinteiro e camisas de brim que passaram anos em canteiro de obra antes de alguém chamar isso de estilo. O desbote está no joelho e no cotovelo porque foi ali que a roupa dobrou todos os dias.',
      ],
    },
    pecas: [],
  },

  {
    id: '003',
    nome: 'The Archive',
    subtitulo: 'Esportivo e outerwear, 1992–1998',
    estado: 'no-ar',
    abertura: '2026-10-18T20:00:00-03:00',
    editorial: {
      fotos: ['/fotos/editorial/003-a.jpg', '/fotos/editorial/003-b.jpg'],
      titulo: 'More than clothing. An attitude.',
      paragrafos: [
        'Roupa de segunda mão carrega tempo. A trama já desbotou onde alguém encostou o ombro, o punho cedeu no lugar certo, a etiqueta diz um ano que não volta mais. É isso que não se fabrica.',
        'A Vintage Club não repõe estoque: encontra. Cada drop é o resultado de semanas de garimpo em lotes, brechós e acervos particulares — e termina quando a última peça sai.',
      ],
    },
    pecas: [
      {
        id: 'vc-003-01',
        nome: 'Detroit Jacket Blanket-Lined',
        marca: 'Carhartt',
        ano: '1998',
        tamanho: 'M',
        estado: 'B',
        preco: 1290,
        vendida: false,
        fotos: ['/fotos/pecas/vc-003-01.jpg'],
        descricao:
          'A Detroit de lona duck com forro de manta xadrez, feita nos Estados Unidos. Gola de veludo cotelê, punhos canelados originais e o desbote de uso concentrado nos cotovelos e na barra.',
        medidas: { Ombro: '48 cm', Peito: '57 cm', Comprimento: '68 cm', Manga: '63 cm' },
        observacoes: [
          'Desbote uniforme na lona, mais acentuado nos cotovelos.',
          'Forro xadrez íntegro, sem rasgos.',
          'Zíper original funcionando, puxador com marca de oxidação.',
        ],
      },
      {
        id: 'vc-003-02',
        nome: 'Eagle Three-Quarter Sleeve',
        marca: 'Harley-Davidson',
        ano: '1994',
        tamanho: 'G',
        estado: 'C',
        preco: 480,
        vendida: true,
        fotos: ['/fotos/pecas/vc-003-02.jpg'],
        descricao:
          'Raglan manga 3/4 com estampa de águia nas costas e selo de concessionária. Algodão já amaciado por três décadas de lavagem.',
        medidas: { Ombro: '52 cm', Peito: '58 cm', Comprimento: '72 cm', Manga: '42 cm' },
        observacoes: [
          'Estampa com craquelado natural, característico da época.',
          'Gola levemente alargada.',
        ],
      },
      {
        id: 'vc-003-03',
        nome: 'ACG Storm-Fit Windbreaker',
        marca: 'Nike',
        ano: '1996',
        tamanho: 'GG',
        estado: 'A',
        preco: 690,
        vendida: false,
        fotos: ['/fotos/pecas/vc-003-03.jpg'],
        descricao:
          'Corta-vento da linha All Conditions Gear com capuz embutido na gola, bolso canguru e cartela cinza e laranja original dos anos 90.',
        medidas: { Ombro: '56 cm', Peito: '64 cm', Comprimento: '74 cm', Manga: '66 cm' },
        observacoes: [
          'Etiqueta interna legível com código de período.',
          'Nenhuma marca de uso aparente. Capuz ainda com o vinco de fábrica.',
        ],
      },
      {
        id: 'vc-003-04',
        nome: '501 Selvedge Red Line',
        marca: "Levi's",
        ano: 'Anos 80',
        tamanho: '42',
        estado: 'B',
        preco: 520,
        vendida: false,
        fotos: ['/fotos/pecas/vc-003-04.jpg'],
        descricao:
          'Cinco bolsos com barra selvedge de linha vermelha, rebites de cobre e botão de pressão numerado. Desbote de assento natural, nunca lavado a pedra.',
        medidas: { Cintura: '42 cm', Quadril: '54 cm', Entrepernas: '81 cm', Barra: '21 cm' },
        observacoes: [
          'Barra original, sem ajuste de costureira.',
          'Leve desgaste no joelho esquerdo.',
        ],
      },
      {
        id: 'vc-003-05',
        nome: 'Rugby Listrado Big Pony',
        marca: 'Polo Ralph Lauren',
        ano: 'Anos 90',
        tamanho: 'M',
        estado: 'A',
        preco: 420,
        vendida: true,
        fotos: ['/fotos/pecas/vc-003-05.jpg'],
        descricao:
          'Rugby de malha pesada com gola branca de sarja, listras largas e bordado Big Pony no peito.',
        medidas: { Ombro: '50 cm', Peito: '59 cm', Comprimento: '70 cm', Manga: '62 cm' },
      },
      {
        id: 'vc-003-06',
        nome: 'Track Top Trefoil',
        marca: 'Adidas Originals',
        ano: '1992',
        tamanho: 'P',
        estado: 'B',
        preco: 390,
        vendida: false,
        fotos: ['/fotos/pecas/vc-003-06.jpg'],
        descricao:
          'Jaqueta de treino em tricot com as três listras nas mangas, gola alta e logo trefoil bordado. Fabricação europeia.',
        medidas: { Ombro: '45 cm', Peito: '53 cm', Comprimento: '64 cm', Manga: '60 cm' },
        observacoes: ['Punhos com elasticidade preservada.', 'Zíper original, corre liso.'],
      },
    ],
  },

  {
    id: '002',
    nome: 'Sun Faded',
    subtitulo: 'Algodão desbotado pelo sol',
    estado: 'encerrada',
    abertura: '2026-09-20T20:00:00-03:00',
    editorial: {
      fotos: ['/fotos/editorial/002-a.jpg', '/fotos/editorial/002-b.jpg'],
      titulo: 'O sol é o melhor tingimento',
      paragrafos: [
        'Nenhuma lavanderia industrial reproduz o que dez verões fazem com uma camiseta de algodão. Essa coleção foi inteira sobre isso: cor que saiu sozinha, no tempo dela.',
      ],
    },
    pecas: [
      {
        id: 'vc-002-01',
        nome: 'Camiseta Single Stitch Desbotada',
        marca: 'Hanes',
        ano: 'Anos 80',
        tamanho: 'M',
        estado: 'C',
        preco: 290,
        vendida: true,
        fotos: ['/fotos/pecas/vc-002-01.jpg'],
        descricao: 'Costura simples na barra e nas mangas, algodão transparente de tanto uso.',
        medidas: { Ombro: '46 cm', Peito: '52 cm', Comprimento: '68 cm' },
      },
      {
        id: 'vc-002-02',
        nome: 'Moletom Crewneck Reverse Weave',
        marca: 'Champion',
        ano: '1991',
        tamanho: 'G',
        estado: 'B',
        preco: 610,
        vendida: true,
        fotos: ['/fotos/pecas/vc-002-02.jpg'],
        descricao: 'Reverse Weave com fole lateral e etiqueta azul, em cinza mescla desbotado.',
        medidas: { Ombro: '54 cm', Peito: '60 cm', Comprimento: '66 cm', Manga: '58 cm' },
      },
      {
        id: 'vc-002-03',
        nome: 'Camisa Pescador Xadrez',
        marca: 'Woolrich',
        ano: 'Anos 70',
        tamanho: 'M',
        estado: 'B',
        preco: 540,
        vendida: true,
        fotos: ['/fotos/pecas/vc-002-03.jpg'],
        descricao: 'Flanela de lã em xadrez vermelho e preto, com bolsos chapados e botões de osso.',
        medidas: { Ombro: '49 cm', Peito: '58 cm', Comprimento: '74 cm', Manga: '63 cm' },
      },
      {
        id: 'vc-002-04',
        nome: 'Jaqueta Corta-Vento Coach',
        marca: 'Members Only',
        ano: 'Anos 80',
        tamanho: 'P',
        estado: 'A',
        preco: 450,
        vendida: true,
        fotos: ['/fotos/pecas/vc-002-04.jpg'],
        descricao: 'Coach jacket em poliéster leve com gola de botão e cintura ajustável.',
        medidas: { Ombro: '44 cm', Peito: '54 cm', Comprimento: '63 cm', Manga: '61 cm' },
      },
    ],
  },
];
