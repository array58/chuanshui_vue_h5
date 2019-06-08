<style scoped lang="scss">
</style>

<template>
   <div>
       <h1>这是vot2</h1>
       <p>{{mark}}</p>
       <button @click='gotovote'>go to vote</button>
   </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name:'vot',
    computed:{
        mark(){
            return this.$store.state.moduleA.mark;
        }
    },
    methods:{
        gotovote(){
            this.$router.push({
                path:'/test'
            })
        }
    },
    mounted(){
      this.$store.commit('setMark','testMark- from vot2---')
    }
}
</script>

