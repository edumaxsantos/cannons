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
  props: ['controllers', 'parentId'],
  data () {
    return {
      red: '000',
      green: '000',
      blue: '000'
    }
  },
  components: {
    Controller
  },
  methods: {
    colors (that, value) {
      let color = ''
      if (that.name === 'Red') {
        this.red = value
      } else if (that.name === 'Green') {
        this.green = value
      } else if (that.name === 'Blue') {
        this.blue = value
      }

      color = this.red + this.green + this.blue
      this.$emit('colorChanged', color)
    }
  }
}
</script>
<style scoped>
  .controllers {
    background: purple;
    width: 100%;
  }
</style>
