# Apresentação profissional

Página pública em https://perfil.pedrohrferreira.com. O conteúdo de `source.md` é uma cópia da apresentação do Gist: https://gist.github.com/PedroHRFerreira/9a9c99f7bd9c15c192132440554dfe1e.

## Atualizar

Edite `source.md` preservando os títulos das sete seções e gere a página:

```bash
npm ci
npm run build
```

O gerador mantém os textos e links da apresentação em HTML estático. `public/` contém a página, os estilos, o favicon, os cabeçalhos, o robots.txt e o sitemap. A página funciona sem JavaScript no navegador.

## Publicar

Com uma sessão Cloudflare autorizada para o domínio:

```bash
npx wrangler@4.151.3 deploy
```

`wrangler.jsonc` mantém o Worker existente e o domínio `perfil.pedrohrferreira.com`. Atualizar o Gist não altera esta página automaticamente: revise `source.md`, gere os arquivos e publique novamente.

## SEO e indexação

O gerador mantém título e descrição, URL canônica, prévias com a foto real e dados estruturados `WebSite`, `ProfilePage`, `Person` e `ImageObject`. Os identificadores conectam a página à pessoa e aos seus perfis públicos.

`robots.txt` e `sitemap.xml` são gerados com a URL pública do subdomínio. O conteúdo completo é entregue em HTML, sem depender de JavaScript no navegador.

A meta `google-site-verification` identifica a propriedade no Google Search Console. Ela é pública por definição e deve ser preservada para manter a verificação da conta proprietária. Após alterações relevantes, confira a URL e o sitemap no Search Console.

Indexação e posição nas buscas dependem do Google. Não adicione credenciais, avaliações, estatísticas ou informações profissionais que não possam ser comprovadas no conteúdo público.
