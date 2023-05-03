import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: '03. Components | BottomNav',
  parameters: { viewport: { defaultViewport: 'iphonex' } },
  decorators: [withKnobs],
}

export const BottomNav = () => '<BottomNav />'

export const BottomNavItem = () => ({
  props: {
    icon: { default: text('Icon (Emoji)', '🔗') },
    text: { default: text('Text', 'Beispiel') },
  },
  template: `
  <BottomNavItem to="/" :icon="icon">
    {{ text }}
  </BottomNavItem>`,
})
