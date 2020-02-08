import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FuJing from '@/components/FuJing'
import BeiXiao from '@/components/BeiXiao'
import YiShi from '@/components/YiShi'
import ErShi from '@/components/ErShi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/fujing',
      name:'FuJing',
      component:FuJing
    },
      {
        path:'/beixiao',
        name:'BeiXiao',
        component:BeiXiao
      },
      {
        path:'/yishi',
        name:'YiShi',
        component:YiShi
      },
      {
        path:'/ershi',
        name:'ErShi',
        component:ErShi
      }
  ]
})
