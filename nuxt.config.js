const pkg = require("./package");

// Locales
const jaMessages = require("./locales/ja");
const enMessages = require("./locales/en");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
  ** Global CSS
  */
  css: ["~/assets/css/ress.css", "~/assets/css/reset.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    [
      "nuxt-i18n",
      {
        locales: [{ code: "ja", iso: "ja_JP" }, { code: "en", iso: "en-US" }],
        defaultLocale: "ja",
        vueI18n: {
          fallbackLocale: "ja",
          messages: {
            ja: jaMessages,
            en: enMessages
          }
        },
        vueI18nLoader: true
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    browserBaseURL: "http://localhost:18880",
    credentials: true,
    init: (axios, ctx) => {
      axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
