<template>
  <div class="iconfont" @click="showQrImg" v-show="data.isRegisterShow">&#xe60d;</div>
  <div class="login-page" v-show="!data.isRegisterShow">
    <p>用户登录</p>
    <img :src="data.qrImg" />
    <p>二维码登录</p>
    <form>
      <input type="text" v-model="data.phone" placeholder="请输入手机号码" />
      <br />
      <input type="password" v-model="data.password" placeholder="请输入密码" />
    </form>
    <p class="login" @click="login">登录</p>
  </div>
  <div class="res-container" v-show="data.istrue">
    <p class="res1" :class="{ 'opacity': data.istrue }">手机号码不合法</p>
    <p class="res2" :class="{ 'opacity': data.istrue }">{{ data.msg }}</p>
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
})


//点击图标跳转到登录页面
const showQrImg = () => {
  data.isRegisterShow = !data.isRegisterShow
}

//点击登录按钮实现——手机账号登录
const login = () => {
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
          console.log(res.data.code)  //登陆成功code为200
          console.log(typeof res.data.code)  //登陆成功code为200
          if (res.data.code === 200) {
            console.log('成功')
            localStorage.setItem("token", JSON.stringify(res.data.token))  //向本地存储添加token
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
</style>