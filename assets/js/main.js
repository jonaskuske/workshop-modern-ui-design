import { $, create } from './utils.js'
import Vivus from './vivus.min.js'
import { showLines } from './lines.js'

const splashHeaderContainer = $('.splash-header-container')

function animateSplashLogo() {
  document.body.classList.add('overflow-hidden')
  const splash = $('.splash', splashHeaderContainer)
  const splashLogo = $('svg', splash)

  new Vivus(
    splashLogo,
    {
      type: 'oneByOne',
      duration: 110,
      pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
      onReady: () => {
        splashLogo.classList.remove('invisible')
        setTimeout(() => splashLogo.classList.add('show-dot'), 1250)
      },
    },
    () => {
      splash.classList.add('splash--visible')
      setTimeout(() => {
        document.body.classList.remove('overflow-hidden')
        splashHeaderContainer.classList.remove('h-full')
        showLines()
      }, 700)
    }
  )
}

if (splashHeaderContainer.classList.contains('h-full')) {
  animateSplashLogo()
} else showLines()

if (typeof IntersectionObserver !== 'undefined') {
  const observedBtn = $('.js-observed-signup')
  const headerBtn = $('.btn-signup')

  const observer = new IntersectionObserver(
    ([btn]) => {
      if (btn.isIntersecting) headerBtn.classList.remove('lg:max-w-full')
      else headerBtn.classList.add('lg:max-w-full')
    },
    { rootMargin: '-64px 0px 0px' }
  )

  observer.observe(observedBtn)
} else headerBtn.classList.add('lg:max-w-full')
