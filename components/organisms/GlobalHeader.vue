<template>
    <div class="header">
      <emote />
      <navigation />
    </div>
</template>

<script>
  import Emote from '~/components/atoms/Emote.vue'
  import Navigation from '~/components/organisms/Navigation.vue'
  
  export default {
    components: {
      Emote,
      Navigation
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 300ms ease;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: $padding;
    padding-right: $padding;
  }

  .header__sub {
    display: flex;
    justify-content: flex-end;
  }
</style>
