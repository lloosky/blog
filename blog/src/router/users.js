import Users from '../views/Users.vue';
import {
  beforeEnter
} from '../utils/beforeEnter.js';
export default [{
  path: '/users',
  component: Users,
  name: 'Users',
  beforeEnter
}];