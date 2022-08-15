import { defineNuxtPlugin } from '#app'
import { ElLoading } from 'element-plus/dist/index.full.min.mjs'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(ElLoading)
})
