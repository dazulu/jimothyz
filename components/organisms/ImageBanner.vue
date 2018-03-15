<template>
  <div class="image-banner" :class="image"></div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-banner {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 700px;
  }

  .keyboard {
    background-image: url('~/static/images/bg-keyboard.jpg');
  }

  .game1 {
    background-image: url('~/static/images/bg-game1.jpg');
  }

  .game2 {
    background-image: url('~/static/images/bg-game2.jpg');
  }

  .corgi {
    background-image: url('~/static/images/bg-corgi.jpg');
  }
</style>
