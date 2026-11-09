# Pedro Henrique Rodrigues

**Engenheiro de Software Full Stack · Web, Mobile e IA**

[Portfólio](https://pedrohrferreira.com/) · [GitHub](https://github.com/PedroHRFerreira) · [LinkedIn](https://www.linkedin.com/in/pedrohr-dev/) · [Currículo em PDF](https://github.com/PedroHRFerreira/PedroHRFerreira/blob/main/docs/curriculo-pedro-henrique-rodrigues.pdf)

> Sempre aprendendo. Sempre refatorando. Sempre melhorando.

**Nesta apresentação:** [Sobre mim](#sobre-mim) · [Tecnologias](#tecnologias-e-práticas) · [Experiência](#experiência-em-produtos) · [Projetos](#projetos-para-conhecer) · [Qualidade](#qualidade-na-prática) · [Formação](#comunidade-e-formação) · [Contato](#vamos-conversar)

## Sobre mim

Sou desenvolvedor Full Stack desde março de 2023, com experiência em produtos digitais, plataformas de pagamentos e projetos próprios. Atuo da definição da arquitetura à implementação, aos testes e à evolução em produção.

Minha experiência combina interfaces com TypeScript, Vue/Nuxt e React/Next.js; APIs e microsserviços com Go, Node.js, Laravel e Python/FastAPI; e aplicações mobile com React Native e Expo. Também desenvolvo funcionalidades com IA generativa e ferramentas para melhorar o trabalho com agentes de código.

Gosto de transformar problemas concretos em software claro, testável e fácil de evoluir, conectando decisões técnicas às necessidades de quem usa o produto.

## Tecnologias e práticas

| Área | Tecnologias e abordagem |
| --- | --- |
| Front-end | TypeScript, JavaScript, Vue 3, Nuxt, React, Next.js, Pinia e SCSS |
| Back-end | Go, Echo, Node.js, PHP/Laravel e Python/FastAPI |
| Mobile | React Native e Expo |
| Dados | PostgreSQL, MySQL, Redis e SQLite |
| Arquitetura | APIs REST, BFF, Micro Frontends, Atomic Design e componentes reutilizáveis |
| Qualidade e entrega | Vitest, Vue Test Utils, Playwright, Docker, GitHub Actions, SonarQube e Sentry |
| IA e ferramentas | LLMs, RAG, MCP, recuperação de contexto e governança de agentes |

## Experiência em produtos

### Braip

**Engenheiro de Software · setembro de 2023 – atual**  
**Desenvolvedor de Aplicativos Móveis · março a setembro de 2023**

Ingressei na empresa como aprendiz em março de 2022 e passei a atuar com desenvolvimento mobile em março de 2023.

- **Braip Shop / Live Commerce (março de 2026 – atual):** construí o front-end com Micro Frontends e Atomic Design, integrando as APIs por meio de um BFF. Também participei do pipeline de qualidade e entrega.
- **App Braip v2 (outubro de 2025 a fevereiro de 2026):** participei do desenvolvimento em React Native/Expo, da concepção à publicação nas lojas e à evolução em produção.
- **IA no Braip Members (outubro de 2025 a janeiro de 2026):** implementei APIs em Python/FastAPI para gestão de tutores, system prompts e integração de contexto por RAG.
- **Plataformas e pagamentos:** desenvolvo interfaces, APIs e microsserviços com Vue/Nuxt, React, TypeScript, Go, Node.js e Laravel.
- **Desenvolvimento mobile em 2023:** desenvolvi e integrei funcionalidades de um aplicativo financeiro e participei de testes, builds e publicação nas lojas.

### Projetos como freelancer

No **ERP EMPI Autocenter**, levantei requisitos e desenvolvi uma solução para gestão de clientes, estoque e pagamentos, com Nuxt 4, Vue 3, Go/Echo/GORM e PostgreSQL. Implementei testes unitários e E2E com Vitest, Playwright e Go.

Também desenvolvi o **[site institucional da EMPI](https://github.com/PedroHRFerreira/empi)**, usando Next.js, React, TypeScript e SCSS.

## Projetos para conhecer

### [Rods SDK](https://github.com/PedroHRFerreira/rods-sdk)

Criei o Rods SDK a partir de dificuldades do trabalho com agentes de IA: recuperar contexto, organizar instruções e acompanhar o fluxo de desenvolvimento. É um framework open source em TypeScript, publicado no npm.

O projeto reúne três frentes:

- **Recuperação de contexto:** indexação em trechos com SQLite FTS5, busca direcionada e leitura apenas do contexto relevante.
- **Governança versionada:** regras e skills em `.ai/`, com adaptadores para sincronizar instruções entre ferramentas.
- **Execução e validação:** integração com CLIs de agentes, trabalho em worktrees isoladas, etapas de desenvolvimento e revisão e execução de testes configurados pelo projeto.

A compactação de saídas de comandos usa RTK. O README também registra o estado de cada recurso e os limites das integrações; a execução de ponta a ponta com inferência estritamente local ainda está em desenvolvimento.

**Para explorar:** [documentação e uso](https://github.com/PedroHRFerreira/rods-sdk#readme), [código-fonte](https://github.com/PedroHRFerreira/rods-sdk/tree/main/src) e [testes](https://github.com/PedroHRFerreira/rods-sdk/tree/main/test).

### [ERP EMPI](https://github.com/PedroHRFerreira/erp-empi)

Sistema para a operação administrativa de uma oficina. O trabalho começou pelo levantamento de requisitos e inclui clientes, estoque, recibos e pagamentos.

O front-end usa Nuxt 4, Vue 3, TypeScript e Pinia, com Nitro como BFF. A API usa Go, Echo e GORM, com PostgreSQL e execução via Docker Compose.

Alguns pontos concretos do fluxo:

- Cadastro automático do cliente ao criar um recibo.
- Recibos com produtos utilizados e estados pendente ou pago.
- Baixa no estoque uma única vez ao marcar o recibo como pago.
- Consulta e manutenção do estoque, com paginação e impressão/PDF.

**Para explorar:** [fluxos documentados](https://github.com/PedroHRFerreira/erp-empi#fluxos-do-mvp), [front-end](https://github.com/PedroHRFerreira/erp-empi/tree/main/frontend) e [organização do back-end](https://github.com/PedroHRFerreira/erp-empi/tree/main/internal).

### [Rods Leet](https://rodsleet.com/)

Plataforma em React e TypeScript para praticar programação com desafios, trilhas e acompanhamento de progresso.

Nasceu da vontade de continuar exercitando lógica, algoritmos e estruturas de dados enquanto uso IA no dia a dia. A proposta é criar espaço para entender o problema, construir uma solução e manter os fundamentos em prática. O projeto começou como uma ferramenta pessoal e foi aberto para outras pessoas usarem e enviarem feedback.

### [ARCA Tracker](https://github.com/PedroHRFerreira/arca-tracker)

Aplicativo mobile para acompanhar uma carteira pela metodologia ARCA. Usa React Native/Expo e uma abordagem local-first: planejamento e carteira ficam no SQLite do aparelho.

A organização separa a interface mobile, os cálculos de domínio e os serviços de integração. Essa divisão fica visível em decisões como:

- Cálculos financeiros puros e contratos compartilhados em `packages/domain`.
- Consulta de cotações por um proxy separado da aplicação.
- Importação de documentos com leitura local, conferência e confirmação antes de gravar operações.
- Integração bancária pessoal opcional em um serviço privado de leitura, separado das cotações públicas.

O foco é acompanhamento e planejamento; o aplicativo não executa ordens de investimento.

**Para explorar:** [estrutura documentada](https://github.com/PedroHRFerreira/arca-tracker#estrutura), [regras de domínio](https://github.com/PedroHRFerreira/arca-tracker/tree/main/packages/domain) e [documentação das integrações](https://github.com/PedroHRFerreira/arca-tracker/tree/main/docs).

### [Rods Themes](https://github.com/PedroHRFerreira/rods-themes)

Coleção de temas para VS Code e JetBrains, publicada nos marketplaces dos editores. Os temas combinam fundos escuros e cores neon inspiradas em seleções de futebol.


## Qualidade na prática

Nos meus trabalhos, qualidade aparece tanto nos testes quanto na organização da entrega:

- **Componentes:** na BigBot UI, escrevi testes de renderização, propriedades, eventos e estados com Vitest e Vue Test Utils, além da documentação da API.
- **Fluxos completos:** no ERP EMPI, implementei testes unitários e E2E com Vitest, Playwright e Go.
- **Entrega e acompanhamento:** no Braip Shop, participei do pipeline com SonarQube, Sentry e CI/CD.
- **Validação de agentes:** no Rods SDK, o fluxo pode executar o comando de testes configurado antes da etapa de revisão e preservar o patch quando o resultado não é aprovado.

## Comunidade e formação

- **BigBot Community · Curador Front-end (janeiro a junho de 2026):** desenvolvi e adaptei componentes de formulário e calendário com Vue 3 e TypeScript, testes em Vitest/Vue Test Utils e documentação de API.
- **Bacharelado em Ciência da Computação · Anhanguera Educacional:** em andamento, com conclusão prevista para 2030.

## Vamos conversar

Tenho interesse em produtos com desafios de arquitetura, integração, qualidade e experiência de desenvolvimento.

Para conhecer meu trabalho ou conversar sobre projetos e oportunidades: [LinkedIn](https://www.linkedin.com/in/pedrohr-dev/) · [Portfólio](https://pedrohrferreira.com/).
