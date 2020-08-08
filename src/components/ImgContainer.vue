<template>
  <div class="background">
    <div :style="img"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: { backgroundImage: `url('images/background.png')` }
  })
}
</script>

<style>
div {
  height: 100vw;
  background: 80% 10% / cover no-repeat;
  background-attachment: fixed;
}
.background {
}
</style>
