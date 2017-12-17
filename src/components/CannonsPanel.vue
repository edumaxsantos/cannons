<template>
  <div class="cannons-pannel">
    <cannon     
    v-for="cannon in cannons"
    :key="cannon.id"
    :cannon="cannon"/>
  </div>
</template>
<script>

import Cannon from './Cannon'
export default {
  data () {
    return {
      cannons: this.$store.getters.listCannons
    }
  },
  components: {
    Cannon
  }
}
</script>
<style scoped>
  .cannons-pannel {
    width: 100vw;
    background: green;
    max-height: 100vh;
    min-height: 90vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
