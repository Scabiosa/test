<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">

      <!-- 企业用户 -->
      <el-menu-item index="/userCenter/orderedNews" v-if="this.$store.state.role==='COMPANY_USER'">
        <span slot="title">{{$t('orderedNews.title')}}</span>
      </el-menu-item>
      <el-menu-item index="/userCenter/editCompany" v-if="this.$store.state.role==='COMPANY_USER'">
        <span slot="title">{{$t('orderedNews.companyInformation')}}</span>
      </el-menu-item>

      <!-- 用户管理员 -->
      <el-menu-item index="/userCenter/userManage" v-if="this.$store.state.role==='USER_ADMIN'">
        <span slot="title">{{$t('userCenter.userManage')}}</span>
      </el-menu-item>

      <!-- 翻译员 -->
      <el-menu-item index="/userCenter/interpreterTaskList" v-if="this.$store.state.role==='TRANSLATOR_JAJP' || this.$store.state.role==='TRANSLATOR_ZHCN' || this.$store.state.role==='TRANSLATOR_ENUS'">
        <span slot="title">{{$t('userCenter.translateManage')}}</span>
      </el-menu-item>

      <!-- 翻译总监 -->

      <el-menu-item index="/userCenter/translateTaskAssignment" v-if="this.$store.state.role==='TRANSLATION_DIRECTOR_JAJP' || this.$store.state.role==='TRANSLATION_DIRECTOR_ZHCN' || this.$store.state.role==='TRANSLATION_DIRECTOR_ENUS'">
        <span slot="title">{{$t('userCenter.translateTaskAssignment')}}</span>
      </el-menu-item>


      <!-- 通用 -->
      <el-menu-item index="/userCenter/account">
        <span slot="title">{{$t('orderedNews.account')}}</span>
      </el-menu-item>
      <el-menu-item index="/userCenter/message">
        <span slot="title">{{$t('orderedNews.message')}}</span>
      </el-menu-item>
      <el-menu-item index="/userCenter/idea">
        <span slot="title">{{$t('orderedNews.suggestion')}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "sideMenu",
    data(){
      return{
        userRole:'',
      }
    },
    created() {
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

  .el-menu-item.is-active{
    background-color:#169BD5 !important;
    color:white;
    font-size:18px;
    font-weight:bold;
    height:50px;
  }
</style>
