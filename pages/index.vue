<template>
  <section class="container">
    <banner />

    <div>
      <div class="section section--white angle-bottom angle-top">
        <div class="contain">
          <stream />
        </div>
      </div>

      <div class="image-banner"></div>

      <div class="section section--white angle-bottom angle-top">
        <div class="contain">
          <h1 id="about" class="section__title">About Jimothy</h1>
          <div class="two-column-content">
              <div class="column-content">
                <img src="~/static/images/jim.png" alt="Jimothy" class="streamer-photo"/>
              </div>
              <div class="column-content">
                <p class="copy">Welcome fam! I'm James, a 25-year-old community manager for Ubisoft (For Honor, BGE2) and lover of all things game, doggo and pizza-related. This is a variety stream -- meaning we play anything and everything -- but community always comes first. I stream on Team Sin Squad.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  
  </section>
</template>

<script>
  import Banner from '~/components/organisms/Banner.vue'
  import Stream from '~/components/organisms/Stream.vue'

  export default {
    components: {
      Banner,
      Stream
    }
  }
</script>

<style lang="scss">
  @media only screen and (max-width: 600px) {
    .streamer-photo {
      width: 320px;
    }
  }

</style>
