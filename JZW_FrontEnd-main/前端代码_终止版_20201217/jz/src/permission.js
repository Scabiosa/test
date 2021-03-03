import Vue from 'vue'
import router from './router'
import {validateSt} from "./axios/api";
import {USER_ID, USER_ROLE, USER_NAME, ACCESS_TOKEN} from "./store/mutation-types";

const whiteList = ['/login','/register','/homepage','/helpCenter/enterpriseUserManual','/helpCenter/personalUserManual','/helpCenter/governmentUserManual',
  '/news','/products','/companys','/services','/purchases','/technologys',
  '/company/homepage','/company/introduce','/company/dynamic','/company/dynamicdetail',
  '/company/supplyinformation','/company/supplyinformation/product','/company/supplyinformation/service',
  '/company/purchaseinformation','/company/technoloyinformation','/company/honorinformation',
  '/company/contractinformation','/company/livebroadinformation','/helpCenter/faq','/faq','/interpreter/workPage',
  '/translate/company_intro','/translate/business_info','/translate/supply_info_production',
  '/translate/supply_info_service','/translate/software_copyright_info','/translate/patent_info',
  '/translate/purchase_info','/translate/certificate_info','/interpreterChief/taskAssignment','/userManage',
  '/addUser','/translate/news_info','/editUser','/individualManual','/company_manual','/institution_manual',
  '/interpreter/taskList','/customerService','/userCenter','/userCenter/orderedNews','/userCenter/editCompany',
  '/userCenter/account','/userCenter/idea','/userCenter/message']

router.beforeEach((to, from, next)=>{
  if (Vue.ls.get(ACCESS_TOKEN)) { //已登录，可以继续访问
    next()
  } else { //未登录
    let st = to.query.ticket;
    if(st){ //可以获得票据
      validateSt({ticket: st}).then(res=>{
        let {message, code, result} = res.data;
        console.log("票据验证信息："+message)
        if(code == 200){        //验证通过，拉取用户信息
          Vue.ls.set(ACCESS_TOKEN, st, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(USER_ID, result.id, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(USER_ROLE,result.role, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(USER_NAME, result.telephone, 7 * 24 * 60 * 60 * 1000)
          next(to.path)
        }else if(code == 500){  //票据无效
          alert("Invalid token")
        }else{                  //其他错误
        }
      }).catch(err=>{
        console.log(err)
      })
      next("/login");   //跳到登陆
    }else{   //不可以获得票据
      if(whiteList.indexOf(to.path) !== -1) { //访问资源在白名单
        next()
      }else{       // 不在白名单，为访问受限资源，跳到登陆
        next("/login");
      }
    }
  }
  /**
  if (Vue.ls.get(ACCESS_TOKEN)) { //已登录，可以继续访问
    next()
  } else { //未登录
    let service = "http://" + window.location.host + "/#/homepage";
    let st = to.query.ticket;
    if(st){ //可以获得票据
      //validateSt(st, service)  //校验， 后端暂无接口

      let username = to.query.username;
      Vue.ls.set(USER_NAME, username, 7 * 24 * 60 * 60 * 1000);
      Vue.ls.set(ACCESS_TOKEN, st, 7 * 24 * 60 * 60 * 1000);

      next( to.query.backurl);//恢复中断的访问
    }else{ //不可以获得票据
      if(whiteList.indexOf(to.path) !== -1) { //访问资源在白名单
        next()
      }else{       // 不在白名单，为访问受限资源，跳到sso登陆
        let serviceUrl = encodeURIComponent(service);
        let backUrl = to.path;
        window.location.href = window._CONFIG['casPrefixUrl'] + "/login?service=" + serviceUrl + "&backurl=" + backUrl
      }
    }
  }
   **/

})

