<template>
<div class="login-container">
  <form>
    <input type="text" name="" value="" v-model="username" placeholder="Email">
    <input type="password" name="" value="" v-model="password" placeholder="Password">
    <button type="button" name="button" @click="login(username, password)">login</button>
  </form>
</div>
</template>
<script>
import Constants from './../utils/Constants'
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(username, password) {
      try {
        const {
          data
        } = await this.$http.post("http://localhost:5000/api/login", {
          email: username,
          password: password
        })
        localStorage.setItem('token', data.token)
        this.$store.commit(Constants.CHECK_TOKEN_STATUS)
        if (data) {
          this.$router.push({
            path: "/"
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss">
.profile-img {
    width: 35px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 100%;
    vertical-align: middle;
    margin-left: 10px;
}
.login-container {
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
        color: #fff;
    }
    input,
    span {
        width: 100%;
        height: 30px;
        margin-top: 10px;
    }
    input {
        background-color: transparent;
        border: none;
        color: #fff;
        border-bottom: 1px solid #664391;
        padding-left: 1rem;
        margin-top: 1rem;
        &::placeholder {
            color: #fff;
        }
    }
    button {
        border: none;
        background-color: #664391;
        width: 8vw;
        padding: 0.4rem;
        justify-self: center;
        font-size: 14px;
        color: white;
        float: right;
    }
}
</style>
