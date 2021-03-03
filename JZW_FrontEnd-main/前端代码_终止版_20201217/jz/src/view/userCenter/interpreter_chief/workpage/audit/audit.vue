<template>
  <el-container>
    <el-header><Nav></Nav></el-header>
    <div><h2>审核 —— xxx公司(中文 -> 日文)</h2></div>
    <el-container style="min-height: 600px">

      <el-main class="rightContent" style="margin-left: 20px;margin-right: 20px">
        <side_menu></side_menu>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
  import side_menu from "./side_menu";

  export default {
    name: "interpreter_work_page",
    components: {
      side_menu
    }
  }
</script>

<style scoped>

</style>
