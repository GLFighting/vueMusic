<template>
  <div v-if="data.loading">
    <van-loading size="24px" vertical>加载中...</van-loading>
  </div>
  <div class="dynamicZone" v-else>
    <van-cell-group inset @click="moveToBaseInfo">
      <van-cell title="基本信息"/>
      <!-- <van-cell title="村龄" :label="data.song" /> -->
      <van-cell title="性别" :label="data.gender" />
      <!-- <van-cell title="年龄" :label="data.age" /> -->
    </van-cell-group>
    <div class="space"></div>
    <van-cell-group inset>
      <van-cell title="音乐品味"/>
      <van-cell title="听歌排行" icon="music" :label="data.song" />
      <van-cell title="我喜欢的音乐" icon="like" :label="data.likesonglist+'，播放'+data.playlist[0]['playCount']+'次'" />
    </van-cell-group>
    <div class="space"></div>
    <van-cell-group inset>
      <van-cell title="创建的歌单"/>
      <van-cell :title="data.playlist[1]['name']" :icon="data.playlist[1]['coverImgUrl']" :label="data.playlist[1]['trackCount']+'首，播放'+data.playlist[1]['playCount']+'次'" />
      <van-cell :title="data.playlist[2]['name']" :icon="data.playlist[2]['coverImgUrl']" :label="data.playlist[2]['trackCount']+'首，播放'+data.playlist[2]['playCount']+'次'" />
    </van-cell-group>
    <div class="space"></div>
    <van-cell-group inset>
      <van-cell title="收藏的歌单"/>
      <van-cell v-for="(item, index) in data.playlist.slice(3)" :title="item['name']" :icon="item['coverImgUrl']" :label="item['trackCount']+'首，by'+item['creator']['nickname']+'，'+item['playCount']+'次播放'" />
    </van-cell-group>
    <div class="space"></div>
    <van-cell-group inset>
      <van-cell title="我的评论"/>
      <van-cell title="听歌排行" icon="music" label="累计听歌xxx首" />
      <van-cell title="我喜欢的音乐" icon="like" label="xxx首，播放xxx次" />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { Loading } from 'vant';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getLikeList , getPlayList } from '../../../network/getSome'
const router = useRouter()

/*…………………………………………………………调用接口方法……………………………………………………*/
let uid = JSON.parse(localStorage.getItem('userProfile')!).userId
Promise.all([
  getLikeList(uid),  //获取已喜欢音乐列表

  getPlayList(uid)  //获取用户歌单
]).then(res => {
  console.log(res)
  console.log(res[0].data)  //喜欢歌单的信息
  console.log(res[0].data.ids.length)  //喜欢的歌单长度
  data.likesonglist = `${res[0].data.ids.length}首`

  console.log('用户歌单',res[1].data.playlist)
  console.log('用户歌单',typeof res[1].data.playlist)
  console.log('用户歌单', res[1].data.playlist[1].name)
  // localStorage.setItem('playlist', JSON.stringify(res[1].data.playlist))
  data.playlist = res[1].data.playlist
  console.log('---',data.playlist[1]['name'])


  data.loading = false
})

let data = reactive({
  cunage: `年`,
  gender: '',
  age:`1`,
  song: `累计听${JSON.parse(localStorage.getItem('userDetail')!).listenSongs}首`,
  likesonglist: '',
  // playlist: JSON.parse(localStorage.getItem('playlist')!),
  playlist: [],
  loading: true
})


const moveToBaseInfo = ()=>{
  router.push('/baseinfo')
}

//判断性别
if(JSON.parse(localStorage.getItem('userDetail')!).profile.gender ==1 ){
  data.gender = '男'
}else if(JSON.parse(localStorage.getItem('userDetail')!).profile.gender ==2){
  data.gender = '女'
}else{
  data.gender = '未设置性别'
}



</script>

<style scoped>
.dynamicZone {
  width: 100%;
  /* background-color: red; */
}
.space{
  height: 15px;
}
</style>