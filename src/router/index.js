import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);

import views from '@/views/views.route'

export default new vueRouter({
    mode:'hash',
    routes:[
       ...views
    ]
})