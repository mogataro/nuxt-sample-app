const pkg = require("./package");
const jaMessages = require("./locales/ja");
const enMessages = require("./locales/en");

require("dotenv").config();
let env = process.env.NODE_ENV || 'development';
let API_URL='http://localhost:3000'
if (env === 'development' || env === 'test') {
  API_URL=process.env.API_URL
}

module.exports = {
  mode: "spa",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~/assets/css/ress.css", "~/assets/css/reset.css"],
  plugins: ["~plugins/scroll.js", "~/plugins/axios"],
  loading: "~/components/loading.vue",
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
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
  axios: {
    proxy: true,
    // proxyHeaders: false,
    // credentials: false,
    browserBaseURL: API_URL,
    credentials: true,
    init: (axios, ctx) => {
      axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
    }
  },
  // proxy: {
  //   "/api": {
  //     target: "http://zipcloud.ibsnet.co.jp",
  //     pathRewrite: { "^/api/": "" }
  //   }
  // },
  build: {
    extend(config, ctx) {
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
