# Segurança da Mini IDE

O preview executa código somente em `iframe` com `sandbox="allow-scripts"`, sem `allow-same-origin`, navegação superior, formulários ou pop-ups. Assim, o documento recebe origem opaca e não acessa o `localStorage` da aplicação principal.

Rascunhos são dados locais não sensíveis. Leituras, escritas e remoções possuem fallback quando o navegador bloqueia armazenamento. Não informe tokens, senhas ou dados pessoais no editor. A Mini IDE não promete contenção de consumo de CPU; em caso de loop infinito, recarregue a página. Novas permissões de sandbox exigem revisão de segurança.
