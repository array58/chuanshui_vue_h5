<style scoped lang="scss">
</style>

<template>
   <div>
       <h1>这是抽奖页面</h1>
        <p>{{mark}}</p>
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
    }
}
</script>

