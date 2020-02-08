<template>
  <div class="top">
      <h1>外卖网站</h1>
       <div class="swiper-container">
            <div class="swiper-wrapper">
                 <div class="swiper-slide"><img src="../assets/1.png" alt=""></div>
                 <div class="swiper-slide"><img src="../assets/1.png" alt=""></div>
                 <div class="swiper-slide"><img src="../assets/1.png" alt=""></div>
            </div>
              <div class="swiper-pagination"></div>
    
       <!-- 如果需要导航按钮 -->
       <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
       <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
       </div> 
  </div>
</template>

<script>
import Swiper from "swiper"
export default {
  name: 'Top',
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
        this.zwx()
  },
  methods:{
      zwx(){
          new Swiper(".swiper-container",{
             loop:true,
           autoplay:{el:1500}
          })
      }   
  },
 }
</script>

<style  scoped>
 @import "swiper/css/swiper.css";
      .top>h1{
          width: 100%;
          height: 0.53rem;
          background: blue;
          font-size: 0.21rem;
          text-align: center;
          line-height: 0.53rem;
          color: #FFF;
      }
  
   .top .swiper-container{
       width: 100%;
       height: 2.13rem;
   }
   .swiper-container img{
       width: 100%;
       height: 2.13rem;
   }
</style>