<template>
  <div>
    <div class="technologys_title">技术信息库</div>
    <div class="technologys_selectors">
      <el-select v-model="country" clearable placeholder="国家不限" style="width: 10%;">
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
      <div class="technologys_search">
        <div class="technologys_input">
          <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="search">
            <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div class="technologys_content">
      <div style="height:20vh;"></div>
      <div class="technologys_country_title">
        <div height="5vh"></div>
        <div class="country_left">
          <div class="left_country_icon"></div>
          <div style="margin-top: 10px;font-weight: bolder">&nbsp;&nbsp;&nbsp;中国</div>
        </div>
        <div class="country_right">
          <div class="right_country_icon"></div>
          <div style="margin-top: 10px;font-weight: bolder">&nbsp;&nbsp;&nbsp;日本</div>
        </div>
      </div>
      <div class="technologys_items">
        <div class="technologys_left">
          <div class="technology_item" v-for="(item,index) in tech_cn" :key="index">
            <div style="width:85%;">·&nbsp;{{ item.name }}</div>
            <div style="width:15%;cursor:pointer;">【详情】</div>
          </div>
        </div>
        <div class="technologys_right">
          <div class="technology_item" v-for="(item,index) in tech_jp" :key="index">
            <div style="width:85%;">·&nbsp;{{ item.name }}</div>
            <div style="width:15%;cursor:pointer;">【详情】</div>
          </div>
        </div>
      </div>
      <div class="technologys_pages">
        <div style="position:relative; top:30%;">
          <el-pagination
            :current-page.sync="currentPage"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="6000"
          ></el-pagination>
        </div>
      </div>
    </div>
    <InformationBaseFooter />
  </div>
</template>

<script>
import InformationBaseHeader from "../components/layouts/InformationBase/InformationBaseHeader";
import InformationBaseFooter from "../components/layouts/InformationBase/InformationBaseFooter";
export default {
  name: "technologys",
  components: {
    InformationBaseHeader,
    InformationBaseFooter,
  },
  methods: {
    search: function() {
      var self = this;
        fetch("/api/jz/service/list?name_LIKE=" + this.input + '&locale=zh_CN')
          .then(res => {return res.json()}).then(res => {
            self.pageSize = res.result.total;
            self.tech_cn = res.result.records;
				  });
				fetch("/api/jz/service/list?name_LIKE=" + this.input + '&locale=en_US')
          .then(res => {return res.json()}).then(res => {
            self.pageSize = res.result.total;
            self.tech_jp = res.result.records;
				  });
    }
  },
  created: function() {
    this.search();
  },
  data() {
    return {
      country: "",
      country_options: [
        {
          value: 1,
          label: "中国",
        },
        {
          value: 2,
          label: "日本",
        },
      ],

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
      tech_cn: [],
      tech_jp: [],/*
      technologys: [
        {
          country: "中国",
          titles: [
            "人脸识别软件著作权(2020-4-15)",
            "手机屏幕专利(2019-2-19)",
            "人脸识别软件著作权(2020-4-15)",
            "磁盘修复技术专利(2020-4-15)",
            "图像修复软件著作权(2019-2-19)",
            "人脸识别软件著作权(2020-4-15)",
            "手机屏幕专利(2019-2-19)",
            "人脸识别软件著作权(2020-4-15)",
            "磁盘修复技术专利(2020-4-15)",
            "图像修复软件著作权(2019-2-19)",
          ],
        },
        {
          country: "日本",
          titles: [
            "人脸识别软件著作权(2020-4-15)",
            "手机屏幕专利(2019-2-19)",
            "人脸识别软件著作权(2020-4-15)",
            "磁盘修复技术专利(2020-4-15)",
            "图像修复软件著作权(2019-2-19)",
            "人脸识别软件著作权(2020-4-15)",
            "手机屏幕专利(2019-2-19)",
            "人脸识别软件著作权(2020-4-15)",
            "磁盘修复技术专利(2020-4-15)",
            "图像修复软件著作权(2019-2-19)",
          ],
        },
      ],*/
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

.technologys_title {
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

.technologys_selectors {
  text-align: center;
  height: 10vh;
  line-height: 10vh;
}

.technologys_search {
  height: 12vh;
  width: 100%;
  text-align: center;
  border-bottom: solid;
  border-bottom-color: rgb(121, 121, 121);
}

.technologys_input {
  width: 80%;
  margin: 0 auto;
}

.technologys_country_title {
  height: 6vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 18px;
}

.country_left {
  width: 55%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
}

.country_right {
  width: 45%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
}

.left_country_icon {
  height: 6vh;
  width: 6%;
  background: url(../assets/news/China.png);
  background-size: cover;
}

.right_country_icon {
  height: 6vh;
  width: 6%;
  background: url(../assets/news/Japan.png);
  background-size: cover;
}

.technologys_items {
  display: flex;
  flex-direction: row;
  font-size: 18px;
  text-align: left;
}

.technologys_left {
  width: 50%;
  padding: 1%;
  display: flex;
  flex-direction: column;
}

.technologys_right {
  width: 50%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  border-left: solid;
}

.technology_item {
  height: 6vh;
  line-height: 6vh;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.technologys_pages {
  width: 100%;
  height: 15vh;
  line-height: 15vh;
  text-align: center;
}
</style>
