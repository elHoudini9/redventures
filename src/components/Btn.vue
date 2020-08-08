<template>
  <button :class="[btnClass, 'label medium']">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    flavor: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    btnClass() {
      // Always fallback to 'primary' if bad flavor is provided
      if (this.flavor === 'ghost') {
        return 'ghost'
      } else {
        return 'primary'
      }
    }
  }
}
</script>

<style scoped>
button {
  width: 90px;
  height: 34px;
  border-radius: 4px;
  border: none;
  color: #606b74;
  cursor: pointer;
}

.primary {
  background-color: #ffffff;
}

.ghost {
  background-color: transparent;
  border: 1px solid #646d70;
}
</style>
