<template>
  <div class="header__wrapper">
    <div class="header">
      <Logo />
      <Navigation />
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/atoms/Logo.vue'
  import Navigation from '~/components/molecules/Navigation.vue'
  
  export default {
    components: {
      Logo,
      Navigation
    }
  }
</script>

<style lang="scss">
  .header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 300ms ease;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $padding;
  }

  .header__sub {
    display: flex;
    justify-content: flex-end;
  }
</style>
