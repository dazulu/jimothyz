<template>
  <div class="section footer" id="contact">
    <div class="contain footer-content">
      <h4 class="title">Business Enquires</h4>
      <p class="copy">
        <a class="footer-link" href="mailto:jimothytwitch@gmail.com">jimothytwitch@gmail.com</a>
      </p>

      <h4 class="title">Site Designed &amp; Coded by dazulu</h4>
      <p class="copy">
        <a
          target="_blank"
          rel="noopener"
          class="footer-link"
          href="https://twitter.com/dazulu"
        >
          <svg class="social__icon twitter__icon" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-twitter-icon">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener"
          class="footer-link"
          href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw"
        >
          <svg class="social__icon youtube__icon" role="presentation" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
          YouTube
        </a>
      </p>
  
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    background-image: url('~/static/images/fortnite-small.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 800px;
    border: 1px solid lime;
    position: relative;

    &:after {
      background-color: $pure-white;
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      height: 200px;
      z-index: 0;
      top: -100px;
      transform: skewY(-3deg);
    }
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
  }

  .title {
    color: $pure-white;
    font-family: $font-family-heading;
    font-weight: 400;
    font-size: 24px;
    margin: 0;

    &:nth-of-type(2) {
      margin-top: 20px;
    }
  }

  .copy {
    color: $pure-white;
    margin: 0;
  }

  .footer-link {
    color: $pure-white;
    text-decoration: none;

    &:visited {
      color: $pure-white;
    }
  }

  .social__icon {
    position: relative;
    height: 25px;
    width: 25px;
    top: 6px;
  }

  .twitter__icon {
    fill: $twitter;
  }

  .youtube__icon {
    fill: $youtube;
    margin-left: 15px;
  }

  @media only screen and (min-width: 1024px) {
    .footer {
      background-image: url('~/static/images/fortnite-medium.jpg');
    }
  }

  @media only screen and (min-width: 1280px) {
    .footer {
      background-image: url('~/static/images/fortnite-large.jpg');
    }
  }
</style>
