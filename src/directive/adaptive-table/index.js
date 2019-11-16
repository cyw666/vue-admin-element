import adaptive from './adaptive'

const install = function(Vue) {
  Vue.directive('adaptive-table', adaptive)
}

if (window.Vue) {
  window['adaptive-table'] = adaptive
  Vue.use(install)
}

adaptive.install = install
export default adaptive
