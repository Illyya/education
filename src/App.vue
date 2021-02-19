<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(78, 78, 78);
  user-select: none;
}

.app {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
