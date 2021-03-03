<!-------------------------------------------------------------------------------------
//                             Copyright(c) 2020
//  All rights are reserved by East China Normal University.
//-------------------------------------------------------------------------------------
//  Abstract:
//		登录页面组件
//-------------------------------------------------------------------------------------
//	History:
//    ·2021.02.20  童卫青
//      根据马惠昕、黄震、焦鹏昆、曹振超、张翼鹏、张嘉淏等人写的程序进行了全面整理、修改和完善。
//------------------------------------------------------------------------------------>
<!-------------------------------------------------------------------------------------
                                     组件模板设定
-------------------------------------------------------------------------------------->
<template>
  <div class="root-container">
    <el-form class="containerA"
             ref="AccountForm"
             :model="account"
             :rules="loginRules"
             label-position="left"
             align="center">
      <h3> 登录 </h3>
      <el-form-item prop="username">
        <el-input v-model="account.username" type="text" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="account.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="recButton" @click.native.prevent="handleLogin" :loading="logining" type="primary"> 确认 </el-button>
        <el-button class="recButton" @click.native.prevent="reset" type="primary"> 重置 </el-button></el-form-item>
      <el-form-item>
        <router-link :to="{path:'/register'}"> 注册 </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<!-------------------------------------------------------------------------------------
                                 组件模板属性和行为描述
-------------------------------------------------------------------------------------->
<script>
// import {requestLogin,getUserByEmail, getUserByTel} from "@/axios/api";
import {requestLogin,} from "@/axios/api";
// import Vue from 'vue'
// import {USER_NAME, ACCESS_TOKEN, USER_ROLE} from "../../../../store/mutation-types";

export default {
  name: "login",

  data() {
    return {
      account: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{required: true, message: this.$t('login.promptusername'), trigger: 'blur'}],
        password: [{required: true, message: this.$t('login.promptpassword'), trigger: 'blur'}],
      },
      checked: true,
      logining: false,
      locale: [],
      service1: '',
      backurl: '',
    }
  },
  methods: {


    //处理登陆
    handleLogin() {
      this.$refs.AccountForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          let params;
          if (this.account.username.indexOf('@') != -1) {  //邮箱登陆
            params = {
              email: this.account.username,
              telephone:null,
              password: this.account.password
            }
          } else {                                  //手机号登陆
            params = {
              telephone: this.account.username,
              email:null,
              password: this.account.password
            }
          }
          console.log("telephone："+params.telephone);
          console.log("username："+params.email);
          console.log("password："+params.password);
          requestLogin(params).then(res => {
            this.logining = false;
            let {code, success, message, result} = res.data;
            console.log("success："+success);
            console.log("登陆信息："+message)
            console.log("res："+result)
            if (code == 200) { //登陆成功
              // 存储用户id和票据 ，后端票据系统上线后应删除
              // let ticket = "zanwu "
              // Vue.ls.set(ACCESS_TOKEN, ticket, 7 * 24 * 60 * 60 * 1000)
              // Vue.ls.set(USER_NAME, result.id, 7 * 24 * 60 * 60 * 1000)
              // Vue.ls.set(USER_ROLE, result.role, 7 * 24 * 60 * 60 * 1000)
              // this.$store.commit("setUser", Vue.ls.get(USER_NAME))
              // this.$store.commit("setToken", Vue.ls.get(ACCESS_TOKEN))
              // this.$store.commit("setRole", Vue.ls.get(USER_ROLE))
              this.$router.push({path: '/home'});
            } else {  //登陆失败
              alert(message);
            }
          }).catch(err => {
            console.log(err)
            alert(this.$t('message.requesterr'));
          })

        } else {
          return false;
        }
      })
    },
    reset() {
      this.$refs.AccountForm.resetFields()
    },
  },

}
</script>

<!-------------------------------------------------------------------------------------
                                 组件模板样式设定
-------------------------------------------------------------------------------------->
<style scoped>
.root-container {
  width: 400px;
  padding: 80px;
  margin: auto;
  /*background-color: #f9f9f9;*/
}

.containerA {
  width: 350px;
  margin: auto;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 10px 30px;
  border-radius: 5px;
}

.recButton {
  width: 30%;
  /*box-sizing: border-box;*/
  /*margin: 0 0;*/
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

a {
  color: rgba(44, 44, 44, 0.8);

&
:hover {
  color: rgba(44, 44, 44, 0.8);
}

}
</style>
