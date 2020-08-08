<template>
  <div id="section2">
    <b-container>
      <b-row>
        <b-col md="6" sm="12" xs="12">
          <ContentBlock
            headerClass="headers h2 white"
            bodyClass="paragraph special white lighten"
          >
            <template v-slot:header> {{ content.header }}</template>
            <template v-slot:default>{{ content.body1 }}</template>
          </ContentBlock>
        </b-col>
        <b-col md="6" sm="12" xs="12">
          <ContentBlock
            headerClass="headers h2 white"
            bodyClass="paragraph special white lighten"
          >
            <template v-slot:default>{{ content.body2 }}</template>
          </ContentBlock>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContentBlock from '@/components/ContentBlock'

export default {
  name: 'Section2',
  components: {
    ContentBlock
  },
  data: () => ({
    content: {
      header: 'Innovatie',
      body1:
        'Wij hebben als doel om de EcoCabins voortdurend verder te ontwikkelen en innoveren, zodat de EcoCabins uiteindelijk 100% duurzaam en circulair zijn. Voorwaarde hierbij is dat de EcoCabins betaalbaar blijven. Met behulp van de zon, de wind en de beste isolatie geniet u van.',
      body2:
        'Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd met indien mogelijk duurzame en/of natuurlijke materialen en hebben als opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk gemaakt door het specifieke materiaalgebruik De voordelen van bouwen.'
    }
  })
}
</script>

<style scoped>
#section2 {
  height: fit-content;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #222f33;
}

@media (min-width: 992px) {
  #section2 {
    padding-top: 220px;
    padding-bottom: 78px;
    margin-top: 0;
  }
}
</style>
