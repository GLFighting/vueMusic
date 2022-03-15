<script setup lang="ts">
  import MainTabBar from '@/views/MainTabBar.vue'  //导入底部导航栏组件
  import TopBar from '@/components/TopBar/TopBar.vue'
  import Login from '@/components/Login/LoginContainer.vue'
</script>

<template>
  <TopBar></TopBar>
  <router-view></router-view>
  <MainTabBar></MainTabBar>
  <Login></Login>
</template>

<style>

</style>
