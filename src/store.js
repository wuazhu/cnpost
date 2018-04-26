import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    login
  }
})

export default store
