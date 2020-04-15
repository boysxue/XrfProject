import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutation.js'
import actions from './action' 
import getters from './getter.js' 
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
