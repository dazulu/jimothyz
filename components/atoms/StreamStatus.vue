<template>
  <div>
    <div v-if="online" class="stream-status">
      <span class="status status--online" />
      <span class="status-mode">Live: </span> {{game}}
    </div>

    <div v-else class="stream-status">
      <span class="status status--offline" />
      <span class="status-mode">OFFLINE: </span> {{game}}
    </div>

    <span v-if="viewers" class="stream-viewers">Viewers: {{viewers}}</span>
  </div>
</template>

<script>
  export default {
    computed: {
      online () { return this.$store.state.channel.online },
      game () { return this.$store.state.channel.game },
      viewers () { return this.$store.state.channel.viewers }
    }
  }
</script>

<style lang="scss">
  .stream-status {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    background: #421b39;
    border-radius: 5px;
    padding: 6px 12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    box-shadow: 4px 4px 0px 0px #9a4f7f;
    margin-bottom: 10px;
  }

  .status {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .status-mode {
    color: #ff69b4;
    margin-right: 4px;
  }

  .status--offline {
    background-color: firebrick;
  }

  .status--online {
    background-color: #79d879;
  }

  .stream-viewers {
    font-weight: 600;
    color: #ff69b4;
  }
</style>