import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//图标样式
import './assets/icon/iconfont.js'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount('#app')
