<template>
  <section class="container">
    <div>
      <stream />
    </div>
  </section>
</template>

<script>
import Stream from '~/components/organisms/Stream.vue'

export default {
  components: {
    Stream
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
