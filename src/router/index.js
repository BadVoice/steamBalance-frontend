import { createRouter, createWebHistory } from 'vue-router'
import Shop from '@/components/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Form.vue')  
    },
    
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(()=> resolve({top:0, behavior: 'smooth'}), 300)
    })
    
  },

})


export default router
