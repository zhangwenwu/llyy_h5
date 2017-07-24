/**
 * Created by wenzi on 2017/6/9.
 */
import personal from '../../api/personal'
import * as types from '../mutation-types'

const state = {                         //数据
  evmpermit: {},
  orderid:'',
}

const getters = {                       //get数据
  Setdata: state => state.evmpermit,
  SetOrderId: state => state.orderid,    
}

const actions = {
  setEvmpermit ({ commit }, userId) {   //准备提交
    commit('EVM_SET_VALUE',userId)
  },
  setOrderid ({ commit }, userId) {     
    commit('EVM_SET_ORDERID',userId)
  }
}

const mutations = {                     //提交数据
  EVM_SET_VALUE(state,data) {
    state.evmpermit = data
  },
  EVM_SET_ORDERID(state,data) {
    state.orderid = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
