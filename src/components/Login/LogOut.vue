<template>
  <div class="login-out" @click="quit('/register')">退出登录</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
// import { loginOut } from '../../network/loginOut';
const router = useRouter();
const quit = (url: string) => {
      localStorage.removeItem('token')
      localStorage.removeItem('userProfile')
      router.push(url);
}
</script>

<style scoped>
.login-out {
  color: red;
  font-size: 22px;
  line-height: 40px;
  width: 80%;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>