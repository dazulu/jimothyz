<template>
  <div class="credits contain">
    <div>
      <h4 class="title">Site Designed &amp; Coded by IrishBeets</h4>
      <p class="copy">
        <a
          target="_blank"
          rel="noopener"
          class="credits-link"
          href="https://twitter.com/irishbeets"
        >
          <svg
            class="social__icon twitter__icon"
            role="presentation"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="simpleicons-twitter-icon">Twitter icon</title>
            <path
              d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
            />
          </svg>
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener"
          class="credits-link"
          href="https://twitch.tv/irishbeets"
        >
          <img
            src="/images/glitch.png"
            class="social__icon glitch__icon"
            alt="Twitch glitch logo"
          />
          Twitch
        </a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.credits {
  height: 100px;
  display: flex;
  align-items: center;
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

.credits-link {
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

.glitch__icon {
  margin-left: 15px;
}
</style>
