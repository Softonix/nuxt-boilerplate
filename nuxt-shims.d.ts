import { EComponentSize, EComponentType } from '~/types'
import {routeNames} from "~/build-config/router/route-names";

interface IGlobalProperties {
  $componentType: typeof EComponentType
  $componentSize: typeof EComponentSize
  $routeNames: typeof routeNames
}

interface IRouteMeta {
  requireAuth?: boolean
  pageLabel?: string
}

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    // env
  }
}

declare module '#app' {
  interface NuxtApp extends IGlobalProperties {}
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends IGlobalProperties {}
}

declare module 'vue-router' {
  interface RouteMeta extends IRouteMeta {}
}

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta extends IRouteMeta {}
}

declare module 'element-plus/dist/index.full.min'
// It is always important to ensure you import/export something when augmenting a type
export {}
