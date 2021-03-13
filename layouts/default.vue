<template>
  <div class="view">
    <GlobalHeader />
    <nuxt />
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  components: {
    GlobalHeader,
  },
}

if (process.browser) {
  console.log('Designed and coded by @dazulu')
}
</script>
