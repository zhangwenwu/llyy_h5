/**
 * Created by wenzi on 2017/6/12.
 */
import axios from 'axios'
import {API_ROOT} from './config'

var personalApi = {
  getImgAndName: userId => API_ROOT.concat('personalInfo/', 'getImgAndName?userId=' + userId),
  getMyRequirement: (type, userId, pageNumber) => API_ROOT.concat('requirement/', type + '?userId=' + userId + '&pageNumber=' + pageNumber),
  getOrder: (userId, pageNumber) => API_ROOT.concat('order/', 'myServiceOrder?userId=' + userId + '&pageNumber=' + pageNumber)
}

export default {
  _getImgAndName (userId) {
    return axios.get(personalApi.getImgAndName(userId))
  },
  _getMyRequirement (type, userId, pageNumber) {
    return axios.get(personalApi.getMyRequirement(type, userId, pageNumber))
  },
  _getOrder (userId, pageNumber) {
    return axios.get(personalApi.getOrder(userId, pageNumber))
  }
}

