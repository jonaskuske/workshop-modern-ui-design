<template>
  <main>
    <h1>Feed</h1>

    <template v-for="product in products">
      <ProductCard :product="product" :key="product.name" class="product-card" />
    </template>
  </main>
</template>

<script>
import products from '../assets/products'

export default {
  data: () => ({ products }),
}
</script>

<style scoped>
.product-card {
  margin-bottom: 2rem;
}
</style>
