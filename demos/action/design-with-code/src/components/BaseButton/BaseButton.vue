<template>
  <button v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  padding: 5px 10px;
  text-transform: uppercase;
  background: rebeccapurple;
  color: #fff;
  font-weight: 600;
}
button:hover,
button:focus {
  opacity: 0.8;
}
</style>
