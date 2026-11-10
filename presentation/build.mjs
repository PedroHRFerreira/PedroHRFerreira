import fs from 'node:fs/promises'
import { marked } from 'marked'

const source = await fs.readFile(new URL('./source.md', import.meta.url), 'utf8')
const sections = [
  ['sobre', 'Sobre mim'],
  ['tecnologias', 'Tecnologias e práticas'],
  ['experiencia', 'Experiência em produtos'],
  ['projetos', 'Projetos para conhecer'],
  ['qualidade', 'Qualidade na prática'],
  ['formacao', 'Comunidade e formação'],
  ['contato', 'Vamos conversar']
]
const blocks = source.split(/^## /m).slice(1)
if (blocks.length !== sections.length) throw new Error('Confira as seções da apresentação antes de gerar a página.')
const content = blocks.map((block, index) => {
  const [title, ...lines] = block.split('\n')
  const [id, expectedTitle] = sections[index]
  if (title.trim() !== expectedTitle) throw new Error(`Seção inesperada: ${title}`)
  const body = lines.join('\n').trim()
  let rendered
  if (id === 'projetos' || id === 'experiencia') {
    const articles = body.split(/^### /m)
    const lead = articles.shift().trim()
    rendered = (lead ? marked.parse(lead) : '') + articles.map(article =>
      `<article class="${id === 'projetos' ? 'project' : 'experience'}">${marked.parse('### ' + article)}</article>`
    ).join('')
  } else rendered = marked.parse(body)
  return `<section id="${id}" class="content-section" aria-labelledby="heading-${id}"><div class="section-heading"><span class="section-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h2 id="heading-${id}">${expectedTitle}</h2></div><div class="section-body">${rendered}</div></section>`
}).join('\n')
const name = 'Pedro Henrique Rodrigues'
const title = `${name} — Engenheiro de Software Full Stack`
const description = `${name}, desenvolvedor Full Stack com foco em front-end. Projetos com Vue/Nuxt, React/Next.js, Go, React Native e IA.`
const origin = 'https://perfil.pedrohrferreira.com'
const profileUrl = origin + '/'
const personId = profileUrl + '#person'
const pageId = profileUrl + '#profile'
const websiteId = profileUrl + '#website'
const imageId = profileUrl + '#portrait'
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': websiteId,
      name, url: profileUrl, inLanguage: 'pt-BR',
      publisher: { '@id': personId }
    },
    {
      '@type': 'ProfilePage', '@id': pageId,
      name: title, url: profileUrl, description, inLanguage: 'pt-BR',
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      primaryImageOfPage: { '@id': imageId }
    },
    {
      '@type': 'Person', '@id': personId,
      name, alternateName: 'PedroHRFerreira',
      jobTitle: 'Engenheiro de Software Full Stack',
      url: profileUrl, description,
      mainEntityOfPage: { '@id': pageId },
      image: { '@id': imageId },
      sameAs: ['https://github.com/PedroHRFerreira', 'https://www.linkedin.com/in/pedrohr-dev/', 'https://pedrohrferreira.com/']
    },
    {
      '@type': 'ImageObject', '@id': imageId,
      contentUrl: profileUrl + 'avatar.jpg',
      url: profileUrl + 'avatar.jpg',
      caption: `Foto de ${name}`, width: 460, height: 460,
      representativeOfPage: true
    }
  ]
}
const navigation = sections.map(([id, title]) => `<a href="#${id}">${title}</a>`).join('')
const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="author" content="${name}">
  <meta name="google-site-verification" content="EYzHzNoys3lH05o-g-DAPX6S4sonNggF3fvBN5gS9Jo">
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#f7f8f5">
  <link rel="canonical" href="${origin}/">
  <meta property="og:type" content="profile">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${name}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${origin}/">
  <meta property="og:image" content="${origin}/avatar.jpg">
  <meta property="og:image:width" content="460">
  <meta property="og:image:height" content="460">
  <meta property="og:image:alt" content="Foto de ${name}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${origin}/avatar.jpg">
  <meta name="twitter:image:alt" content="Foto de ${name}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  <header class="site-header"><div class="header-inner">
    <a class="brand" href="#inicio" aria-label="Pedro Henrique Rodrigues — início"><img class="brand-avatar" src="/avatar.jpg" alt="Foto de Pedro Henrique Rodrigues" width="42" height="42"><span class="brand-name">Pedro Henrique Rodrigues<span class="brand-caption">Engenheiro de Software</span></span></a>
    <nav class="header-nav" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#experiencia">Experiência</a><a href="#projetos">Projetos</a></nav>
    <nav class="header-links" aria-label="Links profissionais"><a href="https://github.com/PedroHRFerreira" aria-label="GitHub de Pedro Henrique Rodrigues" title="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.58 9.58 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.39.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg><span>GitHub</span></a><a href="https://www.linkedin.com/in/pedrohr-dev/" aria-label="LinkedIn de Pedro Henrique Rodrigues" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7m4-7v7m0-4c0-4 5-4 5 0v4"/><circle cx="7.5" cy="7.3" r=".9" fill="currentColor" stroke="none"/></svg><span>LinkedIn</span></a></nav>
  </div></header>
  <main id="conteudo">
    <section class="hero" id="inicio" aria-labelledby="nome">
      <div class="hero-copy"><p class="eyebrow"><span aria-hidden="true">✳</span> Apresentação profissional</p>
        <h1 id="nome">Pedro Henrique<br><span>Rodrigues.</span></h1>
        <p class="hero-role">Engenheiro de Software Full Stack <span>Web, Mobile e IA</span></p>
        <div class="hero-actions"><a class="button primary" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a><a class="button secondary" href="https://github.com/PedroHRFerreira/PedroHRFerreira/blob/main/docs/curriculo-pedro-henrique-rodrigues.pdf">Currículo em PDF <span aria-hidden="true">↓</span></a></div>
        <a class="portfolio-link" href="https://pedrohrferreira.com/">Conheça meu portfólio <span aria-hidden="true">↗</span></a>
      </div>
      <aside class="hero-note" aria-label="Uma ideia que guia meu trabalho"><span class="note-symbol" aria-hidden="true">“</span><blockquote>Sempre aprendendo.<br>Sempre refatorando.<br><em>Sempre melhorando.</em></blockquote><div class="note-signature"><span class="note-line" aria-hidden="true"></span> Código em constante evolução</div></aside>
    </section>
    <div class="reading-layout"><aside class="page-index"><nav aria-label="Nesta apresentação"><p class="index-label">Nesta apresentação</p>${navigation}</nav><a class="original-link" href="https://gist.github.com/PedroHRFerreira/9a9c99f7bd9c15c192132440554dfe1e">Apresentação no Gist <span aria-hidden="true">↗</span></a></aside><div class="reading-content">${content}</div></div>
  </main>
  <footer class="site-footer"><div><strong>Pedro Henrique Rodrigues</strong><p>Engenheiro de Software Full Stack · Web, Mobile e IA</p></div><a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a></footer>
</body>
</html>`
await fs.writeFile(new URL('./public/index.html', import.meta.url), html)
await fs.writeFile(new URL('./public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
await fs.writeFile(new URL('./public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`)
console.log('Apresentação gerada a partir das 7 seções do Gist.')
