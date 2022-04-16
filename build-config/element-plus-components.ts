import { Component, ComponentsDir, ScanDir } from '@nuxt/schema'
import { paramCase } from 'change-case'

export {
  ElButton,
  ElSwitch,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElInput,
  ElForm,
  ElFormItem
} from 'element-plus/dist/index.full.min'

const elementComponents = [
  'ElButton',
  'ElSwitch',
  'ElCheckbox',
  'ElCheckboxGroup',
  'ElRadio',
  'ElRadioGroup',
  'ElInput',
  'ElForm',
  'ElFormItem'
]

export function buildElementComponents (components: (Component | ComponentsDir | ScanDir)[]) {
  elementComponents.forEach((component) => {
    components.push({
      filePath: __filename,
      pascalName: component,
      kebabName: paramCase(component),
      chunkName: component,
      shortPath: __filename.replace(process.cwd() + '/', ''),
      export: component,
      global: undefined,
      prefetch: false,
      preload: false
    })
  })
}
