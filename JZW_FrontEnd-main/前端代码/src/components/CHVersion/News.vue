<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		主页的动态信息组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <ProductInfo :content="productInfo" class="news-block"></ProductInfo>
    <ServiceInfo :content="serviceInfo" class="news-block"></ServiceInfo>
    <ExpoInfo :content="expoInfo" class="news-block"></ExpoInfo>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
import ProductInfo from "./ProductsInfo.vue";
import ServiceInfo from "./ServiceInfo.vue";
import ExpoInfo from "./ExpoInfo.vue";
import home_mockData from '@/mock/Home_MockData.vue';
// import axios from "axios";
import {listNews} from "../../axios/api";

export default {
  data() {
    return {
      data: [],
      productInfo: {
        title: "产品新动态",
        more: "/blank",
        type: "product",
        news: [],
        news_C: home_mockData.productNews_C,//中国产品新动态
        news_J: home_mockData.productNews_J,//日本产品新动态
      },
      serviceInfo: {
        title: "服务新动态",
        more: "/blank",
        type: "service",
        news: [],
        news_C: home_mockData.serviceNews_C,//中国服务新动态
        news_J: home_mockData.serviceNews_J,//日本服务新动态
      },
      expoInfo: {
        title: "展会新动态",
        more: "/blank",
        type: "expo",
        news: [],
        news_C: home_mockData.expoNews_C,//中国展会新动态
        news_J: home_mockData.expoNews_j,//日本展会新动态
      },
    };
  },
  created: function () {
    this.productNews.news = [];
    this.serviceNews.news = [];
    this.expoNews.news = [];
    listNews({
      pageNo: 0,
      pageSize: 40
    }).then(res => {
      let {code, msg, result} = res.data;
      if (code === 200) {
        console.log(result);
        result.records.forEach(record => {
          if (record.newsType === "产品") {
            this.productNews.news.push({
              code: record.code,
              companyCode: record.companyCode,
              content: record.briefIntroduction,
              date: record.createTime
            })
          }
          if (record.newsType === "服务") {
            this.serviceNews.news.push({
              code: record.code,
              companyCode: record.companyCode,
              content: record.briefIntroduction,
              date: record.createTime
            })
          }
          if (record.newsType === "展会") {
            this.patentNews.news.push({
              code: record.code,
              content: record.briefIntroduction,
              date: record.createTime
            })
          }
        })
      } else {
        this.$alert(msg);
      }
    });
  },
  components: {
    ProductInfo,
    ServiceInfo,
    ExpoInfo,
  },
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 100%;
}
.news-block {
  display: inline-block;
}
</style>
