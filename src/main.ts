import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router/router'
import store from './store/store'

import App from './App'

import { messages } from './configs/app.config'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(ElementUI)

export const i18n = new VueI18n({
  locale: 'en', // TODO detect locale
  messages,
})

new Vue({
  i18n,
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
