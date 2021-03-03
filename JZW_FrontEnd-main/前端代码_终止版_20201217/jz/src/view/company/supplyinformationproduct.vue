<template>
  <div class="listaddiv">
    <div class="theaddiv" v-for="item in information" :key="item.title">
      <div>
        <router-link
          :to="{name:'companyproductdetail',params:{purchasesid:item.id}}"
          class="main_homepage"
        >
          <img class="img" :src="item.imgsrc" :alt="item.title" />
          <div class="title">{{item.title}}</div>
        </router-link>
      </div>
<!--      <div class="doc">{{$t('introduction.pdf_download')}}</div>-->
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageNo"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import {listProduct} from "../../axios/api"
export default {
  name: "supplyinformationproduct",
  data(){
    return{
      pageSize:4,
      pageNo:1,
      information:[]
    }
  },
  mounted() {
    console.log(this.$route.query.companyCode);
    listProduct({
      pageNo:this.pageNo,
      pageSize:this.pageSize,
      companyCode:this.$route.query.companyCode
    }).then(res=>{
      let {code,msg,result} = res.data;
      console.log(res.data);
      if(code === 200){
        this.information = result.records;
        console.log(this.information);
      }else{
        this.$alert(msg);
      }
    })
  },
  methods:{
    handleSizeChange(val){
      this.pageSize = val;
    },
    handleCurrentChange(val){
      this.pageNo = val;
    }
  },
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
</style>
