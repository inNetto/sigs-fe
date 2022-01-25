import Vue from 'vue'
import * as all from 'quasar'
import gDateTime from '../components/gDateTime'
import gInput from '../components/gInput'
import gSelect from '../components/gSelect'
const imports = [
  'QBtn', 'QIcon', 'QAlert', 'QTransition', 'QList', 'QSideLink', 'QItemSide', 'QItemMain', 'QListHeade',
  'QInnerLoading', 'QLayout', 'QToolbar', 'QToolbarTitle', 'QAjaxBar', 'QCollapsible', 'QListItem',
  'QItem', 'QItemTile', 'QCard', 'QCardMain', 'QInfiniteScroll', 'QSpinner', 'QToggle', 'QInput',
  'QCardTitle', 'QRating', 'QSelect', 'QModal', 'QCardMedia', 'QChip', 'QSpinnerHourglass', 'QSpinnerOval', 'QRange',
  'QChipsInput', 'QTab', 'QTabPane', 'QTabs', 'QFixedPosition', 'QField', 'QSearch', 'QAutocomplete',
  'QDataTable', 'QPagination', 'QCardActions', 'QCard', 'QListHeader', 'QPage', 'QCardSeparator', 'QRadio',
  'QTooltip', 'QSlider', 'QTree', 'QToggle'

]

Object.keys(all).forEach(component => {
  if (imports.includes(component)) {
    Vue.component(component, all[component])
  }
})

Vue.component('g-date-time', gDateTime)
Vue.component('g-input', gInput)
Vue.component('g-select', gSelect)
