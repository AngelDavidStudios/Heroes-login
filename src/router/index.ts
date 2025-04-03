import { createRouter, createWebHistory } from 'vue-router'
import HeroesPage from '@/modules/heroes/pages/HeroesPage.vue'


const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'LandingHeroes',
      props: true,
      component: HeroesPage
    }
  ]
})

export default router
