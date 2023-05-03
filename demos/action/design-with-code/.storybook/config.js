import { configure, addDecorator, addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS as viewports } from '@storybook/addon-viewport'
import Router from 'storybook-vue-router'

// import global components
import '../src/components/registerAll'
// import global CSS
import '../src/assets/preflight.css'
import '../src/assets/typography.css'

addParameters({
  options: {
    panelPosition: 'right',
    storySort: (a, b) => console.log(a[1].id) || a[1].id.localeCompare(b[1].id),
  },
  viewport: { viewports },
})

addDecorator(Router())

const sources = [
  require.context('../stories', true, /\.stories\.js$/),
  require.context('../src/components', true, /\.stories\.js$/),
]

configure(sources, module)
