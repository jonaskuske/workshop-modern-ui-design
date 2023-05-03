import { withKnobs, text, number } from '@storybook/addon-knobs'
import { AppPadding } from '../../../.storybook/decorators'

export default {
  title: '03. Components | ProductCard',
  parameters: { viewport: { defaultViewport: 'iphonex' } },
  decorators: [withKnobs, AppPadding],
}

const product = {
  name: 'Laptop',
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?w=500',
  currentPrice: 749,
}

export const ProductCard = () => ({
  props: {
    name: { default: text('Name', product.name) },
    image: { default: text('Bild', product.image) },
    currentPrice: { default: number('Preis', product.currentPrice) },
  },
  computed: {
    product() {
      const { name, image, currentPrice } = this
      return { name, image, currentPrice }
    },
  },
  template: '<ProductCard :product="product">',
})

export const List = () => ({
  data: () => ({ product }),
  props: { amount: { default: number('Anzahl', 7) } },
  template: `
  <div>
    <ProductCard v-for="i in amount" :product="product" />
  </div>`,
})
