<template>
  <div class="contain">
    <h1 id="faq" class="section__title">Frequently Asked Questions</h1>
    <div class="grid">
      <div>
        <h3 class="grid-item-title">Lorem Ipsum Delor</h3>
        <p class="copy">I switch between using a RØDE NT-USB and a RØDE NT1-A condenser mic put through a Focusrite Scarlett 2i2. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
      </div>

      <div>
        <h3 class="grid-item-title">Lorem Ipsum Delor</h3>
        <p class="copy">I switch between using a RØDE NT-USB and a RØDE NT1-A condenser mic put through a Focusrite Scarlett 2i2. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
      </div>

      <div>
        <h3 class="grid-item-title">Lorem Ipsum Delor</h3>
        <p class="copy">I switch between using a RØDE NT-USB and a RØDE NT1-A condenser mic put through a Focusrite Scarlett 2i2. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
      </div>

      <div>
        <h3 class="grid-item-title">Lorem Ipsum Delor</h3>
        <p class="copy">I switch between using a RØDE NT-USB and a RØDE NT1-A condenser mic put through a Focusrite Scarlett 2i2. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
      </div>

      <div>
        <h3 class="grid-item-title">Lorem Ipsum Delor</h3>
        <p class="copy">I switch between using a RØDE NT-USB and a RØDE NT1-A condenser mic put through a Focusrite Scarlett 2i2. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
      </div>

      <div>
        <h3 class="grid-item-title">Lorem Ipsum Delor</h3>
        <p class="copy">I switch between using a RØDE NT-USB and a RØDE NT1-A condenser mic put through a Focusrite Scarlett 2i2. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
