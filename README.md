<div align="center">

# 🌀 HypeMind — Reborn

**Segunda geração do HypeMind: coletivo criativo de uma pessoa só, agora em Next.js, com texto ASCII em shader WebGL e trilha sonora de fundo.**

Um espaço deliberadamente estranho — colagem de imagens espalhadas, tipografia distorcida em tempo real e som ambiente. A antítese do portfólio corporativo.

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js_0.176-000000?style=for-the-badge&logo=three.js&logoColor=white)

[**🔗 Ver o site**](https://hpmnd-reborn.vercel.app)

</div>

---

## 📖 Sobre o projeto

O **HypeMind** nasceu como um coletivo criativo de uma pessoa só: um lugar para colocar ideias no mundo sem a formalidade de um portfólio. A [primeira versão](https://github.com/Jlvieira0909/hypemind) foi feita em Create React App; esta é a reconstrução em Next.js, com o visual mais ousado e experimentos de WebGL.

O espírito é o mesmo — a execução ficou mais interessante.

## ✨ Destaques técnicos

### 🔤 `AsciiText` — tipografia em shader

Componente que renderiza texto como arte ASCII animada usando **Three.js com shaders GLSL customizados**. O vertex shader deforma a geometria com funções seno moduladas por tempo e posição do mouse, criando ondulação contínua.

```glsl
transformed.x += sin(time + position.y) * 0.5 * waveFactor;
```

Uniforms expostos: `uTime`, `mouse` e `uEnableWaves` — permitem ligar ou desligar a ondulação e reagir ao cursor.

### 🎵 `BackgroundAudio` — trilha em loop

Áudio ambiente em loop a 20% de volume. A implementação lida corretamente com a política de autoplay dos navegadores: em vez de tentar tocar no mount (e falhar), ela registra um listener `click` com `{ once: true }` e inicia o som na primeira interação do usuário.

O listener é removido no cleanup e falhas de reprodução são capturadas em `catch` com `console.warn`, em vez de estourarem sem tratamento.

### 🖼️ Colagem de fundo

A home espalha imagens posicionadas individualmente (`ImageCroc`, `ImageCat`, `ImageReaper`, `ImageShock`, `ImageMummy`) pelo layout, criando uma composição de colagem em vez de um grid.

## 🗂️ Páginas

| Rota | Conteúdo |
| ---- | -------- |
| `/` | Home com texto ASCII, colagem de imagens e áudio |
| `/aboutme` | Sobre |
| `/projects` | Grade de cards de projeto |
| `/contact` | Contato |

## 🛠️ Stack

| Tecnologia | Versão | Uso |
| ---------- | ------ | --- |
| [Next.js](https://nextjs.org/) | 15 | Framework React (App Router + Turbopack) |
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Three.js](https://threejs.org/) | 0.176 | WebGL para o texto ASCII |
| CSS puro | — | Um arquivo por página/componente |

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm, yarn, pnpm ou bun

### Instalação e execução

```bash
git clone https://github.com/Jlvieira0909/hpmnd-reborn.git
cd hpmnd-reborn
npm install

npm run dev      # desenvolvimento (Turbopack)
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # ESLint
```

Abra [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura

```
hpmnd-reborn/
├── src/
│   ├── app/
│   │   ├── page.tsx + home.css       # home com colagem
│   │   ├── aboutme/
│   │   ├── projects/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── AsciiText/                # Three.js + shaders GLSL
│       ├── BackgroundAudio/          # trilha em loop
│       ├── NavBar/
│       ├── ProjectCard/
│       └── Footer/
└── next.config.ts
```

## 📋 Pontos de melhoria

- **Cards de projeto duplicados** — `/projects` tem três cards, mas dois são placeholders (`"Nothing to see here bro"`) com o mesmo nome e `href="/"`. Vale extrair os projetos para um array de dados e renderizar por `map`, como o [portfolio](https://github.com/Jlvieira0909/portfolio) faz com `projectsData.ts`.
- **Áudio sem controle de mute** — a trilha começa na primeira interação e não há botão para silenciar. Um toggle visível é cortesia básica com quem chega de fone.
- **Imagens sem `alt`** — as imagens da colagem têm `alt=""`. Decorativas de fato podem ficar assim, mas vale revisar caso alguma carregue significado.

## 🧩 Projetos relacionados

- [**hypemind**](https://github.com/Jlvieira0909/hypemind) — a primeira versão, em Create React App
- [**thegallery**](https://github.com/Jlvieira0909/thegallery) — a galeria de arte linkada em `/projects`
- [**portfolio**](https://github.com/Jlvieira0909/portfolio) — o portfólio profissional

## 🌐 Deploy

Hospedado na [Vercel](https://vercel.com/): **[hpmnd-reborn.vercel.app](https://hpmnd-reborn.vercel.app)**

---

<div align="center">

Feito com ❤️ por [João Luiz Vieira](https://github.com/Jlvieira0909)

</div>
