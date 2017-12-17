// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cannons: [] // list of active cannons
  },
  mutations: {
    addCannon (state, obj) {
      state.cannons.push(obj)
    },
    removeCannon (state, obj) {
      let index = -1
      state.cannons.forEach((ele, i) => {
        if (ele.id === obj.id) {
          index = i
          // return
        }
      })
      console.log(index)
      state.cannons.splice(index, 1)
    }
  },
  actions: {
    addCannon (context, obj) {
      context.commit('addCannon', obj)
    },
    removeCannon (context, obj) {
      context.commit('removeCannon', obj)
    },
    updateValue (context, obj) {
      context.commit('updateValue', obj)
    }
  },
  getters: {
    listCannons (state) {
      return state.cannons
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
