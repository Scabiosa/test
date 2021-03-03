<template>
  <div>
    <div class="doc">{{$t('introduction.pdf_download')}}</div>
    <img class="img" :src="imgsrc" :alt="title" />
    <div class="title">{{title}}</div>
    <!-- <div class="publishdate">{{$t('introduction.publishdate')+" : "+publishdate}}</div> -->
    <pre class="memo">{{memo}}</pre>
    <div class="title">{{title1}}</div>
    <div class="patent_detail">
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
        prop="name"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        >
        </el-table-column>
    </el-table>
</div>
  </div>
</template>

<script>
import CompanyLayout from "../../components/layouts/company/CompanyLayout";
export default {
  name: "dynamicdetail",
  data() {
    return {
        
      imgsrc: "/static/patent_detail1.png",
      title: "一、技术介绍",
      memo: `    机器人流程自动化(RPA)是一种技术，它允许通过配置自动化软件(也叫“机器人”)模拟和人类在软件系统中交互的动作来执行业务流程。
    RPA机器人在应用程序界面上识别数据并像人类一样操纵应用程序。他们根据规则与
其他系统交互，根据需要执行各种重复性任务。它比人类做的更好，一个RPA软件机器人不会睡觉，不犯错误，成本比员工少很多。
`     ,title1: "二、专利详情",
        tableData: [{
            name: '专利申请号',
            address: 'CN201920839987.4'
            }, {
            name: '专利申请日',
            address: '20190605'
            }, {
            name: '申请（专利权）人',
            address: '智能机器人公司技术部'
            }, {
            name: '申请人地址',
            address: '上海市普陀区中山北路3663号'
            }, {
            name: '发明人',
            address: '番茄家族'
            }, {
            name: '专利类型',
            address: '实用新型'
            }]
    };
  },
  components: {
    CompanyLayout
  }
};
</script>

<style scoped>
.doc {
  text-align: left;
  font-size: 18px;
  color: #81d3f8;
}
.img {
  display: block;
  width: 95%;
  height: 300px;
  margin: 0 auto;
}
.title {
  font-size: 18px;
  font-weight: 24px;
  margin: 10px auto;
  margin-left: 30px;
  
}
.publishdate {
  text-align: center;
  color: gray;
}
.memo {
  /* text-indent: 24px; */
  margin-top: 24px;
  margin: 15px 30px 25px 30px;
  font-size: 18px;
  line-height: 24px;
}
.patent_detail{
    margin:0px 0px 20px 25px
}
pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wraps;
  *word-wrap: break-word;
  *white-space: normal;
}
</style>
