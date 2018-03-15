<template>
  <button v-on:click="toggleMenu" class="menu__button" aria-label="Toggle Menu">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <div class="button__line"></div>
  </button>
</template>

<script>
export default {
  methods: {
    toggleMenu: () => {
      document.querySelector('.menu__button').classList.toggle('is--open')
      document.querySelector('.nav').classList.toggle('nav--open')
      document.body.classList.toggle('no-touchy-action')
    }
  }
}
</script>

<style lang="scss">
  .menu__button {
    cursor: pointer;
    background: none;
    border: 0;
    color: $pure-white;
    display: block;
    font-size: 18px;
    font-family: $font-family;
    font-weight: 700;
    letter-spacing: -1px;
    position: relative;
    z-index: 11;
    padding: 6px;
    transition: all 0.4s ease;
    outline: 0;
    transform-origin: center center;
  }

  .button__line {
    background: $pure-white;
    height: 3px;
    border-radius: 3px;
    clear: both;
    float: right;
    transition: all 0.30s ease;
    margin: 3px 0;

    &:nth-child(1) {
      width: 25px;
    }

    &:nth-child(2) {
      width: 22px;
    }

    &:nth-child(3) {
      width: 27px;
    }
  }

  .menu__button {
    &.is--open {
        .button__line {
          &:nth-child(1) {
            width: 27px;
            transform-origin: top right;
            transform: rotateZ(-45deg);
          }

          &:nth-child(2) {
            width: 0;
            opacity: 0;
          }

          &:nth-child(3) {
            width: 27px;
            transform-origin: bottom right;
            transform: rotateZ(45deg);
          }
        }
    }
  }

  @media only screen and (min-width: 1024px) {
    .menu__button {
      display: none;
    }
  }
</style>
