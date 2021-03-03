<template>
  <a-layout class="layout">
    <a-layout-header>
      <CompanyHeader/>
    </a-layout-header>

    <a-layout-content>
      <div style="margin: 12px 12px 0;min-height:30em;">
        <transition name="page-toggle">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </a-layout-content>

    <a-layout-footer >
      <GlobalFooter/>
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import CompanyHeader from "./CompanyHeader";
  import GlobalFooter from "../../fp/Footer/Footer";

  export default {
        name: "CompanyLayout",
        components:{
            CompanyHeader,
            GlobalFooter
        }
    }
</script>

<style scoped>
.layout{
  /*width: 800px;*/
  margin: 0 auto;
  /*overflow: hidden;*/
}
</style>
