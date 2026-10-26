# Vintage Club

Vitrine digital da Vintage Club. Coleções lançadas por drop, peças únicas,
atendimento por DM ou WhatsApp.

Vite + React + TypeScript. Sem backend: todo o acervo vive em arquivos
versionados no próprio repositório.

---

## Rodando o projeto

```bash
npm install     # uma vez
npm run dev     # http://localhost:5173
```

| Comando             | O que faz                                        |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desenvolvimento, com recarga na hora |
| `npm run build`     | Checa os tipos e gera o site em `dist/`          |
| `npm run preview`   | Serve o `dist/` como ficará em produção          |
| `npm run typecheck` | Só a checagem de tipos                           |
| `npm run lint`      | ESLint                                           |
| `npm run format`    | Prettier                                         |

---

## Operação do dia a dia

### Trocar o contato

[`src/config/site.ts`](src/config/site.ts) — é o único arquivo que precisa
mudar. Hoje está assim:

```ts
whatsapp: '5582991012334',           // DDI + DDD + número, só dígitos
whatsappVisivel: '(82) 99101-2334',  // como aparece escrito na tela
instagram: 'vintageclubr',
```

> ⚠️ **Conferir o número.** O informado foi "82 9101-2334", com 8 dígitos.
> Celular no Brasil tem 9 desde a migração, então está gravado com o nono
> dígito (`99101-2334`). Se o número certo for outro, corrija aqui — é o
> destino de todo botão "Solicitar peça" do site.

Todo botão de contato abre o WhatsApp com a mensagem e a referência da peça
já escritas. Com `whatsapp: null`, tudo cai na DM do Instagram.

### Publicar um drop

Todo o acervo está em [`src/data/colecoes.ts`](src/data/colecoes.ts).

1. Adicione a coleção com `estado: 'agendada'` e a data de abertura em ISO
   com fuso (`'2026-11-01T20:00:00-03:00'`). A contagem regressiva do site
   passa a apontar para ela sozinha.
2. Na hora da abertura, mude para `estado: 'no-ar'`. A coleção anterior vira
   `'encerrada'`.
3. A home sempre mostra a coleção que está `'no-ar'`; o arquivo em
   `/colecoes` lista todas.

### Marcar uma peça como vendida

Na peça, dentro da coleção:

```ts
vendida: true,
```

O card passa a cinza, o selo vira "Vendida" e o botão de contato some.

### Subir fotos

> ⚠️ **As fotos atuais são de banco de imagem.** Nenhuma é peça real da
> Vintage Club — são do Unsplash, escolhidas só para o layout não ficar
> vazio. Uma pilha genérica de roupa sob o nome "Detroit Jacket
> Blanket-Lined, Carhartt 1998" é propaganda enganosa. Troque todas antes
> de publicar. A procedência de cada arquivo está em
> [`public/fotos/CREDITOS.md`](public/fotos/CREDITOS.md).

As imagens ficam em [`public/fotos/`](public/fotos/), em três pastas:

| Pasta        | O que é                                           | Tamanho      |
| ------------ | ------------------------------------------------- | ------------ |
| `pecas/`     | uma ou mais por peça; a primeira é a capa do card | 1000 × 1333  |
| `editorial/` | duas por coleção (`<id>-a.jpg`, `<id>-b.jpg`)     | 900 × 1200   |
| `instagram/` | seis quadradas para a grade do rodapé             | 700 × 700    |

Para trocar, substitua o arquivo mantendo o nome, ou aponte outro caminho:

```ts
fotos: ['/fotos/pecas/vc-003-01.jpg', '/fotos/pecas/vc-003-01-costas.jpg'],
```

A primeira foto é a capa do card; as demais aparecem na ficha da peça.
Com `fotos: []`, a peça volta a mostrar o padrão de sulcos do logo — um
estado vazio desenhado, não uma imagem quebrada.

Formato recomendado: retrato 3:4, JPG, fundo liso.

---

## Rotas

| Rota            | Página                                               |
| --------------- | ---------------------------------------------------- |
| `/`             | Landing, com a coleção no ar em destaque              |
| `/colecoes`     | Arquivo: todas as coleções, da mais recente à primeira |
| `/colecao/:id`  | Uma coleção — editorial, peças, contagem se agendada  |
| `/peca/:id`     | Ficha da peça: medidas, estado, solicitação           |
| qualquer outra  | 404                                                   |

---

## Estrutura

```
src/
├─ config/site.ts        contato e handles
├─ data/
│   ├─ tipos.ts          Peca, Colecao, EstadoPeca
│   ├─ colecoes.ts       ← o acervo
│   └─ index.ts          seletores (colecaoNoAr, proximoDrop, buscarPeca…)
├─ lib/
│   ├─ contato.ts        monta os links de WhatsApp/DM
│   └─ formato.ts        preço em BRL, datas no fuso de Brasília
├─ hooks/                contagem regressiva, título da página
├─ components/           Botao, Moldura, PecaCard, Header, Footer…
├─ sections/             blocos da landing (Hero, Editorial, Curadoria…)
├─ routes/               uma pasta por página
└─ styles/
    ├─ tokens.css        ← o design system começa aqui
    ├─ base.css          reset e acessibilidade
    ├─ ui.css            primitivas globais (.wrap, .band, .shead…)
    └─ animacoes.css
```

Estilo específico de um componente fica no `.module.css` ao lado dele, com
escopo isolado. O que é vocabulário compartilhado — contêiner, bandas,
cabeçalho de seção, tipografia — é global, em `styles/ui.css`.

---

## Design

Tudo sai do monograma: **VC** em marrom-espresso sobre areia, com o "C"
formado por sulcos de vinil.

- **Cor** — espresso (`--ink`), areia (`--sand`), creme (`--cream`) e latão
  (`--brass`) como único acento. Tema escuro único, assumido.
- **Tipografia** — Fraunces nos títulos (serifada dos anos 70, mesma
  família visual do logo), Archivo nas informações.
- **Motivo** — o sulco concêntrico aparece no disco atrás do herói, no anel
  de cada critério de curadoria e nos espaços de foto ainda vazios.

Os tokens estão em [`src/styles/tokens.css`](src/styles/tokens.css). Mudar
uma cor ali muda o site inteiro.

A landing original de página única ficou em
[`referencia/landing-v1.html`](referencia/landing-v1.html), como registro.

---

## Publicação

O build é estático: `npm run build` gera `dist/`, que roda em qualquer
hospedagem.

Por ser uma SPA, o servidor precisa devolver `index.html` em qualquer rota,
senão `/colecao/003` dá 404 ao recarregar. Já vão no repositório:

- `public/_redirects` — Netlify
- `vercel.json` — Vercel

Para outra hospedagem, configure o mesmo *fallback* para `index.html`.

### SEO

O título e a descrição mudam por rota, mas quem lê a página é o JavaScript.
Para que buscadores e prévias de link vejam o conteúdo de cada coleção, o
passo seguinte é pré-renderizar o build (`vite-plugin-ssg` ou migrar para
Astro). Até lá, só a home tem metadados no HTML servido.
