<template>
  <section class="container">
    <banner />

    <div>
      <div class="section section--white angle--bottom angle--top">
        <div class="contain">
          <stream />
        </div>
      </div>

      <div class="section section--keyboard" >
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

</style>
