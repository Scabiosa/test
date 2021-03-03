<template>
  <div>
    <div v-for="item in information" :key="item.id" class="card">
      <h2 class="title">专利名称:{{item.name}}</h2>
      <p class="introduction">简介:{{item.briefIntroduction}}</p>
      <el-button type="text" class="pdf"><a href="http://221.224.21.21:8888/ecnu/file/downloadFile/test.pdf">详细说明文档</a></el-button>
      <span class="code">专利号:{{item.typeCode}}</span>
      <hr />
      <span class="other">授权国家: {{item.patentCountry}} 授权日期: {{item.createTime.slice(0,10)}}</span>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageNo"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {listInvention} from "../../axios/api";
  export default {
  name: "supplyinformationproduct",
  data(){
    return{
      pageSize:4,
      pageNo:1,
      total:0,
      information:[]
    }
  },
  methods:{
    handleSizeChange(val){
      this.pageSize = val;
      this.getInvention();
    },
    handleCurrentChange(val){
      this.pageNo = val;
      this.getInvention();
    },
    getInvention(){
      console.log(this.$route.query.companyCode);
      listInvention({
        pageNo:this.pageNo,
        pageSize:this.pageSize,
        companyCode:this.$route.query.companyCode
      }).then(res=>{
        let {code,msg,result} = res.data;
        if(code === 200){
          this.total = result.total;
          this.information = result.records;
        }else{
          this.$alert(msg);
        }
      })
    }
  },
  mounted(){
    this.getInvention();
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
