<template>
  <div>
    <div class="products_title">中日产品信息库</div>
    <div class="products_selectors">
      <el-select
        v-model="country"
        clearable
        placeholder="国家不限"
        style="width: 10%;"
        @change="changeSearchLocale"
      >
        <el-option
          v-for="item in country_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="category1" clearable placeholder="一级分类目录" style="width: 12%;">
        <el-option
          v-for="item in category1_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="category2" clearable placeholder="二级分类目录" style="width: 12%;">
        <el-option
          v-for="item in category2_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="category3" clearable placeholder="三级分类目录" style="width: 12%;">
        <el-option
          v-for="item in category3_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="products_search">
        <div class="products_input">
          <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="search">
            <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div style="height: 18vh;"></div>
    <div class="product_content">
      <div class="left_part">
        <div class="product_item" v-for="(item,index) in products_left" :key="index">
          <div class="product_logo">
            <img src="../assets/products/1.png" style="width: 100%;height: 100%;" />
          </div>
          <div class="product_introduction">
            <div style="font-size: 20px;font-weight:bolder;padding-bottom: 30px;">{{ item.name }}</div>
            <div style="font-size: 16px;font-weight: bolder;">更新时间：{{ item.updateTime }}</div>
            <div style="font-size: 16px;font-weight: bolder;">企业：{{ item.company }}</div>
            <el-button plain class="detail_button" @click="toProduct(item.id)">查看详情</el-button>
          </div>
        </div>
      </div>
      <div class="right_part">
        <div class="product_item" v-for="(item,index) in products_right" :key="index">
          <div class="product_logo">
            <img src="../assets/products/2.png" style="width: 100%;height: 100%;" />
          </div>
          <div class="product_introduction">
            <div style="font-size: 22px;font-weight:bolder;padding-bottom: 30px;">{{ item.name }}</div>
            <div style="height: 5vh;font-size: 16px;font-weight: bolder;">更新时间：{{ item.updateTime }}</div>
            <div style="height: 5vh;font-size: 16px;font-weight: bolder;">企业：{{ item.company }}</div>
            <el-button plain class="detail_button" @click="toProduct(item.id)">查看详情</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="products_pages">
      <div style="position:relative; top:30%;">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1"
        ></el-pagination>
      </div>
    </div>
    <InformationBaseFooter />
  </div>
</template>

<script>
import InformationBaseHeader from "../components/layouts/InformationBase/InformationBaseHeader";
import InformationBaseFooter from "../components/layouts/InformationBase/InformationBaseFooter";
export default {
  name: "products",
  components: {
    InformationBaseHeader,
    InformationBaseFooter,
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
    toProduct(id){
      this.$router.push({
        name:'companyproductdetail',
        query:{

        }
      })
    }

  },
  created: function () {
    this.search();
  },
  data() {
    return {
      country: 1,
      country_options: [
        {
          value: 1,
          label: "汉语",
        },
        {
          value: 2,
          label: "英语",
        },
        {
          value: 3,
          label: "日语",
        },
      ],
      locale_code: ["", "zh_CN", "en_US", "ja_JP"],

      category1: "",
      category1_options: [
        {
          value: 1,
          label: "一级选项1",
        },
        {
          value: 2,
          label: "一级选项2",
        },
        {
          value: 3,
          label: "一级选项3",
        },
      ],

      category2: "",
      category2_options: [
        {
          value: 1,
          label: "二级选项1",
        },
        {
          value: 2,
          label: "二级选项2",
        },
        {
          value: 3,
          label: "二级选项3",
        },
      ],

      category3: "",
      category3_options: [
        {
          value: 1,
          label: "三级选项1",
        },
        {
          value: 2,
          label: "三级选项2",
        },
        {
          value: 3,
          label: "三级选项3",
        },
      ],

      currentPage: 5,
      input: this.$route.query.input ? this.$route.query.input:'',
      products_left: [],
      products_right: [],
      /*
        products_left: [{
          name: "具备通讯功能的智能侦测机器人",
          date: "2020-04-21",
          company: "xxx有限公司",
          logo: "images/1.png",
        },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          },
          {
            name: "具备通讯功能的智能侦测机器人",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/1.png",
          },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          },
          {
            name: "具备通讯功能的智能侦测机器人",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/1.png",
          },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          },
          {
            name: "具备通讯功能的智能侦测机器人",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/1.png",
          },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          }],
        products_right: [{
          name: "具备通讯功能的智能侦测机器人",
          date: "2020-04-21",
          company: "xxx有限公司",
          logo: "images/1.png",
        },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          },
          {
            name: "具备通讯功能的智能侦测机器人",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/1.png",
          },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          },
          {
            name: "具备通讯功能的智能侦测机器人",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/1.png",
          },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          },
          {
            name: "具备通讯功能的智能侦测机器人",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/1.png",
          },
          {
            name: "123手持式无线摄像头探测器",
            date: "2020-04-21",
            company: "xxx有限公司",
            logo: "images/2.png",
          }],*/
    };
  },
};
</script>

<style scoped>
.layout {
  margin: 24px 0px 0px;
  height: 64px;
  padding: 0 12px 0 0;
}

.products_title {
  height: 11vh;
  line-height: 11vh;
  width: 100%;
  font-size: 32px;
  font-weight: bolder;
  text-align: center;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border-bottom: solid rgb(121, 121, 121) 1vh;
}

.products_selectors {
  text-align: center;
  height: 10vh;
  line-height: 10vh;
}

.products_search {
  height: 12vh;
  width: 100%;
  text-align: center;
  border-bottom: solid;
  border-bottom-color: rgb(121, 121, 121);
}

.products_input {
  width: 80%;
  margin: 0 auto;
}

.product_content {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.left_part {
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.right_part {
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-left: solid;
  border-color: rgb(215, 215, 215);
}

.product_item {
  width: 94%;
  height: 23vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: solid;
  border-color: rgb(215, 215, 215);
}

.product_logo {
  width: 29%;
  height: 15vh;
  position: relative;
  top: 17%;
  line-height: 15vh;
  background-size: cover;
  border-style: solid;
  border-color: rgb(215, 215, 215);
}

.product_introduction {
  width: 71%;
  height: 13vh;
  margin-top: 4%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
}

.detail_button {
  width: 25%;
  position: relative;
  left: 70%;
  top: -30%;
}

.products_pages {
  width: 100%;
  height: 17vh;
  text-align: center;
}
</style>
