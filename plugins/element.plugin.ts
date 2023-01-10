import { ID_INJECTION_KEY } from 'element-plus'
import { EElComponentSize, EElComponentType } from '@/types/enums'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0
  })

  return {
    provide: {
      $elComponentSize: EElComponentSize,
      $elComponentType: EElComponentType
    }
  }
})
