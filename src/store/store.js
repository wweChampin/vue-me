/**
 * Created by bennettyw on 2018/7/5.
 */
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

import Vue from  'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './action'
import mutations from './mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
 state,
 getters,
 actions,
 mutations
})

export default store