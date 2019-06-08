<template>
  <div id="app">
    <h1>{{test}}</h1>
  <!-- <iframe src="../public/test.html" frameborder="0"></iframe> -->
   
  </div>
</template>

<script>
 
export default {
  name: 'app',
  data(){
    return {
      test:'test h5',
      t:0
    }
  },
  mounted(){
    
  }
}



</script>
<style lang='less'>
#app{
  h1{
    color:red
  }
}
</style>
