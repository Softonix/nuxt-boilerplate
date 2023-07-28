import { EElComponentSize, EElComponentType } from '@/types/enums'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      elComponentSize: EElComponentSize,
      elComponentType: EElComponentType
    }
  }
})
