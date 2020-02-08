<template>
  <div class="fu">
      <head-Top></head-Top>
      <head-Center></head-Center>
       <div class="d1">
           <ul>
               <li>
                    <img src="../assets/001.jpg" alt="">
                    <p>描述:鱼香肉丝，清香可口，美味的佳肴，上选的活鱼</p>
                    <h1><span>浏览量:10</span><span>购买量:500</span></h1>
               </li>
                <li>
                    <img src="../assets/001.jpg" alt="">
                    <p>描述:鱼香肉丝，清香可口，美味的佳肴，上选的活鱼</p>
                    <h1><span>浏览量:10</span><span>购买量:500</span></h1>
               </li>
                <li>
                    <img src="../assets/001.jpg" alt="">
                    <p>描述:鱼香肉丝，清香可口，美味的佳肴，上选的活鱼</p>
                    <h1><span>浏览量:10</span><span>购买量:500</span></h1>
               </li>
                <li>
                    <img src="../assets/001.jpg" alt="">
                    <p>描述:鱼香肉丝，清香可口，美味的佳肴，上选的活鱼</p>
                    <h1><span>浏览量:10</span><span>购买量:500</span></h1>
               </li>
           </ul>
       </div>
  </div>
</template>

<script>
import ZwxTop from "./ZwxTop";
import ZwxCenter from "./ZwxCenter";

export default {
  name: 'FuJing',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
     'head-Top':ZwxTop,
     'head-Center':ZwxCenter,

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
      .fu>.d1{
         width: 3.9rem;        
         margin: 0 auto;
         margin-top: 0.1rem
      }
      .fu ul{
        width: 3.9rem;
        display: flex;
        flex-wrap: wrap;
      }
      .fu li{
        width: 1.9rem;
        height: 2.1rem;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        border: 1px solid #000;
        align-items: center;
        margin: 0.01rem;
      }
      .fu p{
        font-size: 0.11rem;
      }
      .fu h1{
        width: 1.74rem;
        display: flex;
        justify-content: space-between
      }
      .fu h1>span:nth-last-of-type(2){
        color: red;
      }
      .fu span{
        font-size: 0.11rem
      }
      .fu img{
         width: 1.67rem;
         height: 1.35rem;
      }
</style>