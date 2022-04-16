import { defineNuxtPlugin } from '#app'
import { EComponentSize, EComponentType } from '~/types'
import { routeNames } from '~/build-config/router/route-names'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      componentType: EComponentType,
      componentSize: EComponentSize,
      routeNames
    }
  }
})
