<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		云展会馆首页组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.01.28  童卫青
//      初版做成
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <Header></Header>
    <div class="title"><span>云展会馆</span></div>
    <Search></Search>
    <ADSpace></ADSpace>
    <ExpoInfo :content="expoInfo" class="newsBlock"></ExpoInfo>
    <Footer></Footer>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
// @ is an alias to /src
import Header from '@/components/CHVersion/Header'
import Search from "@/components/CHVersion/cloudExpo/Search";
import ADSpace from "@/components/CHVersion/cloudExpo/CEInfo";
import Footer from "@/components/CHVersion/Footer";
import ExpoInfo from "@/components/CHVersion/ExpoInfo";
import DBNav_mockData from "@/mock/DBNav_MockData";

export default {
  name: 'Home',
  components: {
    Header,
    Search,
    ADSpace,
    ExpoInfo,
    Footer,
  },
  data() {
    return {
      expoInfo: {
        title: "展会信息",
        more: "/blank",
        type: "expo",
        news_C: DBNav_mockData.expoNews_C,//中国展会信息
        news_J: DBNav_mockData.expoNews_j,//日本展会信息
      },
    }
  },
}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 1180px;
  margin: auto;
}

.title {
  width: 100%;
  display: block;
  height: 30px;
  line-height: 30px;
  color: #B3E8E8;
  font-family: "黑体";
  text-align: center;
  font-size: 16px;
  background-color: #a90000;
}

.title span {
  display: block;
  width: 80px;
  margin: auto;
}
.newsBlock {
  display: inline-block;
}
</style>