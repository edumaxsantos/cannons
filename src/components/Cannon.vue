<!-- Template for a basic cannon -->
<template>
  <div class="card cannon">
    <header class="card-header">
      <p class="card-header-title">
        {{ name }}
      </p>
      <a 
        href=""
        class="card-header-icon"
        @click.prevent="remove">
        <span class="icon">
          <i
            class="fa fa-times"
            aria-hidden="true"/>
        </span>
      </a>
    </header>
    <color-view 
      :id="cannon.id"
      :color="color"/>
    <controllers-panel :controllers="cannon.controllers" :parentId="cannon.id" @colorChanged="colors"/>
  </div>
</template>

<script>
import ColorView from './basic/ColorView'
import ControllersPanel from './basic/ControllersPanel'
export default {
  props: ['cannon'],
  data () {
    return {
      name: this.cannon.name,
      color: '000000555'
    }
  },
  components: {
    ColorView,
    ControllersPanel
  },
  methods: {
    remove () {
      this.$store.dispatch('removeCannon', this.cannon)
    },
    colors (value) {
      this.color = value
    }
  }
}
</script>
<style scoped>
  .cannon {
    width: 20vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-header {
    width: 100%;
    height: 5vh;
  }
</style>
