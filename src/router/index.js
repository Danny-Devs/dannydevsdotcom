import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogView,
    },
    {
      path: '/lab',
      name: 'lab',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LabView.vue'),
    },
  ],
})

export default router
