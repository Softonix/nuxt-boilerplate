import { defineNuxtPlugin } from '#app'
import { ElLoading } from 'element-plus/dist/index.full.min'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(ElLoading)
})
