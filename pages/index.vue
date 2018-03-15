<template>
  <section class="container">
    <hero />

    <div>
      <div class="section section--white angle-bottom angle-top">
        <div class="contain">
          <stream />
        </div>
      </div>

      <image-banner image="keyboard" />

      <div class="section section--white angle-bottom angle-top">
        <about />
      </div>

      <image-banner image="game2" />

      <div class="section section--blue angle-bottom angle-top">
        <faq />
      </div>

      <image-banner image="corgi" />

      <div class="section section--white angle-bottom angle-top">
        <schedule />
      </div>
    </div>
  
  </section>
</template>

<script>
  import Hero from '~/components/organisms/Hero.vue'
  import Stream from '~/components/organisms/Stream.vue'
  import ImageBanner from '~/components/organisms/ImageBanner.vue'
  import About from '~/components/organisms/About.vue'
  import Schedule from '~/components/organisms/Schedule.vue'
  import Faq from '~/components/organisms/Faq.vue'

  export default {
    components: {
      Hero,
      Stream,
      ImageBanner,
      About,
      Schedule,
      Faq
    }
  }
</script>
