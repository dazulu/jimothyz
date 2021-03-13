<template>
  <div class="contain">
    <h1 id="videos" class="section__title">Latest Videos</h1>
    <div class="videos">
      <div v-for="video in videos" :key="video.id" class="video">
        <a
          :href="video.url"
          class="video__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="video__cover">
            <h4 class="video__title">{{ video.title }}</h4>
            <svg viewBox="0 0 24 24" class="video__play">
              <path
                fill="white"
                d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
              />
            </svg>
          </div>
          <img
            :alt="video.title"
            :src="video.image.url"
            width="480"
            height="360"
            class="video__image"
          />
        </a>
      </div>
    </div>
    <div class="button-wrapper">
      <a
        :href="channelURL"
        class="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        VISIT CHANNEL
      </a>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'youtube',
  data() {
    return {
      videos: {},
    }
  },
  computed: {
    channelURL({ $config: { YOUTUBE_CHANNEL_ID } }) {
      return `https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`
    },
  },
  mounted() {
    this.videos = this.$store.getters.videos
  },
}
</script>

<style lang="scss">
.videos {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  margin: 0 5vw;
}

.video__link {
  display: block;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
}

.video__image {
  transform: scale(1.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.video__play {
  width: 25%;
  height: 25%;
  transition: all 125ms ease-out;
  margin-bottom: 2%;
}

.video__cover {
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(228, 63, 90, 0) 0%,
    rgba(0, 0, 0, 0.75) 80%,
    rgba(0, 0, 0, 0.9) 100%
  );
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    .video__play {
      width: 27%;
      height: 27%;
    }
  }
}

.video__title {
  position: absolute;
  padding: 0 5% 0 1%;
  margin: 0 5% 5%;
  bottom: 0;
  left: 0;
  width: 70%;
  color: $pure-white;
  font-size: 21px;
  font-family: $font-family-heading;
  border-left: 7px solid $youtube;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}
</style>
