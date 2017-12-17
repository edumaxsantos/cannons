<template>
  <div
    :id="'color'+id"
    class="colorView"/>
</template>
<script>
export default {
  props: ['id', 'color'],
  data () {
    return {
    }
  },
  watch: {
    color () {
      let val = this.color
      let colEl = document.getElementById('color' + this.id)
      colEl.style.backgroundColor = 'rgb(' + val.slice(0, 3) + ', ' + val.slice(3, 6) + ', ' + val.slice(6, 9) + ')'
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
