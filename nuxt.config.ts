// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    // "@nuxt/devtools",
    "@pinia/nuxt",
    "@nuxtjs/html-validator",
    "@nuxt/image-edge",
  ],
  devtools: false,
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Send Snoods",
      charset: "utf-8",
      meta: [],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
