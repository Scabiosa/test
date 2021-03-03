<template>
    <div style="margin-left:28px;width:1135px;">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" :stretch=true>
        <el-tab-pane :label="$t('companyComponent.companyIntroduction')" name="first">
          <company-introduction></company-introduction>
        </el-tab-pane>
        <el-tab-pane :label="$t('companyComponent.companySupply')" name="second">
          <company-supply></company-supply>
        </el-tab-pane>
        <el-tab-pane :label="$t('companyComponent.companyTechnology')" name="third">
          <company-technology></company-technology>
        </el-tab-pane>
        <el-tab-pane :label="$t('companyComponent.companyPurchase')" name="fourth">
          <company-purchase></company-purchase>
        </el-tab-pane>
        <el-tab-pane :label="$t('companyComponent.companyNews')" name="fifth">
          <company-advertise></company-advertise>
        </el-tab-pane>
        <el-tab-pane :label="$t('companyComponent.companyCertification')" name="sixth">
          <company-certification></company-certification>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import companyIntroduction from "./companyIntroduction";
  import companySupply from "./companySupply";
  import companyTechnology from "./companyTechnology";
  import companyPurchase from "./companyPurchase";
  import companyAdvertise from "./companyAdvertise";
  import companyCertification from "./companyCertification";
  export default {
    name: "company",
    components:{companyIntroduction,companySupply,companyTechnology,companyPurchase,companyAdvertise,companyCertification},
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>
