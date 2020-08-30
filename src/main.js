import Vue from 'vue'
import App from './App.vue'
import './assets/css/cssreset.css'
import './assets/css/conment.css'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from '../src/assets/js/router.js'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from '../src/assets/js/data.js'
import axios from 'axios'
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
