<template>
  <div id="section1">
    <div class="background" />
    <b-container>
      <b-row>
        <b-col lg="8" md="6" sm="12" cols="12" class="ba">
          <ContentBlock
            class="content-block"
            headerClass="headers h2 dark-green"
            bodyClass="paragraph special light-grey"
          >
            <template v-slot:header> {{ content.header }}</template>
            <template v-slot:default>{{ content.body }}</template>
            <template v-slot:action>
              <Btn flavor="ghost">{{ content.button }}</Btn>
            </template>
          </ContentBlock>
        </b-col>
        <b-col lg="4" md="6" sm="12" xs="12" class="content-carousel">
          <Carousel :images="images" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import Carousel from '@/components/Carousel'
import ContentBlock from '@/components/ContentBlock'
export default {
  name: 'Section1',
  components: {
    Btn,
    Carousel,
    ContentBlock
  },
  data: () => ({
    content: {
      header: 'Duurzame materialen',
      body:
        'Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd met indien mogelijk duurzame en/of natuurlijke materialen en hebben als opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk gemaakt door het specifieke materiaalgebruik. De voordelen van bouwen met hout zijn legio: hout is licht, flexibel, isoleert goed en bouwt snel en efficiënt.',
      button: 'Lees meer'
    },
    images: [
      'images/carousel1.png',
      'images/carousel2.png',
      'images/carousel3.png',
      'images/carousel4.png'
    ]
  })
}
</script>

<style scoped>
#section1 {
  height: fit-content;
  padding-bottom: 30px;
}

.content-block {
  position: relative;
  margin-top: 30px;
  width: 100%;
}

.background {
  display: none;
  position: absolute;
  background-color: #ffffff;
  top: 563px;
  min-height: 399px;
  width: 100%;
}

.content-carousel {
  padding-top: 30px;
  display: grid;
  place-items: center;
}

.carousel {
  max-height: 366px;
  max-width: 325px;
  background-color: #222f33;
}

@media (min-width: 576px) {
  .content-block {
    width: 100%;
  }

  .carousel {
    top: 0px;
    left: 0px;
    height: 366px;
    width: 325px;
  }
}

@media (min-width: 768px) {
  .content-carousel {
    padding-top: 40px;
  }
}

@media (min-width: 992px) {
  #section1 {
    height: 223px;
  }
  .content-block {
    width: 400px;
    margin-top: 20px;
  }

  .background {
    display: block;
    width: 60%;
  }

  .carousel {
    top: -75px;
    left: -90px;
  }

  .content-carousel {
    padding-top: 0px;
  }
}
</style>
