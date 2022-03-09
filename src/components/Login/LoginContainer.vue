<template>
  <div id="mask">
    <div id="login-container">
      <LoginInfo></LoginInfo>
      <slot></slot>
      <LogOut></LogOut>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginInfo from './LoginInfo.vue'
import LogOut from './Logout.vue'

</script>

<style>
#mask{
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