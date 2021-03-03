<template>
  <div class="newsWrapper">
    <Newsblock :content="productNews" class="news-block"></Newsblock>
    <Newsblock :content="serviceNews" class="news-block"></Newsblock>
    <Newsblock :content="patentNews" class="news-block"></Newsblock>
    <Newsblock :content="softwareNews" class="news-block"></Newsblock>
  </div>
</template>
<script>
import Newsblock from "./Newsblock.vue";
import axios from "axios";
import { listNews } from "../../../axios/api";

export default {
  data() {
    return {
      data:[],
      productNews: {
        title: "产品新动态",
        more: "/blank",
        type: "product",
        news: []
      },
      serviceNews: {
        title: "服务新动态",
        more: "/blank",
        type: "service",
        news: []
      },
      patentNews: {
        title: "专利新动态",
        more: "/blank",
        type: "technology",
        news: []
      },
      softwareNews: {
        title: "软著新动态",
        more: "/blank",
        type: "software",
        news: []
      },
    };
  },
  created: function () {
    this.productNews.news=[];
    this.serviceNews.news=[];
    this.patentNews.news=[];
    this.softwareNews.news=[];
    listNews({
      pageNo:0,
      pageSize:40
    }).then(res=>{
      let {code,msg,result} = res.data;
      if(code === 200){
        console.log(result);
        result.records.forEach(record=>{
          if(record.newsType === "产品"){
            this.productNews.news.push({
              code:record.code,
              companyCode:record.companyCode,
              content:record.briefIntroduction,
              date:record.createTime
            })
          }
          if(record.newsType === "服务"){
            this.serviceNews.news.push({
              code:record.code,
              companyCode:record.companyCode,
              content:record.briefIntroduction,
              date:record.createTime
            })
          }
          if(record.newsType === "技术"){
            this.patentNews.news.push({
              code:record.code,
              content:record.briefIntroduction,
              date:record.createTime
            })
          }
          if(record.newsType === "采购"){
            this.softwareNews.news.push({
              code:record.code,
              companyCode:record.companyCode,
              content:record.briefIntroduction,
              date:record.createTime
            })
          }
        })
      }else{
        this.$alert(msg);
      }
    });
    // fetch("/ecnu/news/list?pageNo=0&pageSize=40",{
    //   method:'Get',
    //   headers:{
    //     'Cache-Control': 'no-cache'
    //   }
    // }).then(response=>{
    //   response.json()
    //   .then(res=>{
    //     res.result.records.forEach(record=>{
    //       if(record.newsType == "产品"){
    //         this.productNews.news.push({
    //           content:record.briefIntroduction,
    //           date:record.createTime
    //         })
    //       }
    //       if(record.newsType == "服务"){
    //         this.serviceNews.news.push({
    //           content:record.briefIntroduction,
    //           date:record.createTime
    //         })
    //       }
    //       if(record.newsType == "技术"){
    //         this.patentNews.news.push({
    //           content:record.briefIntroduction,
    //           date:record.createTime
    //         })
    //       }
    //       if(record.newsType == "采购"){
    //         this.softwareNews.news.push({
    //           content:record.briefIntroduction,
    //           date:record.createTime
    //         })
    //       }
    //     })
    //   })
    // })
  },
  components: {
    Newsblock,
  },
};
</script>
<style scoped>
.newsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
.news-block {
  display: inline-block;
  width: 45%;
}
</style>
