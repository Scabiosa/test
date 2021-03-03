<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		企业Web的企业动态页面组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.02.10  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <CWHeader :data="headerData"></CWHeader>
    <div class="title">公司动态</div>
    <div class="container">
      <ul class="ul">
        <li class="li" v-for="(news,index) in newsData" :key="index">
          <router-link style="text-decoration: none" to='/#'> {{ news.title.slice(0, 40) }} </router-link>
          <span>{{ news.date.slice(0, 10) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->

<script>
import CWHeader from "@/components/CHVersion/companyWeb/CWHeader";
import CWData_mockData from '@/mock/CW_MockData'

export default {
  name: "CW_News",
  components: {
    CWHeader,
  },
  data() {
    return {
      headerData: CWData_mockData.HeaderData,
      newsData: CWData_mockData.NewsData,
    }
  }
}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  margin: 0 auto;
}

.title {
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  font-size: 18px;
  color: #a90000;
  /*background-color: #f2f2f2;*/
}

.container{
  width: 100%;
  margin: 0 auto;
}
.ul {
  padding-inline-start: 0px;
  /*list-style-type: circle;*/
}
.li {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 0 12px;
}
</style>
