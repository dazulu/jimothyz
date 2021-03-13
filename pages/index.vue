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
      <videos />
    </div>

    <image-banner
      image="/images/bg-bloodborne.jpg"
      placeholder="/images/bg-bloodborne-placeholder.jpg"
      alt="Bloodborne"
    />

    <div class="section section--blue angle-bottom angle-top">
      <faq />
    </div>

    <image-banner
      classes="angle-bottom"
      image="/images/bg-corgi.jpg"
      placeholder="/images/bg-corgi-placeholder.jpg"
      alt="a corgi dog"
    />

    <div class="section">
      <credits />
    </div>

    <back-to-top />
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Stream from '@/components/Stream.vue'
import ImageBanner from '@/components/ImageBanner.vue'
import Credits from '@/components/Credits.vue'
import About from '@/components/About.vue'
import Videos from '@/components/Videos.vue'
import Faq from '@/components/Faq.vue'
import BackToTop from '@/components/BackToTop.vue'

export default {
  components: {
    Hero,
    Stream,
    ImageBanner,
    About,
    Videos,
    Faq,
    Credits,
    BackToTop,
  },
  middleware: ['stream', 'youtube'],
  mounted() {
    this.$nextTick(function () {
      initAudioListener()
    })
  },
}

const initAudioListener = () => {
  const secretCode = 'b,l,e,s,s,t,h,e,r,a,i,n,s'

  let capturedKeys = []
  const audioElement = document.createElement('audio')

  audioElement.id = 'audio'
  audioElement.className = 'audio-player'
  audioElement.preload = 'auto'
  audioElement.controls = 'controls'
  audioElement.src = '/audio.mp3'
  audioElement.type = 'audio/mpeg'
  audioElement.volume = 0.5 // let's not deafen people

  audioElement.load()

  window.addEventListener(
    'keydown',
    (e) => {
      capturedKeys.push(e.key)

      if (capturedKeys.toString().includes(secretCode)) {
        audioElement.play()
        capturedKeys = []
      }
    },
    true
  )
}
</script>
