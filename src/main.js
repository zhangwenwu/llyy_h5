// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import touch from 'touchjs'
import 'element-ui/lib/theme-default/index.css'
import HeaderTop from './components/header.vue'
import FooterBar from './components/footer.vue'
import cityBar from './components/city.vue'
import msgWindow from './components/msgWindow.vue'
import axios from 'axios'
import store from './store'
import cookie from './assets/js/common.js'

Vue.prototype.$cookie = cookie
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$touch = touch
Vue.use(ElementUI)
Vue.component('header-top', HeaderTop)
Vue.component('footer-bar', FooterBar)
Vue.component('city-bar', cityBar)
Vue.component('msg-window', msgWindow) // 弹窗组件
Vue.component('tips', {
  template: '<div class="tips" v-show="tipsShow"><span>{{msg}}</span></div>',
  props: ['msg','tipsShow'],
  data () {
    return {
      _tipsShow:false
    }
  },
  methods: {
    close_tip:function(){
      alert(this.tipsShow);
      if(this.tipsShow == true){
        setTimeout(()=>{
           alert(1);
          this.tipsShow = false
        }, 2000)
      }
    }
  }
}) // 消息提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
})
