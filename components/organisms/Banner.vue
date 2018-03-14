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
    height: 60vh;
  }

  .logo {
    position: relative;
    top: -20%;
    max-width: 400px;
    min-width: 290px;
    width: 50vw;
  }
</style>
