import Vue from 'vue'
import router from './router'
import { ACCESS_TICKET, USER_NAME,USER_INFO,USER_AUTH,SYS_BUTTON_AUTH,UI_CACHE_DB_DICT_DATA } from "@/store/mutation-types"
//import { generateIndexRouter } from '@/utils/util'

const whiteList = ['/regist','/error','/login']

router.beforeEach((to, from, next)=>{
  Vue.ls.clear();
  if("/login".indexOf(to.path)!==-1) {
    let service1 = to.query.service;
    let backurl = to.query.backurl;

    if (!service1) {
      next({path: '/error'})
    } else {
      let ticket = Vue.ls.get(ACCESS_TICKET)
      let username = Vue.ls.get(USER_NAME)
      if (ticket) {
        if (service1.indexOf("http://") < 0) {
          service1 = "http://" + service1;
        }
        if (service1.indexOf("?") < 0) {
          service1 = service1 + "?backurl=" + backurl  + "&username=" + username + "&ticket=" + ticket;
        } else {
          service1 = service1 + "&backurl=" + backurl + "&username=" + username + "&ticket=" + ticket;
        }
        window.location.href = service1
      }else{
        next()
      }
    }
  }else{
    next()
  }
})

