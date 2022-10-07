import { join as pathJoin } from 'path'
import { readdirSync } from 'fs'
import { ComponentsDir } from '@nuxt/schema'
import { Import } from 'unimport'
import { pascalCase } from 'change-case'

const rootDir = process.cwd()

function buildImportName (name: string) {
  return `use${pascalCase(name.split('.').slice(0, -1).join('.'))}`
}

function replaceBackSlash (string: string) {
  return string.replace(/\\/g, '/')
}

function buildComponentsAutoImports (nuxtDirs: (string | ComponentsDir)[]) {
  console.info('Building pages components auto-imports')
  function getComponentsDirs (dirName: string) {
    const dirs = readdirSync(dirName, { withFileTypes: true }).filter(dirent => dirent.isDirectory())
    dirs.forEach((dir) => {
      const dirPath = replaceBackSlash(pathJoin(dirName, dir.name))
      if (dirPath.includes('_components')) {
        nuxtDirs.push(dirPath)
      }
      getComponentsDirs((dirPath))
    })
  }
  getComponentsDirs(replaceBackSlash(pathJoin(rootDir, 'pages')))
}

function buildScriptsAutoImports (imports: Import[]) {
  console.info('Building pages scripts auto-imports')
  function getScriptsPaths (dirName: string) {
    const dirs = readdirSync(dirName, { withFileTypes: true })
    dirs.forEach((dirent) => {
      const dirPath = replaceBackSlash(pathJoin(dirName, dirent.name))
      if (['.store.ts', '.service.ts'].some(ext => dirent.name.includes(ext))) {
        imports.push({
          name: 'default',
          as: buildImportName(dirent.name),
          from: dirPath
        })
      }
      if (dirent.isDirectory()) {
        getScriptsPaths((dirPath))
      }
    })
  }
  getScriptsPaths(replaceBackSlash(pathJoin(rootDir, 'pages')))
  getScriptsPaths(replaceBackSlash(pathJoin(rootDir, 'composables')))
}

export {
  buildComponentsAutoImports,
  buildScriptsAutoImports
}
