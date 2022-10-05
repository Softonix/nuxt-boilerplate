import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { buildRouter } from './build-config/router/router-builder'
import { buildComponentsAutoImports, buildScriptsAutoImports } from './build-config/auto-imports'

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  vite: {
    plugins: [
      Components({
        dts: lifecycle === 'dev' && './dts/components.d.ts',
        dirs: [],
        resolvers: [ElementPlusResolver({ importStyle: false })]
      })
    ]
  },

  hooks: {
    'components:dirs': buildComponentsAutoImports,
    'imports:extend': buildScriptsAutoImports,
    'pages:extend': buildRouter
  }
})
