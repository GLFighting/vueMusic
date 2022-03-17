import { createApp } from 'vue'
import App from './App.vue'

import router from './router'  //自动寻找文件夹下的index.ts
 
import { Button } from 'vant'; //引入vant组件

// import { key, store } from './store' //引入状态管理模块
import {createPinia} from 'pinia' //引入pinia状态管理模块

import './style/reset.css'

//创建pinia实例
const pinia = createPinia()

createApp(App)
  .use(router)
  .use(Button)
  // .use(store, key)
  .use(pinia)   //挂载
  .mount('#app')
