<template>
  <b-carousel id="carousel-fade" indicators :img-width="325" :img-height="366">
    <b-carousel-slide :key="img" v-for="img in images" :img-src="img" />
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      default: () => [],
      validator: val => val.length <= 7
    }
  }
}
</script>
