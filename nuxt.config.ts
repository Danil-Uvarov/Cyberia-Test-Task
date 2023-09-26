// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
  components: false,
  imports: {
    autoImport: false,
  },
  css: ["~/assets/css/style.css"],
});
