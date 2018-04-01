<template>
  <div class="contain">
    <h1 id="faq" class="section__title">Frequently Asked Questions</h1>
    <div class="grid">
      <div>
        <h3 class="grid-item-title">Where are you from?</h3>
        <p class="copy">Blackpool, England - the most popular seaside resort in the UK, don't you know!</p>
      </div>
      <div>
        <h3 class="grid-item-title">How did you first get into gaming?</h3>
        <p class="copy">When I was a wee lad of 4, my mum bought me a PS1 and Die Hard Trilogy to go with it. I haven't looked back since Nakatomi Tower.</p>
      </div>
      <div>
        <h3 class="grid-item-title">How long have you been streaming?</h3>
        <p class="copy">I started in February 2017. So that's roughly {{getStreamingSince()}}.</p>
      </div>
      <div>
        <h3 class="grid-item-title">What are your PC specs?</h3>
        <p class="copy">
          <ul>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Intel-Unlocked-Skylake-Processor-BX80662I76700K/dp/B012M8LXQW?tag=jimothyz-20&sigts=1522602369768&sig=4f508771977d9f15d577dda22b61f3ca24556978&adId=B012M8LXQW&linkCode=tw1&ref=TA_GL_POS_2&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=8c402701-998b-4770-9c47-53f2f83818bd">Intel Core i7 6700K 4.00 GHz</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/EVGA-GeForce-GAMING-Support-08G-P4-5173-KR/dp/B01KVZBNY0?tag=jimothyz-20&sigts=1522602369767&sig=cefc61e150bea686d3e1709ae026ee8171b96e73&adId=B01KVZBNY0&linkCode=tw1&ref=TA_GL_POS_0&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=8081909b-5deb-40ba-b97a-c76e4f9b5e8e">EVGA GeForce GTX 1070 8GB</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Corsair-Vengeance-3000MHz-Desktop-Memory/dp/B0134EW7G8?tag=jimothyz-20&sigts=1522602369768&sig=09aa93736566fc49ccfe8f7b4f17a3df4d81207e&adId=B0134EW7G8&linkCode=tw1&ref=TA_GL_POS_1&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=b4f8eb98-4736-4861-90d7-9f596cca9395">Corsair Vengeance LPX 16GB DDR4</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/CORSAIR-M65-Pro-RGB-Adjustable/dp/B01D63UU52?tag=jimothyz-20&sigts=1522602369768&sig=274964cdc1c3e9fa9616aaed83981f814617b9b7&adId=B01D63UU52&linkCode=tw1&ref=TA_GL_POS_7&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=93911b2e-6d8b-4096-a15e-06654ed57125">CORSAIR M65 Pro RGB Gaming Mouse</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/CORSAIR-RAPIDFIRE-Mechanical-Gaming-Keyboard/dp/B01D8H09TS?tag=jimothyz-20&sigts=1522602369768&sig=5b5991a3a6c0ef9fe7e98b4928c59fb44c9fbc3d&adId=B01D8H09TS&linkCode=tw1&ref=TA_GL_POS_8&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=1acb849a-e977-4ee6-9dc6-71314f5ff15c">CORSAIR K70 RGB Rapidfire Keyboard</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/BenQ-GL2460HM-1080p-Gaming-Monitor/dp/B00IKDFL4O?tag=jimothyz-20&sigts=1522602369768&sig=f149df15f82ebe618a187d8597d57ff8a3652041&adId=B00IKDFL4O&linkCode=tw1&ref=TA_GL_POS_3&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=78612bb2-4426-4779-bcc1-801fb0c6ea62">BenQ 24-Inch Full HD 1080p 2ms LED</a></li>
          </ul>
        </p>
      </div>
      <div>
        <h3 class="grid-item-title">What's your streaming hardware?</h3>
        <p class="copy">
          <ul>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Audio-Technica-AT2020-Cardioid-Condenser-Microphone/dp/B0006H92QK?tag=jimothyz-20&sigts=1522602369768&sig=7b370668b6968f003aeda51de6536897f8fc2bd8&adId=B0006H92QK&linkCode=tw1&ref=TA_GL_POS_4&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=84a71d96-5941-4602-82dc-da0c51abc5c4">Audio-Technica AT2020 Condenser Mic</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Audio-Technica-ATH-M50x-Professional-Monitor-Headphones/dp/B00HVLUR86?tag=jimothyz-20&sigts=1522602369768&sig=b1d13542511f7137f71db87ad36199822c471ab3&adId=B00HVLUR86&linkCode=tw1&ref=TA_GL_POS_6&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=a192e0f5-b4a0-450f-85e1-c75ae3dd595c">Audio-Technica ATH-M50x Headphones</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Behringer-502-BEHRINGER-XENYX/dp/B000J5UEGQ?tag=jimothyz-20&sigts=1522602369768&sig=6ab5e7d41d310ac93fb035cce07d462c7e2ac79b&adId=B000J5UEGQ&linkCode=tw1&ref=TA_GL_POS_5&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=0d6732af-5abf-4a7b-b227-d81d09c4df10"> BEHRINGER XENYX 502 Audio Mixer</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Logitech-Widescreen-Calling-Recording-Desktop/dp/B006JH8T3S?tag=jimothyz-20&sigts=1522602369768&sig=5db547995aafd44fd2b71e3f0fb68318772ec5f9&adId=B006JH8T3S&linkCode=tw1&ref=TA_GL_POS_9&ref-refURL=https://taos-na-prod.amazon.com/viewer&imprToken=62164e54-6f1a-4d00-a3c6-cfa1512f1f5b">Logitech HD Pro Webcam C920 webcam</a></li>
            <li class="copy"><a class="list-link" href="https://www.amazon.com/Elgato-Game-Capture-HD60-1GC119901001/dp/B01LYON4FJ/ref=sr_1_1_sspa?s=electronics&ie=UTF8&qid=1522609013&sr=1-1-spons&keywords=Elgato+HD60&psc=1">Elgato Game Capture HD60</a></li>
          </ul>
        </p>
      </div>
      <div>
        <h3 class="grid-item-title">What are your favourite games?</h3>
        <p class="copy">Warcraft 3, Misadventures of Tron Bonne, Bloodborne, Halo 3.</p>
      </div>
    </div>
  </div>
</template>


<script>
import moment from 'moment'

export default {
  methods: {
    getStreamingSince () {
      return moment([2017, 2, 1]).fromNow()
    }
  }
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

  @media only screen and (min-width:640px) {
  .grid {
      display: grid;
      grid-gap: 4%;
      grid-template-columns: repeat(2, 48%);
    }
  }

  @media only screen and (min-width:1200px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
