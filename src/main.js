import Vue from 'vue'
import App from './App'
import httpWx from '@/utils/request'

Vue.config.productionTip = false
Vue.prototype.$http = httpWx
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
