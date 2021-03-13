export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Public env
  publicRuntimeConfig: {
    CLIENT_ID: process.env.CLIENT_ID,
    CHANNEL_ID: process.env.CHANNEL_ID,
    CHANNEL_NAME: process.env.CHANNEL_NAME,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jimothy - Twitch Streamer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I'm a variety streamer -- meaning we play anything and everything -- but community always comes first.",
      },
      { name: 'google-site-verification', content: 'no' },
      { property: 'og:title', content: 'Jimothy - Twitch Streamer' },
      {
        property: 'og:description',
        content:
          "I'm a variety streamer - meaning we play anything and everything - but community always comes first.",
      },
      { property: 'og:image', content: '//images/og-image.jpg' },
      { property: 'og:image:url', content: '//images/og-image.jpg' },
      { property: 'og:url', content: 'https://www.jimothy.tv/' },
      { property: 'og:type', content: 'website' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_shared.scss',
    '@/assets/scss/_typography.scss',
    '@/assets/scss/_layout.scss',
    '@/assets/scss/_buttons.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['./assets/scss/_variables.scss'],
  },
}
