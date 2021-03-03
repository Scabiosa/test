//-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		路由设定文件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//-------------------------------------------------------------------------------------
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeSearch from '../components/CHVersion/HomeSearch.vue'
import InfoCenter from '@/views/CHVersion/infoCenter/InfomationCenter'
import ServiceInfoDB from '@/views/CHVersion/serviceDB/ServiceInfoDB'
import ProductInfoDB from '@/views/CHVersion/productsDB/ProductsInfoDB'
import CompanyInfoDB from '@/views/CHVersion/companyDB/CompanyInfoDB'
import CEHome from '@/views/CHVersion/cloudExpo/CEHome.vue'

//---------- 公司web页面群 ----------
import CW_Profile from '@/views/CHVersion/companyWeb/CWProfile'
import CW_News from '@/views/CHVersion/companyWeb/CWNews'
import CW_Products from '@/views/CHVersion/companyWeb/CWProducts'
import CW_Service from '@/views/CHVersion/companyWeb/CWService'
import CW_Certificate from '@/views/CHVersion/companyWeb/CWCertificateOfHonor'
import CW_Contact from '@/views/CHVersion/companyWeb/CWContactInfo'
import BlockChainHome from "@/views/CHVersion/blockchain/BlockChainHome";
import ProductSubmiss from "@/views/CHVersion/blockchain/ProductSubmiss";
import InforFill from "@/views/CHVersion/blockchain/InforFill";
import ABC from "@/views/CHVersion/blockchain/ABC";
import IntellectualProperty from "@/components/CHVersion/blockchain/IntellectualProperty";
import BasicInforForm from "@/components/CHVersion/blockchain/BasicInforForm";
import Specification from "@/components/CHVersion/blockchain/Specification";
import ProductPicture from "@/components/CHVersion/blockchain/ProductPicture";
import QualificationCertificate from "@/components/CHVersion/blockchain/QualificationCertificate";
import UploadResult from "@/components/CHVersion/blockchain/UploadResult";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        // component: Home,
        redirect: '/home',
        // meta: {title: '鉴真网'},
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {title: '鉴真网'},
    },
    {
        path: '/homeSearch',
        name: 'HomeSearch',
        component: HomeSearch,
    },
    //---------- 数据库导航栏页面群 ----------
    {
        path: '/infoCenter',
        name: 'InfoCenter',
        component: InfoCenter,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/serviceInfoDB',
        name: 'ServiceInfoDB',
        component: ServiceInfoDB,
    },
    {
        path: '/productInfoDB',
        name: 'ProductInfoDB',
        component: ProductInfoDB,
    },
    {
        path: '/companyInfoDB',
        name: 'CompanyInfoDB',
        component: CompanyInfoDB,
    },
    //---------- 公司web页面群 ----------
    {
        path: '/CW_Profile',
        name: 'CW_Profile',
        component: CW_Profile,//公司介绍页面
    },
    {
        path: '/CW_News',
        name: 'CW_News',
        component: CW_News,//公司介绍页面
    },
    {
        path: '/CW_Products',
        name: 'CW_Products',
        component: CW_Products,//公司介绍页面
    },
    {
        path: '/CW_Service',
        name: 'CW_Service',
        component: CW_Service,//公司介绍页面
    },
    {
        path: '/CW_Certificate',
        name: 'CW_Certificate',
        component: CW_Certificate,//公司介绍页面
    },
    {
        path: '/CW_Contact',
        name: 'CW_Contact',
        component: CW_Contact,//公司介绍页面
    },
    //---------- 云展会页面群 ----------
    {
        path: '/ceHome',
        name: 'CEHome',
        component: CEHome,
    },
    //---------- 产品存证 ----------
    {
        path: '/blockChainHome',
        name: 'BlockChainHome',
        component: BlockChainHome,
    },
    {
        path: '/productSubmiss',
        name: 'ProductSubmiss',
        component: ProductSubmiss,
    },
    {
        path: '/inforFill',
        name: 'InforFill',
        component: InforFill,
        children:[{
            path:'/inforFill1',
            name:'BasicInforForm',
            component:BasicInforForm
        },{
            path:'/inforFill2',
            name:'Specification',
            component:Specification
        },{
            path:'/inforFill3',
            name:'ProductPicture',
            component:ProductPicture
        },{
            path:'/inforFill4',
            name:'IntellectualProperty',
            component:IntellectualProperty
        },{
            path:'/inforFill5',
            name:'QualificationCertificate',
            component:QualificationCertificate
        },{
            path:'/inforFill6',
            name:'UploadResult',
            component:UploadResult
        }]
    },
    {
        path: '/abc',
        name: 'ABC',
        component: ABC,
        children:[{
            path:'/abc1',
            name:'BasicInforForm',
            component:BasicInforForm
        },{
            path:'/abc2',
            name:'IntellectualProperty',
            component:IntellectualProperty
        }]
    }
]

// HomeSearch
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
