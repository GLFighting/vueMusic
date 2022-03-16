//对axios进行二次封装
import axios from 'axios'
import router from '../router';
//导入路由模块
import { useMainStore } from '../store';
const mainStore = useMainStore()


//创建axios实例
const requests = axios.create({
  //它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://netease-cloud-music-api-lime.vercel.app/',
  //如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 10000,
  //表示跨域请求时是否需要使用凭证
  withCredentials: true,

  // headers: {'Access-Control-Allow-Origin':'*'}
  
})


//请求拦截器，拦截当前实例的请求——此时请求没有发出去，可以做一些事情
requests.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    //@ts-ignore
    config.headers.Authorization = localStorage.getItem('Authorization');
  }
  return config
},
  err => {          //对请求错误做点什么
    router.push('/register')
    return err
  }
)


//拦截当前实例的响应——当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  response => {

    return response   //其实可以直接返回response.data,不然的话这样的话在调用函数时的.then(res)处理时需要使用 res.data
  },
  err => {       // 对响应错误做点什么
    if (err.response) {
      switch (err.response.status) {
        case 401:
          localStorage.removeItem('token')
          router.push('/register')
      }
    }
    return err
  }
)


//向外暴露一个axios实例
export default requests
