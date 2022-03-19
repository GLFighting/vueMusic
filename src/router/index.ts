import path from 'path';
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/register'
    },
    {
      path: '/register',   //登陆注册
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/userLogin',   //登陆后，用户的登录界面
      name: 'userLogin',
      component: () => import('@/components/Login/LoginContainer.vue')
    },
    {
      path: '/userInfo',   //用户个人信息界面
      name: 'userInfo',
      component: () => import('@/components/Login/PersonInfo/PersonInfo.vue'),
      children: [
        {
          path: 'dynamiczone',
          name:'dynamiczone',
          component:()=>import('@/components/Login/PersonInfo/DynamicZone.vue')
        },
        {
          path: 'mainzone',
          name: 'mainzone',
          component: ()=>import('@/components/Login/PersonInfo/MainZone.vue')
        }
      ]
    },
    {
      path: '/baseinfo',  //个人基础信息
      name: 'baseinfo',
      component: ()=>import('@/components/Login/PersonInfo/inner/BaseInfo.vue')
    },
    {
      path: '/home',   //主界面
      name: 'home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: 'find',
          name: 'find',
          component: () => import('@/components/Find/Find.vue')
        },
        {
          path: 'podcast',
          name: 'podcast',
          component: () => import('@/components/PodCast/PodCast.vue')
        }
      ]
    }
  ]
})

//使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
  if (to.path === '/register') {
    next();
  } else {
    let token = localStorage.getItem('token')
    if (token === 'null' || token === '') {
      next('/register')
    } else {
      next()
    }
  }
})

export default router