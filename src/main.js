import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"


import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

Vue.directive('premission', function (el, obj) {
  if (obj.value == 'lalala' || obj.value == 'kakaka' || obj.value == 'wawawa') {
    el.style.display = 'block'
  }
  else {
    el.style.display = 'none'
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
