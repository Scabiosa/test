 <template>
     <div>
         <div class="news_title">新闻中心</div>
         <div class="news_selectors">
             <el-select
               v-model="news_category"
               clearable placeholder="新闻类别"
               style="width: 10%;">
                   <el-option v-for="item in news_category_options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                   </el-option>
             </el-select>
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
             <el-date-picker
               v-model="start_date"
               type="date"
               placeholder="起始时间"
               style="width: 11%;">
             </el-date-picker>
           <el-date-picker
             v-model="finish_date"
             type="date"
               placeholder="截止时间"
               style="width: 11%;">
             </el-date-picker>
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
             <div class="news_search">
               <div class="news_input">
                <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="search">
                   <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
                 </el-input>
               </div>
             </div>

         </div>
         <div class="news_content">
           <div style="height:20vh;"></div>
           <div class="news_country_title">
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
          <div class="news_items">
             <div class="news_left">
              <div class="new_item" v-for="(item,index) in news_cn" :key="index" v-show="index>= (pageNo-1)*pageSize && index<pageNo*pageSize">
                 <div style="width:80%;margin-left:5%;">·&nbsp;{{ item.name }}</div>
                 <router-link  :to="{ name: 'companydynamicdetail',path: '/company/dynamicdetail',query:{code:item.code,companyCode:item.companyCode}}">
                   <div style="cursor:pointer;color:black;text-decoration:none;">【详情】</div>
                 </router-link>
               </div>
            </div>
             <div class="news_right">
               <div class="new_item" v-for="(item,index) in news_jp" :key="index" v-show="index>= (pageNo-1)*pageSize && index<pageNo*pageSize">
                 <div style="width:85%;">·&nbsp;{{ item.name }}</div>
                 <div style="width:15%;cursor:pointer;">【详情】</div>
               </div>
             </div>
          </div>
           <div class="news_pages">
            <div style="position:relative; top:30%;">
              <el-pagination
                :current-page.sync="pageNo"
                :page-size="pageSize"
                 layout="total, prev, pager, next"
                 :total="total">
           </el-pagination>
             </div>
           </div>
         </div>
         <InformationBaseFooter />
     </div>
 </template>

<script>
  import {listNews} from "../axios/api";
  import InformationBaseHeader from "../components/layouts/InformationBase/InformationBaseHeader";
  import InformationBaseFooter from "../components/layouts/InformationBase/InformationBaseFooter";
  export default {
        name: "news",
        components:{
            InformationBaseHeader,
            InformationBaseFooter,
        },
        methods: {
          search: function() {
                var self = this;
                fetch("/api/jz/news/list?name_LIKE=" + this.input + '&locale=zh_CN' + '&pageNo=0&pageSize=999')
                    .then(res => {return res.json()}).then(res => {
                        self.total = res.result.total;
                        self.news_cn = res.result.records;
					      });
				        fetch("/api/jz/news/list?name_LIKE=" + this.input + '&locale=en_US' + '&pageNo=0&pageSize=999')
                    .then(res => {return res.json()}).then(res => {
                        self.total = res.result.total;
                        self.news_jp = res.result.records;
					      });
          },
        },
        created: function() {
          this.search();
        },
        data(){
          return{
            pageNo:1,
            pageSize:12,
            news_category: '',
            total:'',
            news_category_options: [{
              value: 1,
              label: '类别1'
            }, {
              value: 2,
              label: '类别2'
            }, {
              value: 3,
              label: '类别3'
            }],

            country: '',
            country_options: [{
              value: 1,
              label: '中国'
            }, {
              value: 2,
              label: '日本'
            }],

            start_date: '',
            finish_date: '',
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
            input: this.$route.query.input ?  this.$route.query.input :'',
            news_cn: [],
            news_jp: [],/*
            news: [{
              country: '中国',
              titles: [
                "提供可重复使用的防护制服(2020-4-5)",
                "江苏南通生态环境全省首创“提醒式”执法(2020-4-5)",
                "无人机助力春季禁毒 非法种植罂粟无处遁形(2020-4-5)",
                "辽宁丹东消防密织森林防火安全网(2020-4-5)",
                "福建厦门开展联合巡航执法(2020-4-5)",
                "湖北咸安公安分局开展“平安咸安行动”(2020-4-5)",
                "辽宁营口市7个消防救援大队开展拉动演练(2020-4-5)",
                "深圳安装执法记录仪 筑牢防疫“安全网”(2020-4-5)",
                "提供可重复使用的防护制服(2020-4-5)",
                "江苏南通生态环境全省首创“提醒式”执法(2020-4-5)",
                "无人机助力春季禁毒 非法种植罂粟无处遁形(2020-4-5)",
              ]
            }, {
              country: '日本',
              titles: [
                "提供可重复使用的防护制服(2020-4-5)",
                "江苏南通生态环境全省首创“提醒式”执法(2020-4-5)",
                "无人机助力春季禁毒 非法种植罂粟无处遁形(2020-4-5)",
                "辽宁丹东消防密织森林防火安全网(2020-4-5)",
                "福建厦门开展联合巡航执法(2020-4-5)",
                "湖北咸安公安分局开展“平安咸安行动”(2020-4-5)",
                "辽宁营口市7个消防救援大队开展拉动演练(2020-4-5)",
                "深圳安装执法记录仪 筑牢防疫“安全网”(2020-4-5)",
                "提供可重复使用的防护制服(2020-4-5)",
                "江苏南通生态环境全省首创“提醒式”执法(2020-4-5)",
                "无人机助力春季禁毒 非法种植罂粟无处遁形(2020-4-5)",
              ]
            }],*/

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

    .news_title{
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

     .news_selectors{
       text-align: center;
       height: 10vh;
       line-height: 10vh;
     }

     .news_search{
       height: 12vh;
       width: 100%;
       text-align: center;
       border-bottom: solid;
       border-bottom-color: rgb(121,121,121);
     }

    .news_input{
       width: 80%;
       margin: 0 auto;
     }

     .news_country_title{
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

     .news_items{
       display: flex;
       flex-direction: row;
       font-size: 18px;
       text-align: left;
     }

    .news_left{
       width: 50%;
       padding:1%;
       display: flex;
       flex-direction: column;
     }

     .news_right{
      width: 50%;
       padding:1%;
       display: flex;
       flex-direction: column;
       border-left: solid;
     }

     .new_item{
       height: 6vh;
       line-height: 6vh;
       width:100%;
       display: flex;
       flex-direction: row;
     }

     .news_pages{
       width: 100%;
       height: 15vh;
       line-height: 15vh;
       text-align: center;
     }
 </style>
