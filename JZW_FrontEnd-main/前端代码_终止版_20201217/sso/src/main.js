// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'vue-ls'
import config from '@/defaultSettings'
import App from './App'
import router from './router'
import '@/permission'

import ElementUI from 'element-ui'
import i18n from './i18n/i18n'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.use(Storage, config.storageOptions)
Vue.config.productionTip = false

/* eslint-disable no-new */
window.wm = new Vue({
  i18n,
  //el: '#app',
  router,
  render: h=>h(App)
  //components: { App },
  //template: '<App/>'
}).$mount('#app')
