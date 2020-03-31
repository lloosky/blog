<template>
<div class="sub-nav" v-if="isTokenAvaible">
  <div class="menu-items">
    <nav>
      <router-link to="/newpost"> Add post </router-link>
      <img src="https://img.icons8.com/ios/50/000000/add.png" />
    </nav>
    <nav>
      <router-link to="/blog"> Posts </router-link>
      <img src="https://img.icons8.com/ios/50/000000/list.png" />
    </nav>
    <nav>
      <router-link to="/users"> Users </router-link>
      <img src="https://img.icons8.com/ios/50/000000/gender-neutral-user.png" />
    </nav>
    <nav>
      <router-link to="/settings"> Settings </router-link>
      <img src="https://img.icons8.com/ios/50/000000/settings.png" />
    </nav>
    <nav @click="logout"> Logout <img src="https://img.icons8.com/ios/50/000000/exit.png" /></nav>
  </div>
</div>
</template>

<script>
import Constants from '../../utils/Constants'
export default {
  name: 'Side',
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push({
        path: '/login'
      })
      this.$store.commit(Constants.CHECK_TOKEN_STATUS)
      document.getElementsByTagName('body')[0].style = ''
    }
  },
  computed: {
    isTokenAvaible() {
      return this.$store.state.isTokenAvaible
    }
  }
}
</script>
<style lang="scss">
.sub-nav {
    width: 100%;

    background-color: #ffcb5a;
    border-bottom: 2px solid #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    .menu-items {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        height: 40px;
        align-content: center;
        justify-items: center;
        cursor: pointer;
        nav {
            display: flex;
            align-items: center;
            font-weight: bold;
            a {
                text-decoration: none;
                color: #000;
                &:active {
                    text-decoration: none;
                    color: #000;
                }
            }
            img {
                margin-left: 10px;
                height: 20px;
            }
        }
    }
}
</style>
