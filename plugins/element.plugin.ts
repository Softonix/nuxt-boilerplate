import { ID_INJECTION_KEY } from 'element-plus'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0
  })
})
