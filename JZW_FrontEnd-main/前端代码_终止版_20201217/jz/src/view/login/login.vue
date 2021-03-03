<template>
  <div class="login">
    <el-form class="login-container"
             ref="AccountForm"
             :model="account"
             :rules="loginRules"
             label-position="left">
      <h3>{{$t('login.login')}}</h3>
      <el-form-item prop="username">
        <el-input
          v-model="account.username"
          type="text"
          :placeholder="$t('login.promptusername')">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="account.password" type="password" :placeholder="$t('login.promptpassword')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click.native.prevent = "handleLogin" :loading="logining" type="primary">{{$t('login.confirm')}}</el-button>
        <el-button type="primary" class="resetBtn" @click.native.prevent="reset">{{$t('login.reset')}}</el-button>
      </el-form-item>
      <el-form-item>
        <router-link :to="{path:'/register'}">{{$t('login.regist')}}</router-link>
        &nbsp;
        <!--a href="#">{{$t('login.modify')}}</a-->

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import {requestLogin,getUserByEmail, getUserByTel} from "@/axios/api";
    import Vue from 'vue'
    import {USER_NAME, ACCESS_TOKEN, USER_ROLE} from "../../store/mutation-types";
    export default {
        name: "login",

        data(){
            return {
                account:{
                    username: '',
                    password: ''
                },
                loginRules:{
                    username: [{required: true, message: this.$t('login.promptusername'),trigger:'blur'}],
                    password: [{required: true, message: this.$t('login.promptpassword'), trigger: 'blur'}],
                },
                checked: true,
                logining: false,
                locale: [],
                service1: '',
                backurl: '',
            }
        },
        methods:{


            //处理登陆
            handleLogin(){
                this.$refs.AccountForm.validate((valid)=>{
                    if(valid){
                      Vue.ls.clear()
                      this.logining = true;
                      let params;
                      if(this.account.username.indexOf('@') != -1){  //邮箱登陆
                        params = {
                          email: this.account.username,
                          password: this.account.password
                        }
                      }else{                                  //手机号登陆
                        params = {
                          telephone: this.account.username,
                          password: this.account.password
                        }
                      }
                      requestLogin(params).then(res=>{
                        this.logining = false;
                        let {code, success, message, result} = res.data;
                        console.log("登陆信息："+message)
                        if(code == 200){ //登陆成功
                          this.$router.push({path:'/homepage?ticket=' + result});
                        }else{  //登陆失败
                          alert(message);
                        }
                      }).catch(err=>{
                        console.log(err)
                        alert(this.$t('message.requesterr'));
                      })

                    }else{
                        return false;
                    }
                })
            },
            reset(){
                this.$refs.AccountForm.resetFields()
            },
        },

    }
</script>

<style scoped>
  body{
    backgroud: #DFE9FB;
  }
  .login{
    padding: 80px;
  }
  .login-container{
    width: 350px;
    margin-left: 35%;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    padding: 10px 30px;
    border-radius: 5px;
  }

  .el-button{
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
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

  &:hover {
     color: rgba(44, 44, 44, 0.8);
   }
  }
</style>
