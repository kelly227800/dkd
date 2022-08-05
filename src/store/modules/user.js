import { login, getUserInfo } from '@/api'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: '',
    // userId: '',
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    // setUserId(state, payload) {
    //   state.userId = payload
    // },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload)
      console.log(res)
      context.commit('setToken', res.token)
      // context.commit('setUserId', res.userId)
      setTokenTime()
    },
    // async getUserId(context, payload) {
    //   const res = await login(payload)
    //   console.log(res)
    //   context.commit('setUserId', res.userId)
    // },
    // 退出登录
    logout(context) {
      context.commit('setToken', '')
      // context.commit('setUserId', '')
      context.commit('setUserInfo', {})
    },
    // 获取用户信息
    // async getUserInformation(context, payload) {
    //   const res = await getUserInfo(payload)
    //   console.log(res)
    //   context.commit('setUserInfo', res)
    // },
  },
}
