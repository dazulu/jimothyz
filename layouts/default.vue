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
