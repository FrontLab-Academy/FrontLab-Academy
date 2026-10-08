# Testes funcionais

Data: 2026-10-08. Resultado: jornadas principais aprovadas no build local.

## Checklist executado

- [x] navegação entre páginas e retorno pela marca;
- [x] busca, filtros, estado vazio e limpeza em trilhas;
- [x] abertura de trilha por query string e módulo por hash;
- [x] conclusão, persistência e resumo de progresso;
- [x] listagem e detalhe de exercícios, desafios e projetos;
- [x] execução e redefinição da Mini IDE global e embutida;
- [x] tema e menu móvel persistem sem bloquear navegação;
- [x] URL inválida apresenta a página 404.

## Procedimento de regressão

Executar `npm test`, `npm run lint` e `npm run build`; iniciar o preview; percorrer a lista acima com armazenamento vazio e novamente com progresso existente. Para falhas, abrir issue com URL, ambiente, passos, resultado atual, esperado e evidência. Nenhum novo defeito bloqueante foi identificado nesta rodada.
