import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('./', true, /\.vue$/)
requireComponent.keys().forEach((filePath) => {
  const componentConfig = requireComponent(filePath)

  const fileName = filePath.split('/').pop()
  const nameWithoutExt = fileName.replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(nameWithoutExt))

  Vue.component(componentName, componentConfig.default || componentConfig)
})
