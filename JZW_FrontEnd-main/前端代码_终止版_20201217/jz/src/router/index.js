import Vue from 'vue'
import Router from 'vue-router'

import homepage from "../view/homepage";
import news from "../view/news";
import products from "../view/products";
import companys from "../view/companys";
import services from "../view/services";
import purchases from "../view/purchases";
import technologys from "../view/technologys"
import companintroduce from "../view/company/introduce"
import companydynamic from "../view/company/dynamic";
import companydynamicdetail from "../view/company/dynamicdetail";
import companysupplyinformation from "../view/company/supplyinformation";
import GlobalLayout from "../components/layouts/global/GlobalLayout";
import CompanyLayout from "../components/layouts/company/CompanyLayout";
import InformationBaseLayout from "../components/layouts/InformationBase/InformationBaseLayout";
import supplyinformationproduct from "../view/company/supplyinformationproduct";
import supplyinformationservice from "../view/company/supplyinformationservice";
import purchaseinformation from "../view/company/purchaseinformation";
import technoloyinformation from "../view/company/technoloyinformation";
import honorinformation from "../view/company/honorinformation";
import contractinformation from "../view/company/contractinformation";
import livebroadinformation from "../view/company/livebroadinformation";


import companyservicedetail from "../view/company/servicedetail.vue"
import companyproductdetail from "../view/company/productdetail.vue"
import companypurchasedetail from "../view/company/purchasedetail.vue"
import technoloyinPatent from "../view/company/technoloyinPatent";
import technoloyinSoftware from "../view/company/technoloyinSoftware";
import companypatentDetail from "../view/company/patentDetail";
import companysoftwareDetail from "../view/company/softwareDetail";

//用户中心

import userCenter from "../view/userCenter";
import orderedNews from "../components/userCenter/orderedNews";
import editCompany from '../components/userCenter/company'
import account from '../components/userCenter/account'
import message from "../components/userCenter/message";
import idea from "../components/userCenter/idea";
import userManage from "../view/userCenter/admin/user/user_manage";
import translatePage from "../view/userCenter/interpreter/workpage/interpreter_work_page";

import translateTaskList from "../view/userCenter/interpreter/workpage/translateTask_list";
import translateBusinessInfo from "../view/userCenter/interpreter/workpage/content/business_info";
import translateCertificateInfo from "../view/userCenter/interpreter/workpage/content/certificate_info";
import translateCompanyIntro from "../view/userCenter/interpreter/workpage/content/company_intro";
import translateNews from "../view/userCenter/interpreter/workpage/content/news_info";
import translatePatentInfo from "../view/userCenter/interpreter/workpage/content/patent_info";
import translatePurchaseInfo from "../view/userCenter/interpreter/workpage/content/purchase_info";
import translateSoftwareCopyrightInfo from "../view/userCenter/interpreter/workpage/content/software_copyright_info";
import translateProduction from "../view/userCenter/interpreter/workpage/content/supply_info_production";
import translateService from "../view/userCenter/interpreter/workpage/content/supply_info_service";

import translateTaskAssignment from "../view/userCenter/interpreter_chief/workpage/translateTaskAssignment";

//帮助中心
import helpCenter from "../view/helpcenter/help_center";
import faq from "../view/helpcenter/faq";
import company_manual from "../view/helpcenter/manual/company_manual";
import individual_manual from "../view/helpcenter/manual/individual_manual";
import institution_manual from "../view/helpcenter/manual/institution_manual";

//客服
import customer_service from "../view/customerservice/customer_service";


//登陆注册
import loginLayout from "../view/login/loginLayout";
import login from "../view/login/login";
import register from "../view/login/regist";

Vue.use(Router)

