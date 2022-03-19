<template>
<van-nav-bar
  title="基本信息"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<h2>个人信息</h2>

<h2>个人简介</h2>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const onClickLeft = ()=>{
  router.push('/userInfo/mainzone')
}
</script>

<style scoped>

</style>