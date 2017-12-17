<template>
  <div class="card controller">
    <div class="card-content controller-content">
      <p class="subtitle is-size-6 has-text-centered controller-content-subtitle">{{ name }} - {{ value }}</p>
      <div class="content has-text-centered">
        <input
          class="controller-range"
          type="range"
          :min="min"
          :max="max"
          v-model="value" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cannon'],
  data () {
    return {
      value: this.cannon.value,
      min: this.cannon.min,
      max: this.cannon.max,
      name: this.cannon.name
    }
  },
  watch: {
    value (val) {
      // this.$store.dispatch('updateValue', this, this.changeVal(val))
      this.$emit('changeColor', this, this.changeVal(val))
    }
  },
  methods: {
    changeVal (val) {
      let value = Number.parseInt(val)
      let retorno = val
      if (value === 0) {
        retorno = '000'
      } else if (value < 10) {
        retorno = '00' + value.toString()
      } else if (value < 100) {
        retorno = '0' + value.toString()
      }

      return retorno
    }
  }
}
</script>
<style scoped>
  .controller {
    min-width: 15vw;
    min-height: 8vh;
  }
  .controller-content {
    padding: 0.2rem;
    padding-top: 0.5rem;
  }
  .controller-content-subtitle {
    margin-bottom: 0;
  }
  .controller-range {
    width: 100%;
  }
</style>
