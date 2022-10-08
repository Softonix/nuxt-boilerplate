/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
interface IRouteMeta {
  requireAuth?: boolean
  pageLabel?: string
  navOrder?: number
}

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta extends IRouteMeta {}
}

// It is always important to ensure you import/export something when augmenting a type
export {}
