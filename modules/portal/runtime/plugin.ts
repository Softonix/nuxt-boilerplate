export default defineNuxtPlugin(() => {
  const { portalNames } = usePortal()
  return {
    provide: {
      portalNames
    }
  }
})
