<template>
  <section class="container">
    <banner />

    <div class="section">
      <div class="angle"></div>
      <stream />
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

<style lang="scss" scoped>
  .container {
    height: 100%;
  }

  .section {
    position: relative;
  }

  .angle {
    top: -100px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 60%;
    min-height: 340px;
    transform: skewY(5deg);
    background: #fff;
  }
</style>
