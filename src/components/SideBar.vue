<template>
  <div class="label small white">
    <span :key="link" v-for="link in links" class="sidebar-item">{{
      link
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    links: {
      type: Array,
      default: () => [],
      validator: val => val.length <= 4
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
  padding-top: 1rem;
  text-align: center;
}
.sidebar-item {
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
}

@media (min-width: 576px) {
  div {
    position: absolute;
    top: 43%;
    right: -90px;
    transform: rotate(90deg);
    text-align: center;
    padding-top: 0;
  }
}

@media (min-width: 768px) {
  div {
    top: 48%;
  }
}

@media (min-width: 992px) {
  div {
    top: 43%;
  }
}
@media (min-width: 1200px) {
  div {
    top: 43%;
  }
}
</style>
