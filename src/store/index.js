import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleId: localStorage.getItem('aid') || ''
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      window.localStorage.setItem('aid', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
