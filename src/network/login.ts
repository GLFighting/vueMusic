
import requests from "./axios"; //不能以 .ts 结尾

//手机登录
function userLogin_(phone: any, password: any) {
  return requests({
    method: 'post',
    url: '/login/cellphone',  //由网易云API接口所写
    data: {           //post请求数据放在 data 中
      phone,
      password
    }
  })
}

//二维码登录，涉及到 3 个接口,调用务必带上时间戳,防止缓存
//二维码 key 生成接口
// async function _getQrKey() {
//   let timer:any
//   let timestamp = Date.now()
//   getLoginStatus()
//   const res = await requests({       //默认get请求
//     url: '/login/qr/key',
//     params: {           //get请求参数放在 params中
//       timestamp: new Date().getTime()   //时间戳
//     }
//   })
//   const key = res.data.data.unikey
//   const res2 = await requests({
//     url: '/login/qr/create',
//     params: {
//       key,
//       qrimg: true,  //传入后会额外返回二维码图片 base64 编码
//       timestamp: new Date().getTime(),
//     }
//   })
//   data.qrImg = res2.data.data.qrimg

//   timer = setInterval(async () => {
//     const statusRes = await _checkQrCode(key)
//     if (statusRes.code === 800) {
//       alert('二维码已过期,请重新获取')
//       clearInterval(timer)
//     }
//     if (statusRes.code === 803) {
//       // 这一步会返回cookie
//       clearInterval(timer)
//       alert('授权登录成功')
//       await getLoginStatus()
//     }
//   }, 3000)
// }

//二维码生成接口
/*
调用此接口传入上一个接口生成的 key 可生成二维码图片的 base64 和二维码信息,
可使用 base64 展示图片,
或者使用二维码信息内容自行使用第三方二维码生成库渲染二维码
*/
// function _getQrCode(key: any) {
//   return requests({
//     url: '/login/qr/create',
//     params: {
//       key,
//       qrimg: 1,  //传入后会额外返回二维码图片 base64 编码
//       timestamp: new Date().getTime(),
//     }
//   })
// }

//二维码检测扫码状态接口
/*
轮询此接口可获取二维码扫码状态,
800 为二维码过期,801 为等待扫码,802 为待确认,
803 为授权登录成功(803 状态码下会返回 cookies)
*/
// async function _checkQrCode(key: any) {
//   const res = await requests({
//     url: '/login/qr/check',
//     params: {
//       key,
//       timestamp: new Date().getTime()
//     }
//   })
//   return res.data
// }

//登录状态
async function getLoginStatus() {
  const res = await requests({
    url: '/login/status',
    params: {
      timestamp: new Date().getTime()
    }
  })
}

export { userLogin_ }
// { _getQrKey, _getQrCode, _checkQrCode }