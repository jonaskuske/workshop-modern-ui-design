/** @type {Document['querySelector']} */
export const $ = (selector, root = document) => root.querySelector(selector)

/**
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} tag
 * @param attrs {Partial<HTMLElementTagNameMap[TagName]>}
 * @returns {HTMLElementTagNameMap[TagName]}
 */
export const create = (tag, attrs = {}) => {
  return Object.assign(document.createElement(tag), attrs)
}

export const polyfill = () => {
  if (!('scrollBehavior' in create('a').style)) {
    const polyfillSource = create('script', { src: './assets/js/smoothscroll.min.js' })
    document.head.appendChild(polyfillSource)
  }
}

export function detectScrollBar() {
  const body = document.body
  const el = body.appendChild(create('div'))

  el.style.cssText = `
  width:100px;height:100px;overflow:scroll !important;position:absolute;top:-100vh`

  const hasScrollbar = el.offsetWidth - el.clientWidth > 0
  if (hasScrollbar) document.documentElement.classList.add('scrollbar')

  body.removeChild(el)
  return hasScrollbar
}

export const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))
