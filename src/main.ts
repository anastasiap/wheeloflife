import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router/router'
import store from './store/store'

import App from './App'
import { setLanguage } from './services/helpers'

import { messages } from './config/app.config'

import { Aside, Col, Container, Footer, Header, Main, Menu, Option, Row, Select } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(Select)
Vue.use(Option)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)

const i18n = new VueI18n({
  locale: setLanguage(),
  messages,
})

new Vue({
  i18n,
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
