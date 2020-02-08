<template>
  <div class="hello">
      <head-top></head-top>
      <head-center></head-center>

  </div>
</template>

<script>
import ZwxTop from "./ZwxTop";
import ZwxCenter from "./ZwxCenter";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
       'head-top':ZwxTop,
       'head-center':ZwxCenter,
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
