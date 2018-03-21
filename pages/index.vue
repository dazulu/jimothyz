<template>
  <section class="container">
    <hero />

      <div class="section section--white angle-bottom angle-top">
        <div class="contain">
          <stream />
        </div>
      </div>

      <image-banner
        image="/images/bg-keyboard.jpg"
        placeholder="/images/bg-keyboard-placeholder.jpg"
        alt="rainbow backlit gaming keyboard"
      />

      <div class="section section--white angle-bottom angle-top">
        <about />
      </div>

      <image-banner
        image="/images/bg-pubg.jpg"
        placeholder="/images/bg-pubg-placeholder.jpg"
        alt="PlayerUnknown's: Battlegrounds screenshot"
      />

      <div class="section section--blue angle-bottom angle-top">
        <faq />
      </div>

      <image-banner
        image="/images/bg-corgi.jpg"
        placeholder="/images/bg-corgi-placeholder.jpg"
        alt="a corgi dog"
      />

      <div class="section section--white angle-top">
        <schedule />
      </div>

      <global-footer />
      <back-to-top />
  </section>
</template>

<script>
  import Hero from '~/components/organisms/Hero.vue'
  import Stream from '~/components/organisms/Stream.vue'
  import ImageBanner from '~/components/organisms/ImageBanner.vue'
  import About from '~/components/organisms/About.vue'
  import Schedule from '~/components/organisms/Schedule.vue'
  import Faq from '~/components/organisms/Faq.vue'
  import GlobalFooter from '~/components/organisms/GlobalFooter.vue'
  import BackToTop from '~/components/atoms/BackToTop.vue'

  export default {
    components: {
      Hero,
      Stream,
      ImageBanner,
      About,
      Schedule,
      Faq,
      GlobalFooter,
      BackToTop
    },
    mounted: function () {
      this.$nextTick(function () {
        initAudioListener()
      })
    }
  }

  const initAudioListener = () => {
    const secretCode = '66,76,69,83,83,84,72,69,82,65,73,78,83'

    let capturedKeys = []
    let audioElement = document.createElement('audio')

    audioElement.id = 'audio'
    audioElement.className = 'audio-player'
    audioElement.preload = 'auto'
    audioElement.controls = 'controls'
    audioElement.src = '/audio.mp3'
    audioElement.type = 'audio/mpeg'
    audioElement.volume = 0.5 // let's not deafen people

    audioElement.load()

    window.addEventListener('keydown', (e) => {
      capturedKeys.push(e.keyCode)

      if (capturedKeys.toString().indexOf(secretCode) >= 0) {
        audioElement.play()
        capturedKeys = []
      }
    }, true)
  }
</script>
