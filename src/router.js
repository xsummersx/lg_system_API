import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'
import Interface from './pages/interface.vue'
import Edit from './pages/edit.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path:'/page02',
      name:'interface',
      component:Interface,
    },
    {
      path:'/page03',
      name:'edit',
      component:Edit
    }
  ],
})
