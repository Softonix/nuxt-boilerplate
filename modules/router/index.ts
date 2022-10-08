import { buildRouter } from './runtime/router-builder'
import {
  defineNuxtModule,
  addPlugin,
  createResolver
} from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'pages:extend': buildRouter
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/route-names.plugin'))
  }
})
