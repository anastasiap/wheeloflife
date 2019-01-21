import Vue from 'vue'
import App from './App'

import { messages } from './configs/app.config'
import VueI18n from 'vue-i18n'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(ElementUI)

export const i18n = new VueI18n({
  locale: 'en', // TODO detect locale
  messages,
})

new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount('#app')
