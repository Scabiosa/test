<template>
    <el-form class="login-container"
             ref="AccountForm"
             :model="account"
             :rules="loginRules"
             label-position="left">
      <h3>Login</h3>
      <el-form-item prop="username">
        <el-input
          v-model="account.username"
          type="text"
          :placeholder="$t('message.loginuser')">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="account.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <!--<el-checkbox v-model="checked" checked>记住密码</el-checkbox>-->
        <el-select @change="selectChanged" v-model="select" placeholder="请选择语言">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click.native.prevent = "handleLogin" :loading="logining" type="primary">{{$t('button.confirm')}}</el-button>
        <el-button type="primary" class="resetBtn" @click.native.prevent="reset">reset</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
    import {requestLogin} from "../axios/api";
    import { ACCESS_TOKEN} from "@/store/mutation-types"
    import Vue from 'vue'
    export default {
        name: "login",
        data(){
            return {
                options:[{
                   value:'en_US',
                   label:'English',
                },{
                    value:'zh_CN',
                    label:'中文'
                }],
                select: 'en_US',
                account:{
                    username: '',
                    password: ''
                },
                loginRules:{
                    username: [{required: true, message: '请输入帐号',trigger:'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                },
                checked: true,
                logining: false,
                locale: [],
            }
        },
        mounted(){
            //this.locale = this.$i18n.locale;
            //this.selectChanged(this.locale);
            this.select = this.$18n.locale;
        },
        methods:{
            handleLogin(){
                this.$refs.AccountForm.validate((valid)=>{
                    if(valid){
                        this.logining = true;
                        if(this.account.indexOf('@')){
                          let loginParams = {
                            password: this.account.password,
                            email:this.account.username
                          }
                        }else{
                          let loginParams = {
                            username: this.account.username,
                            password: this.account.password
                          }
                        };
                        requestLogin(loginParams).then(res=>{
                            this.logining = false;
                            let {code, msg, user} = res.data;
                            console.log(res);
                            if(code === 200){
                                this.$message({
                                    type: 'success',
                                    message: msg
                                });
                                sessionStorage.setItem('user', JSON.stringify(user));
                                Vue.ls.set(ACCESS_TOKEN, JSON.stringify(user), 7 * 24 * 60 * 60 * 1000)
                                localStorage.setItem('lang',this.select);
                                console.log('this',this)
                                this.$router.push({path: '/home'})
                            }else{
                                this.$message({
                                    type: 'error',
                                    message:msg,
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
            selectChanged(value){
                //console.log(value)
                localStorage.setItem('lang',value);
                this.$i18n.locale = value;
                //alert(value);
            }
        }
    }
</script>

<style scoped>
  body{
    backgroud: #DFE9FB;
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
</style>
