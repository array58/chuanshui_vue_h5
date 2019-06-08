import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import axios from '@/assets/request.js'
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  mounted(){
    console.log(this.$axios)
  }
}).$mount('#app')
