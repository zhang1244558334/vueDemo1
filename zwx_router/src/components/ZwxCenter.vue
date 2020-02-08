<template>
  <div class="center">

      <div class="div1">
            <router-link to='/fujing'>附近</router-link>  
      </div>
       <div>
            <router-link to='/beixiao'>北小营</router-link>  
      </div>
        <div>
            <router-link to='/yishi'>一食堂</router-link>  
      </div>
       <div>
            <router-link to='/ershi'>二食堂</router-link>  
  </div> 

  </div>
</template>

<script>
export default {
  name: 'center',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
  },
  watch:{
  },
  mounted() {
   
  },
  methods:{

  },
 }
</script>

<style  scoped>

 .center{
     display: flex;
     justify-content: space-around;
     margin-top: 0.05rem;
 }
 .center>div{
     width: 0.81rem;
     height: 0.41rem;
     display: flex;
     align-items: center;
     justify-content: space-around;
     color: black;
     font-size: 0.21rem;
     background: #BBBBBB;
 }
 .div1{
   background: red;
 }
</style>