<template>
  <div class="hero">
    <img
      class="logo"
      src="~/static/images/logo.png"
      alt="Jimothyz"
      width="648"
      height="351"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero {
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
  max-width: 450px;
  min-width: 290px;
  width: 100%;
  height: auto;
}
</style>
