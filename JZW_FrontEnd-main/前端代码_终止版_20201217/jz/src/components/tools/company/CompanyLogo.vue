<template>
  <div class="companylogo">
    <!-- <router-link :to="{name:'homepage'}">
      <img src="~@/assets/logo.png" alt="logo">
      <h1 v-if="showTitle">{{title}}</h1>
    </router-link>-->
    <el-carousel trigger="click"  type="card"  :interval="5000">
      <el-carousel-item v-for="(item,index) in companyphoto" :key="index" >
        <img :src="item.fileName" width="500" height="300" alt="公司图片"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "CompanyLogo",
  data() {
    return {
      companyphoto: [{
        fileName:"http://221.224.21.21:8888/jz/file/viewPhoto?fileName=/jz/company/74787690-8/album/1.jpg"
      },{
        fileName:"http://221.224.21.21:8888/jz/file/viewPhoto?fileName=/jz/company/74787690-8/album/2.jpg"
      },{
        fileName:"http://221.224.21.21:8888/jz/file/viewPhoto?fileName=/jz/company/74787690-8/album/3.jpg"
      },{
        fileName:"http://221.224.21.21:8888/jz/file/viewPhoto?fileName=/jz/company/74787690-8/album/4.jpg"
      },{
        fileName:"http://221.224.21.21:8888/jz/file/viewPhoto?fileName=/jz/company/74787690-8/album/5.jpg"
      }
      ]
    };
  },
  methods:{
    getImg(){

    }
  }
};
</script>

<style scoped>
.companylogo {
  text-align: center;
  margin-top: -20px;
}
.el-carousel {
  margin-top: 20px;
}
.carousel-img {
  width: 100%;
  height: 250px;
}
</style>
