import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home.vue'
import Races from '@/views/Races.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Home 
    },
    { 
      path: '/races', 
      component: Races 
    },
  ]
});
export default router;