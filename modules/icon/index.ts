import { buildIconsNames } from './runtime/build-icon-names'
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

    addPlugin(resolve('./runtime/icon-names.plugin'))
    addComponent({ name: 'Icon', filePath: resolve('./runtime/Icon.vue') })
  }
})
