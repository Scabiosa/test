<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  File name: Header.vue
//-------------------------------------------------------------------------------------
//  Abstract:
//		主页的头部组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <!-- 左边内容设定   -->
    <div class="n1"><img src="@/assets/img/logo2.png" alt="logo"></div>
    <router-link class="link" to='/Home'>首页</router-link>
    <div class="n1"><a href="/Home"> 登录 </a></div>
    <div class="n1"><a href="#"> 注册 </a></div>
    <div class="n1"><a href="#"> 中文 </a></div>
    <div class="n1"><a href="#"> 日本語 </a></div>
    <div class="n1"><a href="#"> English </a></div>

    <!-- 右边内容设定   -->
    <div class="n2"><a href="#"> 客服中心 </a></div>
    <div class="n2"><a href="#"> 帮助中心 </a></div>
    <div class="n2"><a href="#"> 官方微信 </a></div>
    <div class="n2"><a href="#"> 手机版 </a></div>

  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
export default {
  name: 'Header',
  data() {
    return {};
  }
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  height: 40px;
  /*font-family: "华文细黑";*/
  font-family: "微软雅黑";
  font-size: 12px;
  background-color: #f2f2f2;
}
.link {
  float: left;
  width: 50px;
  height: 40px;
  margin: 0 0 0 2px;
  padding: 9px 0 0 0;
  text-decoration: none;
  text-align: center;
  letter-spacing: -1px;
  /*color: #cccccc;*/
  color: #333
}
.n1 {
  float: left;
  width: 50px;
  height: 40px;
}
.n2 {
  float: right;
}
.n1 img {
  float: left;
  width: 25px;
  height: 25px;
  margin-top: 6px;
  margin-left: 20px;
}
.n1 a {
  float: left;
  width: 50px;
  height: 40px;
  margin: 0 0 0 2px;
  padding: 9px 0 0 0;
  text-decoration: none;
  text-align: center;
  letter-spacing: -1px;
  /*color: #cccccc;*/
  color: #333
}
.n2 a {
  float: right;
  width: 50px;
  height: 40px;
  margin: 0 20px 0 2px;
  padding: 9px 0 0 0;
  text-decoration: none;
  text-align: center;
  letter-spacing: -1px;
  /*color: #cccccc;*/
  color: #333
}
</style>