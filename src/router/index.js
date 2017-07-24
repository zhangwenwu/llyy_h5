import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('../view/index/Index')), 'Index')
const Requirement = r => require.ensure([], () => r(require('../view/requirement/Requirement')), 'Requirement')
const Recommend = r => require.ensure([], () => r(require('../view/recommend/Recommend')), 'Recommend')
const Issue = r => require.ensure([], () => r(require('../view/issue/Issue')), 'Issue')
const Consult = r => require.ensure([], () => r(require('../view/consult/Consult')), 'Consult')
const Consult1 = r => require.ensure([], () => r(require('../view/consult/Consult1')), 'Consult1')
const evmpermit = r => require.ensure([], () => r(require('../view/evmpermit/evmpermit')), 'evmpermit')
const evmpermitOrder = r => require.ensure([], () => r(require('../view/evmpermit/evmpermitOrder')), 'evmpermitOrder')
const evmpermitsubmitOrders = r => require.ensure([], () => r(require('../view/evmpermit/evmpermitsubmitOrders')), 'evmpermitsubmitOrders')
const HWKnow = r => require.ensure([], () => r(require('../view/hazardousWaste/HWKnow')), 'HWKnow')
const wasteDisposal = r => require.ensure([], () => r(require('../view/wasteDisposal/wasteDisposal')), 'wasteDisposal')
const Personal = r => require.ensure([], () => r(require('../view/personal/personal')), 'Personal')
const myRequirement = r => require.ensure([], () => r(require('../view/personal/children/myRequirement')), 'myRequirement')
const submitOrders = r => require.ensure([], () => r(require('../components/submitOrders')), 'submitOrders')
const myRqDetail = r => require.ensure([], () => r(require('../view/personal/children/myRqDetail')), 'myRqDetail')
const IMSystem = r => require.ensure([], () => r(require('../view/personal/children/IMSystem')), 'IMSystem')
const IMWindow = r => require.ensure([], () => r(require('../view/personal/children/IMWindow')), 'IMWindow')
const Login = r => require.ensure([], () => r(require('../view/login/login')), 'Login')
const Login_dynamic = r => require.ensure([], () => r(require('../view/login/login_dynamic')), 'Login_dynamic')
const Register = r => require.ensure([], () => r(require('../view/login/register')), 'Register')
const Password = r => require.ensure([], () => r(require('../view/login/password')), 'Password')
const construction = r => require.ensure([], () => r(require('../view/construction/construction')), 'construction')
const MyOrder = r => require.ensure([], () => r(require('../view/personal/children/myOrder')), 'MyOrder')
const orderDetail = r => require.ensure([], () => r(require('../view/personal/children/orderDetail')), 'orderDetail')
const pay = r => require.ensure([], () => r(require('../view/pay/pay')), 'pay')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Requirement', // 环保需求
      name: 'Requirement',
      component: Requirement
    },
    {
      path: '/Recommend', // 优质推荐
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/Issue', // 发布需求
      name: 'Issue',
      component: Issue
    },
    {
      path: '/Consult', // 环保资讯
      name: 'Consult',
      component: Consult
    },
    {
      path: '/Consult1', // 环保资讯
      name: 'Consult1',
      component: Consult1
    },
    {
      path: '/evmpermit', // 排污许可证
      name: 'evmpermit',
      component: evmpermit
    },
    {
      path: '/evmpermitOrder', // 排污许可证提交订单
      name: 'evmpermitOrder',
      component: evmpermitOrder
    },
    {
      path: '/evmpermitsubmitOrders', // 排污许可证提交订单个人信息
      name: 'evmpermitsubmitOrders',
      component: evmpermitsubmitOrders
    },
    {
      path: '/HWKnow', // 危废须知
      name: 'HWKnow',
      component: HWKnow
    },
    {
      path: '/wasteDisposal', // 危废须知
      name: 'wasteDisposal',
      component: wasteDisposal
    },
    {
      path: '/submitOrders', // 危废须知
      name: 'submitOrders',
      component: submitOrders
    },
    {
      path: '/Personal/:sort', // 个人页面
      name: 'Personal',
      component: Personal
    },
    {
      path: '/myRequirement/:sort', // 需求列表页面
      name: 'myRequirement',
      component: myRequirement
    },
    {
      path: '/myRqDetail/:self', // 需求详情页面
      name: 'myRqDetail',
      component: myRqDetail
    },
    {
      path: '/IMSystem', // 需求详情页面
      name: 'IMSystem',
      component: IMSystem
    },
    {
      path: '/Login', // 登录页面
      name: 'Login',
      component: Login
    },
    {
      path: '/Login_dynamic', // 动态密码登录页面
      name: 'Login_dynamic',
      component: Login_dynamic
    },
    {
      path: '/Register', // 注册页面
      name: 'Register',
      component: Register
    },
    {
      path: '/Password', // 找回密码页面
      name: 'Password',
      component: Password
    },
    {
      path: '/construction/:type', // 环保工程
      name: 'construction',
      component: construction
    },
    {
      path: '/MyOrder', // 我的订单页面
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/orderDetail', // 订单详情页面
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/pay', // 订单支付
      name: 'pay',
      component: pay
    }
  ]
})
