<template>
  <div
    :id="id"
    class="colorView"/>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    id () {
      // return this.$store.state.
    }
  }
}
</script>
<style scoped>
  .colorView {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    background: black;
    margin: 10px;
  }
</style>
