<template>
<div id="app">
  <MainNavigation />
  <transition name="slide" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>
<script>
import MainNavigation from './components/Elements/MainNavigation'
import Constants from './utils/Constants'
export default {
  name: "app",
  components: {
    MainNavigation
  },
  data() {
    return {}
  },
  methods: {},
  created() {
    this.$store.commit(Constants.CHECK_TOKEN_STATUS)
  }
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
    height: 100vh;
    margin: 0;
    padding: 0;
    background: linear-gradient(45deg, #282828, #371c57a6);
    overflow: auto;
}
.slide-enter-active {
    animation: slide-in 0.2s ease-out;
}
.slide-leave-active {
    animation: slide-out 0.2s ease-out;
}
@keyframes slide-in {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes slide-out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}
</style>
