<template>
  <div id="app">
    <button @click="addCannon">Add cannon</button>
    <cannons-panel />  
  </div>
</template>

<script>

import CannonsPanel from './components/CannonsPanel'
export default {
  name: 'app',
  data () {
    return {
      myCannon: null
    }
  },
  methods: {
    addCannon () {
      this.$store.dispatch('addCannon', this.generateCannon())
    },
    guid () {
      function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    },
    generateCannon () {
      /*  cannon's basic structure
          {
            id: String,
            name: String,
            controllers: List
          }
      */
      let cannon = {}
      cannon.id = this.guid()
      cannon.name = 'RGB'
      cannon.controllers = [{
        min: 0,
        max: 255,
        name: 'Red',
        type: 'color'
      }, {
        min: 0,
        max: 255,
        name: 'Green',
        type: 'color'
      }, {
        min: 0,
        max: 255,
        name: 'Blue',
        type: 'color'
      }]
      return cannon
    }
  },
  components: {
    CannonsPanel
  }
}
</script>

<style>
</style>
