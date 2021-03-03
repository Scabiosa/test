<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		服务信息库页面
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
    <div class="title"><span>中日服务信息库</span></div>
    <div class="select-search-container">
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
      <!-- 一级分类下拉框 -->
      <el-select class="el-select" v-model="category1" clearable placeholder="一级目录">
        <el-option v-for="item in category1_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <!-- 二级分类下拉框 -->
      <el-select class="el-select" v-model="category2" clearable placeholder="二级目录">
        <el-option v-for="item in category2_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <!-- 三级分类下拉框 -->
      <el-select class="el-select" v-model="category3" clearable placeholder="三级目录">
        <el-option v-for="item in category3_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <!-- 内容搜索框 -->
      <el-input class="el-input" placeholder="请输入内容" v-model="input" @keyup.enter.native="search">
        <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
      </el-input>
    </div>
    <!--    <div class="c_title2"> {{ serviceInfo.title }}</div>-->
    <ServiceInfoDB :content="serviceInfo" class="infoBlock"></ServiceInfoDB>
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
import ServiceInfoDB from "@/components/CHVersion/ServiceInfo";
import DBNav_mockData from "@/mock/DBNav_MockData";

export default {
  name: "serviceInfoDB",
  components: {
    Header,
    Footer,
    ServiceInfoDB,
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
      country: '',
      country_options: [
        {value: 1, label: '中国'},
        {value: 2, label: '日本'}
      ],
      start_date: '',
      finish_date: '',
      input: this.$route.query.input ? this.$route.query.input : '',

      category1: '',
      category1_options: [
        {value: 1, label: '机器人'},
        {value: 2, label: '电子器件'},
        {value: 3, label: '机械'}
      ],

      category2: '',
      category2_options: [
        {value: 1, label: '机器人手臂'},
        {value: 2, label: '三极管'},
        {value: 3, label: '齿轮'}
      ],

      category3: '',
      category3_options: [
        {value: 1, label: '三级选项1'},
        {value: 2, label: '三级选项2'},
        {value: 3, label: '三级选项3'}
      ],

      data: [],
      serviceInfo: {
        title: "服务信息",
        more: "/blank",
        type: "service",
        info: [],
        news_C: DBNav_mockData.serviceNews_C,//中国服务新闻
        news_J: DBNav_mockData.serviceNews_J,//日本服务新闻
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
  width: 120px;
  margin: auto;
}
.select-search-container {
  height: 150px;
  text-align: center;
  background-color: #c8c8c8;
}
.el-select {
  width: 9%;
  margin: 20px 3px;
}
.el-input {
  width: 75%;
}
.infoBlock {
  display: inline-block;
}

</style>
