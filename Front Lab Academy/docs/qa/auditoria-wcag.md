# Auditoria WCAG 2.2 AA inicial

## Escopo e método

Foram avaliadas as páginas públicas principais com inspeção de semântica, teclado, foco, nomes acessíveis, imagens, contraste e redimensionamento. A verificação automatizada usa Pa11y na CI; os testes manuais cobrem critérios que ferramentas não detectam.

## Achados priorizados

| Severidade | Achado | Recomendação |
| --- | --- | --- |
| média | conteúdos atualizados dinamicamente nem sempre anunciam o resultado | usar região de status nos contadores e estados vazios |
| média | iframe da Mini IDE exige contexto claro e isolamento contínuo | manter título, sandbox mínimo e aviso sobre execução local |
| baixa | auditoria manual pode divergir entre releases | registrar data e matriz a cada mudança visual relevante |

Não houve barreira crítica de teclado ou semântica no fluxo principal. Prioridade média deve ser tratada antes de adicionar novos widgets. A conformidade é um processo contínuo: CI verde não substitui teste com teclado, zoom, contraste e leitor de tela.
