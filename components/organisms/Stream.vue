<template>
  <div class="content-wrapper">
    <a :href="url" rel="noopener" target="_blank" class="stream__wrapper">
      <div class="twitch"></div>
      <div class="stream">

        <div class="status">
          <div>
            <p class="text-status">{{status}}</p>
            <p class="game">{{game}}</p>
            <div class="viewers">
              <img class="icon icon-followers" src="/images/heart.svg" role="presentation" />
              {{followers}}
              <span v-if="online">
                <img class="icon icon-viewers" src="/images/group.svg" role="presentation" />
                {{viewers}}
              </span>
            </div>
          </div>
        </div>

        <div class="box-art">
          <img :src="boxArt" :alt="'Box art for ' + game" />
        </div>
      </div>

      <div v-if="online" class="live-status is-online">LIVE &#9656;</div>
      <div v-else class="live-status is-offline">OFFLINE &#9656;</div>
    </a>
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

<style lang="scss">
  .stream__wrapper {
    background: #222;
    display: block;
    text-decoration: none;
  }

  .status {
    padding: 20px 10px;;
  }

  .twitch {
    background-color: #6441A4;
    background-image: url('/images/glitch.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 35px;
    min-width: 150px;
    height: 80px;
  }

  .stream {
    color: #fff;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
  }

  .text-status {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .viewers {
    font-size: 28px;
  }

  .icon-viewers {
    position: relative;
    top: 4px;
    margin-left: 10px;
    height: 30px;
  }

  .icon-followers {
    position: relative;
    top: 2px;
    height: 25px;
  }

  .live-status {
    color: #fff;
    font-size: 30px;
    font-weight: 700; 
    min-width: 220px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .is-online {
    background-color: #90BF4D;
  }

  .is-offline {
    background-color: #999;
  }

  .game {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .box-art {
    display: none;
  }

  @keyframes hover {
    from {
      transform: rotateY(-15deg) translateY(-3px);
        box-shadow: 14px 0px 32px 0px rgba(0,0,0,0.25);
    }
    to {
      transform: rotateY(-10deg) translateY(3px);
        box-shadow: 14px 0px 32px 0px rgba(0,0,0,0.4);
    }
  }

  @media screen and (min-width: 1024px) {
    .stream__wrapper {
      display: flex;
      position: relative;
      height: 200px;
      margin: 0 30px;
    }

    .status {
      padding: 0;
    }

    .twitch {
      background-size: 50px;
      height: auto;
    }

    .text-status {
      font-size: 30px;
      margin-bottom: 0;
    }

    .live-status {
      font-size: 42px;
      height: auto;
    }

    .box-art {
      display: block;
      perspective: 800px;
      perspective-origin: 50% 50%;
      margin-left: 5%;
      
      img {
        width: 200px;
        box-shadow: 14px 0px 32px 0px rgba(0,0,0,0.25);
        transform: rotateY(-15deg) translateY(-3px);
        animation: hover 1.5s alternate infinite ease-in-out;
        animation-fill-mode: forwards
      }
    }
  }
</style>