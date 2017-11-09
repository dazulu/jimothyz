<template>
  <div class="stream-status__wrapper">
    <div v-if="online" class="stream-status">
      <span class="status status--online" />
      <span class="stream-status__text">LIVE</span>with {{viewers}} viewers
    </div>

    <div v-else class="stream-status">
      <span class="status status--offline" />
      Stream Offline
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      online () { return this.$store.state.channel.online },
      viewers () { return this.$store.state.channel.viewers }
    }
  }
</script>

<style lang="scss">
  .stream-status__wrapper {
    position: relative;
  }

  .stream-status {
    background-color: #421b39;
    background-size: 23px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    padding: 12px 20px 12px 20px;
    line-height: 1;
    border-radius: 8px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 0px 0px hotpink;
  }

  .stream-status__text {
    color: #ff69b4;
    margin-right: 7px;
  }

  .status {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .status--offline {
    background-color: #777;
  }

  .status--online {
    background-color: #79d879;
  }
</style>