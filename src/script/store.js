import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'//缓存，持久化插件，但不确定是否有用
import mutations from './mutations'

Vue.use(Vuex)

const module = {
  state: {
    user: {
      token: 'aaa'
    },
    pwd: {
      word: 'sssss'
    },
    curpage: {
      page_path: '/login'
    },
    avatar: {
      img_name: ''
    }
  },
  getters: {},
  // mutations:{
  //   setUser(state,payload){
  //     if(payload.hasOwnProperty('name')){
  //       state.user.name=payload.name
  //     }
  //   }
  // },
  mutations,
  plugins: [createPersistedState()]
}

const store = new Vuex.Store(module)
export default store
