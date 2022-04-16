import { join as pathJoin } from 'path'
import { readdirSync } from 'fs'
import { ComponentsDir } from '@nuxt/schema'
import { Import } from 'unimport'
import { pascalCase } from 'change-case'

function buildImportName (name: string) {
  return `use${pascalCase(name.split('.').slice(0, -1).join('.'))}`
}

function buildComponentsAutoImports (nuxtDirs: (string | ComponentsDir)[]) {
  console.info('Building pages components auto-imports')
  function getComponentsDirs (dirName) {
    const dirs = readdirSync(dirName, { withFileTypes: true }).filter(dirent => dirent.isDirectory())
    dirs.forEach((dir) => {
      const dirPath = pathJoin(dirName, dir.name)
      if (dirPath.includes('/components')) {
        nuxtDirs.push(dirPath)
      }
      getComponentsDirs((dirPath))
    })
  }
  getComponentsDirs(pathJoin(__dirname, '../', 'pages'))
}

function buildScriptsAutoImports (imports: Import[]) {
  console.info('Building pages scripts auto-imports')
  function getScriptsPaths (dirName) {
    const dirs = readdirSync(dirName, { withFileTypes: true })
    dirs.forEach((dirent) => {
      const dirPath = pathJoin(dirName, dirent.name)
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
  getScriptsPaths(pathJoin(__dirname, '../', 'pages'))
}

export {
  buildComponentsAutoImports,
  buildScriptsAutoImports
}
