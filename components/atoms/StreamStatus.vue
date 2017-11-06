
<template>
  <div class="stream-status">
    <span v-if="status" class="status status--online" />
    <span v-else class="status status--offline" />
  </div>
</template>

<script>
  export default {
    computed: {
      status () { return this.$store.state.streamStatus }
    }
  }
</script>

<style lang="scss">
  .status {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .status--offline {
    background-color: firebrick;
  }

  .status--online {
    background-color: forestgreen;
  }
</style>