import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);

import views from '@/views/views.route'

const router = new vueRouter({
    mode:'hash',
    routes:[
       ...views
    ]
})

import { setPageTitle } from "@/assets/js/func.js";

router.afterEach( (to,from)=>{
    setPageTitle(to.meta);
} )

export default router;