// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import API from './common/api'
import httpRequest from './common/axiosHttp'
import axios from 'axios'
import vueResource from 'vue-resource'
import store from './store'
import request from './api/request'
import qs from 'qs'

// axios全局注册， 引用 this.$axios
Vue.prototype.$axios = axios
// axios全局注册， 引用 this.$axios
Vue.prototype.$request = request
Vue.prototype.$qs = qs

// 设置全局url
const BaseUrl = 'http://127.0.0.1:5000' /* 设置全局请求地址 */
// const BaseUrl = 'https://gudangku.test.shopee.co.id' /* 设置全局请求地址 */
Vue.prototype.BaseUrl = BaseUrl

Vue.prototype.API = API
Vue.prototype.httpRequest = httpRequest
Vue.prototype.vueResource = vueResource

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
