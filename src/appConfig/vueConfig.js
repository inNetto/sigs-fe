import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axiosPlugin from './axios'
import moment from 'moment'
import introjs from 'intro.js/intro.js'
import lodash from 'lodash'

Vue.use(axiosPlugin)
Vue.use(Vuelidate)

introjs.introJs().setOption('nextLabel', ' > ')
moment.locale('PT-BR')

Vue.prototype.$intro = introjs
Vue.prototype.$lodash = lodash
Vue.prototype.$moment = moment
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
