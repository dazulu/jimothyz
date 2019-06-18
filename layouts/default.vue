<template>
  <div class="view">
    <GlobalHeader />
    <nuxt/>
  </div>
</template>

<script>
  import GlobalHeader from '~/components/organisms/GlobalHeader.vue'

  export default {
    components: {
      GlobalHeader
    }
  }
  
  if (process.browser) {
    console.log('>>>>>>> Site designed and coded by @dazulu <<<<<<<')
  }
</script>
