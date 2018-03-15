<template>
  <button v-on:click="scrollToTop" class="back-to-top" aria-label="Back to top">
    <span role="presentation" class="arrow">UP</span>
  </button>
</template>

<script>
  import jump from 'jump.js'

  const jumpParams = {
    duration: 1000,
    offset: 0,
    ally: true
  }

  let scrolling

  const end = () => {
    scrolling = false
  }

  export default {
    methods: {
      scrollToTop: () => {
        if (scrolling) {
          return
        }
        scrolling = true
        setTimeout(end, jumpParams.duration || 0)
        jump('#__nuxt', jumpParams)
      }
    },
    mounted () {
      const backToTop = document.querySelector('.back-to-top')
      const visible = 'is--visible'
      let ticking = false

      const toggleBackToTopButton = () => {
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        if (scrollTop > 1300) {
          backToTop.classList.add(visible)
        } else {
          backToTop.classList.remove(visible)
        }
      }

      toggleBackToTopButton()

      document.addEventListener('scroll', function (e) {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            toggleBackToTopButton()
            ticking = false
          })
        }
        ticking = true
      })
    }
  }
</script>

<style lang="scss">
  .back-to-top {
    border: 3px solid $pure-white;
    border-radius:20px;
    background: $curious-blue;
    cursor: pointer;
    position: fixed;
    bottom: $padding;
    right: $padding;
    height: 40px;
    width: 40px;
    font-family: $font-family-heading;
    color: $pure-white;
    font-weight: 400;
    font-size: 18px;
    padding: 0;
    transform: translateY(80px);
    transition: transform 300ms ease;
    z-index: 1;

    &:hover {
      transform: translateY(-3px);
    }
  }

  .is--visible {
    transform: translateY(0);
  }
</style>
