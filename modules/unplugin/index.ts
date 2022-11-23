import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

import {
  defineNuxtModule,
  addVitePlugin
} from '@nuxt/kit'

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtModule({
  setup () {
    addVitePlugin([
      Icons({
        compiler: 'vue3',
        customCollections: {
          icon: FileSystemIconLoader('./assets/icons')
        }
      }),

      Components({
        dts: lifecycle === 'dev' && './dts/components.d.ts',
        dirs: [],
        resolvers: [
          ElementPlusResolver({ importStyle: false }),
          IconsResolver({
            prefix: '',
            customCollections: ['icon']
          })
        ]
      })
    ])
  }
})
