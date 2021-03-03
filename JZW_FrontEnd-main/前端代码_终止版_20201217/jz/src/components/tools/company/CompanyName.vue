<template>
  <div class="company_name_maindiv">
    <div class="company_name_div"><span>{{companyName}}</span></div>
    <div class="company_enname_div"><span>{{companyEnName}}</span></div>
  </div>
</template>

<script>
    export default {
        name: "CompanyName",
        props:{
            companyName:{
                type:String,
                require:true,
            },
            companyEnName:{
                type:String,
                require:true,
            }
        }
    }
</script>

<style lang="less" scoped>
.company_name_maindiv{
  text-align: center;
  .company_name_div{
    font-size: 24px;
    color: chocolate;
  }
  .company_enname_div{
    font-size: 24px;
    color: black;
  }
}
</style>
