<template>
<header>
  <SubNavigation />
  <div class="main-nav">
    <div class="navigationItems">
      <router-link to="/">
        <div class="logo">
          <span>#personal<strong>BLOG</strong></span>
        </div>
      </router-link>
    </div>
    <div class="menu-items">
      <nav v-for="(menu, index) in navigationItems" :key="index">
        <router-link :to="menu.to">{{menu.item}}</router-link>
      </nav>
    </div>
  </div>
</header>
</template>

<script>
import SubNavigation from './SubNavigation'
export default {
  components: {
    SubNavigation
  },
  name: 'MainNavigation',
  data() {
    return {
      navigationItems: [{
        item: "blog",
        to: '/blog'
      }, {
        item: "about",
        to: '/about'
      }, {
        item: "contact",
        to: '/contact'
      }]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
header {
    width: 100vw;
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
}
.navigationItems {
    width: 30%;
    a {
        text-decoration: none;
        &:active {
            text-decoration: none;
        }
    }
    .logo {
        width: 100%;
        border: 1px solid #fff;
        padding: 0.4rem 1rem;
        color: #fff;
        font-size: 20px;
        justify-self: start;
        border-bottom-right-radius: 25px;
        border-top-left-radius: 25px;
        background-color: #6643914d;
    }
}
.main-nav {
    width: 80%;
    cursor: pointer;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    padding: 2rem;
    .menu-items {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-items: end;
        nav {
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
</style>
