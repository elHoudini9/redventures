<template>
  <div>
    <div :class="[headerClass, { 'no-header': !hasHeader }]">
      <slot name="header" />
    </div>
    <div :class="bodyClass" :style="styleObj">
      <slot name="default" />
    </div>
    <div v-if="hasAction" class="action">
      <slot name="action" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',
  props: {
    headerClass: {
      type: String,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  computed: {
    hasHeader() {
      return this.$slots.header === undefined ? false : true
    },
    hasAction() {
      return this.$slots.action === undefined ? false : true
    },
    styleObj() {
      return this.size === 'small'
        ? { marginTop: '4px' }
        : { marginTop: '12px' }
    }
  }
}
</script>

<style scoped>
.content {
  padding-top: 12px;
}

.action {
  padding-top: 15px;
}

.no-header {
  padding-top: 0px;
}

@media (min-width: 768px) {
  .no-header {
    padding-top: 38px;
  }
}
</style>
