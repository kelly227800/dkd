import { login, getUserInfo } from '@/api'
import { setTokenTime } from '@/utils/auth'
// import { Message } from 'element-ui'
import Router from '@/router'
export default {
  namespaced: true,
  state: {
    token: '',
    userId: '',
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUserId(state, payload) {
      state.userId = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload)
      // console.log(context)
        context.commit('setToken', res.data.token)
        context.commit('setUserId', res.data.userId)
        setTokenTime()
    },
    // 退出登录
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserId', '')
      context.commit('setUserInfo', {})
    },
    // 获取用户信息
    async getUserInformation(context) {
      // console.log(context)
      // console.log(1)
      const res = await getUserInfo(context.state.userId)
      console.log(res)
      context.commit('setUserInfo', res.data)
    },
  },
}
