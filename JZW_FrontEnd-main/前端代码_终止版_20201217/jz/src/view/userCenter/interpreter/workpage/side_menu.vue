<template>
  <div class="SubMenu">
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      router
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/translate/company_intro">{{$t('company.introduce')}}</el-menu-item>
      <el-menu-item index="/translate/business_info">{{$t('company.businessinformation')}}</el-menu-item>
      <el-menu-item index="/translate/news_info">{{$t('company.news')}}</el-menu-item>
      <el-menu-item index="/translate/supply_info_production">{{$t('company.product')}}</el-menu-item>
      <el-menu-item index="/translate/supply_info_service">{{$t('company.service')}}</el-menu-item>
      <el-menu-item index="/translate/software_copyright_info">{{$t('company.software')}}</el-menu-item>
      <el-menu-item index="/translate/patent_info">{{$t('company.patent')}}</el-menu-item>
      <el-menu-item index="/translate/purchase_info">{{$t('company.purchase')}}</el-menu-item>
      <el-menu-item index="/translate/certificate_info">{{$t('company.certificate')}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
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
