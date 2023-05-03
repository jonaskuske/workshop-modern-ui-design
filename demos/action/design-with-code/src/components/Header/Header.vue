<template>
  <header>
    <RouterLink to="/" tag="span" class="logo-wrapper">
      <Logo class="logo" />
    </RouterLink>

    <input aria-label="Suche" placeholder="Suche..." />
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 1px;
  height: 60px;
  padding: 0 16px;
}

.logo-wrapper {
  /* Alles nach dem Logo möglichst weit nach rechts schieben */
  margin-right: auto;
  align-self: baseline;
}
.logo {
  margin-right: 2rem;
}

input {
  width: 100%;
  max-width: 32rem;
  align-self: center;
  height: 24px;
  border-radius: 4px;
  border: none;
  margin: 0;
  padding: 8px 16px;
  height: 32px;
  background: rgba(155, 41, 157, 0.25);
  color: #9b299d;
}
input::placeholder {
  color: #9b299d;
}
</style>
