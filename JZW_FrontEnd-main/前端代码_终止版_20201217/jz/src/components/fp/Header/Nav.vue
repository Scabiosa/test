<template>
  <div>
    <div class="nav">
      <div class="left-nav">
        <div class="nav-item">鉴真网LOGO</div>
        <div class="nav-item">首页</div>
        <div class="nav-item">登录</div>
        <div class="nav-item">免费注册</div>
        <div class="nav-item">用户中心</div>   
      </div>
      <div class="right-nav">
        <el-dropdown class="nav-item" @command="changeLanguage">
          <span class="el-dropdown-link">
            {{acitveLanguage}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="lang in languages"
              :key="lang"
              :command="lang"
            >{{lang}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="nav-item">手机版</div>
        <div class="nav-item">帮助</div>
        <div class="nav-item">联系客服</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      acitveLanguage: "中文",
      languages: ["中文", "日文", "英文"]
    };
  },
  methods: {
    changeLanguage(lang) {
      // console.log(lang);
      this.acitveLanguage = lang;
    }
  }
};
</script>
<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: rgb(85, 85, 85);
}
.nav-item {
  display: inline-block;
  margin: 0 15px;
  color: rgb(255, 255, 255);
}
.left-nav{
  flex: 0 1 550px;
  display: flex;
  justify-content: flex-start;
}
.right-nav{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
</style>