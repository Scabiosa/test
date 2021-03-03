<template>
  <div>
    <el-tabs v-model="activeTab" type="card" @change="changePage" @tab-click="tabClick">
      <el-tab-pane :label="$t('company.product')" name="companyproduct" />
      <el-tab-pane :label="$t('company.service')" name="companyservice" />
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
  name: "supplyinformation",
  components: {
    CompanyTabLayout
  },
  data() {
    return {
      activeTab: "companyproduct"
    };
  },
  methods: {
    tabClick(selectedTab) {
      if (selectedTab.name === "companyproduct") {
        this.activeTab = "companyproduct";
        this.$router.push({ name: "companysupplyinformationproduct" });
      } else {
        this.activeTab = "companyservice";
        this.$router.push({ name: "companysupplyinformationservice" });
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
        vm.$router.push({ name: "companysupplyinformationproduct" });
      } else {
        vm.$router.push({ name: "companysupplyinformationservice" });
      }
    });
  },
  activated() {
    if (this.activeTab == "companyproduct") {
      this.$router.push({ name: "companysupplyinformationproduct" });
    } else {
      this.$router.push({ name: "companysupplyinformationservice" });
    }
  }
};
</script>

<style scoped>
</style>
