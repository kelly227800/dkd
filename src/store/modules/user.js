import { login } from '@/api'
export default {
  namespaced: true,
  state: {
    token: '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    clearToken(state) {
      state.token = ''
    }
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload)
      console.log(res)
      context.commit('setToken', res.token)
    },
    logout(context) {
      context.commit('clearToken')
    }
  },
}
