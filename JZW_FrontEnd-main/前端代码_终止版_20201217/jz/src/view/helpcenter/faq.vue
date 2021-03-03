<template>
  <div class="main">
    <h2>{{$t('help.faq')}}</h2>
    <div class="block">
      <ol class="QAList">
        <li v-for="(qa) in QAList">
          <p class="detailQ">{{qa.question}}</p>
          <p class="detailA">{{qa.answer}}</p>
        </li>
      </ol>
      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next, jumper"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        :total="totalCount">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {getFAQList} from "../../axios/api";

  export default {
    name: "faq",
    data() {
      return {
        page:{
          currentPage: 1,
          pageSize: 10,
        },
        totalCount: 0,
        QAList:[{question:'', answer:'' }]
      }
    },
    created() {
      this.totalCount = 5;
      this.QAList = [

        {
          question:'我在鉴真网主网注册后，访问其他支网还需要重新注册吗？',
          answer:'不需要，鉴真网采用统一账号登陆。'
        },
        {
          question:'如何选择自己的角色？',
          answer:'鉴真网针对普通用户、企业用户和政府机构用户设置了三种角色，用户可以根据自己的身份选择。'
        },
        {
          question:'如何精准地获取自己感兴趣的信息?',
          answer:'在 用户中心 订阅新闻 里可以添加自己感兴趣的栏目。'
        },
        {
          question:'鉴真网会提供翻译服务吗？',
          answer:'会，我们会提供AI自动翻译和人工翻译，确保用户的信息能够被准确地传达。'
        },
        {
          question:'100字不足以介绍我的产品怎么办？',
          answer:'为追求信息的简要性，您只能上传不超过100字的文字介绍，但是您可以上传一个产品的PDF附件来详细地介绍产品。'
        },

      ]
      //this.getQAList(); 暂无此api
    },
    methods: {
      //请求FAQ列表
      getQAList(){
        //设置请求参数
        let params = {
          page: this.page.currentPage,
          pageSize: this.page.pageSize,
          locale: this.$i18n.locale
        }
        //调用api
        getFAQList(params).then(res=>{
          let {msg, data} = res.data;
          console.log(msg);
          this.QAList=data['list'];
          this.totalCount = data['size'];
        }).catch(err=>{
          console.log(err);
        });
      },
      //更改当前页数
      handleCurrentChange(val){
        this.page.currentPage = val;
        this.getQAList();
      },

    }


  }
</script>

<style scoped>
  .block{
    margin: 10px;
    padding: 10px;
    border: lightgrey 1px solid;
    border-radius: 5px;
  }
  .main{
    text-align: left;

  }


  .QAList{
    min-height: 600px;
  }
  .detailQ{
    font-weight: bold;
  }
  .detailA{

  }
</style>
