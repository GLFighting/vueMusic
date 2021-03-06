import requests from './axios' //引入封装的axios

//获取账号信息
function getAccount(){
  return requests({
    url: '/user/account',
    params: {
      timestamp: new Date().getTime()
    }
  })
}

//获取用户信息，歌单，收藏，mv，dj数量
function getUserInfo_(){
  return requests({
    url: '/user/subcount'
  })
}

//获取用户歌单
/*
登录后调用此接口 , 传入用户 id, 可以获取用户歌单
必选参数 : uid : 用户 id
*/
function getUserPlayList(uid:any){
  return requests({
    url: '/user/playlist',
    params: {
      uid,
    }
  })
}

//获取用户粉丝列表
function getFunList(uid:any){
  return requests({
    url:'/user/followeds',
    params: {
      uid
    }
  })
}

//获取用户关注列表
function getFollowList(uid:any){
  return requests({
    url: '/user/follows',
    params:{
      uid
    }
  })
}

//获取用户等级
function getUserLevel(){
  return requests({
    url:'/user/level'
  })
}

//获取用户详情
function getDetail(uid:any){
  return requests({
    url:'/user/detail',
    params:{
      uid
    }
  })
}

export { getUserInfo_ , getUserPlayList , getAccount , getFunList , getFollowList , getUserLevel , getDetail }