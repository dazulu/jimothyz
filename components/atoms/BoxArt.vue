<template>
  <a :href="url" rel="noopener" target="_blank">
    <img :src="boxArt" :alt="game" class="boxart__image" />
  </a>
</template>

<script>
  export default {
    computed: {
      game () { return `${this.$store.state.channel.game} box art` },
      boxArt () { return this.$store.state.channel.boxArt },
      url () { return this.$store.state.channel.url }
    }
  }
</script>

<style lang="scss">
  .boxart__image {
    display: block;
    max-width: 270px;
    width: 25vw;
  }
</style>