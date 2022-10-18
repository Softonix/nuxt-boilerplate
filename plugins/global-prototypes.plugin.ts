import { EComponentSize, EComponentType } from '~/types'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      componentType: EComponentType,
      componentSize: EComponentSize
    }
  }
})
