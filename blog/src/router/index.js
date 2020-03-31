import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from './about.js'
import blog from './blog.js'
import contact from './contact.js'
import login from './login.js'
import newpost from './newpost.js'
import users from './users.js'
import settings from './settings.js'
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, ...about, ...blog, ...contact, ...login, ...newpost, ...users, ...settings];
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router