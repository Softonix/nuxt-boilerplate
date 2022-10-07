import { buildIconsNames } from './runtime/icons-builder'
import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addPlugin
} from '@nuxt/kit'

export default defineNuxtModule<{ iconsDir?: string }>({
  setup ({ iconsDir }, { options: { rootDir } }) {
    buildIconsNames(rootDir, iconsDir)

    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/icons.plugin'))
    addComponent({ name: 'Icon', filePath: resolve('./runtime/Icon.vue') })
  }
})
