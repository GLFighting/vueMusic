import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
	history: createWebHashHistory(),
  routes:[
    {
      path:'/',
      redirect:'/register'
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('@/views/Register.vue')
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('@/views/Home.vue'),
      children:[
        {
          path:'find',
          name:'find',
          component:()=>import('@/components/Find/Find.vue')
        },
        {
          path:'podcast',
          name:'podcast',
          component:()=>import('@/components/PodCast/PodCast.vue')
        }
      ]
    }
  ]
})
export default router