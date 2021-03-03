<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		企业Web的产品信息页面组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.02.08  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <CWHeader :data="headerData"></CWHeader>
    <div class="title">产品信息</div>
    <figure v-for="(item,index) in productData" :key="index">
      <router-link to="/layout">
        <img :src="item.image" :alt="item.title"/>
      </router-link>
      <figcaption>
        {{ item.title }}<br>
        型号：{{ item.model }}
      </figcaption>
    </figure>
  <div style="height: 100px"></div>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->

<script>
import CWHeader from "@/components/CHVersion/companyWeb/CWHeader";
import CWData_mockData from '@/mock/CW_MockData'

export default {
  name: "CW_Profile",
  components: {
    CWHeader,
  },
  data() {
    return {
      headerData: CWData_mockData.HeaderData,
      productData: CWData_mockData.ProductData,
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
.title{
  height:50px;
  line-height: 50px;
  margin-top: 20px;
  font-size: 18px;
  color: #a90000;
  /*background-color: #f2f2f2;*/
}
figure {
  width: 220px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  /*align-content: space-around;*/
  /*align-items: self-end;*/
  margin-block-start: 0em;
  margin-block-end: 0.5em;
  margin-inline-start: 0.5em;
  margin-inline-end: 0.5em;
}
img {
  width: 220px;
  height: 220px
}
figcaption {
  font-size: 12px;
}


</style>
