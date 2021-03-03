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
    <div class="title"><span>中日产品信息库</span></div>
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
                                      产品展示区
     ------------------------------------------------------------------------->
    <div class="products-container">
      <div class="products-container-son">
        <div class="title1"> 中国 </div>
        <div class="block" v-for="(item,index) in products_C" :key="index" >
          <div class="block_son1">
            <img :src="item.img" style="width: 100%;height: 100%;"/>
          </div>
          <div class="block_son2">
            <span style="font-size: 14px;font-weight:bolder;">{{ item.name }}</span><br><br>
            <span style="font-size: 12px;">发布时间：{{ item.date }}</span><br>
            <span style="font-size: 12px;">企业名称：{{ item.company }}</span>
<!--            <el-button plain class="detail_button" @click="toProduct(item.id)">查看详情</el-button>-->
          </div>
        </div>
        <router-link class="link" :to="{name:'xxx',path:'/xxx'}">更多>></router-link>
      </div>
      <div class="products-container-son" >
        <div class="title1"> 日本 </div>
        <div class="block" v-for="(item,index) in products_J" :key="index" style="border-right: 1px solid rgb(210, 210, 210);">
          <div class="block_son1">
            <img :src="item.img" style="width: 100%;height: 100%;"/>
          </div>
          <div class="block_son2">
            <span style="font-size: 14px;font-weight:bolder;">{{ item.name }}</span><br><br>
            <span style="font-size: 12px;">发布时间：{{ item.date }}</span><br>
            <span style="font-size: 12px;">企业名称：{{ item.company }}</span>
<!--            <el-button plain class="detail_button" @click="toProduct(item.id)">查看详情</el-button>-->
          </div>
        </div>
        <router-link class="link" :to="{name:'xxx',path:'/xxx'}">更多>></router-link>
      </div>
    </div>
    <!-------------------------------------------------------------------------
                                     产品展示换页
    ------------------------------------------------------------------------->
<!--    <div class="cProductsPages">-->
<!--      <div style="position:relative; top:30%;">-->
<!--        <el-pagination-->
<!--            :current-page.sync="currentPage"-->
<!--            :page-size="100"-->
<!--            layout="total, prev, pager, next"-->
<!--            :total="1"-->
<!--        ></el-pagination>-->
<!--      </div>-->
<!--    </div>-->
<!--        <Footer/>-->
  </div>
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
        {value: 1, label: "全部",},
        {value: 2, label: '机器人'},
        {value: 3, label: '电子器件'},
        {value: 4, label: '机械'}
      ],

      category2: '',
      category2_options: [
        {value: 1, label: "全部",},
        {value: 2, label: '机器人手臂'},
        {value: 3, label: '三极管'},
        {value: 4, label: '齿轮'}
      ],

      category3: '',
      category3_options: [
        {value: 1, label: "全部",},
        {value: 2, label: '三级选项1'},
        {value: 3, label: '三级选项2'},
        {value: 4, label: '三级选项3'}
      ],

      currentPage: 5,
      input: this.$route.query.input ? this.$route.query.input : '',
      // products_left: [],
      // products_right: [],
      products_C: DBNav_mockData.products_C,
      products_J:DBNav_mockData.products_J,
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
.select-search-container {
  height: 150px;
  text-align: center;
  background-color: #c8c8c8;
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
.el-select {
  width: 9%;
  margin: 20px 3px;
}
.el-input {
  width: 75%;
}

/*---------- 产品展示区域的样式 ----------*/
.products-container{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.products-container-son {
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.title1 {
  color: #a90000;
  text-align: center;
  width: 200px;
  /*padding: 5px 0;*/
  margin: 20px auto;
}
.block {
  width: 100%;
  height:140px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(210, 210, 210);
  /*border: 1px solid rgb(210, 210, 210);*/
  border-top: 1px solid rgb(210, 210, 210);
  border-left: 1px solid rgb(210, 210, 210);
}
.block_son1{
  width: 160px;
  height:120px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0;
}
.block_son2 {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}
.link {
  height: 100px;
  text-decoration: none;
  font-size: 14px;
  margin: 10px auto;
}
/*.detail_button {*/
/*  !*margin-right: 0;*!*/
/*  width: 25%;*/
/*  position: relative;*/
/*  !*left: 70%;*!*/
/*  top: -30%;*/
/*}*/

/*---------- 产品展示换页 ----------*/
/*.cProductsPages {*/
/*  width: 100%;*/
/*  height: 100px;*/
/*  text-align: center;*/
/*  !*border: 1px solid rgb(210, 210, 210);*!*/
/*  !*background-color: #ecebeb;*!*/
/*}*/
</style>