const Page404 = {
  template: '<div>' +
    '<h2>404</h2>' +
    '<p>error:404 页面走丢了</p>' +
    '</div>'
}

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'main',
      component: GlobalLayout,
      redirect: '/homepage',
      meta: {title: 'HomePage'},
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage,
          meta: {title: 'HomePage'},

        }, {
          path: '/news',
          name: 'news',
          component: news,
          meta: {title: 'News'},
        }, {
          path: '/products',
          name: 'products',
          component: products,
          meta: {title: 'Products'},
        }, {
          path: '/companys',
          name: 'companys',
          component: companys,
          meta: {title: 'Companys'},
        }, {
          path: '/services',
          name: 'services',
          component: services,
          meta: {title: 'Services'},
        }, {
          path: '/purchases',
          name: 'purchases',
          component: purchases,
          meta: {title: 'Purchases'},
        }, {
          path: '/technologys',
          name: 'technologys',
          component: technologys,
          meta: {
            title: 'Technologys'
          },
        },
        {
          path: '/userCenter',
          name: 'userCenter',
          component: userCenter,
          redirect: '/userCenter/account',
          children: [
            {
              path: '/userCenter/orderedNews',
              name: 'orderedNews',
              component: orderedNews
            },
            {
              path: '/userCenter/editCompany',
              name: 'editCompany',
              component: editCompany
            },
            {
              path: '/userCenter/account',
              name: 'account',
              component: account
            },
            {
              path: '/userCenter/message',
              name: 'message',
              component: message
            },
            {
              path: '/userCenter/idea',
              name: 'idea',
              component: idea
            },

            /*用户管理员用户管理界面 */
            {
              path: '/userCenter/userManage',
              name: 'user-manage',
              component: userManage
            },


            /* 翻译员翻译管理界面 */
            {
              path: '/userCenter/interpreterTaskList',
              name: 'interpreter-taskList',
              component: translateTaskList
            },

            /*翻译总监翻译任务分配界面 */
            {
              path: '/userCenter/translateTaskAssignment',
              name: 'translateTaskAssignment',
              component: translateTaskAssignment
            },
          ]
        },

        /* 翻译员翻译界面 */
        {
          path: '/userCenter/translatePage',
          name: 'translate',
          component: translatePage,
          redirect: '/translate/business_info',
          meta: {title: 'InterpreterWorkPage'},
          children: [
            {
              path: '/translate/news_info',
              name: '/translate/news_info',
              component: translateNews,
              meta: {title: 'TranslateNewsInfo'},
            },
            {
              path: '/translate/business_info',
              name: '/translate/business_info',
              component: translateBusinessInfo,
              meta: {title: 'TranslateBusinessInfo'},
            },
            {
              path: '/translate/company_intro',
              name: '/translate/company_intro',
              component: translateCompanyIntro,
              meta: {title: 'TranslateCompanyIntro'},
            },
            {
              path: '/translate/purchase_info',
              name: '/translate/purchase_info',
              component: translatePurchaseInfo,
              meta: {title: 'TranslatePurchaseInfo'},
            }, {
              path: '/translate/supply_info_production',
              name: '/translate/supply_info_production',
              component: translateProduction,
              meta: {title: 'TranslateSupply_Info_Production'},
            }, {
              path: '/translate/supply_info_service',
              name: '/translate/supply_info_service',
              component: translateService,
              meta: {title: 'TranslateSupply_Info_Service'},
            }, {
              path: '/translate/software_copyright_info',
              name: '/translate/software_copyright_info',
              component: translateSoftwareCopyrightInfo,
              meta: {title: 'TranslateSoftware_Copyright_Info'},
            }, {
              path: '/translate/patent_info',
              name: '/translate/patent_info',
              component: translatePatentInfo,
              meta: {title: 'TranslateSoftware_Patent_Info'},
            }, {
              path: '/translate/certificate_info',
              name: '/translate/certificate_info',
              component: translateCertificateInfo,
              meta: {title: 'TranslateCertificate_Info'},
            },
          ]
        },

        /* 帮助中心 */
        {
          path: '/helpCenter',
          name: 'helpCenter',
          component: helpCenter,
          redirect: '/helpCenter/faq',
          children: [
            {
              path: '/helpCenter/faq',
              name: 'faq',
              component: faq
            },
            {
              path: 'helpCenter/enterpriseUserManual',
              mame: 'enterpriseUserManual',
              component: company_manual
            },
            {
              path: 'helpCenter/personalUserManual',
              mame: 'enterpriseUserManual',
              component: individual_manual
            },
            {
              path: 'helpCenter/governmentUserManual',
              mame: 'enterpriseUserManual',
              component: institution_manual
            },
          ]
        },

        /* 客服 */
        {
          path: '/customerService',
          name: 'customerService',
          component: customer_service
        }

      ]
    },
    /* 登陆注册 */
    {
      path: '/oauth',
      name: 'oauth',
      component: loginLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login,
        },
        {
          path: '/register',
          name: 'register',
          component: register,
        },
      ]
    },

    {
      path: '/company',
      name: 'companymain',
      redirect: '/company/introduce',
      component: CompanyLayout,
      meta: {title: 'Company'},
      children: [{
        path: '/company/introduce',
        name: 'companyintroduce',
        component: companintroduce,
        meta: {title: 'CompanyIntroduce'},
      }, {
        path: '/company/dynamic',
        name: 'companydynamic',
        component: companydynamic,
        meta: {title: 'CompanyDynamic'},
      }, {
        path: '/company/dynamicdetail',
        name: 'companydynamicdetail',
        component: companydynamicdetail,
        meta: {title: 'CompanyDetail'},
      },
        {
          path: '/company/supplyinformation',
          name: 'companysupplyinformation',
          // redirect: '/company/supplyinformation/product',
          component: companysupplyinformation,
          meta: {title: 'CompanySupplyInformation'},
          children: [{
            path: '/company/supplyinformation/product',
            name: 'companysupplyinformationproduct',
            component: supplyinformationproduct,
            meta: {title: 'CompanySupplyInformationProduct'},
          },
            {
              path: '/company/supplyinformation/service',
              name: 'companysupplyinformationservice',
              component: supplyinformationservice,
              meta: {title: 'CompanySupplyInformationService'},
            },
          ]
        },
        {
          path: '/company/servicedetail',
          name: 'companyservicedetail',
          component: companyservicedetail,
          meta: {title: 'Companyservicedetail'},
        },
        {
          path: '/company/productdetail',
          name: 'companyproductdetail',
          component: companyproductdetail,
          meta: {title: 'Companyproductdetail'},
        },
        {
          path: '/company/patentDetail',
          name: 'companypatentDetail',
          component: companypatentDetail,
          meta: {title: 'companypatentDetail'},
        },
        {
          path: '/company/softwareDetail',
          name: 'companysoftwareDetail',
          component: companysoftwareDetail,
          meta: {title: 'companysoftwareDetail'},
        },
        {
          path: '/company/purchasedetail',
          name: 'companypurchasedetail',
          component: companypurchasedetail,
          meta: {title: 'Companypurchasedetail'},
        },
        {
          path: '/company/purchaseinformation',
          name: 'companypurchaseinformation',
          component: purchaseinformation,
          meta: {title: 'CompanyPurchaseInformation'}
        }, {
          path: '/company/technoloyinformation',
          name: 'companytechnoloyinformation',
          component: technoloyinformation,
          meta: {title: 'CompanyTechnoloyInformation'},
          children: [{
            path: '/company/technoloyinformation/Patent',
            name: 'companytechnoloyinformationPatent',
            component: technoloyinPatent,
            meta: {title: 'companytechnoloyinformationPatent'},
          },
            {
              path: '/company/technoloyinformation/Software',
              name: 'companytechnoloyinformationSoftware',
              component: technoloyinSoftware,
              meta: {title: 'companytechnoloyinformationSoftware'},
            },
          ]
        }, {
          path: '/company/honorinformation',
          name: 'companyhonorinformation',
          component: honorinformation,
          meta: {title: 'CompanyHonorInformation'},
        }, {
          path: '/company/contractinformation',
          name: 'companycontractinformation',
          component: contractinformation,
          meta: {title: 'CompanyContractInformation'}
        }, {
          path: '/company/livebroadinformation',
          name: 'companylivebroadinformation',
          component: livebroadinformation,
          meta: {title: 'CompanyLivebroadInformation'}
        }
      ]
    },

    {
      path: '/companys',
      name: 'companys',
      component: companys,
      meta: {title: 'Companys'},
    },

    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {title: 'News'},
    },

    {
      path: '/products',
      name: 'products',
      component: products,
      meta: {title: 'Products'},
    },

    {
      path: '/purchases',
      name: 'purchases',
      component: purchases,
      meta: {title: 'Purchases'},
    },

    {
      path: '/services',
      name: 'services',
      component: services,
      meta: {title: 'Sews'},
    },

    {
      path: '/technologys',
      name: 'technologys',
      component: technologys,
      meta: {title: 'Technologys'},
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
