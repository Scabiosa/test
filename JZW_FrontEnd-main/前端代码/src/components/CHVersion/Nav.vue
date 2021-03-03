<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		主页的信息导航组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="Nav">
    <div class="wrapper">
      <router-link to='/InfoCenter'>资讯中心</router-link>
      <router-link to='/ProductInfoDB'>产品信息</router-link>
      <router-link to='/ServiceInfoDB'>服务信息</router-link>
      <router-link to='/CompanyInfoDB'>企业信息</router-link>
      <a href="/BlockChainHome">产品存证</a>
<!--      <a href="https://www.cantonfair.org.cn">云展会馆</a>-->
      <router-link to='/CEHome'>云展会馆</router-link>
      <a href="https://www.bilibili.com">视频直播</a>
    </div>
  </div>
</template>

/<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
export default {
  name: 'Nav',
  data() {
    return {};
  }
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.Nav {
  position: relative;
  width: 100%;
  height: 50px;
  /*font-family: "微软雅黑";*/
  font-family: "黑体";
  /*font-size: 14px;*/
  font-size: 16px;
  /*background-color: #381112;*/
  background-color: #a90000;
}
.wrapper {
  width: 846px;
  height: 50px;
  margin: auto;
  white-space: nowrap; /*强制不换行*/
}
a {
  width: 120px;
  height: 20px;
  text-decoration: none;
  text-align: center;
  margin: 17px 1px 0 0;
  display: inline-block;
  color: #B3E8E8;
}

</style>