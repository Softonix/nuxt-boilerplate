import svgLoader from 'vite-svg-loader'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],

  modules: [
    ['@nuxtjs/tailwindcss', { viewer: false }],
    '@vueuse/nuxt',
    './modules/icon',
    './modules/router',
    './modules/imports'
  ],

  vite: {
    plugins: [
      Components({
        dts: lifecycle === 'dev' && './dts/components.d.ts',
        dirs: [],
        resolvers: [ElementPlusResolver({ importStyle: false })]
      }),
      svgLoader()
    ]
  }
})
