<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		产品信息库页面
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
    <div class="title1"><span>中日企业信息库</span></div>
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
    <!-------------------------------------------------------------------------
                                      企业展示区
     ------------------------------------------------------------------------->
    <div class="company-container">
      <div class="company-container_son">
        <div class="title2"> 中国</div>
        <div class="blockA" v-for="(item,index) in company_C" :key="index">
          <div class="blockA_son1">
            <span style="font-size: 14px;font-weight:bolder;">{{ item.companyName }}</span><br><br>
            <span style="font-size: 12px;">主营产品：{{ item.products[0] }},{{ item.products[1] }}</span><br>
            <span style="font-size: 12px;">企业类别：{{ item.type }}</span><br>
            <span style="font-size: 12px;">企业所在地：{{ item.location }}</span>
          </div>
          <div class="blockA_son2"><img :src="item.img[0]" style="width: 100%;height: 100%;"/></div>
          <div class="blockA_son2"><img :src="item.img[1]" style="width: 100%;height: 100%;"/></div>
          <div class="blockA_son2"><img :src="item.img[2]" style="width: 100%;height: 100%;"/></div>
          <div class="blockA_son2"><img :src="item.img[0]" style="width: 100%;height: 100%;"/></div>
          <div class="blockA_son2"><img :src="item.img[1]" style="width: 100%;height: 100%;"/></div>
        </div>
        <router-link class="router-link1" :to="{name:'xxx',path:'/xxx'}">更多>></router-link>
      </div>
    </div>
    <div class="company-container_son">
      <div class="title2">日本</div>
      <div class="blockA" v-for="(item,index) in company_J" :key="index">
        <div class="blockA_son1">
          <span style="font-size: 14px;font-weight:bolder;">{{ item.companyName }}</span><br><br>
          <span style="font-size: 12px;">主营产品：{{ item.products[0] }},{{ item.products[1] }}</span><br>
          <span style="font-size: 12px;">企业类别：{{ item.type }}</span><br>
          <span style="font-size: 12px;">企业所在地：{{ item.location }}</span>
        </div>
        <div class="blockA_son2"><img :src="item.img[0]" style="width: 100%;height: 100%;"/></div>
        <div class="blockA_son2"><img :src="item.img[1]" style="width: 100%;height: 100%;"/></div>
        <div class="blockA_son2"><img :src="item.img[2]" style="width: 100%;height: 100%;"/></div>
        <div class="blockA_son2"><img :src="item.img[0]" style="width: 100%;height: 100%;"/></div>
        <div class="blockA_son2"><img :src="item.img[1]" style="width: 100%;height: 100%;"/></div>
      </div>
      <router-link class="router-link2" :to="{name:'xxx',path:'/xxx'}">更多>></router-link>
    </div>
  </div>
  <!--        <Footer/>-->
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
import Header from '@/components/CHVersion/Header';
import DBNav_mockData from "@/mock/DBNav_MockData";
// import Footer from "@/components/Footer.vue";
export default {
  name: "products",
  components: {
    Header,
    // Footer
  },
  methods: {
    search: function () {
      var self = this;
      fetch(
          "/api/jz/product/list?name_LIKE=" +
          this.input +
          "&locale=" +
          this.locale_code[this.country]
      )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            self.products_left = [];
            self.products_right = [];
            var i = 0;
            res.result.records.forEach(function (r) {
              fetch(
                  "/api/jz/company/getByCode?code=" +
                  r.companyCode +
                  "&locale=" +
                  self.locale_code[self.country]
              )
                  .then((res2) => {
                    return res2.json();
                  })
                  .then((res2) => {
                    var obj = Object();
                    obj.company = res2.result.name;
                    obj.updateTime = r.updateTime;
                    obj.name = r.name;
                    if (i & 1) self.products_right.push(obj);
                    else self.products_left.push(obj);
                    i++;
                  });
            });
          });
    },
    changeSearchLocale: function () {
      this.input = "";
      this.search();
    },
    getCompanyNameByCode: function (code) {
      fetch(
          "/api/jz/company/getByCode?code=" +
          code +
          "&language=" +
          this.locale_code[this.country]
      )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            return res.result.name;
          });
    },
    // toProduct(id){
    //   this.$router.push({
    //     name:'companyproductdetail',
    //     query:{
    //
    //     }
    //   })
    // }

  },
  created: function () {
    this.search();
  },
  data() {
    return {
      country: "",
      country_options: [
        {value: 1, label: "全部",},
        {value: 2, label: "中国",},
        {value: 3, label: "日本",}
      ],
      start_date: '',
      finish_date: '',

      category1: "",
      category1_options: [
        {value: 1, label: '全部'},
        {value: 2, label: '机器人'},
        {value: 3, label: '电子器件'},
        {value: 4, label: '机械'}
      ],

      category2: '',
      category2_options: [
        {value: 1, label: '全部'},
        {value: 2, label: '机器人手臂'},
        {value: 3, label: '三极管'},
        {value: 4, label: '齿轮'}
      ],

      category3: '',
      category3_options: [
        {value: 1, label: '全部'},
        {value: 2, label: '三级选项1'},
        {value: 3, label: '三级选项2'},
        {value: 4, label: '三级选项3'}
      ],

      currentPage: 5,
      input: this.$route.query.input ? this.$route.query.input : '',
      company_C: DBNav_mockData.company_C,
      company_J: DBNav_mockData.company_J,
    };
  },
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  margin: auto;
}
/*---------- 页面总标题和搜索区域的样式 ----------*/
.title1 {
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
.select-search-container {
  height: 150px;
  text-align: center;
  background-color: #c8c8c8;
}
.title1 span {
  display: block;
  width: 120px;
  margin: auto;
}
.el-select {
  width: 9%;
  margin: 20px 3px;
}
.el-input {
  width: 75%;
}

/*---------- 企业信息展示区域的样式 ----------*/
.company-container {
  width: 100%;
}
.company-container_son {
  width: 100%;
}
.blockA {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid rgb(210, 210, 210);
  border-top: 1px solid rgb(210, 210, 210);
}
.title2 {
  color: #a90000;
  text-align: center;
  width: 200px;
  margin: 20px auto;
}
.blockA_son1 {
  text-align: left;
  float: left;
  margin-top: 30px;
  margin-left: 10px;
}
.blockA_son2 {
  width: 160px;
  height: 120px;
  float: right;
  margin: 10px 0 10px 5px;
}
.router-link1 {
  display: block;
  /*height: 30px;*/
  text-decoration: none;
  font-size: 14px;
  text-align: left;
  margin-left: 10px;
}
.router-link2 {
  display: block;
  text-decoration: none;
  font-size: 14px;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 100px;
}
</style>
