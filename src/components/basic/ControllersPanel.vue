<template>
  <div class="controllers">
    <controller 
      v-for="controller in controllers"
      :key="controller.id"
      :cannon="controller"
      @changeColor="colors"/>
  </div>  
</template>
<script>
import Controller from './Controller'
export default {
  props: ['controllers'],
  data () {
    return {
    }
  },
  components: {
    Controller
  },
  methods: {
    colors (that, value) {
      // console.log(this.$store.state)
      // console.log('value controllers panel')
      // console.log(that)
      // console.log(value)
    }
  },
  created () {

  }
}
</script>
<style scoped>
  .controllers {
    background: purple;
    width: 100%;
  }
</style>
