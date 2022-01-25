
import Vue from 'vue'
import Quasar from 'quasar'
import router from './appConfig/router'
import store from './appConfig/store'
import './appConfig/vueConfig'
import './appConfig/cssImports'
import './appConfig/globalComponents'

Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./components/layout/App.vue'))
  })
})
