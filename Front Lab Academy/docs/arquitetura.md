# Arquitetura

## Visão geral

O projeto é uma aplicação multipágina estática construída com Vite. Os HTMLs em `src/pages` são entradas independentes; todos carregam `src/script.js` e `src/styles/style.css`. O Vercel publica `dist` e aplica os aliases definidos na raiz.

## Diretórios

- `src/pages`: documentos e pontos de entrada;
- `src/data`: trilhas, módulos, práticas e roteiro estruturados;
- `src/features`: regras reutilizáveis de navegação, progresso, tema e Mini IDE;
- `src/ui`: geradores de marcação sem acesso direto ao armazenamento;
- `src/utils`: escaping, slug e armazenamento defensivo;
- `src/styles`: estilos globais e responsivos;
- `public`: arquivos copiados sem transformação;
- `test`: testes unitários com `node:test`.

## Fluxo

`script.js` identifica os elementos existentes na página, lê os dados, inicializa as features e renderiza somente a jornada correspondente. Estado de tema, rascunhos e progresso fica no navegador. Conteúdo do usuário é executado em `iframe` sandboxado.

`npm run build` reúne as entradas declaradas em `vite.config.ts`; `dist` é o artefato de deploy. Pull requests executam lint, testes, build, links, acessibilidade, Lighthouse e CodeQL.

## Evolução

Renderizadores devem migrar gradualmente para `src/ui`, comportamentos para `src/features` e acesso ao storage para `src/utils`. Novos serviços remotos devem entrar atrás de adaptadores, mantendo a experiência local funcional.
