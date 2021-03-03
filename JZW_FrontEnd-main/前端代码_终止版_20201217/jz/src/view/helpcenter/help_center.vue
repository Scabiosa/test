<template>
  <div class="main">
    <div><h1>{{$t('help.helpCenter')}}</h1></div>
    <el-container style="min-height: 600px">
      <el-aside class="leftMenu" style="" width="auto">
        <helpcenter_side_menu></helpcenter_side_menu>
      </el-aside>
      <el-main class="rightContent">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import helpcenter_side_menu from "./helpcenter_side_menu";
  export default {
    name: 'helpCenter',
    components: {
      helpcenter_side_menu
    }
  }
</script>

<style scoped>
  .main{
    padding: 20px;
  }
  h1{
    margin: 5px;
    padding: 10px;
    border-bottom: lightgray 1px solid;
  }
</style>
