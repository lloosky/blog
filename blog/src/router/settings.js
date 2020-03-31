import Settings from '../views/Settings.vue';
import {
  beforeEnter
} from '../utils/beforeEnter.js';
export default [{
  path: '/settings',
  component: Settings,
  name: 'Settings',
  beforeEnter
}];