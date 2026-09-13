# Front Lab Academy

Site estático/interativo com HTML, Tailwind CSS (CDN), CSS custom e JavaScript puro.

O conteúdo é organizado por trilhas, módulos, práticas e páginas de apoio para estudo front-end.

A navegação foi pensada para consulta rápida durante aulas, revisões e exercícios.

## Scripts
- `npm run dev`
- `npm run build`
- `npm run preview`

## Automação
- `CI`: instala com `npm ci` e executa apenas scripts existentes entre `lint`, `typecheck`, `test` e `build`.
- `CodeQL`: análise semanal e em alterações na `main` para JavaScript/TypeScript.
- `Links`: verificação semanal e em alterações na `main` para links em Markdown e HTML.
- `Accessibility`: auditoria com `pa11y-ci` em páginas principais usando WCAG 2 AA.
- `Lighthouse`: auditoria de Performance, Accessibility, Best Practices e SEO.
- `Dependabot`: atualizações semanais de dependências npm e GitHub Actions, sem auto-merge.

### Thresholds do Lighthouse
- Accessibility: mínimo `0.90` e falha o workflow.
- Performance: mínimo `0.65` como aviso.
- Best Practices: mínimo `0.80` como aviso.
- SEO: mínimo `0.80` como aviso.

## Estrutura
- `src/pages/`: páginas HTML do site
- `src/styles/style.css`: tema, cards, bordas e responsividade
- `src/script.js`: filtros, busca, menu mobile, progresso e Mini IDE
- `src/data/`: trilhas, roteiro, práticas e apostilas
- `src/features/`: módulos preparados para comportamentos por domínio
- `src/ui/`: renderizadores compartilhados
- `src/utils/`: utilitários reutilizáveis

Sem React, sem login e sem área autenticada.
