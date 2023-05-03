<template>
  <div class="app">
    <Header></Header>

    <transition name="fade" mode="out-in">
      <RouterView class="page" />
    </transition>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
export default {}
</script>

<style src="./assets/preflight.css"></style>
<style src="./assets/typography.css"></style>

<style>
/* Sorgt dafür, dass die Seite immer mindestens so hoch ist wie der Bildschirm */
html {
  width: 100%;
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.app,
.page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* Header & BottomNav bedecken oben und unten den Bildschirm, also darf hier kein Content hin  */
.app {
  padding-top: 60px;
  padding-bottom: 60px;
}

.page {
  padding: 0 16px;
}

/* Fade-Transition bei Navigation zwischen Seiten */
.fade-enter-active {
  transition: opacity 100ms ease-in;
}
.fade-leave-active {
  transition: opacity 100ms ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
