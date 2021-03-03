import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "../view/login";
import regist from "../view/regist";
import logoff from "../view/logoff";
import error from "../view/error";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/login',
      name:'Login',
      component: login
    },{
      path:'/regist',
      name:'Regist',
      component: regist
    },
    {
      path:'/logoff',
      name:'Logoff',
      component: logoff
    },{
      path:'/error',
      name:'Error',
      component:error
    }
  ]
})
