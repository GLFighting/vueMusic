import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  //自动寻找文件夹下的index.ts
import './style/reset.css'

createApp(App)
  .use(router)
  .mount('#app')
