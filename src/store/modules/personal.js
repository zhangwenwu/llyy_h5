/**
 * Created by wenzi on 2017/6/9.
 */
import personal from '../../api/personal'
import * as types from '../mutation-types'

const state = {
  imgAndName: {},
  myRequirement: {},
  myOrder: {
    11:'123',
    11:'123',
  }
}

const getters = {
  PersonImgAndName: state => state.imgAndName,
  PersonMyRequirement: state => state.myRequirement,
  PersonMyOrder: state => state.myOrder
}

const actions = {
  getImgAndName ({ commit }, userId) {
    personal._getImgAndName(userId).then((response) => {
      if (response.data) {
        commit(types.IMG_AND_NAME, response.data)
      }
    })
  },
  getMyRequirement ({ commit }, {type, userId, pageNumber}) {
    personal._getMyRequirement(type, userId, pageNumber).then((response) => {
      if (response.data) {
        commit(types.MY_REQUIREMENT, response.data)
      }
    })
  },
  getOrder ({ commit }, {userId, pageNumber}) {
    personal._getOrder(userId, pageNumber).then((response) => {
      if (response.data) {
        commit('GETORDER', response.data)
      }
    })
  }
}

const mutations = {
  [types.IMG_AND_NAME] (state, data) {
    state.imgAndName = data
  },
  [types.MY_REQUIREMENT] (state, data) {
    state.myRequirement = data
  },
  GETORDER (state, data) {
    state.myOrder = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
