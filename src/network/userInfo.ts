import requests from './axios' //引入封装的axios
import Cookies from 'js-cookie'  //引入第三方模块（npm库）

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
    url: '/user/subcount',
    params: {
      cookie: Cookies.get('MUSCI_U'),//    ?
      timstamp: new Date().getTime()
    }
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

export { getUserInfo_ , getUserPlayList , getAccount }