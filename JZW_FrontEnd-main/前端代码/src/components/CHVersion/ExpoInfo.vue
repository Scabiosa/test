<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		主页的展会动态信息组件
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
    <div class="title"> {{ content.title }}</div>
    <div class="block">
      <div class="title1"> 中国 </div>
      <ul class="ul" >
        <li class="li" v-for="(n,index) in content.news_C" :key="index">
          <router-link class="link1" :to="{ name: 'companydynamicdetail',path: '/img/dynamicdetail',query:{code:n.code,companyCode:n.companyCode}}">
            <span>{{ (n.title + "(" + n.expoDate + ")").slice(0, 40) }}</span>
          </router-link>
          <span class="span1">{{ n.date.slice(0, 10) }}</span>
        </li>
        <router-link class="link2" :to="{name:'news',path:'/DBNavigation'}">更多>></router-link>
      </ul>
    </div>
    <div class="block">
      <div class="title1">日本</div>
      <ul class="ul">
        <li class="li" v-for="(n,index) in content.news_J" :key="index">
          <router-link class="link1" :to="{ name: 'companydynamicdetail',path: '/img/dynamicdetail',query:{code:n.code,companyCode:n.companyCode}}">
            <span>{{ (n.title + "(" + n.expoDate + ")").slice(0, 40) }}</span>
          </router-link>
          <span class="span1">{{ n.date.slice(0, 10) }}</span>
        </li>
        <router-link class="link2" :to="{name:'news',path:'/DBNavigation'}">更多>></router-link>
      </ul>
    </div>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      deep: true,
    }
  }
};
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 98%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.block{
  width: 50%;
  float: left;
}
.title {
  text-align: center;
  width: 1180px;
  padding: 5px 0;
  margin: 0 auto;
  /*margin-left: -1%;*/
  color: #a90000;
  background-color:#f2f2f2;
}
.title1 {
  text-align: center;
  width: 80px;
  padding: 5px 0;
  margin: 0 auto;
}
.link1 {
  text-decoration: none;
}
.link2 {
  text-decoration: none;
  float: left;
  font-size: 14px;
  margin-left: 15px;
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
