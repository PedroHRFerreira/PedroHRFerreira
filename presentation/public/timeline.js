const timelineItems = [...document.querySelectorAll('#experiencia .timeline-item')]
let scheduled = false
let activeIndex = -1

function updateActiveMilestone() {
  scheduled = false
  const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom
  const readingLine = headerBottom + (window.innerHeight - headerBottom) * 0.35
  let nextIndex = -1
  let closestDistance = Infinity

  timelineItems.forEach((item, index) => {
    const bounds = item.getBoundingClientRect()
    if (bounds.bottom <= headerBottom || bounds.top >= window.innerHeight) return
    const distance = Math.abs(bounds.top - readingLine)
    if (distance < closestDistance) {
      closestDistance = distance
      nextIndex = index
    }
  })

  if (nextIndex < 0 || nextIndex === activeIndex) return
  timelineItems.forEach((item, index) => item.classList.toggle('is-active', index === nextIndex))
  activeIndex = nextIndex
}

function scheduleUpdate() {
  if (scheduled) return
  scheduled = true
  window.requestAnimationFrame(updateActiveMilestone)
}

if (timelineItems.length) {
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
  updateActiveMilestone()
}
