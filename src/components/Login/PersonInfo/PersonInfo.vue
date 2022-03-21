<template>
  <van-nav-bar
    class="van-nav-bar"
    :title="data.nickName"
    left-text="返回"
    left-arrow
    fixed
    @click-left="onClickLeft"
  >
    <template #right>
      <van-icon name="ellipsis" size="1.5rem" color="black" />
    </template>
  </van-nav-bar>
  <div class="user-info-container">
    <div class="user-base">
      <div class="user-base-left">
        <img :src="data.userImg" />
      </div>
      <div class="user-base-right">
        <div class="base-right-top">
          <div>
            <p>{{ data.funs }}</p>粉丝
          </div>
          <div>
            <p>{{ data.follows }}</p>关注
          </div>
          <div>
            <p>LV.{{ data.userlevel }}</p>等级
          </div>
        </div>
        <div class="base-right-middle"></div>
        <div class="base-right-bottom">编辑信息</div>
      </div>
    </div>
    <div>
      <van-sticky :offset-top="45">
        <van-tabs
          v-model:active="active"
          @click-tab="onClickTab"
          background="rgba(252, 248, 248, 0.979)"
        >
          <van-tab title="主页"></van-tab>
          <van-tab title="动态"></van-tab>
        </van-tabs>
      </van-sticky>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { getFunList, getFollowList, getUserLevel, getDetail, getAccount, getUserInfo_ } from '../../../network/userInfo'

const router = useRouter()
const active = ref(0) //通过 v-model:active 绑定当前激活标签对应的索引值，默认情况下启用第一个标签

/*…………………………………………………………调用接口方法……………………………………………………*/
let uid = JSON.parse(localStorage.getItem('userProfile')!).userId
Promise.all([
  getFunList(uid),
  // .then(res => {
  //   console.log('fensi', res.data)
  //   console.log('粉丝数量', res.data.size)  //粉丝数量
  //   localStorage.setItem('Funs', JSON.stringify(res))
  //   // data.funs = res.data.size
  // })

  getFollowList(uid),
  // .then(res => {
  //   console.log('zhuanzhu', res.data)
  //   console.log('关注数量', res.data.follow.length)   //关注的数量
  //   localStorage.setItem('FollowList', JSON.stringify(res.data.follow))
  //   // data.follows = res.data.follow.length
  // })

  getUserLevel(),
  // .then(res => {
  //   console.log('level', res.data)
  //   console.log('用户等级', res.data.data.level)  //用户等级
  //   localStorage.setItem('userlevel', JSON.stringify(res.data))
  //   // data.userlevel = res.data.data.level
  // })

  getDetail(uid),
  // .then(res => {  //用户详情
  //   console.log('用户详情', res.data)
  // })

  getAccount(),
  // .then(res => {  //账户详情
  //   console.log('账户详情', res.data)
  // })

  getUserInfo_()   //获取用户信息，歌单，收藏，mv，dj数量
]).then(res => {
  console.log(res)
  console.log(res[0].data.size)
  data.funs = res[0].data.size
  localStorage.setItem('Funs', JSON.stringify(res[0]))

  console.log(res[1].data.follow.length)
  data.follows = res[1].data.follow.length
  localStorage.setItem('FollowList', JSON.stringify(res[1].data.follow))

  console.log(res[2].data.data.level)
  data.userlevel = res[2].data.data.level
  localStorage.setItem('userlevel', JSON.stringify(res[2].data))

  console.log(res[3].data.profile.gender)  //男1，女2
  console.log(res[3].data.profile.privacyItemUnlimit.villageAge)
  localStorage.setItem('userDetail', JSON.stringify(res[3].data))
  console.log('userDetail')

  //等异步请求完成之后，再进行路由的跳转，防止 userDetail 没有存储到本地时，就将路由跳转到 MainZone.vue ，导致MainZone.vue中的关于userDetail的数据读取不到而报错
  router.push('/userInfo/mainzone')  //将 MainZone.vue 的路由跳转到 PersonInfo.vue 的 <router-view> 中
})
/*…………………………………………………………该组件数据处理等……………………………………………………*/
// let data = ({
//   nickName: JSON.parse(localStorage.getItem('userProfile')!).nickname,
//   userImg: JSON.parse(localStorage.getItem('userProfile')!).avatarUrl,
//   funs: JSON.parse(localStorage.getItem('Funs')!).data.size,
//   follows: JSON.parse(localStorage.getItem('FollowList')!).length,
//   userlevel: JSON.parse(localStorage.getItem('userlevel')!).data.level
// })

let data = reactive({
  nickName: JSON.parse(localStorage.getItem('userProfile')!).nickname,
  userImg: JSON.parse(localStorage.getItem('userProfile')!).avatarUrl,
  funs: Number,
  follows: Number,
  userlevel: Number
})

const onClickLeft = () => {
  router.push('/userLogin')
}
const onClickRight = () => {

}

onMounted(() => {    //组件创建时，默认路由跳转到主页

})

const onClickTab = (obj: any) => {    //点击时，进行路由跳转
  console.log(obj)  //传入的点击事件的对象
  console.log(obj.name)  //点击的标签的标号
  if (obj.name === 0) {
    router.push('/userInfo/mainzone')
  }
  if (obj.name === 1) {
    router.push('/userInfo/dynamiczone')
  }

}
console.log('结束')
</script>

<style scoped>
.user-info-container {
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  background-color: rgba(252, 248, 248, 0.979);
  overflow: auto;
}
.user-base {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  /* border: 1px solid black; */
  display: flex;
  /* background-color: #fff; */
}
.user-base-left img {
  width: 70px;
  border-radius: 50%;
}
.user-base-right {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.base-right-top {
  display: flex;
  /* border: 1px solid black; */
  justify-content: center;
  height: 40%;
}
.base-right-top div {
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.base-right-bottom {
  text-align: center;
  border: 1px solid rgb(226, 218, 218);
  height: 40%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  border-radius: 15px;
}
.base-right-middle {
  height: 20%;
}
</style>