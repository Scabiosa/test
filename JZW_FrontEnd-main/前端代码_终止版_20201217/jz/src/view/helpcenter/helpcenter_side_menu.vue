<template>
  <div class="Menu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
      style="width: 200px;height: 1000px">
      <el-menu-item index="/helpCenter/faq">{{$t('help.faq')}}</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span>{{$t('help.manual')}}</span>
        </template>
        <el-menu-item index="/helpCenter/personalUserManual">{{$t('help.person')}}</el-menu-item>
        <!--el-menu-item index="/helpCenter/enterpriseUserManual">{{$t('help.company')}}</el-menu-item-->
        <!--el-menu-item index="/helpCenter/governmentUserManual">{{$t('help.institution')}}</el-menu-item-->
      </el-submenu>
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
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>


</style>
