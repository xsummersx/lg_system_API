import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//图标样式
import './assets/icon/iconfont.js'
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount('#app')
