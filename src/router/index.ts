import path from 'path'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
	history: createWebHashHistory(),
  routes:[
    {
      path:'/',
      redirect:''
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../components/Login/Container.vue')
    }
  ]
})
export default router