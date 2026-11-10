import { marked } from 'marked'

const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
const escape = text => text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

function parseDate(label) {
  const match = label.match(/^(\S+) de (\d{4})$/)
  const month = match ? months.indexOf(match[1].toLowerCase()) : -1
  if (!match || month < 0) throw new Error(`Data da experiência inválida: ${label}`)
  return `${match[2]}-${String(month + 1).padStart(2, '0')}`
}

function renderMilestones(markdown) {
  let previousDate = ''
  const milestones = markdown.split(/^#### /m).slice(1).map(block => {
    const [header, ...paragraphs] = block.trim().split('\n')
    const fields = header.split('|').map(part => part.trim())
    if (fields.length !== 3) throw new Error(`Marco da experiência inválido: ${header}`)
    const [period, title, kind] = fields
    if (!['Cargo', 'Projeto'].includes(kind)) throw new Error(`Tipo de experiência inválido: ${kind}`)
    const dates = period.split(' – ')
    if (dates.length > 2) throw new Error(`Período da experiência inválido: ${period}`)
    const startDate = parseDate(dates[0])
    if (startDate < previousDate) throw new Error('Os marcos da experiência devem seguir a ordem cronológica.')
    previousDate = startDate
    if (dates[1] && dates[1] !== 'atual' && parseDate(dates[1]) < startDate) {
      throw new Error(`O término da experiência precede o início: ${period}`)
    }
    const renderedPeriod = dates.map(label => label === 'atual'
      ? 'atual'
      : `<time datetime="${parseDate(label)}">${escape(label)}</time>`
    ).join(' <span aria-hidden="true">—</span><span class="sr-only"> a </span> ')
    return { year: startDate.slice(0, 4), title, kind, renderedPeriod, content: marked.parse(paragraphs.join('\n').trim()) }
  })
  return `<ol class="career-timeline" aria-label="Trajetória na Braip em ordem cronológica">${milestones.map((item, index) => `
    <li class="timeline-item${index === 0 ? ' is-active' : ''}">
      <div class="timeline-date"><span class="timeline-year" aria-hidden="true">${item.year}</span><span class="timeline-period">${item.renderedPeriod}</span></div>
      <span class="timeline-node" aria-hidden="true"><span></span></span>
      <div class="timeline-copy"><span class="timeline-kind">${item.kind}</span><h4>${escape(item.title)}</h4>${item.content}</div>
    </li>`).join('')}</ol>`
}

export function renderExperience(markdown) {
  const [lead, ...groups] = markdown.split(/^### /m)
  return (lead.trim() ? marked.parse(lead) : '') + groups.map(group => {
    const [title, ...lines] = group.trim().split('\n')
    const body = lines.join('\n').trim()
    if (/^#### /m.test(body)) {
      const intro = body.split(/^#### /m)[0].trim()
      return `<div class="experience-group"><h3>${escape(title)}</h3>${intro ? marked.parse(intro) : ''}${renderMilestones(body)}</div>`
    }
    return `<article class="experience-freelance">${marked.parse('### ' + group)}</article>`
  }).join('')
}
