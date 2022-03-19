<template>
  <div id="mask" @click.self="closeLogin">
    <div id="login-container">
      <LoginInfo></LoginInfo>
      <slot></slot>
      <LogOut></LogOut>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useMainStore } from '../../store';
// import { storeToRefs } from 'pinia'  //引入storeToRefs，使数据可以具有相应式

// import { useStore } from 'vuex';
// import { key } from '../../store';
import LoginInfo from './LoginInfo.vue'
import LogOut from './Logout.vue'

import { useRouter } from 'vue-router';
const router = useRouter()
// 解构数据，但是得到的数据是不具有响应式的，只是一次性的
// 相当于仅仅只是...mainStore而已，只是做了reactive处理，并没有做toRefs
// const { count, info } = useMainStore();
// 解决方法：
// 1. 通过使用toRefs函数，因为前面所说相当于是通过reactive处理，因此可以
// const { count, info } = toRefs(mainStore);
// 2. 通过pinia中提供的storeToRefs方法来解决，推荐使用

// const mainStore = useMainStore()
// const { showLogin } = storeToRefs(mainStore)  //利用storeToRefs，使数据具有响应式
const closeLogin = () => {
  // mainStore.changeLoginShow()
  // console.log('---'+mainStore.showLogin)
  router.push('/home')
}

</script>

<style>
#mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(187, 197, 206, 0.63);
}
#login-container {
  width: 80%;
  height: 100%;
  background-color: rgb(230, 230, 230);
}
</style>