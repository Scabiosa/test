<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		首页上的产品推荐组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.02.08  童卫青
//     根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <div class="containerA">
      <div class="title_CH">{{ data.companyName_CH }}</div>
      <div class="title_US">{{ data.companyName_US }}</div>
    </div>
    <div class="containerB">
      <router-link to='/CW_Profile' style="margin-left: 100px">公司介绍</router-link>
      <router-link to='/CW_News'>公司动态</router-link>
      <router-link to='/CW_Products'>产品信息</router-link>
      <router-link to='/CW_Service'>服务信息</router-link>
      <router-link to='/CW_Certificate'>荣誉证书</router-link>
      <router-link to='/CW_Contact' style="margin-right: 100px">联系方式</router-link>
    </div>
  </div>

</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
export default {
  props: {
    data: {
      type: Object,
      deep: true,
    }
  },
  created() {
    // axios获取数据
  },
  components: {}
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 100%;
}
.containerA {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background-color: #f3f2f2;*/
}
.title_CH {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
}
.title_US {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
}
.containerB {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /*font-family: "黑体";*/
  font-family: "华文细黑";
  /*font-size: 14px;*/
  font-size: 16px;
  background-color: #a90000;
}
a {
  width: 120px;
  height: 20px;
  text-decoration: none;
  color: #B3E8E8;
}
</style>