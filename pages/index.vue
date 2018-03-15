<template>
  <section class="container">
    <hero />

      <div class="section section--white angle-bottom angle-top">
        <div class="contain">
          <stream />
        </div>
      </div>

      <image-banner image="keyboard" />

      <div class="section section--white angle-bottom angle-top">
        <about />
      </div>

      <image-banner image="pubg" />

      <div class="section section--blue angle-bottom angle-top">
        <faq />
      </div>

      <image-banner image="corgi" />

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
    }
  }
</script>
