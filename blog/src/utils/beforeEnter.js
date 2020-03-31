export function beforeEnter(to, from, next) {
  let storageToken = localStorage.getItem('token');
  if (storageToken) {
    next();
    console.log('success');
  } else {
    next('/');
    console.log('error');
  }
}