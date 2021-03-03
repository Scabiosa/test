<template>
  <a-layout-header :style="{ padding: '0' }">
    <div class="header">
      <CompanyName :company-name=companyName company-en-name="company name" />
      <CompanyLogo />
      <CompanyNav :company-code=companyCode />
    </div>
  </a-layout-header>
</template>

<script>
import CompanyName from "../../tools/company/CompanyName";
import CompanyLogo from "../../tools/company/CompanyLogo";
import CompanyNav from "../../tools/company/CompanyNav";
import {getCompanyByCode} from "../../../axios/api";

export default {
  name: "CompanyHeader",
  components: {
    CompanyName,
    CompanyLogo,
    CompanyNav,
  },
  data(){
    return{
      companyName:''
    }
  },
  computed:{
    companyCode(){
      return this.$route.query.companyCode;
    }
  },
  mounted() {
    getCompanyByCode({
        code:this.companyCode,
        locale:localStorage.getItem('lang')
      }).then(res=>{
        console.log(res);
         let {code,msg,result} = res.data;
         if(code === 200){
           this.companyName = result.name;
         }
      })
  }
};
</script>

<style lang="less" scoped>
</style>
