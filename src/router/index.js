import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld1 from '@/components/HelloWorld1'
import HelloWorld2 from '@/components/HelloWorld2'
import HelloWorld from '@/components/HelloWorld'
import Swiper from '@/components/swiper'
Vue.use(Router)

export default new Router({
  routes: [
      {
          path:"/HelloWorld1/:id",  //路径形式  动态路由
          path:"/HelloWorld1",  //传参形式
          component: HelloWorld1
      },
      {
          path: "/HelloWorld",
          component: HelloWorld,
      },
      {
          // path: "/HelloWorld2/:id",
          path:"/HelloWorld2",  //传参形式
          component: HelloWorld2,
      },// 重定向
      {
          path: '/',
          redirect: '/HelloWorld'
      }
  ]
})
