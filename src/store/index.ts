import Cookies from "js-cookie";
import { defineStore } from "pinia";
// 1. 定义容器、导出容器
// 参数1：容器的ID，必须是唯一的，后面Pinia会把所有的容器挂载到根容器
// 参数2：一些选项对象，也就是state、getter和action
// 返回值：一个函数，调用即可得到容器实例
export const useMainStore = defineStore('main', {
  // 类似于Vue2组件中的data，用于存储全局状态数据，但有两个要求
  // 1. 必须是函数，目的是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
  // 2. 必须是箭头函数，这样是为了更好的 TS 类型推导
  state: ()=>{
    return {
      showLogin: false,  //控制Login的开关
      loading:  false,
      user: {}, //用户账户信息，通过userAdd函数添加
    }
  },
  getters:{   //类似于组件的computed，用来封装计算属性，具有缓存的功能
    
  }, 
  actions:{   //同步异步均支持
    changeLoginShow(){
      this.showLogin = !this.showLogin
    },
    userAdd(){
      let profile1 = JSON.parse(Cookies.get('profile')!)
      //将用户的账户信息储存在 user 中
      this.user = {uid: profile1.userID, nickname: profile1.nickname}
    },
    userClear(){
      this.user = {};
    },
    startLoading(){
      this.loading = true;
    },
    endLoading(){
      this.loading = false;
    }
  }
})
// 2. 使用容器中的 state
// 3. 通过 getter 修改 state 
// 4. 使用容器中的 action 同步和异步请求


// // import { createStore } from "vuex";
// import { InjectionKey } from 'vue'
// import { createStore, Store } from 'vuex'

// //手动声明state类型
// export interface State{
//   showLogin: boolean
// }

// //定义注入类型
// export const key : InjectionKey<Store<State>> = Symbol()

// export const store = createStore({
//   state(){
//     return {
//       showLogin: false
//     }
//   },
//   mutations:{
//     showLogin(state:any, params:boolean){
//       state.showLogin = params
//     }
//   }
// })