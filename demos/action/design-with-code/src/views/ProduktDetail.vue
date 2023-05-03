<template>
  <main>
    <h1>{{ product.name }}</h1>
    <img :src="product.image" />

    <hr />

    <p>
      Aktueller Preis: <span class="price">{{ product.currentPrice }}€</span>
    </p>
  </main>
</template>

<script>
import products from '../assets/products'

export default {
  props: ['id'],
  computed: {
    product() {
      const id = Number(this.id)
      return products.find((product) => product.id === id)
    },
  },
}
</script>

<style scoped>
img,
hr {
  margin-bottom: 1rem;
}

.price {
  color: rebeccapurple;
  font-weight: 600;
}
</style>
