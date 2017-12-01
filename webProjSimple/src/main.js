import Vue from 'vue'
import Layout from './components/layout.vue'
import IndexPage from './page/IndexPage.vue'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import DetailPage from './components/detail.vue'


import App1 from './components/detail/App1.vue'
import App2 from './components/detail/App2.vue'
import App3 from './components/detail/App3.vue'
import App4 from './components/detail/App4.vue'
//
import DetailAnaPage from './components/detail/analysis.vue'
import DetailCouPage from './components/detail/count.vue'
import DetailForPage from './components/detail/forecast.vue'
import DetailPubPage from './components/detail/publish.vue'
//
Vue.use(VRouter)
//注册之后所有页面都可以使用this.$http功能调用vue-resource
Vue.use(VueResource)

let router = new VRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: IndexPage
  },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }]
})
var root = new Vue({
  el: '#app',
  router: router,
  template: '<Layout/>',
  components: {Layout}
})
