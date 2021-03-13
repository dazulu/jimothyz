<template>
  <div>
    <nav role="navigation">
      <ul class="nav">
        <li class="nav__item">
          <button class="nav__link" @click="toStream">Stream</button>
        </li>
        <li class="nav__item">
          <button class="nav__link" @click="toAbout">About</button>
        </li>
        <li class="nav__item">
          <button class="nav__link" @click="toFaq">FAQ</button>
        </li>
      </ul>
    </nav>
    <burger-button />
  </div>
</template>

<script>
import jump from 'jump.js'
import BurgerButton from '@/components/BurgerButton.vue'

const jumpParams = {
  duration: 800,
  offset: -30,
}

let scrolling

const end = () => {
  scrolling = false
}

const scroll = (to, options) => {
  if (scrolling) {
    return
  }

  if (document.querySelector('.menu__button').classList.contains('is--open')) {
    document.querySelector('.menu__button').classList.remove('is--open')
    document.querySelector('.nav').classList.remove('nav--open')
    document.body.classList.remove('no-touchy-action')
  }

  scrolling = true
  setTimeout(end, options.duration || 0)
  jump(to, options)
}

export default {
  components: {
    BurgerButton,
  },
  methods: {
    toStream: () => {
      scroll('#stream', { ...jumpParams })
    },
    toAbout: () => {
      scroll('#about', { ...jumpParams })
    },
    toFaq: () => {
      scroll('#faq', { ...jumpParams })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background: rgba(0, 0, 0, 0.88);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(#ba526c, 1) 50%,
    rgba(#ba526c, 1) 100%
  );

  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:dximagetransform.microsoft.gradient(startColorstr='#00000000', endColorstr='#000000',GradientType=0); /* IE6-9 */
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  list-style-type: none;
  padding: 0;
  margin: 0;
  pointer-events: none;
  opacity: 0;
  transform-origin: bottom center;
  transform: translateY(100%);
  transition: all 400ms ease;
}

.nav__item {
  max-height: 13vh;
  flex: 1;
  transform: translateY(15vh);
  transition: all 1s ease;
}

.nav--open {
  transform: translateY(0);
  pointer-events: auto;
  opacity: 1;

  .nav__item {
    transform: translateY(3vh);
  }
}

.nav__link {
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: $pure-white !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $font-family-heading;
  font-weight: 400;
  text-transform: uppercase;
  height: 100%;
  font-size: 4.2vh;
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .nav__item {
    $colors-list: $dodger-blue $sunglow $bright-sun $spring-rain $medium-purple;
    @for $i from 1 through length($colors-list) {
      &:nth-child(#{$i}) {
        &::after {
          background: nth($colors-list, $i);
        }
      }
    }

    &::after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      transition: width 150ms ease-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .nav {
    opacity: 1;
    transform: scale(1);
    transition: none;
    display: flex;
    background: none;
    flex-direction: row;
    position: relative;
    top: auto;
    left: auto;
    height: auto;
    width: auto;
    pointer-events: auto;
    border: 0;
  }

  .nav__item {
    margin: 0 12px;
    flex: 0 1 auto;
    transform: translateY(0) !important;
    transition: none;

    &:last-child {
      margin-right: 0;
    }
  }

  .nav__link {
    height: 30px;
    font-size: 20px;
    width: auto;
  }
}
</style>
