import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: {},
    token: null
  },
  mutations: {
    setUserProfile (state, userProfile) {
      state.userProfile = userProfile
    },
    setToken (state, token) {
      state.token = token
    }
  },
  getters: {
    getUserProfile: state => {
      return state.userProfile
    },
    getToken: state => {
      return state.token
    }
  }
})

export default store
