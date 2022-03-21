import { createApp } from 'vue'
import App from './App.vue'

import router from './router'  //自动寻找文件夹下的index.ts
 
import { Button , NavBar , Col , Row , Icon , Sticky , Tab, Tabs , Cell, CellGroup , ConfigProvider , Loading } from 'vant'; //引入vant组件

// import { key, store } from './store' //引入状态管理模块
import {createPinia} from 'pinia' //引入pinia状态管理模块

import './style/reset.css'

//创建pinia实例
const pinia = createPinia()

createApp(App)
  .use(router)
  .use(ConfigProvider)  //vant的css全局配置
  .use(Button)  //vant的button组件
  .use(NavBar)  //vant的navbar组件
  .use(Col)
  .use(Row)
  .use(Cell)     //单元格
  .use(CellGroup)
  .use(Tab)      //标签页
  .use(Tabs)    //标签页
  .use(Sticky)  //粘性布局
  .use(Icon)  //使用字体图标
  .use(Loading) //加载
  // .use(store, key)
  .use(pinia)   //挂载
  .mount('#app')
