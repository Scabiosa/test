<template>
  <div class="SubMenu">
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      router
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/translate/company_intro">公司简介</el-menu-item>
      <el-menu-item index="/translate/business_info">工商信息</el-menu-item>
      <el-menu-item index="/translate/news_info">新闻</el-menu-item>
      <el-menu-item index="/translate/supply_info_production">供应信息(产品)</el-menu-item>
      <el-menu-item index="/translate/supply_info_service">供应信息(服务)</el-menu-item>
      <el-menu-item index="/translate/software_copyright_info">技术信息(软著)</el-menu-item>
      <el-menu-item index="/translate/patent_info">技术信息(专利)</el-menu-item>
      <el-menu-item index="/translate/purchase_info">采购信息</el-menu-item>
      <el-menu-item index="/translate/certificate_info">荣誉证书</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  export default {
    name: 'side_menu',
    data () {
      return {
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>

</style>
