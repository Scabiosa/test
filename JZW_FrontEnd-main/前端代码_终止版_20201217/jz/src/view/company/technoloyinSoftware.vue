<template>
  <div>
    <div v-for="item in imgs" :key="item.id" class="card">
      <h2 class="title">著作权名称:{{item.title}}</h2>
      <p class="introduction">简介:{{item.introduction}}</p>
      <el-button type="text" class="pdf"><a href="http://221.224.21.21:8888/ecnu/file/downloadFile/test_char.txt">详细说明文档</a></el-button>
      <span class="code">著作编号:{{item.code}}</span>
      <hr />
      <span class="other">授权国家:{{item.country}} 授权日期:{{item.createTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "supplyinformationproduct",
  methods:{
    detail(){
            this.$router.push({path:'company/softwareDetail'});
            },
  },
  props: {
    imgs: {
      type: Array,
      required: true,
      default: function() {
        return [
          { id:1,title: "test1", imgsrc: "/static/patent.PNG",introduction:'专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利来自专利' +
                '来自专利来自专利来自专利来自专利来自专利来自专利来自',createTime:'2018-09-06',code:'zhuanlihao',country:'中国' },
          { id:1,title: "test2", imgsrc: "/static/patent.PNG" },
          { id:1,title: "test3", imgsrc: "/static/patent.PNG" },
          { id:1,title: "test4", imgsrc: "/static/patent.PNG" }
        ];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.listaddiv {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100%;
  .theaddiv {
    margin-bottom: 20px;
    margin-left: 10px;
    // display: inline-block;
    width: 23%;
  }
}
.img {
  width: 100%;
  height: 200px;
}
.title {
  text-align: center;
  color: black;
}
.doc {
  text-align: center;
  font-size: 10px;
  color: #81d3f8;
}
.main_homepage{
  text-decoration: none;
}
.card{
  width:90%;
  border:1px solid;
  margin: auto auto 10px;
  padding-bottom:10px;
}
.title{
  color:black;
  margin-left:3%;
  display:inline-block;
}
.introduction{
  margin-left:3%;
  min-height:45%;
  margin-top:-1%;
}
.other{
  margin-left:3%;
}
.pdf{
  margin-left:3%;
  margin-top:-1%;
}
.code{
  margin-left:15%;
}
</style>
