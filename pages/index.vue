<template>
  <section class="container">
    <div>
      <logo/>
      <stream-status />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import StreamStatus from '~/components/atoms/StreamStatus.vue'

export default {
  components: {
    Logo,
    StreamStatus
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
