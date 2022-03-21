import requests from "./axios"; //不能以 .ts 结尾

//获取已经喜欢的音乐列表
function getLikeList(uid:any){
  return requests({
    url: '/likelist',
    params:{
      uid
    }
  })
}

//获取用户歌单
function getPlayList(uid:any){
  return requests({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}

export { getLikeList , getPlayList }