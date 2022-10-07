import {
  defineNuxtModule,
  addPlugin,
  addImportsDir,
  addComponentsDir,
  createResolver
} from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({ path: resolve('./runtime/components'), global: true, pathPrefix: false })
    addPlugin(resolve('./runtime/plugin'))
    addImportsDir(resolve('./runtime/composables'))
  }
})
