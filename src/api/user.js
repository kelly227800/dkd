import requests from '@/utils/request'
/**
 * 登录
 * @param {*} data 
 * @returns promise
 */
const request1 = requests.service
const request2 = requests.request
export function login(data) {
  return request1({
    url: '/user-service/user/login',
    method: 'POST',
    data,
  })
}

/**
 * 图片验证码
 * @param {*} clientToken 请求随机数
 * @returns promise
 */
export function sendImgCode(clientToken) {
  return request2({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}
