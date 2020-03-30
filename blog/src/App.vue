<template>
<div id="app">
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss">
* {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}
body,
html {
    width: 100vw;
    margin: 0;
    padding: 0;
    background: linear-gradient(45deg, #282828, #371c57a6);
}
</style>
