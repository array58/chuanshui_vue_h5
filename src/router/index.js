import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
export default new vueRouter({
    mode:'hash',
    routes:[
        {
            path:'/test',
            name:'test',
            component:()=>import('../views/vot/index.vue')
        },
        {
            path:'/testb',
            name:'testb',
            component:()=>import('../views/vot2/index.vue')
        }
    ]
})