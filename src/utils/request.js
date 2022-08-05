import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import { getTokenTime } from './auth'

function isTimeOUt() {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  const timeout = 2 * 60 * 1000
  // console.log(currentTime - tokenTime > timeout)
  return currentTime - tokenTime > timeout
}
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
})
// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    if (store.state.user.token) {
      if (isTimeOUt()) {
        await store.dispatch('user/logout')
        router.push('/login')
        Message.error('登录过期')
        return Promise.reject(new Error('登录过期'))
      }
      config.headers['Authorization'] = store.state.user.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 响应拦截器
// service.interceptors.response.use(
//   (res) => {
//     if (res.config.url.includes('/api/user-service/user/imageCode/')) {
//       return res.request.responseURL
//     }
//     const { data } = res
//     if (data.success || data.status) {
//       return data
//     }
//     Message.error("请求失败")
//     return Promise.reject(new Error())
//   },
//   async function (error) {
//     if (error?.response?.status === 401) {
//       Message.error('登录过期')
//       await store.dispatch('user/logout')
//       router.push('/login')
//     } else {
//       // console.log(error)
//       Message.error(error.message)
//     }
//     return Promise.reject(error)
//   },
// )

export default service
