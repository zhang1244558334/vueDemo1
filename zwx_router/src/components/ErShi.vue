<template>
  <div class="er">
<head-Top></head-Top>
      <head-Center></head-Center>
 <div class="d4">
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
  name: '',
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
 .er h1>span:nth-last-of-type(2){
        color: red;
      }
.er>.d4{
         width: 3.9rem;        
         margin: 0 auto;
         margin-top: 0.1rem
      }
      .er ul{
        width: 3.9rem;
        display: flex;
        flex-wrap: wrap;
      }
      .er li{
        width: 1.9rem;
        height: 2.1rem;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        border: 1px solid #000;
        align-items: center;
        margin: 0.01rem;
      }
      .er p{
        font-size: 0.11rem;
      }
      .er h1{
        width: 1.74rem;
        display: flex;
        justify-content: space-between
      }
      .er span{
        font-size: 0.11rem
      }
      .er img{
         width: 1.67rem;
         height: 1.35rem;
      }
</style>