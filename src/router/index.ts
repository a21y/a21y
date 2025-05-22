import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('../views/brands.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/cv.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/code.vue')
    }
  ]
})

export default router
