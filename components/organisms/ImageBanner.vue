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

  .corgi {
    background-image: url('~/static/images/bg-corgi.jpg');
  }

  .pubg {
    background-image: url('~/static/images/pubg-small.jpg');
  }

  
  @media only screen and (min-width:1024px) {
    .pubg {
      background-image: url('~/static/images/pubg-medium.jpg');
    }
  }

  @media only screen and (min-width:1280px) {
    .pubg {
      background-image: url('~/static/images/pubg-large.jpg');
    }
  }
</style>
