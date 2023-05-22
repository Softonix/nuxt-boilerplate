export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],

  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler'
      }
    }
  },

  experimental: {
    typedPages: true
  },

  modules: [
    ['@nuxtjs/tailwindcss', { viewer: false }],
    '@vueuse/nuxt'
  ]
})
