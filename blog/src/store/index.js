import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isTokenAvaible: false,
    posts: [],
    postToEdit: [],
    showEditPost: false
  },
  mutations: {
    SET_POST(state, post) {
      state.postToEdit = post[0]
    },
    CHECK_TOKEN_STATUS(state) {
      if (localStorage.getItem('token')) {
        document.getElementsByTagName('body')[0].style = 'padding-top: 20px'
        state.isTokenAvaible = true
      } else {
        state.isTokenAvaible = false
      }
    },
    async GET_LIST_OF_POSTS(state) {
      try {
        const {
          data
        } = await Vue.http.get('http://localhost:5000/api/posts')
        state.posts = data
      } catch (e) {
        console.log(e);
      }
    }
  },
  actions: {},
  modules: {}
})
