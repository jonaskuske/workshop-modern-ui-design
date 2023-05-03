<template>
  <nav>
    <ul>
      <li>
        <BottomNavItem to="/feed" icon="📑">Feed</BottomNavItem>
      </li>
      <li>
        <BottomNavItem to="/preiswecker" icon="⏰">Preiswecker</BottomNavItem>
      </li>
      <li>
        <BottomNavItem to="/profil" icon="☃">Profil</BottomNavItem>
      </li>
      <li>
        <BottomNavItem to="/einstellungen" icon="⚙">Einstellungen</BottomNavItem>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 1px;
}

ul {
  height: 100%;
  display: flex;
  margin: auto;
  padding: 0;
  list-style: none;
}

li {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

li > :not(.router-link-active) {
  opacity: 0.5;
}
</style>
