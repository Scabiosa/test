<template>
  <div>
    <el-tabs v-model="activeTab" type="card" @change="changePage" @tab-click="tabClick">
      <el-tab-pane :label="$t('company.patent')" name="companyproduct" />
      <el-tab-pane :label="$t('company.software')" name="companyservice" />
    </el-tabs>
    <div style="margin: 12px 12px 0;">
      <transition name="page-toggle">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import CompanyTabLayout from "../../components/layouts/company/CompanyTabLayout";
export default {
  name: "companypurchaseinformation",
  components: {
    CompanyTabLayout
  },
  computed:{
    companyCode(){
      return this.$route.query.companyCode;
    }
  },
  data() {
    return {
      activeTab: "companyproduct"
    };
  },
  methods: {
    tabClick(selectedTab) {
      console.log(this.companyCode);
      if (selectedTab.name === "companyproduct") {
        this.activeTab = "companyproduct";
        this.$router.push({ name: "companytechnoloyinformationPatent" });
      } else {
        this.activeTab = "companyservice";
        this.$router.push({ name: "companytechnoloyinformationSoftware" });
      }
    },
    changePage(key) {
      alert("fdasfdsafs");
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log("beforerouterenter", vm.activeTab);
      if (vm.activeTab == "companyproduct") {
        vm.$router.push({ name: "companytechnoloyinformationPatent" });
      } else {
        vm.$router.push({ name: "companytechnoloyinformationSoftware" });
      }
    });
  },
  activated() {
    if (this.activeTab == "companyproduct") {
      this.$router.push({ name: "companytechnoloyinformationPatent" });
    } else {
      this.$router.push({ name: "companytechnoloyinformationSoftware" });
    }
  }
};
</script>

<style scoped>
  .block{
    margin-left: 20%;
  }
</style>
