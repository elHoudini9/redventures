<template>
  <b-navbar toggleable="md" type="dark">
    <b-container>
      <b-navbar-brand href="#">
        <img src="images/logo.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="link in links" :key="link" class="mr-3">
            <span class="label medium white">{{ link }}</span>
          </b-nav-item>
          <b-nav-item class="mr-3">
            <Btn v-if="btnLabel" class="link-button">Contact</Btn>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import Btn from '@/components/Btn'
export default {
  name: 'NavBar',
  components: {
    Btn
  },
  props: {
    links: {
      type: Array,
      default: () => [],
      // Accepts no more than 4 links
      validator: val => val.length <= 4
    },
    btnLabel: {
      type: String
      // Button at the end is only shown if populated
    }
  }
}
</script>

<style scoped>
.link-button {
  margin-top: 10px;
}

@media (min-width: 768px) {
  .link-button {
    margin-top: auto;
  }
}
</style>
