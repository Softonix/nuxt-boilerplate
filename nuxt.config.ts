import { defineNuxtConfig } from 'nuxt'
import { buildRouter } from './build-config/router/router-builder'
import { buildComponentsAutoImports, buildScriptsAutoImports } from './build-config/auto-imports'
import { buildElementComponents } from './build-config/element-plus-components'

export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  buildModules: [
    '@vueuse/nuxt'
  ],

  hooks: {
    'components:extend': buildElementComponents,
    'components:dirs': buildComponentsAutoImports,
    'autoImports:extend': buildScriptsAutoImports,
    'pages:extend': buildRouter
  }
})
