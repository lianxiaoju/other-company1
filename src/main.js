// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store.js'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  Style,
  Button,
  Checkbox,
  CheckboxGroup,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList
} from 'cube-ui'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'



Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Vuelidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  template: '<App/>',
  components: { App }
})
