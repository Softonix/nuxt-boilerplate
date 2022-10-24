import svgLoader from 'vite-svg-loader'
import { buildIcons } from './runtime/icons-builder'
import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addPlugin,
  addVitePlugin
} from '@nuxt/kit'

export default defineNuxtModule({
  setup (_, { options: { rootDir } }) {
    buildIcons(rootDir)

    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/icons.plugin'))
    addComponent({ name: 'Icon', filePath: resolve('./runtime/Icon.vue') })
    addVitePlugin(svgLoader())
  }
})
