// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Storage from 'vue-ls'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Antd from 'ant-design-vue'
import VueResource from 'vue-resource'
import config from '@/defaultSettings'
import i18n from './i18n/i18n'

import CompProp from './components/prop/vue_componen_prop'
Vue.component('vue_componen_prop', CompProp);



import '@/permission'


import {
  ACCESS_TOKEN,
  DEFAULT_COLOR,
  DEFAULT_THEME,
  DEFAULT_LAYOUT_MODE,
  DEFAULT_COLOR_WEAK,
  SIDEBAR_TYPE,
  DEFAULT_FIXED_HEADER,
  DEFAULT_FIXED_HEADER_HIDDEN,
  DEFAULT_FIXED_SIDEMENU,
  DEFAULT_CONTENT_WIDTH_TYPE,
  DEFAULT_MULTI_PAGE
} from "@/store/mutation-types"

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Storage, config.storageOptions)
Vue.use(Antd)


/* eslint-disable no-new */
window.wm = new Vue({
  i18n,
  //el: '#app',
  router,
  store,
  mounted () {
    /*store.commit('SET_SIDEBAR_TYPE', Vue.ls.get(SIDEBAR_TYPE, true))
    store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
    store.commit('TOGGLE_LAYOUT_MODE', Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout))
    store.commit('TOGGLE_FIXED_HEADER', Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader))
    store.commit('TOGGLE_FIXED_SIDERBAR', Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar))
    store.commit('TOGGLE_CONTENT_WIDTH', Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth))
    store.commit('TOGGLE_FIXED_HEADER_HIDDEN', Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader))
    store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
    store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
    store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
    store.commit('SET_MULTI_PAGE',Vue.ls.get(DEFAULT_MULTI_PAGE,true))*/
    let dom_body = document.getElementsByTagName("body")[0];
    dom_body.style.margin = "0";
    dom_body.style.padding = "0";
  },
  render: h => h(App)
  //components: { App },
  //template: '<App/>'
}).$mount('#app')


Vue.prototype.hide_info_nav = function() {
    document.getElementById("diff-nav").style.display = "none";
    document.getElementById("diff-layout").style.paddingTop = "0";
    document.getElementById("diff-blank").style.height = "0";
}
Vue.prototype.show_info_nav = function() {
    document.getElementById("diff-nav").style.display = "block";
    document.getElementById("diff-layout").style.paddingTop = "112px";
    document.getElementById("diff-blank").style.height = "38px";
}
