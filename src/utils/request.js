import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
})
service.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
service.interceptors.response.use(
  (res) => {
    const {
      data,
      data: { success, msg },
    } = res
    if (success) {
      return data
    }
    Message.error(msg)
    return Promise.reject(new Error(msg))
  },
  function (error) {
    // console.log(err)
    Message.error('系统异常')
    return Promise.reject(error)
  },
)

// service.interceptors.request.use(
//   config => {
//     // do something before request is sent

//     if (store.getters.token) {
//       // let each request carry token
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

export default { service, request }
