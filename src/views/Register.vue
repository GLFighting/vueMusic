<template>
  <div class="background">
    <div class="iconfont" @click="showQrImg" v-show="data.isRegisterShow">&#xe60d;</div>
    <div class="login-page" v-show="!data.isRegisterShow">
      <p class="login-phone">用户登录</p>
      <!-- <img :src="data.qrImg" />
      <p>二维码登录</p>-->
      <form>
        <input
          type="text"
          v-model="data.phone"
          placeholder="请输入手机号码"
          style="height: 30px;width: 200px;background-color:transparent;border:0;outline: none;"
        />
        <br />
        <input
          type="password"
          v-model="data.password"
          placeholder="请输入密码"
          style="height: 30px;width: 200px;background-color:transparent;border:0;outline: none;"
        />
      </form>
      <p class="login" @click="login">登录</p>
      <!-- <a-space style="width: 100%">
      <a-button danger shape="round" loading />
      </a-space>-->
    </div>
    <div class="res-container" v-show="data.istrue">
      <p class="res1" :class="{ 'opacity': data.istrue }">手机号码不合法</p>
      <p class="res2" :class="{ 'opacity': data.istrue }">{{ data.msg }}</p>
    </div>
    <div class="loading-mask" v-show="data.loading">
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userLogin_ } from '../network/login';
import { getAccount } from '../network/userInfo';
import { onMounted, reactive } from 'vue';
import { useMainStore } from '../store'
import { useRouter } from 'vue-router';

const mainStore = useMainStore();
const router = useRouter();

let data = reactive({
  isRegisterShow: true,
  qrImg: '',
  qrKey: '',
  phone: '',
  password: '',
  msg: '',
  istrue: false,  //opacity开关
  loading:false
})


//点击图标跳转到登录页面
const showQrImg = () => {
  data.isRegisterShow = !data.isRegisterShow
}

//点击登录按钮实现——手机账号登录
const login = () => {
  data.loading = true
  // alert('1')
  //判断账号或密码是否为空
  if (!data.password || !data.phone) {
    alert('账号或密码不能为空')
    return
  } else {
    //检查电话号码格式
    if (checkPhone()) {
      userLogin_(data.phone, data.password)  //手机登录——userLogin_
        .then((res) => {
          console.log(res.data.profile)
          console.log(res.data.profile.userId)
          console.log(res.data.profile.nickName)
          localStorage.setItem('userProfile', JSON.stringify(res.data.profile))   //将 res.data.profile存入本地存储
          console.log(res.data.code)  //登陆成功code为200
          console.log(typeof res.data.code)  //登陆成功code为200
          if (res.data.code === 200) {
            console.log('成功')
            localStorage.setItem("token", JSON.stringify(res.data.token))  //向本地存储添加token
            data.loading = false
            router.push('/home')  //登录成功跳转路由
          }
          if (res.data.code !== 200) {    //登陆失败时code不为200
            console.log('失败')
            console.log(res.data.msg)
            data.msg = res.data.msg
            data.istrue = true
            setTimeout(() => {
              data.istrue = false
            }, 2000)
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert('手机号码不合法')
    }
  }
}

//创建函数——检查输入电话号码格式
const checkPhone = () => {
  const regPhone = /^[1][3,4,5,7,8][0-9]{9}$/   //电话号码的正则表达式
  if (!regPhone.test(data.phone)) {  //如果电话号码不合法
    // console.log('不合法')
    return false
  }
  // console.log('合法')
  return true
}

/************************************/

</script>

<style scoped>
@import url("@/assets/iconfont/iconfont.css");
.login-phone {
  color: rgb(85, 73, 150);
}
.login {
  color: rgb(85, 73, 150);
}
.background {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/register/registerBackImg.jpg");
  /* background-repeat: repeat-x; */
  background-size: cover;
}
.iconfont {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  line-height: 100px;
  background: #06c no-repeat center center;
  background-size: 100%;
  animation: wave 4s linear infinite;

  font-size: 100px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
}

.login-page {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
}
.res-container {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: red;
  display: flex;
}
.res1 {
  /* position: absolute;
  left: 0; */
  font-size: 1rem;
  opacity: 0;
  text-align: center;
  transition: 0.5s;

  flex-grow: 1;
}
.res2 {
  /* position: absolute;
  right: 0; */
  font-size: 1rem;
  opacity: 0;
  text-align: center;
  transition: 0.5s;
  flex-grow: 1;
}

.opacity {
  opacity: 1;
}

@keyframes wave {
  0% {
    box-shadow: 0 0 0 0 rgba(245, 226, 226, 1), 0 0 0 0 rgba(250, 189, 189, 1);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(245, 226, 226, 0.5),
      0 0 0 10px rgba(250, 189, 189, 1);
  }
  100% {
    box-shadow: 0 0 0 40px rgba(245, 226, 226, 0),
      0 0 0 20px rgba(245, 226, 226, 0);
  }
}

.loading-mask{
  width: 100;
  height: 100%;
  background-color: rgba(245, 226, 226, 0.5);
}
.sk-folding-cube {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sk-folding-cube .sk-cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

@-webkit-keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>