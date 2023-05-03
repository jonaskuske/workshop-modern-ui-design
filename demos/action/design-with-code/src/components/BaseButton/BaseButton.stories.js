import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Center } from '../../../.storybook/decorators'

export default {
  title: '02. Base Elements | Button',
  decorators: [withKnobs, Center],
}

export const Default = () => ({
  props: {
    buttonText: { default: text('Text', 'Klick mich') },
  },
  methods: {
    onClick: action('CLICK'),
  },
  template: '<BaseButton @click="onClick">{{ buttonText }}</BaseButton>',
})
