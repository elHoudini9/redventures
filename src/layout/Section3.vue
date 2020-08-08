<template>
  <b-container id="section3">
    <b-row>
      <b-col md="6" cols="12" class="bg-img-container">
        <b-img src="images/img2.png" fluid alt="Responsive image"></b-img>
      </b-col>
      <b-col md="6" cols="12" class="content-container">
        <b-row>
          <b-col
            :key="b.header"
            v-for="(b, index) in contentBlocks"
            :class="index % 2 === 0 ? 'content-col-left' : 'content-col-right'"
            sm="6"
            cols="6"
          >
            <ContentBlock
              class="content-block"
              size="small"
              headerClass="headers h3 dark-green"
              bodyClass="paragraph medium light-grey lighten"
            >
              <template v-slot:header> {{ b.header }}</template>
              <template v-slot:default>{{ b.content }}</template>
            </ContentBlock>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContentBlock from '@/components/ContentBlock'

export default {
  name: 'Section3',
  components: {
    ContentBlock
  },
  data: () => ({
    contentBlocks: [
      {
        header: 'Hout',
        content:
          'De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.'
      },
      {
        header: 'Glaswol isolatie',
        content:
          'De combinatie van glaswol met een houtskelet constructie geeft een.'
      },
      {
        header: 'Afwerking',
        content:
          'De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.'
      },
      {
        header: 'Triple glas',
        content:
          'De combinatie van glaswol met een houtskelet constructie geeft een.'
      },
      {
        header: 'Stalen onderstel',
        content:
          'Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid die'
      },
      {
        header: 'Infrarood vloer',
        content:
          'De vloer wordt opgewarmd middels opgewekte warmte uit eigen zonne-energie.'
      }
    ]
  })
}
</script>

<style scoped>
#section3 {
  height: fit-content;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bg-img-container {
  display: grid;
  place-items: center;
}

.content-col-left {
  margin-top: 0;
  display: grid;
  place-items: end;
  padding-bottom: 37px;
  text-align: left;
  align-self: end;
}
.content-col-right {
  margin-top: 0;
  display: grid;
  place-items: start;
  padding-bottom: 37px;
  text-align: left;
  align-self: end;
}

.content-container {
  margin-top: 20px;
}

.content-block {
  max-width: 150px;
}

@media (min-width: 576px) {
  #section3 {
    min-height: 460px;
    padding-top: 50px;
    padding-bottom: 30px;
  }
  .content-col-left {
    place-items: end;
  }
  .content-block {
    height: 85px;
  }
}

@media (min-width: 768px) {
  .content-container {
    margin-top: 0;
  }
  .bg-img-container {
    display: block;
    place-items: none;
    width: 355px;
    height: 362px;
  }
}

@media (min-width: 992px) {
  #section3 {
    min-height: 532px;
    padding-top: 85px;
    padding-bottom: 0;
  }

  .content-block {
    width: 155px;
    height: 93px;
  }
  .content-col-left {
    place-items: start;
  }
}
</style>
