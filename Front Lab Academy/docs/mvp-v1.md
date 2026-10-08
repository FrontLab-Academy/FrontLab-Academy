# MVP v1 — FrontLab Academy

## Objetivo

Validar se estudantes iniciantes conseguem escolher uma trilha, estudar os módulos, praticar no navegador e acompanhar o próprio avanço sem precisar criar uma conta.

## Escopo obrigatório

- catálogo de trilhas e módulos com busca e filtros;
- conteúdo progressivo de HTML, CSS e JavaScript;
- exercícios, desafios e projetos com instruções verificáveis;
- Mini IDE isolada para HTML, CSS e JavaScript;
- progresso salvo localmente e opção de backup;
- navegação responsiva, acessível e compatível com teclado;
- páginas públicas indexáveis e monitoradas pela CI.

## Fora do MVP

- conta de usuário e sincronização entre dispositivos;
- ranking, gamificação competitiva e Arena de Código online;
- pagamentos, certificados e recursos de monetização;
- autoria colaborativa de conteúdo pelo navegador.

## Critérios de sucesso

1. Um estudante conclui ao menos um módulo e uma prática sem ajuda externa.
2. O progresso permanece após recarregar a página.
3. As jornadas principais passam em testes funcionais, responsivos e WCAG 2 AA.
4. Build, lint, testes, links e auditorias obrigatórias passam na CI.

## Premissas, riscos e dependências

O MVP é estático e usa armazenamento local. Perda de dados é mitigada por exportação e importação. Recursos autenticados dependem de decisão de stack, modelagem de dados e política de privacidade. Conteúdo, acessibilidade e desempenho devem ser validados continuamente antes da expansão do catálogo.
