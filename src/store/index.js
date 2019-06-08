import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate';

import moduleA from "./modules/ma";
import moduleB from "./modules/mb";

const store = new Vuex.Store({
    modules:{
        moduleA,
        moduleB
    },
    plugins:[
        createPersistedState({
            storage:window.localStorage,
            reducer(val){
                console.log(val)
                return val
            }
        })
    ]
});


export default store;