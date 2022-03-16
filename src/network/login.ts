
import requests from "./axios"; //不能以 .ts 结尾

//手机登录
function userLogin_(phone: any, password: any) {
  return requests({
    method: 'post',
    url: '/login/cellphone',  //由网易云API接口所写
    data: {           //post请求数据放在 data 中
      phone,
      password,
      // timestamp: new Date().getTime()
    }
  })
}

//登录状态
async function getLoginStatus() {
  const res = await requests({
    url: '/login/status',
    params: {
      timestamp: new Date().getTime()
    }
  })
}

export { userLogin_ , getLoginStatus }
