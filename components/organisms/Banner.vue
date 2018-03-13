<template>
  <div class="banner">
    <img class="logo" src="~/static/images/logo.png" alt="Jimothyz" />
  </div>
</template>
  
<style lang="scss" scoped>
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    position: relative;
    height: 90vh;
  }

  .logo {
    position: relative;
    top: -130px;
    max-width: 500px;
    min-width: 320px;
    width: 100%;
  }
</style>