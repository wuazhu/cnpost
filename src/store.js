import Vuex from 'vuex'
import Vue from 'vue'

import login from './modules/login/store'
import tableList from './modules/tableList/store/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    login,
    tableList
  }
})

export default store
