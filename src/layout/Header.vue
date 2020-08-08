<template>
  <BgImgContainer id="header" hasGradient>
    <NavBar :links="navBarLinks" btnLabel="contact" />
    <SideBar :links="sideBarLinks" />

    <b-container class="content">
      <b-row>
        <b-col md="7" cols="12">
          <ContentBlock
            class="content-block"
            headerClass="label bold white lighten"
            bodyClass="headers h2 white"
          >
            <template v-slot:header> {{ content.header }}</template>
            <template v-slot:default>{{ content.body }}</template>
          </ContentBlock>
        </b-col>
        <b-col class="video-player-column" md="5" cols="12">
          <VideoPlayer class="video-player" name="video" />
        </b-col>
      </b-row>
    </b-container>
  </BgImgContainer>
</template>

<script>
import BgImgContainer from '@/components/BgImgContainer'
import ContentBlock from '@/components/ContentBlock'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import VideoPlayer from '@/components/VideoPlayer'

export default {
  name: 'Header',
  components: {
    BgImgContainer,
    ContentBlock,
    NavBar,
    SideBar,
    VideoPlayer
  },
  data: () => ({
    navBarLinks: ['Modellen', 'Kopen', 'Huren', 'Nieuws'],
    sideBarLinks: ['Instagram', 'Facebook', 'Linkedin'],
    content: {
      header: 'Duurzame tiny huisjes',
      body:
        'Een ecologisch tiny huisje is zoveel mogelijk opgebouwd uit duurzame natuurlijke materialen'
    }
  })
}
</script>

<style scoped>
#header {
  width: 100%;
  height: fit-content;
}

.content {
  margin-top: 30px;
}

.video-player-column {
  height: 200px;
  display: grid;
  place-items: center;
}

@media (min-width: 576px) {
  #header {
    min-height: 600px;
  }
  .content {
    margin-top: 96px;
  }
  .video-player-column {
    height: 160px;
  }
}

@media (min-width: 992px) {
  .content-block {
    width: 440px;
  }

  .video-player-column {
    height: 190px;
  }
}
</style>
