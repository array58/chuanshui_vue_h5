import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'

import {Toast} from 'vant';
Vue.use(Toast);

Vue.config.productionTip = false
import axios from '@/assets/js/request.js'
Vue.prototype.$axios = axios;

import store from './store/index';
import router from './router/index';
import mixin from '@/assets/js/mixins';
Vue.mixin(mixin)
new Vue({
  el:'#app',
  render: h => h(App),
  store,
  router
})
