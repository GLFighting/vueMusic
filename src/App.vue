<script setup lang="ts">
  import MainTabBar from './views/MainTabBar.vue'  //导入底部导航栏组件
  import TopBar from './components/TopBar/TopBar.vue'
</script>

<template>
  <TopBar></TopBar>
  <router-view></router-view>
  <MainTabBar></MainTabBar>
</template>

<style>

</style>
