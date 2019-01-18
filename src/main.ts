import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
