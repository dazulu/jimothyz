/* eslint-disable */
const resolve = require("path").resolve;

const isVueRule = rule => {
  return rule.test.toString() === "/\\.vue$/";
};
const isSASSRule = rule => {
  return ["/\\.sass$/", "/\\.scss$/"].indexOf(rule.test.toString()) !== -1;
};
const sassResourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: [resolve(__dirname, "assets/scss/_variables.scss")]
  }
};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Jimothy - Twitch Streamer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "I'm a variety streamer -- meaning we play anything and everything -- but community always comes first."
      },
      { name: "google-site-verification", content: "tbd" },
      { property: "og:title", content: "Jimothy - Twitch Streamer" },
      { property: "og:description", content: "I'm a variety streamer -- meaning we play anything and everything -- but community always comes first." },
      { property: "og:image", content: "/images/og-image.jpg" },
      { property: "og:url", content: "tbd" },
      { property: "og:type", content: "website" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
  },
  /*
  ** Shared CSS rules
  */
  css: [
    "~/assets/scss/_shared.scss",
    "~/assets/scss/_variables.scss",
    "~/assets/scss/_typography.scss",
    "~/assets/scss/_layout.scss",
    "~/assets/scss/_buttons.scss"
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#ff69b4" },
  plugins: [],
  /*
  ** Router configuration
  */
  router: {},
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'moment'
    ],
    postcss: [
      require('postcss-cssnext')()
    ],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      /*
      ** For including scss variables file
      */
      config.module.rules.forEach(rule => {
        if (isVueRule(rule)) {
          rule.options.loaders.scss.push(sassResourcesLoader);
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader);
        }
      });
    }
  }
};
