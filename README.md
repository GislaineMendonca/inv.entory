# inv.entory pokémon

[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel)](http://inv-entory.vercel.app/)

![Project Status](https://img.shields.io/badge/status-concluído-green)
![React](https://img.shields.io/badge/react-18.2-blue)
![Typescript](https://img.shields.io/badge/typescript-5.0-bue)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-ff4154)
![Tailwind](https://img.shields.io/badge/tailwind-3.4-38bdf8)

> Um catálogo imersivo de Pokémon, desenvolvido com uma interface inspirada no universo gamer, incorporando efeitos 3D e um sistema de gerenciamento de inventário armazenado localmente.



## Sobre o Projeto

O **inv.entory** foi desenvolvido como um projeto de portfólio, com foco em Front-end moderno, consumindo a PokeAPI para construir uma experiência visual interativa.

Diferente de catálogos tradicionais, o projeto adota uma identidade visual inspirada em interfaces gamer, apostando em uma identidade visual **"Gamer UI"** (Dark Mode, Neon e Glassmorphism), sempre priorizando performance e fluidez. O principal objetivo foi demonstrar, na prática, o usa de APIs mais complexas, o gerenciamento de estados assíncronos (Server State) e a persistência de dados diretamente no navegador, sem a necessidade de um Back-end próprio.

## Funcionalidade

### 1. Catálogo e Exploração
- [x] **Paginação Inteligente:** Navegação numerada com uso de elipses para lidar com grandes quantidades de dados.
- [x] **Busca Híbrida:** Possibilidade de pesquisa tanto pelo nome do Pokémon quanto pelo seu ID numérico.
- [x] **Feedback Visual:** Implementação de Skeleton Loading durante o carregamento de telas de Empty State para melhorar a experiência do usuário.
- [x] **Efeitos 3D:** Cards com efeito de profundidade, sombras dinâmicas e animações ao passar o mouse.

### 2. Gestão de Inventário (Favoritos)
- [x] **Persistência de Dados:** Armazenamento dos favoritos no LocalStorage, mantendo os dados mesmo após recarregar ou fechar o navegador.
- [x] **Estado Global:** Gerenciamento centralizado dos favoritos, permitindo acesso consistente em diferentes componentes da aplicação.
- [x] **Interatividade:** Botão de favoritar com animações e feedback visual imediato.

### 3. Página de Detalhes (Estilo RPG)
- [x] **Ficha Técnica:** Exibição de atributos como HP, Ataque, Defesa e Velocidade, inspirada em interfaces de jogos de RPG.
- [x] **Barras de Progresso:** Representação visual dos status baseada nos atributos individuais de cada Pokémon.
- [x] **Tipagem Dinâmica:** Cores e efeitos visuais ajustados automaticamente conforme o tipo do Pokémon (Fogo, Água, Planta, etc).

### 4. Interface e Design System
- [x] **Identidade VIsual:** Design System consistente, com paleta de cores escuras e tons de roxo, além de tipografia monoespaçada.
- [x] **Responsividade:** Layout adaptável para diferentes resoluções, de dispositivos móveis a monitores ultrawide.
- [x] **Animações:** Transições suaves de entrada, navegação e interação, utilizando CSS e Framer Motion.  

## Tecnologias Utilizadas

* **Core:** React com Vite e TypeScript
* **Consumo de Dados:** TanStack Query (React Query) v5
* **Gerenciamento de Estado:** Zustand com persistência
* **Estilização:** Tailwind CSS e CSS Modules
* **Roteamento:** React Router DOM
* **Ícones:** Lucide React
* **API:** PokeAPI (REST)

## Aprendizados Técnicos

O desenvolvimento deste projeto contribuiu para o aprofundamento de conceitos importantes em React e Front-end:

1. **Server State vs Client State:** Compreensão da separação entre dados vindos da API, gerenciados pelo React Query, e o estado interno da aplicação, controlado pelo Zustand.
2. **Otimização de Perfomance:** Uso de paginação no nível da API para reduzir o volume de dados carregado no cliente.
3. **UI Engineering:** Construção de componentes mais avançados, como os cards com efeito 3D, utilizando propriedades como `transform`, `z-indez` e `overflow`.
4. **TypeScript e Tipagem Forte:** Aplicação de generics e tipagem das respostas da API para aumentar a previsibilidade e segurança do código.
5. **Arquitetura Orientada a Funcionalidade:** Organização do projeto por `features`, facilitando a manutenção, leitura e escalabilidade do código.

## Como rodar localmente

Clone o repositório e instale as dependências:

```bash
# Clone o respositório
git clone [https://github.com/GislaineMendonca/inv.entory.git](https://github.com/GislaineMendonca/inv.entory.git)

#Entre na pasta
cd inventory

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
