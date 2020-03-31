import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isTokenAvaible: false
  },
  mutations: {
    CHECK_TOKEN_STATUS(state) {
      if (localStorage.getItem('token')) {
        document.getElementsByTagName('body')[0].style = 'padding-top: 20px'
        state.isTokenAvaible = true
      } else {
        state.isTokenAvaible = false
      }
    }
  },
  actions: {},
  modules: {}
})