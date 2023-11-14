import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'; 
import AuthenticationView from '../views/AuthenticationView.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/authentication',
    name: 'authentication',
    component: AuthenticationView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // Перевірка, чи потрібна автентифікація для цього маршруту
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !store.state.auth.isLoggedIn) {
    // Якщо користувач не авторизований, перенаправляємо його на сторінку входу
    next('/authentication');
  } else {
    next();  // Якщо все гаразд, дозволити перехід
  }
});

export default router;
