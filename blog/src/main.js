import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';
Vue.use(VueResource);
Vue.use(VueCarousel);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')