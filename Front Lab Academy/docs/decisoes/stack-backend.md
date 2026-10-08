# Decisão de stack backend

## Necessidades do MVP evoluído

O backend deverá oferecer autenticação, progresso por usuário, catálogo de desafios, tentativas e uma base para ranking. A equipe precisa de baixo custo inicial, migrações reproduzíveis e integração simples com o front-end Vite.

## Opções consideradas

| Opção | Vantagens | Limitações |
| --- | --- | --- |
| Node.js + Fastify + PostgreSQL | mesma linguagem do front-end, validação explícita, portável | exige operar API e banco |
| Supabase | auth e banco prontos, início rápido | maior acoplamento ao fornecedor |
| Firebase | infraestrutura gerenciada | modelo documental menos adequado aos relacionamentos |

## Decisão

Usar **Node.js LTS, TypeScript, Fastify e PostgreSQL**, com Drizzle ORM para migrações e consultas. A API será REST com contratos OpenAPI. Senhas, quando houver credenciais locais, serão tratadas por biblioteca consolidada e sessões usarão cookies `HttpOnly`, `Secure` e `SameSite=Lax`.

O deploy pode começar em um serviço gerenciado compatível com contêiner e PostgreSQL. A escolha do provedor fica desacoplada do código e deve considerar região, backup, observabilidade e custo vigente no momento da contratação.

## Próximos passos

1. validar a modelagem e política de retenção;
2. criar workspace separado para a API;
3. publicar OpenAPI e migrações na CI;
4. implementar autenticação antes das APIs dependentes de usuário;
5. adicionar testes de contrato e integração com PostgreSQL efêmero.
