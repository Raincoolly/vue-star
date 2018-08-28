// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import router from './router'
import '../static/css/main.css'
import '../static/css/common.css'

import { fetchGet, fetchPost} from './api'
Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost

Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
