<template>
  <div class="login-info" >
    <div class="info-left" @click="routerMoveToUserInfo">
      <img :src="data.userImg" />
      <p>{{data.nickName}}</p>
      <i class="iconfont">&#xe8cf;</i>
    </div>
    <div class="info-right">
      <i class="iconfont">&#xe8d0;</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

let data = reactive({
  userId: JSON.parse(localStorage.getItem('userProfile')!).userId,
  nickName: JSON.parse(localStorage.getItem('userProfile')!).nickname,
  userImg: JSON.parse(localStorage.getItem('userProfile')!).avatarUrl
})

const routerMoveToUserInfo = ()=>{
  router.push('/userInfo')   //将PersonInfo.vue 的路由跳转到 App.vue 的 <router-view>
}

</script>

<style>
.login-info {
  height: 49px;
}
.info-left{
  float: left;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 12px;
}
.info-left p{
  font-size: 20px;
}
.info-left i{
  font-size: 20px;
}
.info-left img{
  width: 30px;
  border-radius: 50%;
  margin-right: 12px;
}
.info-right{
  float: right;
  margin-top: 6px;
  margin-right: 12px;
}
.info-right i{
  font-size: 35px;
}
</style>