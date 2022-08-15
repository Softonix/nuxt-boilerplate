import { Component, ComponentsDir, ScanDir } from '@nuxt/schema'
import { paramCase } from 'change-case'

import * as Element from 'element-plus/dist/index.full.min.mjs'

export * from 'element-plus/dist/index.full.min.mjs'

export function buildElementComponents (components: (Component | ComponentsDir | ScanDir)[]) {
  Object.keys(Element).forEach((component) => {
    if (component.includes('El')) {
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
    }
  })
}
