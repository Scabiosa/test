<template>
  <div class="block">
    <div class="titleWrapper">
      <div class="more">
        <router-link :to="{name:'news',path:'/news'}">{{$t('frontpage.more')}}>></router-link>
      </div>
      <div class="title">
         {{content.title}}
      </div>
    </div>
    <ul>
      <li v-for="(n,index) in content.news" :key="index" class="news-item">
        <router-link :to="{ name: 'companydynamicdetail',path: '/company/dynamicdetail',query:{code:n.code,companyCode:n.companyCode}}">
          <span style="color:black;text-decoration:none;">{{n.content.slice(0,20)}}</span>
        </router-link>
        <span>{{n.date.slice(0,10)}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      deep:true
    }
  }
};
</script>
<style scoped>

.title{
    text-align: center;
    background: #EC808D;
    width: 180px;
    padding: 5px 0;
    margin: 0 auto;
}
.newsContent{
  float: left;
}
.newsDate{
  float: right;
}
.more{
    border: 1px solid #fff;
    float: right;
    padding: 2px;
    margin: 3px;
    border: 1px solid black;
}
.more a{
    text-decoration: none;
    color: black;
}
.news-item{
    background: #e0e0e0;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    /* opacity: 50%; */
}
</style>
