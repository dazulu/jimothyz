<template>
  <div class="view">
    <GlobalHeader />
    <nuxt/>
  </div>
</template>

<script>
  import GlobalHeader from '~/components/organisms/GlobalHeader.vue'
  import GlobalFooter from '~/components/organisms/GlobalFooter.vue'

  export default {
    components: {
      GlobalHeader,
      GlobalFooter
    }
  }
</script>

<style lang="scss">
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    background-attachment: fixed;
    background-image: url('~/images/dogs.png');
    background-size: 200px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
