import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import {
  defineNuxtModule,
  addVitePlugin
} from '@nuxt/kit'

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtModule({
  setup () {
    addVitePlugin(
      Components({
        dts: lifecycle === 'dev' && './dts/components.d.ts',
        dirs: [],
        resolvers: [ElementPlusResolver({ importStyle: false })]
      })
    )
  }
})
