//-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//	  程序入口文件，主要有三个作用：①实例化Vue,②引入使用需要的插件和各种公共组件,③存储全局变量。
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//-------------------------------------------------------------------------------------
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n/i18n'

//import {Pagination} from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios,axios) //安装插件
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App) //这里的render: h=> h(App)是es6的写法,暂且可理解为是渲染App组件.等价于：
                      //render:(function(h){
                      // return h(App);
                      // });
                      //h 是 Vue.js 里面的 createElement 函数，这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，
                      // 返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
}).$mount('#app') //这里创建的vue实例没有el属性，而是在实例后面添加了一个$mount(’#app’)方法(延迟挂载)
