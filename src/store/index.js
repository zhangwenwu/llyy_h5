/**
 * Created by wenzi on 2017/6/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import personal from './modules/personal'
import evmpermit from './modules/evmpermit'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    personal,
    evmpermit
  }
})

