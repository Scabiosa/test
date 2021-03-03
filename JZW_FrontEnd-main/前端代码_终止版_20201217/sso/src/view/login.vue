<template>
  <div class="login">
    <el-form class="login-container"
             ref="AccountForm"
             :model="account"
             :rules="loginRules"
             label-position="left">
      <h3>{{$t('login.unitlogin')}}</h3>
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
        <router-link :to="{name:'Regist'}">{{$t('login.regist')}}</router-link>
        &nbsp;
        <!--a href="#">{{$t('login.modify')}}</a-->

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import {requestLogin} from "../axios/api";
    import { ACCESS_TICKET, USER_NAME,USER_INFO,USER_AUTH,SYS_BUTTON_AUTH,UI_CACHE_DB_DICT_DATA } from "@/store/mutation-types"
    import Vue from 'vue'
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
      created() {
        this.service1 = this.$route.query.service
        this.backurl = this.$route.query.backurl
        this.$i18n.locale = this.$route.query.locale || 'zh_CN'
      },
        mounted(){
            //this.locale = this.$i18n.locale;
            //this.selectChanged(this.locale);
            //this.select = this.$18n.locale;
        },
        methods:{

            //处理登陆
            handleLogin(){
                this.$refs.AccountForm.validate((valid)=>{
                    if(valid){
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
                            let {code, message, result,timestamp} = res.data;
                            if(code === 0){
                                this.$message({
                                    type: 'success',
                                    message: message
                                });
                                let ticket = "zanwu";
                                console.log(ticket);
                                Vue.ls.set(ACCESS_TICKET, ticket, 7 * 24 * 60 * 60 * 1000)
                                Vue.ls.set(USER_NAME, this.account.username, 7 * 24 * 60 * 60 * 1000)
                                if(this.service1.indexOf("http://")<0){
                                    this.service1 = "http://" + this.service1;
                                }
                                if(this.service1.indexOf("?")<0){
                                    this.service1 = this.service1 + "?backurl="+this.backurl + "&username=" + this.account.username + "&ticket=" + ticket;
                                }else{
                                    this.service1 = this.service1 + "&backurl="+this.backurl + "&username=" + this.account.username + "&ticket=" + ticket;
                                }
                                console.log(this.service1);
                                window.location.href=this.service1;
                            }else{
                                this.$message({
                                    type: 'error',
                                    message:message,
                                });
                            }
                        }).catch(err=>{
                            console.log(err);
                        })
                    }else{
                        console.log('error submit!');
                        return false;
                    }
                })
            },
            reset(){
                this.$refs.AccountForm.resetFields()
            },
            handleCommand(command) {
                this.$message('click on item ' + command);
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
