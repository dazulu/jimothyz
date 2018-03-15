<template>
  <div>
    <div class="stream__wrapper">
      <div>
        <a :href=url rel=noopener>
          <img src="~/static/images/twitch-logo.svg" alt="Twitch logo" class="twitch-logo" />
        </a>
        
        <a :href=url class="status" rel=noopener>{{status}}</a>

        <p class="game">
          <span v-if="online">Playing: </span>
          <span v-else>Last Playing: </span>
          {{game}}
        </p>

        <p class="viewers">
          <img class="icon icon-followers" src="/images/heart.svg" role="presentation" />
          {{followers}}
          <span v-if="online">
            <img class="icon icon-viewers" src="/images/viewers.svg" role="presentation" />
            {{viewers}}
          </span>
        </p>

      </div>
      <div class="box-art-container">
        <div class="box-art">
          <a :href=url rel=noopener>
            <img :src="boxArt" :alt="'Box art for ' + game" />
            </a>
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <a :href=url class="button" rel=noopener>
        GO TO STREAM
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      game () { return this.$store.state.channel.game },
      online () { return this.$store.state.channel.online },
      viewers () { return this.$store.state.channel.viewers },
      followers () { return this.$store.state.channel.followers },
      boxArt () { return this.$store.state.channel.boxArt },
      status () { return this.$store.state.channel.status },
      url () { return this.$store.state.channel.url }
    }
  }
</script>

<style lang="scss" scoped>
  .stream__wrapper {
    > div:first-child {
      margin-bottom: 30px;
    }

    > div {
      text-align: center;
    }
  }

  .twitch-logo {
    margin-bottom: 25px;
    width: 100px;
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
    height: 28px;
  }

  .icon-followers {
    position: relative;
    top: 2px;
    height: 25px;
  }

  .box-art {
    display: block;
    perspective: 800px;
    perspective-origin: 50% 50%;
    position: relative;
    margin-left: 5%;

    img {
      width: 240px;
      box-shadow: 14px 0px 32px 0px rgba(0,0,0,0.25);
      transform: rotateY(-15deg) translateY(-3px) rotateX(10deg);
      animation: hover 1.5s alternate infinite ease-in-out;
      animation-fill-mode: forwards
    }
  }

  .button-wrapper {
    text-align: center;
    margin-top: 70px;
  }

  @keyframes hover {
    from {
      transform: rotateY(-15deg) translateY(-3px) rotateX(10deg);
        box-shadow: 14px 0px 32px 0px rgba(0,0,0,0.25);
    }
    to {
      transform: rotateY(-10deg) translateY(3px) rotateX(10deg);
        box-shadow: 14px 0px 32px 0px rgba(0,0,0,0.4);
    }
  }

  @media screen and (min-width: 600px) {
    .stream__wrapper {
      display: flex;
      justify-content: space-between;

      > div:first-child {
        margin-bottom: 0;
        flex: 5;
      }

      > div {
        text-align: left;
        flex: 5;
      }
    }

    .status {
      font-size: 36px;
    }

    .twitch-logo {
      width: 150px;
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
