import AddingNewPost from '../views/AddingNewPost.vue';
import {
  beforeEnter
} from '../utils/beforeEnter.js';
export default [{
  path: '/newpost',
  component: AddingNewPost,
  name: 'AddingNewPost',
  beforeEnter
}];