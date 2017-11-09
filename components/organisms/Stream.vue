<template>
  <div class="stream__wrapper">
    <div class="angled-border"></div>
    <div class="stream content-wrapper">
      <div>
        <box-art class="stream__box-art"/>
      </div>
      <div>
        <stream-status/>
      </div>
    </div>
  </div>
</template>

<script>
import BoxArt from '~/components/atoms/BoxArt.vue'
import StreamStatus from '~/components/atoms/StreamStatus.vue'

export default {
  components: {
    BoxArt,
    StreamStatus
  }
}
</script>

<style lang="scss">
  .stream__wrapper {
    background-image: url('~/images/stream-bg.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 430px;
    border-top: 30px solid #fff;
    border-bottom: 30px solid #fff;
  }

  .stream {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
      margin-right: 5%;
    }

    > div:last-child {
      margin-left: 5%;
    }
  }

  .stream__box-art {
    display: block;
    perspective: 800;
    position: relative;
    z-index: 1;
  }

  .stream__box-art img {
    transform: rotateY(-15deg);
  }
</style>