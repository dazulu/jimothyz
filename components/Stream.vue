<template>
  <div>
    <div id="stream" class="stream__wrapper">
      <div>
        <a :href="stream.url" rel="noopener">
          <img
            src="~/static/images/twitch-logo.svg"
            alt="Twitch logo"
            class="twitch-logo"
            width="150"
            height="50"
          />
        </a>

        <div v-if="stream.noConnection">
          <p class="copy">
            Twitch isn't returning our calls right now but that shouldn't stop
            you. Find out what Jim is up to by
            <a :href="stream.url" rel="noopener">taking a look</a> yourself :)
          </p>
        </div>
        <div v-else>
          <a :href="stream.url" class="status" rel="noopener">{{
            stream.status
          }}</a>

          <p v-if="stream.game" class="game">
            <span v-if="stream.online">Playing: </span>
            <span v-else>Last Playing: </span>
            {{ stream.game }}
          </p>

          <p class="viewers">
            <img
              class="icon icon-followers"
              src="/images/heart.svg"
              role="presentation"
              alt="followers"
              width="25"
              height="25"
            />
            {{ followers }}
            <img
              class="icon icon-views"
              src="/images/eye.svg"
              role="presentation"
              alt="views"
              width="28"
              height="28"
            />
            {{ views }}
            <span v-if="stream.online">
              <img
                class="icon icon-viewers"
                src="/images/viewers.svg"
                role="presentation"
                alt="viewers"
                width="31"
                height="28"
              />
              {{ viewers }}
            </span>
          </p>
        </div>
      </div>
      <div class="box-art-container">
        <div class="box-art">
          <a :href="stream.url" rel="noopener">
            <img
              :src="stream.boxArt"
              :alt="'Box art for ' + stream.game"
              width="272"
              height="380"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <a :href="stream.url" class="button" rel="noopener"> GO TO STREAM </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stream: {},
    }
  },
  computed: {
    views() {
      return this.stream.views?.toLocaleString('en') || ''
    },
    viewers() {
      return this.stream.viewers?.toLocaleString('en') || ''
    },
    followers() {
      return this.stream.followers?.toLocaleString('en') || ''
    },
  },
  mounted() {
    this.stream = this.$store.getters.stream
  },
}
</script>

<style lang="scss" scoped>
.stream__wrapper {
  > div {
    text-align: center;
  }
  > div:first-child {
    margin-bottom: 30px;
  }
}

.twitch-logo {
  margin-bottom: 25px;
  width: 100px;
  height: auto;
}

.status {
  display: block;
  font-family: $font-family-heading;
  font-weight: 400;
  color: #222;
  font-size: 36px;
  margin-bottom: 10px;
  text-decoration: none;
}

.game {
  color: #222;
  font-size: 26px;
  font-weight: 300;
  margin-bottom: 15px;
}

.viewers {
  color: #222;
  font-size: 26px;
}

.icon-viewers {
  position: relative;
  top: 3px;
  margin-left: 10px;
  width: 31px;
  height: auto;
}

.icon-views {
  position: relative;
  top: 3px;
  margin-left: 10px;
  width: 28px;
  height: 28px;
}

.icon-followers {
  position: relative;
  top: 2px;
  width: 25px;
  height: auto;
}

.box-art {
  display: block;
  perspective: 800px;
  perspective-origin: 50% 50%;
  position: relative;
  margin-left: 5%;

  img {
    width: 240px;
    height: auto;
    box-shadow: 14px 0 32px 0 rgba(0, 0, 0, 0.25);
    transform: rotateY(-15deg) translateY(-3px) rotateX(10deg);
    animation: hover 1.5s alternate infinite ease-in-out;
    animation-fill-mode: forwards;
  }
}

.button-wrapper {
  text-align: center;
  margin-top: 70px;
}

@keyframes hover {
  from {
    transform: rotateY(-15deg) translateY(-3px) rotateX(10deg);
    box-shadow: 14px 0 32px 0 rgba(0, 0, 0, 0.25);
  }
  to {
    transform: rotateY(-10deg) translateY(3px) rotateX(10deg);
    box-shadow: 14px 0 32px 0 rgba(0, 0, 0, 0.4);
  }
}

@media screen and (min-width: 600px) {
  .stream__wrapper {
    display: flex;
    justify-content: space-between;

    > div {
      text-align: left;
      flex: 5;
    }

    > div:first-child {
      margin-bottom: 0;
      flex: 5;
    }
  }

  .status {
    font-size: 36px;
  }

  .twitch-logo {
    width: 150px;
    height: auto;
  }

  .box-art-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-wrapper {
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 800px) {
  .box-art {
    img {
      width: 300px;
      margin-top: -50px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .status {
    font-size: 44px;
  }
}
</style>
