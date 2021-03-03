<template>
    <div>
    <div class="services_title">服务信息库</div>
    <div class="services_selectors">

      <el-select
        v-model="country"
        clearable placeholder="国家不限"
        style="width: 10%;">
        <el-option v-for="item in country_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <el-select
        v-model="category1"
        clearable placeholder="一级分类目录"
        style="width: 12%;">
        <el-option v-for="item in category1_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        v-model="category2"
        clearable placeholder="二级分类目录"
        style="width: 12%;">
        <el-option v-for="item in category2_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        v-model="category3"
        clearable placeholder="三级分类目录"
        style="width: 12%;">
        <el-option v-for="item in category3_options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="services_search">
        <div class="services_input">
          <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="search">
            <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
          </el-input>
        </div>
      </div>

    </div>
    <div class="services_content">
      <div style="height:20vh;"></div>
      <div class="services_country_title">
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
      <div class="services_items">
        <div class="services_left">
          <div class="service_item" v-for="(item,index) in services_cn" :key="index">
            <div style="width:85%;">·&nbsp;{{ item.name }}</div>
            <div style="width:15%;cursor:pointer;" @click="toServices">【详情】</div>
          </div>
        </div>
        <div class="services_right">
          <div class="service_item" v-for="(item,index) in services_jp" :key="index">
            <div style="width:85%;">·&nbsp;{{ item.name }}</div>
            <div style="width:15%;cursor:pointer;" @click="toServices">【详情】</div>
          </div>
        </div>
      </div>
      <div class="services_pages">
        <div style="position:relative; top:30%;">
          <el-pagination
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="pageSize">
          </el-pagination>
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
        name: "services",
        components:{
            InformationBaseHeader,
            InformationBaseFooter,
		},
		methods: {
			search: function() {
                var self = this;
                fetch("/api/jz/service/list?name_LIKE=" + this.input + '&locale=zh_CN')
                    .then(res => {return res.json()}).then(res => {
                        self.pageSize = res.result.total;
                        self.services_cn = res.result.records;
					      });
				        fetch("/api/jz/service/list?name_LIKE=" + this.input + '&locale=en_US')
                    .then(res => {return res.json()}).then(res => {
                        self.pageSize = res.result.total;
                        self.services_jp = res.result.records;
					      });
            },
      toServices(){
			   this.$router.push('services')
      }
		},
		created:function() {
			this.search();
		},
        data(){
          return{
            country: '',
            country_options: [{
              value: 1,
              label: '中国'
            }, {
              value: 2,
              label: '日本'
            }],

            category1: '',
            category1_options: [{
              value: 1,
              label: '一级选项1'
            }, {
              value: 2,
              label: '一级选项2'
            }, {
              value: 3,
              label: '一级选项3'
            }],

            category2: '',
            category2_options: [{
              value: 1,
              label: '二级选项1'
            }, {
              value: 2,
              label: '二级选项2'
            }, {
              value: 3,
              label: '二级选项3'
            }],

            category3: '',
            category3_options: [{
              value: 1,
              label: '三级选项1'
            }, {
              value: 2,
              label: '三级选项2'
            }, {
              value: 3,
              label: '三级选项3'
            }],

            currentPage: 5,
			input: this.$route.query.input ? this.$route.query.input:'',
			services_cn: [],
			services_jp: []
			/*
            services: [{
              country: '中国',
              titles: [
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
              ]
            }, {
              country: '日本',
              titles: [
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
                  "网站代建服务（2020-4-16）",
                  "手机屏幕代加工服务（2020-4-15）",
                  "远洋运输服务（2020-4-10）",
              ]
            }],
			*/
          }
        },
    }
</script>

<style scoped>
  .layout{
    margin: 24px 0px 0px;
    height: 64px;
    padding: 0 12px 0 0;
  }

  .services_title{
    height: 11vh;
    line-height: 11vh;
    width: 100%;
    font-size: 32px;
    font-weight: bolder;
    text-align: center;
    color: rgb(0,0,0);
    background-color: rgb(255,255,255);
    border-bottom: solid rgb(121,121,121) 1vh;
  }

  .services_selectors{
    text-align: center;
    height: 10vh;
    line-height: 10vh;
  }

  .services_search{
    height: 12vh;
    width: 100%;
    text-align: center;
    border-bottom: solid;
    border-bottom-color: rgb(121,121,121);
  }

  .services_input{
    width: 80%;
    margin: 0 auto;
  }

  .services_country_title{
    height: 6vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 18px;
  }

  .country_left{
    width: 55%;
    display: flex;
    flex-direction: row;
    margin-left: 10%;
  }

  .country_right{
    width: 45%;
    display: flex;
    flex-direction: row;
    margin-left: 10%;
  }

  .left_country_icon{
    height: 6vh;
    width: 6%;
    background:url(../assets/news/China.png);
    background-size: cover;
  }

  .right_country_icon{
    height: 6vh;
    width: 6%;
    background:url(../assets/news/Japan.png);
    background-size: cover;
  }

  .services_items{
    display: flex;
    flex-direction: row;
    font-size: 18px;
    text-align: left;
  }

  .services_left{
    width: 50%;
    padding:1%;
    display: flex;
    flex-direction: column;
  }

  .services_right{
    width: 50%;
    padding:1%;
    display: flex;
    flex-direction: column;
    border-left: solid;
  }

  .service_item{
    height: 6vh;
    line-height: 6vh;
    width:100%;
    display: flex;
    flex-direction: row;
  }

  .services_pages{
    width: 100%;
    height: 15vh;
    line-height: 15vh;
    text-align: center;
  }
</style>
