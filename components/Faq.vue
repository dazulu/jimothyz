<template>
  <div class="contain">
    <h1 id="faq" class="section__title">Frequently Asked Questions</h1>
    <div class="grid">
      <div>
        <h3 class="grid-item-title">Where are you from?</h3>
        <p class="copy">
          Blackpool, England - the most popular seaside resort in the UK, don't
          you know!
        </p>
      </div>
      <div>
        <h3 class="grid-item-title">How did you first get into gaming?</h3>
        <p class="copy">
          When I was a wee lad of 4, my mum bought me a PS1 and Die Hard Trilogy
          to go with it. I haven't looked back since Nakatomi Tower.
        </p>
      </div>
      <div>
        <h3 class="grid-item-title">How long have you been streaming?</h3>
        <p class="copy">
          I started in February 2017. So that's roughly
          {{ getStreamingSince() }}.
        </p>
      </div>
      <div>
        <h3 class="grid-item-title">What are your PC specs?</h3>
        <ul>
          <li class="copy">AMD Ryzen 7 2700X 3.9GHZ</li>
          <li class="copy">Nvidia GeForce RTX 2070</li>
          <li class="copy">Corsair Vengeance LPX 16GB DDR4</li>
          <li class="copy">Logitech G-Pro Wireless Mouse</li>
          <li class="copy">Ducky x Varmilo Sakura Keyboard</li>
          <li class="copy">BenQ 24 Inch Full HD 1080P 2ms LED Monitor</li>
          <li class="copy">ASUS VG248QE 24'' 144hz Monitor</li>
        </ul>
      </div>
      <div>
        <h3 class="grid-item-title">What's your streaming hardware?</h3>
        <ul>
          <li class="copy">RØDE NT-1 Mic</li>
          <li class="copy">Beyerdynamic DT770 Pro Headphones</li>
          <li class="copy">Yamaha AG03 Mixer</li>
          <li class="copy">Logitech BRIO 4k Webcam</li>
          <li class="copy">Elgato Game Capture HD60S</li>
          <li class="copy">Elgato Stream Deck</li>
        </ul>
      </div>
      <div>
        <h3 class="grid-item-title">What are your favourite games?</h3>
        <p class="copy">
          Warcraft 3, Misadventures of Tron Bonne, Bloodborne, Halo 3.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    getStreamingSince() {
      return moment([2017, 2, 1]).fromNow()
    },
  },
}
</script>

<style lang="scss" scoped>
.list-link {
  color: $pure-white;

  &:visited {
    color: $pure-white;
  }
}

.grid-item-title {
  font-family: $font-family-heading;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.5;
}

.grid {
  > div {
    margin-bottom: $padding;
  }
}

@media only screen and (min-width: 640px) {
  .grid {
    display: grid;
    grid-gap: 4%;
    grid-template-columns: repeat(2, 48%);
  }
}

@media only screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
