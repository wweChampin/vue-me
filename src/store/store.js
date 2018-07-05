/**
 * Created by bennettyw on 2018/7/5.
 */
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
 state: {
     local: localStorage.local || ''
 },
 getters: {
     doubleCity (state) {
         return state.local + state.local
     }
 },
 actions: {
     changeLocalDelayFiveSeconds(context,local) {
         setTimeout(() => {
             context.commit('changeLocal',local)
             console.log("异步vuex")
         },5000)
     }
 },
 mutations: {
     changeLocal(state, local){
         localStorage.local = local
         state.local = local
         console.log('什么情况', local)

     }
 }
})

export default store