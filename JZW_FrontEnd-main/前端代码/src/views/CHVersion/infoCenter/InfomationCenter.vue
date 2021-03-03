<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		资讯中心页面
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
    <Header></Header>
    <div class="title"><span>资讯中心</span></div>
    <div class="select-search-container">
      <!-- 咨询类别下拉框 -->
      <el-select class="el-select" v-model="news_category" clearable placeholder="资讯类别">
        <el-option v-for="item in news_category_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <!-- 国家类别下拉框 -->
      <el-select class="el-select" v-model="country" clearable placeholder="国家类别">
        <el-option v-for="item in country_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <!-- 起始时间设定 -->
      <el-date-picker
          v-model="start_date"
          type="date"
          placeholder="起始时间"
          style="width: 12%;margin: 5px">
      </el-date-picker>
      <!-- 截止时间设定 -->
      <el-date-picker
          v-model="finish_date"
          type="date"
          placeholder="截止时间"
          style="width: 12%;margin: 5px">
      </el-date-picker>
      <!-- 内容搜索框 -->
      <el-input class="el-input" placeholder="请输入内容" v-model="input" @keyup.enter.native="search">
        <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
      </el-input>
    </div>
    <ProductNews :content="productNews" class="newsBlock"></ProductNews>
    <ServiceNews :content="serviceNews" class="newsBlock"></ServiceNews>
    <CompanyNews :content="companyNews" class="newsBlock"></CompanyNews>
    <ExpoInfo :content="expoInfo" class="newsBlock"></ExpoInfo>
    <Footer/>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
// import {listNews} from "@/axios/api";
import Header from '@/components/CHVersion/Header';
import Footer from "@/components/CHVersion/Footer.vue";
import ProductNews from "@/components/CHVersion/infoCenter/ProductNews";
import ServiceNews from "@/components/CHVersion/infoCenter/ServiceNews";
import CompanyNews from "@/components/CHVersion/infoCenter/CompanyNews";
import ExpoInfo from "@/components/CHVersion/ExpoInfo";
import DBNav_mockData from "@/mock/DBNav_MockData";

export default {
  name: "infoCenter",
  components: {
    Header,
    Footer,
    ProductNews,
    ServiceNews,
    CompanyNews,
    ExpoInfo,
  },
  methods: {
    search: function () {
    }
    // search: function() {
    //       var self = this;
    //       fetch("/api/jz/news/list?name_LIKE=" + this.input + '&locale=zh_CN' + '&pageNo=0&pageSize=999')
    //           .then(res => {return res.json()}).then(res => {
    //               self.total = res.result.total;
    //               self.news_cn = res.result.records;
    //       });
    //       fetch("/api/jz/news/list?name_LIKE=" + this.input + '&locale=en_US' + '&pageNo=0&pageSize=999')
    //           .then(res => {return res.json()}).then(res => {
    //               self.total = res.result.total;
    //               self.news_jp = res.result.records;
    //       });
    // },
  },
  created: function () {
    this.search();
  },
  data() {
    return {
      news_category: '',
      news_category_options: [
        {value: 1, label: '全部'},
        {value: 2, label: '产品'},
        {value: 3, label: '服务'},
        {value: 4, label: '企业'},
        {value: 5, label: '展会'},
      ],
      country: '',
      country_options: [
        {value: 1, label: '中国'},
        {value: 2, label: '中国'},
        {value: 3, label: '日本'}
      ],
      start_date: '',
      finish_date: '',
      input: this.$route.query.input ? this.$route.query.input : '',

      data: [],
      productNews: {
        title: "产品新闻",
        more: "/blank",
        type: "product",
        news: [],
        news_C: DBNav_mockData.productNews_C,//中国产品新闻
        news_J: DBNav_mockData.productNews_J,//日本产品新闻
      },
      serviceNews: {
        title: "服务新闻",
        more: "/blank",
        type: "service",
        news: [],
        news_C: DBNav_mockData.serviceNews_C,//中国服务新闻
        news_J: DBNav_mockData.serviceNews_J,//日本服务新闻
      },
      companyNews: {
        title: "企业新闻",
        more: "/blank",
        type: "service",
        news: [],
        news_C: DBNav_mockData.companyNews_C,//中国企业新闻
        news_J: DBNav_mockData.companyNews_J,//日本企业新闻
      },
      expoInfo: {
        title: "展会信息",
        more: "/blank",
        type: "expo",
        news: [],
        news_C: DBNav_mockData.expoNews_C,//中国展会信息
        news_J: DBNav_mockData.expoNews_j,//日本展会信息
      },
    }
  },
}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  margin: auto;
}
.title {
  width: 100%;
  display: block;
  height: 30px;
  line-height: 30px;
  color: #B3E8E8;
  font-family: "黑体";
  text-align: center;
  font-size: 16px;
  background-color: #a90000;
}
.title span {
  display: block;
  width: 80px;
  margin: auto;
}
.select-search-container {
  height: 150px;
  text-align: center;
  background-color: #c8c8c8;
}
.el-select {
  width: 10%;
  margin: 20px 5px;
}
.el-input{
  width: 60%;
}
.newsBlock {
  display: inline-block;
}
</style>
