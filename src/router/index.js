import { createRouter, createWebHistory } from 'vue-router'
import EditjsView from '../views/EditjsView.vue';
import HelppageView from '../views/HelppageView.vue'
import HomeView from '../views/HomeView.vue'
import PdfexportView from '../views/PdfexportView.vue'
import SavedataView from '../views/SavedataView.vue'
import SigninView from '../views/SigninView.vue'
import SignoutView from '../views/SignoutView.vue'
import SignupView from '../views/SignupView.vue'
import useSessionStore from '../stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/edit_js',
      name: 'edit_js',
      component: EditjsView
    },

    {
      path: '/help_page',
      name: 'help_page',
      component: HelppageView
    },

    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    

    {
      path: '/pdf_export',
      name: 'pdf_export',
      component: PdfexportView
    },

    {
      path: '/save_data',
      name: 'save_data',
      component: SavedataView
    },

    {
      path: '/sign_in',
      name: 'sign_in',
      component: SigninView
    },

    {
      path: '/sign_out',
      name: 'sign_out',
      component: SignoutView
    },

    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignupView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useSessionStore();
  const requiresAuth = to.matched.some((recode) => recode.meta.requiresAuth);
  if (requiresAuth && !store.isLoggedln) {
    next({ path: '/sign_in', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
