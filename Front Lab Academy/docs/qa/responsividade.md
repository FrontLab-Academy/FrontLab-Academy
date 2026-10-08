# Validação responsiva

Data: 2026-10-08. Escopo: home, trilhas, módulos, progresso e Mini IDE.

## Matriz executada

| Largura | Perfil | Resultado |
| --- | --- | --- |
| 360 × 800 | celular | sem overflow horizontal; menu móvel e controles utilizáveis |
| 768 × 1024 | tablet | grids refluem e textos permanecem legíveis |
| 1440 × 900 | desktop | conteúdo respeita largura máxima e navegação não sobrepõe |

Foram inspecionados header, menu, footer, cards, grids, botões, editores e iframe. As regras globais incluem contenção de mídia, quebra de texto e breakpoints para navegação, cartões e editor. Nenhuma sobreposição grave foi encontrada no escopo atual.

## Regressão

Mudanças visuais devem repetir esta matriz, conferir zoom a 200%, orientação paisagem e teclado. Overflow deve ser corrigido no componente de origem, não ocultado globalmente. Evidências visuais devem acompanhar PRs que alterem layout.
