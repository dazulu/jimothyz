<template>
  <section class="container">
    <div class="hero"></div>

    <div class="section">
      <div class="angle"></div>
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
  height: 100%;
}

.hero {
  height: 100%;
  background: salmon;
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
