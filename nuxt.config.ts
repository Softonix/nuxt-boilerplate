export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],

  modules: [
    ['@nuxtjs/tailwindcss', { viewer: false }],
    '@vueuse/nuxt',
    './modules/router',
    './modules/imports',
    './modules/unplugin',
    './modules/portal'
  ]
})
