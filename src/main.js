// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import TodoList from  './TodoList'
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
FastClick.attach(document.body)   //消除移动端  300ms
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
     App
  },
  template: '<App/>'
})

// new Vue({
//     el: '#app1',
//     router,
//     components: {TodoList},
//     template: '<TodoList/>'
//   })
