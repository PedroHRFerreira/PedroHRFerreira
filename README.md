<p align="center">
  <img src="./assets/profile-header.svg" width="840" alt="Pedro Henrique Rodrigues — Software Engineer / Full Stack. Back-end, arquitetura e produtos digitais." />
</p>

<p align="center">
  <a href="https://pedrohrferreira.com"><img src="./assets/portfolio.svg" width="135" height="42" alt="Acessar meu portfólio" /></a>
  <a href="https://www.linkedin.com/in/pedrohr-dev/"><img src="./assets/linkedin.svg" width="130" height="42" alt="Meu LinkedIn" /></a>
  <a href="./docs/curriculo-pedro-henrique-rodrigues.pdf"><img src="./assets/resume-view.svg" width="158" height="42" alt="Visualizar currículo" /></a>
  <a href="https://github.com/PedroHRFerreira/PedroHRFerreira/raw/refs/heads/main/docs/curriculo-pedro-henrique-rodrigues.pdf"><img src="./assets/resume-download.svg" width="148" height="42" alt="Baixar currículo em PDF" /></a>
</p>

```ts
// pedro.ts
export const pedro = {
  nome: "Pedro Henrique Rodrigues",
  atuacao: "Software Engineer · Full Stack",
  local: "Governador Valadares, MG · Brasil",
  foco: ["Back-end", "Arquitetura"],

  stack: {
    linguagens: ["TypeScript", "Go", "Python", "PHP"],
    backend: ["Node.js", "FastAPI", "Laravel", "Echo"],
    frontend: ["Vue / Nuxt", "React / Next.js"],
    mobile: ["React Native", "Expo"],
    dados: ["PostgreSQL", "MySQL", "Redis", "SQLite"],
    testes: ["Vitest", "Playwright"],
    infra: ["Docker", "GitHub Actions"],
    ia: ["LLM", "RAG", "MCP"],
  },

  construindo: "Da arquitetura ao código em produção.",
  portfolio: "https://pedrohrferreira.com",
} as const;
```
