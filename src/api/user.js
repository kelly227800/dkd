import request from '@/utils/request'
/**
 * 登录
 * @param {*} data 
 * @returns promise
 */
export function login(data) {
  return request({
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
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}
