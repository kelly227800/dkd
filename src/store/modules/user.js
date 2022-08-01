import { login } from '@/api'
import { Message } from 'element-ui';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async getToken(context,payload) {
      const res = await login(payload)
      console.log(res);
      if(res.data.token) {
        context.commit('setToken', res.data.token);
        router.push('/home')
      } else {
        Message({
          message: res.data.msg,
          type: 'error',
        })
      }
      
    }
  },
};

