<template>
<div class="main-nav">
  <nav v-for="(menu, index) in navigationItems" :key="index">{{ menu.item }}</nav>
</div>
</template>

<script>
export default {
  name: 'Side',
  data() {
    return {
      navigationItems: [{
        item: "blog"
      }, {
        item: "about"
      }, {
        item: "contact"
      }]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.main-nav {
    width: 60%;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    justify-self: end;
    nav {
        color: #fff;
    }
}
</style>
