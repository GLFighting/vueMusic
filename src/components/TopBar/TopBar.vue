<template>
  <div id="top-bar">
    <i @click="showLogin" class="iconfont">&#xe8ce;</i>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// import { useStore } from 'vuex';
// import { key } from '../../store';
//   const showLogin = ()=>{
//     console.log(useStore(key).state.showLogin)
//     console.log(useStore(key).commit('showLogin',true))
//   }
import { useMainStore } from '../../store';
const mainStore = useMainStore()
const showLogin = ()=>{
  mainStore.changeLoginShow()
}
</script>

<style>
#top-bar {
  /* 设置背景颜色 */
  background-color: transparent;
  /* 设置为弹性容器 */
  display: flex;
  /* 开启固定定位，相对于浏览器视窗进行定位 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  line-height: 49px;
}
i{
  font-size: 40px;
}
</style>