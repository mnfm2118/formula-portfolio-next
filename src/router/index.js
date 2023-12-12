import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useSessionStore from '../stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useSessionStore();
  const requiresAuth = to.matched.some((recode) => recode.meta.requiresAuth);
  if (requiresAuth && !store.isLoggedln) {
    next({ path: '/sing_in', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
