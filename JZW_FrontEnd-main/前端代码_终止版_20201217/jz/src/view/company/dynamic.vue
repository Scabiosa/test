<template>
  <div>
    <div v-for="(item,index) in alldynamic" :key="index">
      <div class="thedynamcdiv">
        <div class="dynamictitlediv">{{item.title}}</div>
        <div class="dynamicmore">
          <router-link
            :to="{name:'companydynamicdetail',params:{dynamicid:item.id}}"
            class="main_homepage"
          >&nbsp;&nbsp;[{{$t('pub.more')}}]</router-link>
        </div>
      </div>
    </div>
    <el-pagination  class='pagination' background layout="prev, pager, next" :total="alldynamic.length"></el-pagination>
  </div>
</template>

<script>
import CompanyLayout from "../../components/layouts/company/CompanyLayout";
export default {
  name: "dynamic", 
  created:function(){
    fetch("/api/jz/news/list?pageNo=0&pageSize=10&companycode=CODE_1",{
      method:'Get',
      headers:{
        'Cache-Control': 'no-cache'
      }
    }).then(response=>{
      response.json()
      .then(res=>{
        this.alldynamic=[];
        console.log(res)
        res.result.records.forEach(item=>{
          this.alldynamic.push({'title':item.briefIntroduction})
        })
        // this.alldynamic=this.alldynamic.slice(0,10)
        // console.log(this.alldynamic)
      })
    })
  },
  data() {
    return {
      alldynamic: [
        { title: "公司动态公司动态公司动态公司动态" },
        { title: "公司动态公司动态公司动态公司动态" },
        { title: "公司动态公司动态公司动态公司动态" },
        { title: "公司动态公司动态公司动态公司动态" },
        { title: "公司动态公司动态公司动态公司动态" },
        { title: "公司动态公司动态公司动态公司动态" },
        { title: "公司动态公司动态公司动态公司动态" }
      ]
    };
  },
  components: {
    CompanyLayout
  }
};
</script>

<style lang="less" scoped>
.thedynamcdiv {
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  .dynamictitlediv {
    display: inline;
  }
  .dynamicmore a {
    display: inline;
    text-indent: 5px;
    color: #02a7f0;
  }
}
.main_homepage {
  color: black;
  text-decoration: none;
}
.pagination{
  margin-top: 20px;
}
</style>
