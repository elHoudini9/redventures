<template>
  <div>
    <span v-b-modal="name" class="content text-center">
      <img src="images/play.png" />
      <span class="label medium white">{{ label }}</span>
    </span>

    <b-modal :id="name" centered size="lg">
      <b-embed
        type="iframe"
        allow="autoplay"
        aspect="16by9"
        :src="videoUrl"
        allowfullscreen
      ></b-embed>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    name: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      default:
        'https://www.youtube.com/embed/JueppeaIHVU?autoplay=1&modestbranding=1&rel=0&hl=nl'
    },
    label: {
      type: String,
      default: 'Bekijk de film'
    }
  }
}
</script>

<style scoped>
span {
  margin-left: -10px;
  width: 0%;
}
</style>
