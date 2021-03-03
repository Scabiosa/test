<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		首页页面组件
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
    <Header></Header>
    <Nav></Nav>
    <HomeSearch></HomeSearch>
    <ADSpace></ADSpace>
    <News></News>
    <Footer></Footer>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
// @ is an alias to /src
import Header from '@/components/CHVersion/Header'
import HomeSearch from "@/components/CHVersion/HomeSearch";
import Nav from '@/components/CHVersion/Nav'
import ADSpace from "@/components/CHVersion/ADSpace";
import News from '@/components/CHVersion/News'
import Footer from "@/components/CHVersion/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Nav,
    HomeSearch,
    News,
    ADSpace,
    Footer,
  }
}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container{
  width:1180px;
  margin: auto;
}
</style>