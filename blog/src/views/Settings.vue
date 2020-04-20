<template>
<div class="settings-container">
  <div class="setting-title">
    <h4>Main Settings</h4>
  </div>
  <div class="setting-title">
    <h4>Add New User</h4>
  </div>
  <form onsubmit="event.preventDefault()">
    <input type="text" placeholder="name" v-model="name">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="registerNewUser">Submit</button>
    <span style="color: #fff;">{{message}}</span>
  </form>
</div>
</template>
<script>
import Constants from './../utils/Constants'

export default {
  name: "Settings",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async registerNewUser() {
      try {
        const {
          data
        } = await this.$http.post(Constants.SERVER_URL + `/register/`, {
          name: this.name,
          email: this.email,
          password: this.password
        })
        console.log(data);
        this.message = data.message
      } catch (e) {
        this.message = e.body
        console.log(e.body)
      }
    }
  },
  computed: {}
}
</script>
<style lang="scss">
.settings-container {
    display: grid;
    justify-content: center;
    grid-template-columns: 80%;
    .setting-title {
        color: #fff;
        border-bottom: 1px solid #ffcb5a;
    }
    form {
        width: 50%;
        input {
            margin-top: 1rem;
            width: 100%;
        }
        button {
            margin-top: 1rem;
            float: right;
        }
    }
}
</style>
