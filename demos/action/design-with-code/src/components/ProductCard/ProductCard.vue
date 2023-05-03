<template>
  <RouterLink class="product-card" tag="div" :to="'/produkte/' + product.id">
    <p>{{ product.name }}</p>
    <img :src="product.image" />

    <div class="price-box">
      <p>{{ product.currentPrice }}€</p>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style scoped>
.product-card {
  position: relative;
  border: 1px solid black;
}

.price-box {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rebeccapurple;
  color: white;
  padding: 0.5rem 2rem;
  border-top-left-radius: 6px;
}
</style>
