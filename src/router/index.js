import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   meta:{requiresAuth:true},
    //   name: 'list',
    //   component: resolve => require(['../page/List.vue'], resolve)
    // },
    // {
    //   path: '/info',
    //   name: 'info',
    //   component: resolve => require(['../page/Info.vue'], resolve)
    // },
    {
      path: '/',
      name: 'MyStar',
      component: resolve => require(['../page/MyStar.vue'], resolve)
    }

  ]
})
