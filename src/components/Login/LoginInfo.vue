<template>
  <div class="login-info" >
    <div class="info-left">
      <img src="@/assets/img/login/info-img.jpg"/>
      <p>mach_G1Mx</p>
      <i class="iconfont">&#xe8cf;</i>
    </div>
    <div class="info-right">
      <i class="iconfont">&#xe8d0;</i>
    </div>
  </div>
</template>

<script setup lang="ts">

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