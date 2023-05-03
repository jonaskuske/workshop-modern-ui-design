<template>
  <!-- Für Links innerhalb der App <RouterLink> statt <a> verwenden: -->
  <RouterLink :to="to">
    <span>{{ icon }}</span>
    <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  /* "to" und "icon" können jedes Mal neu definiert werden, wenn <BottomNavItem> verwendet wird */
  props: ['to', 'icon'],
}
</script>

<style scoped>
a {
  display: block;
  color: currentColor;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
}

span {
  display: block;
  font-size: 24px;
}
</style>
