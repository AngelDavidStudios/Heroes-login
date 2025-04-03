import { createRouter, createWebHistory } from 'vue-router'
import HeroesPage from '@/modules/heroes/pages/HeroesPage.vue'
import AuthLanding from '@/modules/auth/layouts/AuthLanding.vue'
import LoginPage from '@/modules/auth/pages/LoginPage.vue'
import RegisterPage from '@/modules/auth/pages/RegisterPage.vue'
import NotFound404 from '@/modules/common/pages/NotFound404.vue'

const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    // Landing
    {
      path: '/',
      name: 'LandingHeroes',
      props: true,
      component: HeroesPage
    },

    //Auth
    {
      path: '/auth',
      name: 'LandingAuth',
      redirect: { name: 'Login' },
      component: AuthLanding,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: LoginPage
        },
        {
          path: 'register',
          name: 'Register',
          component: RegisterPage
        }
      ]
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404
    }
  ]
})

export default router
