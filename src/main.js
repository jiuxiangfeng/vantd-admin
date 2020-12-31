import 'babel-polyfill' // 兼容处理
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/configs/antdComponents'
import '@/assets/css/base.css'
import '@/utils/request'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
