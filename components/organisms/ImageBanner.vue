<template>
  <div class="image-banner">
    <img class="image" :src=imageSrc :alt=alt />
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String
      },
      placeholder: {
        type: String
      },
      alt: {
        type: String
      }
    },
    data: function () {
      return {
        imageSrc: this.placeholder
      }
    },
    mounted: function () {
      let imageLoader = new Image()
      imageLoader.onload = () => {
        this.imageSrc = this.image
        imageLoader = null
      }
      imageLoader.src = this.image
    }
  }
</script>

<style lang="scss" scoped>
  .image-banner {
    height: 700px;
    position: relative;
    overflow: hidden;
  }

  .image {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
</style>
