import { $, create, wait } from './utils.js'

let markAsReady
const scriptReady = new Promise((resolve) => (markAsReady = resolve))
const script = create('script', { src: './assets/js/leader-line.min.js' })
script.onload = markAsReady

const primary = '#A11CF2'
const accent = '#11FED4'
const toPrimary = { startColor: 'rgba(19, 254, 212, 0.9)', endColor: primary }
const toAccent = { startColor: 'rgba(161,28,242,0.47)', endColor: accent }

const defaultConfig = {
  size: 6,
  hide: true,
  path: 'grid',
  startSocket: 'bottom',
  endSocket: 'top',
  endPlug: 'behind',
}

const config = [
  {
    start: $('.js-line-1'),
    end: $('.js-line-2'),
    startSocket: 'top',
    startSocketGravity: [-0.1, 0],
    gradient: { startColor: primary, endColor: accent },
  },
  {
    start: $('.js-line-2'),
    end: $('.js-line-3'),
    startSocketGravity: 1,
    gradient: toPrimary,
  },
  {
    start: $('.js-line-3'),
    end: $('.js-line-4'),
    gradient: toAccent,
  },
  {
    start: $('.js-line-4'),
    end: $('.js-line-5'),
    gradient: toPrimary,
    dash: true,
    endPlug: 'disc',
    endPlugSize: 2,
    endPlugColor: '#A11CF2',
    startSocket: 'right',
    startSocketGravity: [60, 0],
    endSocket: 'left',
    endSocketGravity: [-60, 0],
  },
]

export async function showLines() {
  document.head.appendChild(script)
  await scriptReady

  const lines = config.map((c) => new LeaderLine(Object.assign({}, defaultConfig, c)))

  for (const line of lines) {
    line.show('draw')
    await wait(370)
  }
}
