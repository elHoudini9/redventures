<template>
  <div class="background" :style="styleObj">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BgImgContainer',
  props: {
    imgName: {
      type: String,
      // make sure that background.png is in the `public/images/` folder of the project
      default: 'background.png'
    },
    bgColor: {
      type: String,
      default: '#222F33'
    },
    hasGradient: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleObj() {
      const gradient = this.hasGradient
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)),'
        : ''
      return {
        backgroundImage: `${gradient} url('images/${this.imgName}')`,
        backgroundColor: this.bgColor
      }
    }
  }
}
</script>

<style scoped>
.background {
  padding-top: 10px;
  padding-bottom: 30px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
}
@media (min-width: 992px) {
  .background {
    background-size: 100%;
    background-position: initial;
    background-attachment: fixed;
  }
}
</style>
