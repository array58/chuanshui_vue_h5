import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate';

import moduleA from "./modules/ma";
import moduleB from "./modules/mb";
import device from "./modules/device";


const store = new Vuex.Store({
    modules:{
        device,
        moduleA,
        moduleB
    },
    plugins:[
        createPersistedState({
            storage:window.localStorage
        })
    ]
});


export default store;