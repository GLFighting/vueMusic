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

//使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
  if(to.path === '/register'){
    next();
  }else{
    let token = localStorage.getItem('token')
    if(token === 'null' || token === ''){
      next('/register')
    }else{
      next()
    }
  }
})

export default router