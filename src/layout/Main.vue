<template>
  <div id="main">
    <div class="ruler"></div>

    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
  </div>
</template>

<script>
import Header from '@/layout/Header'
import Section1 from '@/layout/Section1'
import Section2 from '@/layout/Section2'
import Section3 from '@/layout/Section3'
import Footer from '@/layout/Footer'

export default {
  name: 'Main',
  components: {
    Header,
    Section1,
    Section2,
    Section3,
    Footer
  }
}
</script>
