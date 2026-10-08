# Checklist de acessibilidade

Data: 2026-10-08. Páginas prioritárias: home, trilhas, módulos, progresso e Mini IDE.

## Resultado

- navegação principal, menu móvel, filtros e editor alcançáveis por teclado;
- foco visível preservado em links, botões e campos;
- headings e regiões mantêm hierarquia compreensível;
- imagens informativas têm texto alternativo e decoração é ignorada;
- controles possuem rótulos e estados acessíveis;
- tema claro e escuro mantêm contraste nas superfícies principais;
- auditoria automatizada WCAG 2 AA configurada em `.pa11yci.json` e CI.

Não foram encontrados bloqueios críticos nesta rodada. Conteúdo dinâmico, novos componentes e alterações de cor devem repetir verificação manual com teclado e leitor de tela, além da automação. Limitação conhecida: automação não valida clareza textual nem toda experiência com tecnologia assistiva.
